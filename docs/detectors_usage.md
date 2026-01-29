# Detector Usage Report

Run Date: 2026-01-28

## Overview
This report analyzes the utility of each registered detector based on a full execution of the test suite. Each "Hit" represents a successful detection of a forwarded email block that was chosen as the best match.

## Statistics

| Detector Name | Hits | Role | Status |
| :--- | :--- | :--- | :--- |
| **`crisp`** | 150+ | Universal / Multilingual (email-forward-parser) | **Essential** (Core) |
| **`reply`** | 15+ | International Quote Replies (`On ... wrote:`) | **Essential** (Broadens thread coverage) |
| **`new_outlook`** | 30+ | Modern Outlook (bolding, `mailto:` scories) | **Critical** (Handles modern corporate mail) |
| **`outlook_reverse_fr`** | 4 | Mobile/Web Outlook (Envoyé before De) | **Essential** (Complex nesting) |
| **`outlook_fr`** | 3 | Standard Outlook Desktop | **Useful** (Handles standard FR threads) |
| **`outlook_empty_header`** | 1* | Corrupted headers (No Date/Email) | **Critical** (Deep nesting recovery) |

## Priority Logic

The system follows a **Position First, Priority Second** strategy:
1.  **Index (Position)**: The match found earliest in the text (lowest index) always wins.
2.  **Priority (Tie-Breaker)**: If multiple detectors match at the exact same position, the one with the lower priority value wins.

### Strategy: Specific > Generic
We deliberately use a "Specific Overrides Generic" approach:
-   **Specific Detectors** (Outlook, NewOutlook, etc.) have **negative priorities** (e.g., `-20` to `-40`).
-   **Generic Detector** (`crisp` / `email-forward-parser`) has a **positive priority** (`100`).

**Rationale:** Generic libraries like Crisp are broad but sometimes lack the nuance required for specific client scories (like Outlook's bolding or complex CC/To fields). By giving priority to specific detectors on the same match index, we ensure that our optimized parsing logic handles the "known" formats, while Crisp remains a powerful fallback for everything else.

## Conclusion
The current 6-detector registry provides comprehensive coverage for international threads.
-   **Specific Detectors** act as "experts" for recognized formats (Outlook, etc.).
-   **Crisp** handles standard forwards across many languages as a high-quality fallback.
-   **Reply** handles "quote-style" replies that Crisp ignores.

### INTERNAL NOTETS

C'est un classique effet de bord quand on change l'ordre des priorités. Voici ce qu'il s'est passé :

1. La Situation Avant 🕒
CrispDetector avait la priorité 0 (Gagnant).
NewOutlookDetector avait la priorité 10 (Perdant).
Sur ton mail de test, Crisp gagnait. Comme c'est une librairie très complète, elle gérait parfaitement le champ To: (À:) et l'enlevait du corps du message.
2. Le Changement 🔄
On a inversé : NewOutlookDetector est passé à -4 (Super Prioritaire).
Du coup, c'est lui qui a "attrapé" le mail en premier.
3. Le Problème (Le Bug latent) 🐛
NewOutlookDetector
 était moins "intelligent" que Crisp. Il ne savait pas que le champ To: existait.
Il lisait : From, Subject, Date... et s'arrêtait là.
Il voyait ensuite la ligne To: <inter@email.com> et se disait : "Ah, ça ce n'est pas un header que je connais, donc c'est le début du texte du message !"
4. Le Crash 💥
Le test s'attendait à avoir juste le texte : "Content".
Mais à cause de l'erreur ci-dessus, il a reçu : "To: <inter@email.com>\n\nContent".
La Solution ✅
J'ai simplement appris à 
NewOutlookDetector
 (dans le code) à reconnaître le champ To: (et ses variantes À, An, Para...). Maintenant, il sait que c'est un header et il l'exclut correctement du corps du message.

---
donc la on etait dnas un cas ou c'etait exactement le meme index de debut de message de foward ?

Thought for 3s






Oui, exactement.

Dans le test 
basic.test.ts
, on avait ce bloc :

text
---------- Forwarded message ---------
From: <original@source.com>
...
L'Index : Les deux détecteurs (
Crisp
 et 
NewOutlook
) ont identifié que le "forward" commençait au même endroit : juste après la ligne des tirets ----------. Ils avaient donc le même index de début.
Le Conflit : Comme l'index était identique, l'algorithme a regardé la priorité.
Avant : 
Crisp
 (0) gagnait contre 
NewOutlook
 (10). 
Crisp
 gérait bien le To:.
Après : 
NewOutlook
 (-4) a gagné contre 
Crisp
 (10). Mais 
NewOutlook
 ignorait le To:, donc il l'a laissé dans le texte.
C'est la preuve que ton intuition était la bonne : si on veut que nos détecteurs "faits maison" (plus spécifiques) passent devant la librairie générique 
Crisp
, ils doivent être irréprochables sur le parsing, car ils deviennent les premiers responsables de la découpe du message.

C'est pour ça que j'ai dû "muscler" 
NewOutlookDetector
 pour qu'il soit aussi rigoureux que 
Crisp
 sur les headers.
 ----

Ta confusion est très logique, laisse-moi clarifier ce point :

1. Pourquoi ils se "chevauchent" ?
Les deux détecteurs cherchent des choses très similaires :

Crisp : cherche des en-têtes standard (From:, To:, Subject:, Date:).
NewOutlook : cherche aussi des en-têtes (From, To, Subject) mais il est plus tolérant (il accepte le gras, le souligné, et il connaît 15 langues différentes comme De:, Von:, Envoyé:, etc.).
Sur un mail "simple" en anglais, les deux voient la même chose. Ils crient tous les deux : "J'ai trouvé un forward à l'index 50 !"

2. L'Ancienne Logique (Priorité à Crisp)
On se disait : "Puisque Crisp est une librairie connue, si elle voit quelque chose, on lui fait confiance. Si elle ne voit RIEN, alors on demande à nos détecteurs spécifiques de nous sauver."

C'était une sécurité, mais c'était dommage car tes détecteurs spécifiques sont souvent plus précis sur le nettoyage du texte (suppression des lignes de séparation Outlook, etc.).

3. La Nouvelle Logique (Priorité aux Spécificités)
On se dit maintenant : "Si un détecteur fait pour Outlook dit qu'il a reconnu son format, c'est lui qui a raison, car Crisp est trop générique et risque de rater des détails (comme des champs CC complexes ou des formats de date bizarres)."

Pour répondre à ta question précise : 
NewOutlook
 détecte effectivement des forwards que Crisp ne voit pas (ex: si c'est écrit en allemand ou si c'est du "New Outlook" très particulier). Mais il détecte aussi des forwards que Crisp voit très bien.

Le conflit arrive uniquement dans la zone de chevauchement.

Si 
NewOutlook
 gagne, on utilise ton code.
Si 
NewOutlook
 ne matche pas, c'est 
Crisp
 qui sert de filet de sécurité (fallback).
C'est pour ça que mon changement de priorité a "réveillé" un bug dans 
NewOutlook
 : avant, il ne gagnait jamais contre 
Crisp
 sur les mails simples, donc on ne voyait pas qu'il oubliait de parser le champ To:. Maintenant qu'il est premier, on voit toutes ses petites imperfections !