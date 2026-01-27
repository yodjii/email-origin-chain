# 📊 Rapport Complet de Compatibilité - Fixtures Crisp

**Date du test :** 2026-01-27T12:36:11.067Z
**Total de fixtures testées :** 135
**Fixtures passées :** 122 (90.4%)
**Fixtures échouées :** 13

---

## 📈 Résumé par Client Email

### APPLE
- **Total :** 21
- **Passés :** 21 (100.0%)
- **Échoués :** 0

### GMAIL
- **Total :** 22
- **Passés :** 22 (100.0%)
- **Échoués :** 0

### HUBSPOT
- **Total :** 11
- **Passés :** 11 (100.0%)
- **Échoués :** 0

### IONOS
- **Total :** 1
- **Passés :** 1 (100.0%)
- **Échoués :** 0

### MAILMATE
- **Total :** 1
- **Passés :** 1 (100.0%)
- **Échoués :** 0

### MISSIVE
- **Total :** 1
- **Passés :** 1 (100.0%)
- **Échoués :** 0

### NEW
- **Total :** 18
- **Passés :** 5 (27.8%)
- **Échoués :** 13

### OUTLOOK
- **Total :** 19
- **Passés :** 19 (100.0%)
- **Échoués :** 0

### THUNDERBIRD
- **Total :** 21
- **Passés :** 21 (100.0%)
- **Échoués :** 0

### YAHOO
- **Total :** 20
- **Passés :** 20 (100.0%)
- **Échoués :** 0

---

## 🧪 Tests Détaillés

### ✅ **PASSED** - `apple_mail_cs_body.txt`

#### 📄 Contenu du Message

```
> Začátek přeposílané zprávy:
>
> Od: John Doe <john.doe@acme.com>
> Předmět: Integer consequat non purus
> Datum: 26. října 2021 14:25:08 GMT+3
> Komu: bessie.berry@acme.com
> Kopie: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
>
> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "26. října 2021 14:25:08 GMT+3"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "26. října 2021 14:25:08 GMT+3",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "26. října 2021 14:25:08 GMT+3",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "> Začátek přeposílané zprávy:\n>\n> Od: John Doe <john.doe@acme.com>\n> Předmět: Integer consequat non purus\n> Datum: 26. října 2021 14:25:08 GMT+3\n> Komu: bessie.berry@acme.com\n> Kopie: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\n>\n> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n>\n> Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n>",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"26. října 2021 14:25:08 GMT+3\""
    ]
  }
}
```

---

### ✅ **PASSED** - `apple_mail_da_body.txt`

#### 📄 Contenu du Message

```
> Start på videresendt besked:
>
> Fra: John Doe <john.doe@acme.com>
> Emne: Integer consequat non purus
> Dato: 26. oktober 2021 kl. 14.25.08 EEST
> Til: bessie.berry@acme.com
> Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
>
> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod 
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "26. oktober 2021 kl. 14.25.08 EEST",
  "date_iso": "2021-02-13T20:00:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "26. oktober 2021 kl. 14.25.08 EEST",
      "date_iso": "2021-02-13T20:00:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "> Start på videresendt besked:\n>\n> Fra: John Doe <john.doe@acme.com>\n> Emne: Integer consequat non purus\n> Dato: 26. oktober 2021 kl. 14.25.08 EEST\n> Til: bessie.berry@acme.com\n> Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\n>\n> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n>\n> Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n>",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `apple_mail_de_body.txt`

#### 📄 Contenu du Message

```
> Anfang der weitergeleiteten Nachricht:
>
> Von: John Doe <john.doe@acme.com>
> Betreff: Integer consequat non purus
> Datum: 26. Oktober 2021 um 14:25:08 OESZ
> An: bessie.berry@acme.com
> Kopie: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
>
> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tinc
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "26. Oktober 2021 um 14:25:08 OESZ"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "26. Oktober 2021 um 14:25:08 OESZ",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "26. Oktober 2021 um 14:25:08 OESZ",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "> Anfang der weitergeleiteten Nachricht:\n>\n> Von: John Doe <john.doe@acme.com>\n> Betreff: Integer consequat non purus\n> Datum: 26. Oktober 2021 um 14:25:08 OESZ\n> An: bessie.berry@acme.com\n> Kopie: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\n>\n> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n>\n> Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n>",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"26. Oktober 2021 um 14:25:08 OESZ\""
    ]
  }
}
```

---

### ✅ **PASSED** - `apple_mail_en_body.txt`

#### 📄 Contenu du Message

```
> Begin forwarded message:
>
> From: John Doe <john.doe@acme.com>
> Subject: Integer consequat non purus
> Date: 25 October 2021 at 11:17:21 EEST
> To: bessie.berry@acme.com
> Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
>
> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ant
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "25 October 2021 at 11:17:21 EEST",
  "date_iso": "2021-10-25T06:17:21.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "25 October 2021 at 11:17:21 EEST",
      "date_iso": "2021-10-25T06:17:21.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "> Begin forwarded message:\n>\n> From: John Doe <john.doe@acme.com>\n> Subject: Integer consequat non purus\n> Date: 25 October 2021 at 11:17:21 EEST\n> To: bessie.berry@acme.com\n> Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\n>\n> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n>\n> Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n>",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `apple_mail_es_body.txt`

#### 📄 Contenu du Message

```
> Inicio del mensaje reenviado:
>
> De: John Doe <john.doe@acme.com>
> Asunto: Integer consequat non purus
> Fecha: 26 de octubre de 2021, 14:25:08 EEST
> Para: bessie.berry@acme.com
> Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
>
> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, eu
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "26 de octubre de 2021, 14:25:08 EEST",
  "date_iso": "2021-10-26T09:25:08.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "26 de octubre de 2021, 14:25:08 EEST",
      "date_iso": "2021-10-26T09:25:08.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "> Inicio del mensaje reenviado:\n>\n> De: John Doe <john.doe@acme.com>\n> Asunto: Integer consequat non purus\n> Fecha: 26 de octubre de 2021, 14:25:08 EEST\n> Para: bessie.berry@acme.com\n> Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\n>\n> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n>\n> Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n>",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `apple_mail_fi_body.txt`

#### 📄 Contenu du Message

```
> Välitetty viesti alkaa:
>
> Lähettäjä: John Doe <john.doe@acme.com>
> Aihe: Integer consequat non purus
> Päivämäärä: 26. lokakuuta 2021 klo 14.25.08 UTC+3
> Vastaanottaja: bessie.berry@acme.com
> Kopio: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
>
> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in n
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "26. lokakuuta 2021 klo 14.25.08 UTC+3",
  "date_iso": "2021-02-13T23:00:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "26. lokakuuta 2021 klo 14.25.08 UTC+3",
      "date_iso": "2021-02-13T23:00:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "> Välitetty viesti alkaa:\n>\n> Lähettäjä: John Doe <john.doe@acme.com>\n> Aihe: Integer consequat non purus\n> Päivämäärä: 26. lokakuuta 2021 klo 14.25.08 UTC+3\n> Vastaanottaja: bessie.berry@acme.com\n> Kopio: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\n>\n> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n>\n> Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n>",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `apple_mail_fr_body.txt`

#### 📄 Contenu du Message

```
> Début du message réexpédié :
>
> De: John Doe <john.doe@acme.com>
> Objet: Integer consequat non purus
> Date: 26 octobre 2021 à 14:25:08 UTC+3
> À: bessie.berry@acme.com
> Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
>
> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "26 octobre 2021 à 14:25:08 UTC+3",
  "date_iso": "2021-10-26T12:25:08.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "26 octobre 2021 à 14:25:08 UTC+3",
      "date_iso": "2021-10-26T12:25:08.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "> Début du message réexpédié :\n>\n> De: John Doe <john.doe@acme.com>\n> Objet: Integer consequat non purus\n> Date: 26 octobre 2021 à 14:25:08 UTC+3\n> À: bessie.berry@acme.com\n> Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\n>\n> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n>\n> Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n>",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `apple_mail_hr_body.txt`

#### 📄 Contenu du Message

```
> Započni proslijeđenu poruku:
>
> Šalje: John Doe <john.doe@acme.com>
> Predmet: Integer consequat non purus
> Datum: 26. listopada 2021. u 14:25:08 EEST
> Prima: bessie.berry@acme.com
> Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
>
> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt,
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "26. listopada 2021. u 14:25:08 EEST"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "26. listopada 2021. u 14:25:08 EEST",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "26. listopada 2021. u 14:25:08 EEST",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "> Započni proslijeđenu poruku:\n>\n> Šalje: John Doe <john.doe@acme.com>\n> Predmet: Integer consequat non purus\n> Datum: 26. listopada 2021. u 14:25:08 EEST\n> Prima: bessie.berry@acme.com\n> Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\n>\n> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n>\n> Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n>",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"26. listopada 2021. u 14:25:08 EEST\""
    ]
  }
}
```

---

### ✅ **PASSED** - `apple_mail_hu_body.txt`

#### 📄 Contenu du Message

```
> Továbbított levél kezdete:
>
> Feladó: John Doe <john.doe@acme.com>
> Tárgy: Integer consequat non purus
> Dátum: 2021. október 26. 14:25:08 EEST
> Címzett: bessie.berry@acme.com
> Másolat: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
>
> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt,
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "2021. október 26. 14:25:08 EEST"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "2021. október 26. 14:25:08 EEST",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "2021. október 26. 14:25:08 EEST",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "> Továbbított levél kezdete:\n>\n> Feladó: John Doe <john.doe@acme.com>\n> Tárgy: Integer consequat non purus\n> Dátum: 2021. október 26. 14:25:08 EEST\n> Címzett: bessie.berry@acme.com\n> Másolat: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\n>\n> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n>\n> Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n>",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"2021. október 26. 14:25:08 EEST\""
    ]
  }
}
```

---

### ✅ **PASSED** - `apple_mail_it_body.txt`

#### 📄 Contenu du Message

```
> Inizio messaggio inoltrato:
>
> Da: John Doe <john.doe@acme.com>
> Oggetto: Integer consequat non purus
> Data: 26 ottobre 2021 14:25:08 EEST
> A: bessie.berry@acme.com
> Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
>
> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante e
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "26 ottobre 2021 14:25:08 EEST"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "26 ottobre 2021 14:25:08 EEST",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "26 ottobre 2021 14:25:08 EEST",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "> Inizio messaggio inoltrato:\n>\n> Da: John Doe <john.doe@acme.com>\n> Oggetto: Integer consequat non purus\n> Data: 26 ottobre 2021 14:25:08 EEST\n> A: bessie.berry@acme.com\n> Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\n>\n> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n>\n> Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n>",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"26 ottobre 2021 14:25:08 EEST\""
    ]
  }
}
```

---

### ✅ **PASSED** - `apple_mail_nl_body.txt`

#### 📄 Contenu du Message

```
> Begin doorgestuurd bericht:
>
> Van: John Doe <john.doe@acme.com>
> Onderwerp: Integer consequat non purus
> Datum: 26 oktober 2021 om 14:25:08 EEST
> Aan: bessie.berry@acme.com
> Kopie: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
>
> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, eu
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "26 oktober 2021 om 14:25:08 EEST"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "26 oktober 2021 om 14:25:08 EEST",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "26 oktober 2021 om 14:25:08 EEST",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "> Begin doorgestuurd bericht:\n>\n> Van: John Doe <john.doe@acme.com>\n> Onderwerp: Integer consequat non purus\n> Datum: 26 oktober 2021 om 14:25:08 EEST\n> Aan: bessie.berry@acme.com\n> Kopie: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\n>\n> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n>\n> Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n>",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"26 oktober 2021 om 14:25:08 EEST\""
    ]
  }
}
```

---

### ✅ **PASSED** - `apple_mail_no_body.txt`

#### 📄 Contenu du Message

```
> Videresendt melding:
>
> Fra: John Doe <john.doe@acme.com>
> Emne: Integer consequat non purus
> Dato: 26. oktober 2021 kl. 14:25:08 EEST
> Til: bessie.berry@acme.com
> Kopi: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
>
> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante e
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "26. oktober 2021 kl. 14:25:08 EEST"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "26. oktober 2021 kl. 14:25:08 EEST",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "26. oktober 2021 kl. 14:25:08 EEST",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "> Videresendt melding:\n>\n> Fra: John Doe <john.doe@acme.com>\n> Emne: Integer consequat non purus\n> Dato: 26. oktober 2021 kl. 14:25:08 EEST\n> Til: bessie.berry@acme.com\n> Kopi: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\n>\n> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n>\n> Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n>",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"26. oktober 2021 kl. 14:25:08 EEST\""
    ]
  }
}
```

---

### ✅ **PASSED** - `apple_mail_pl_body.txt`

#### 📄 Contenu du Message

```
> Początek przekazywanej wiadomości:
>
> Od: John Doe <john.doe@acme.com>
> Temat: Integer consequat non purus
> Data: 26 października 2021 o 14:25:08 EEST
> Do: bessie.berry@acme.com
> Dw: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
>
> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, e
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "26 października 2021 o 14:25:08 EEST"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "26 października 2021 o 14:25:08 EEST",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "26 października 2021 o 14:25:08 EEST",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "> Początek przekazywanej wiadomości:\n>\n> Od: John Doe <john.doe@acme.com>\n> Temat: Integer consequat non purus\n> Data: 26 października 2021 o 14:25:08 EEST\n> Do: bessie.berry@acme.com\n> Dw: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\n>\n> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n>\n> Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n>",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"26 października 2021 o 14:25:08 EEST\""
    ]
  }
}
```

---

### ✅ **PASSED** - `apple_mail_pt_body.txt`

#### 📄 Contenu du Message

```
> Início da mensagem reencaminhada:
>
> De: John Doe <john.doe@acme.com>
> Assunto: Integer consequat non purus
> Data: 26 de outubro de 2021, 14:25:08 EEST
> Para: bessie.berry@acme.com
> Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
>
> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "26 de outubro de 2021, 14:25:08 EEST"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "26 de outubro de 2021, 14:25:08 EEST",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "26 de outubro de 2021, 14:25:08 EEST",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "> Início da mensagem reencaminhada:\n>\n> De: John Doe <john.doe@acme.com>\n> Assunto: Integer consequat non purus\n> Data: 26 de outubro de 2021, 14:25:08 EEST\n> Para: bessie.berry@acme.com\n> Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\n>\n> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n>\n> Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n>",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"26 de outubro de 2021, 14:25:08 EEST\""
    ]
  }
}
```

---

### ✅ **PASSED** - `apple_mail_pt_br_body.txt`

#### 📄 Contenu du Message

```
> Início da mensagem encaminhada:
>
> De: John Doe <john.doe@acme.com>
> Assunto: Integer consequat non purus
> Data: 26 de outubro de 2021, 14:25:08 EEST
> Para: bessie.berry@acme.com
> Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
>
> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, 
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "26 de outubro de 2021, 14:25:08 EEST"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "26 de outubro de 2021, 14:25:08 EEST",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "26 de outubro de 2021, 14:25:08 EEST",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "> Início da mensagem encaminhada:\n>\n> De: John Doe <john.doe@acme.com>\n> Assunto: Integer consequat non purus\n> Data: 26 de outubro de 2021, 14:25:08 EEST\n> Para: bessie.berry@acme.com\n> Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\n>\n> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n>\n> Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n>",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"26 de outubro de 2021, 14:25:08 EEST\""
    ]
  }
}
```

---

### ✅ **PASSED** - `apple_mail_ro_body.txt`

#### 📄 Contenu du Message

```
> Începe mesajul redirecționat:
>
> Expeditorul: John Doe <john.doe@acme.com>
> Subiectul: Integer consequat non purus
> Dată: 26 octombrie 2021, 14:25:08 EEST
> Destinatarul: bessie.berry@acme.com
> Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
>
> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nis
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "26 octombrie 2021, 14:25:08 EEST",
  "date_iso": "2021-10-26T09:25:08.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "26 octombrie 2021, 14:25:08 EEST",
      "date_iso": "2021-10-26T09:25:08.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "> Începe mesajul redirecționat:\n>\n> Expeditorul: John Doe <john.doe@acme.com>\n> Subiectul: Integer consequat non purus\n> Dată: 26 octombrie 2021, 14:25:08 EEST\n> Destinatarul: bessie.berry@acme.com\n> Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\n>\n> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n>\n> Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n>",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `apple_mail_ru_body.txt`

#### 📄 Contenu du Message

```
> Начало переадресованного сообщения:
>
> Отправитель: John Doe <john.doe@acme.com>
> Тема: Integer consequat non purus
> Дата: 26 октября 2021 г. в 14:25:08 GMT+3
> Кому: bessie.berry@acme.com
> Копия: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
>
> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "26 октября 2021 г. в 14:25:08 GMT+3"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "26 октября 2021 г. в 14:25:08 GMT+3",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "26 октября 2021 г. в 14:25:08 GMT+3",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "> Начало переадресованного сообщения:\n>\n> Отправитель: John Doe <john.doe@acme.com>\n> Тема: Integer consequat non purus\n> Дата: 26 октября 2021 г. в 14:25:08 GMT+3\n> Кому: bessie.berry@acme.com\n> Копия: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\n>\n> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n>\n> Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n>",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"26 октября 2021 г. в 14:25:08 GMT+3\""
    ]
  }
}
```

---

### ✅ **PASSED** - `apple_mail_sk_body.txt`

#### 📄 Contenu du Message

```
> Začiatok preposlanej správy:
>
> Od: John Doe <john.doe@acme.com>
> Predmet: Integer consequat non purus
> Dátum: 26. októbra 2021, 14:25:08 GMT+3
> Pre: bessie.berry@acme.com
> Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
>
> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "26. októbra 2021, 14:25:08 GMT+3"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "26. októbra 2021, 14:25:08 GMT+3",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "26. októbra 2021, 14:25:08 GMT+3",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "> Začiatok preposlanej správy:\n>\n> Od: John Doe <john.doe@acme.com>\n> Predmet: Integer consequat non purus\n> Dátum: 26. októbra 2021, 14:25:08 GMT+3\n> Pre: bessie.berry@acme.com\n> Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\n>\n> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n>\n> Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n>",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"26. októbra 2021, 14:25:08 GMT+3\""
    ]
  }
}
```

---

### ✅ **PASSED** - `apple_mail_sv_body.txt`

#### 📄 Contenu du Message

```
> Vidarebefordrat mejl:
>
> Från: John Doe <john.doe@acme.com>
> Ämne: Integer consequat non purus
> Datum: 26 oktober 2021 14:25:08 EEST
> Till: bessie.berry@acme.com
> Kopia: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
>
> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante e
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "26 oktober 2021 14:25:08 EEST"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "26 oktober 2021 14:25:08 EEST",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "26 oktober 2021 14:25:08 EEST",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "> Vidarebefordrat mejl:\n>\n> Från: John Doe <john.doe@acme.com>\n> Ämne: Integer consequat non purus\n> Datum: 26 oktober 2021 14:25:08 EEST\n> Till: bessie.berry@acme.com\n> Kopia: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\n>\n> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n>\n> Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n>",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"26 oktober 2021 14:25:08 EEST\""
    ]
  }
}
```

---

### ✅ **PASSED** - `apple_mail_tr_body.txt`

#### 📄 Contenu du Message

```
> İleti başlangıcı:
>
> Kimden: John Doe <john.doe@acme.com>
> Konu: Integer consequat non purus
> Tarih: 26 Ekim 2021 14:25:08 GMT+3
> Kime: bessie.berry@acme.com
> Bilgi: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
>
> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget,
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "26 Ekim 2021 14:25:08 GMT+3"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "26 Ekim 2021 14:25:08 GMT+3",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "26 Ekim 2021 14:25:08 GMT+3",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "> İleti başlangıcı:\n>\n> Kimden: John Doe <john.doe@acme.com>\n> Konu: Integer consequat non purus\n> Tarih: 26 Ekim 2021 14:25:08 GMT+3\n> Kime: bessie.berry@acme.com\n> Bilgi: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\n>\n> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n>\n> Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n>",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"26 Ekim 2021 14:25:08 GMT+3\""
    ]
  }
}
```

---

### ✅ **PASSED** - `apple_mail_uk_body.txt`

#### 📄 Contenu du Message

```
> Початок листа, що пересилається:
>
> Від кого: John Doe <john.doe@acme.com>
> Тема: Integer consequat non purus
> Дата: 26 жовтня 2021 р. о 14:25:08 GMT+3
> Кому: bessie.berry@acme.com
> Копія: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
>
> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincid
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "26 жовтня 2021 р. о 14:25:08 GMT+3"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "26 жовтня 2021 р. о 14:25:08 GMT+3",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "26 жовтня 2021 р. о 14:25:08 GMT+3",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "> Початок листа, що пересилається:\n>\n> Від кого: John Doe <john.doe@acme.com>\n> Тема: Integer consequat non purus\n> Дата: 26 жовтня 2021 р. о 14:25:08 GMT+3\n> Кому: bessie.berry@acme.com\n> Копія: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\n>\n> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n>\n> Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n>",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"26 жовтня 2021 р. о 14:25:08 GMT+3\""
    ]
  }
}
```

---

### ✅ **PASSED** - `gmail_cs_body.txt`

#### 📄 Contenu du Message

```

---------- Forwarded message ---------
Od: John Doe <john.doe@acme.com>
Date: st 27. 10. 2021 v 9:31
Subject: Integer consequat non purus
To: <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleife
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "st 27. 10. 2021 v 9:31",
  "date_iso": "2021-10-27T07:31:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "st 27. 10. 2021 v 9:31",
      "date_iso": "2021-10-27T07:31:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `gmail_da_body.txt`

#### 📄 Contenu du Message

```
---------- Forwarded message ---------
Fra: John Doe <john.doe@acme.com>
Date: ons. 27. okt. 2021 kl. 09.31
Subject: Integer consequat non purus
To: <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, 
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "ons. 27. okt. 2021 kl. 09.31",
  "date_iso": "2021-03-08T23:00:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "ons. 27. okt. 2021 kl. 09.31",
      "date_iso": "2021-03-08T23:00:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `gmail_de_body.txt`

#### 📄 Contenu du Message

```
---------- Forwarded message ---------
Von: John Doe <john.doe@acme.com>
Date: Mi., 27. Okt. 2021 um 09:31 Uhr
Subject: Integer consequat non purus
To: <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante ege
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "Mi., 27. Okt. 2021 um 09:31 Uhr"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Mi., 27. Okt. 2021 um 09:31 Uhr",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Mi., 27. Okt. 2021 um 09:31 Uhr",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"Mi., 27. Okt. 2021 um 09:31 Uhr\""
    ]
  }
}
```

---

### ✅ **PASSED** - `gmail_en_body.txt`

#### 📄 Contenu du Message

```
---------- Forwarded message ---------
From: John Doe <john.doe@acme.com>
Date: Wed, Oct 27, 2021 at 9:31 AM
Subject: Integer consequat non purus
To: <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget,
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Wed, Oct 27, 2021 at 9:31 AM",
  "date_iso": "2021-10-27T07:31:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Wed, Oct 27, 2021 at 9:31 AM",
      "date_iso": "2021-10-27T07:31:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `gmail_es_body.txt`

#### 📄 Contenu du Message

```
---------- Forwarded message ---------
De: John Doe <john.doe@acme.com>
Date: mié, 27 oct 2021 a las 9:31
Subject: Integer consequat non purus
To: <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, el
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "mié, 27 oct 2021 a las 9:31",
  "date_iso": "2021-10-27T07:31:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "mié, 27 oct 2021 a las 9:31",
      "date_iso": "2021-10-27T07:31:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `gmail_et_body.txt`

#### 📄 Contenu du Message

```
---------- Forwarded message ---------
Saatja: John Doe <john.doe@acme.com>
Date: K, 27. oktoober 2021 kell 09:31
Subject: Integer consequat non purus
To: <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante 
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "K, 27. oktoober 2021 kell 09:31"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "K, 27. oktoober 2021 kell 09:31",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "K, 27. oktoober 2021 kell 09:31",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"K, 27. oktoober 2021 kell 09:31\""
    ]
  }
}
```

---

### ✅ **PASSED** - `gmail_fi_body.txt`

#### 📄 Contenu du Message

```
---------- Forwarded message ---------
Lähettäjä: John Doe <john.doe@acme.com>
Date: ke 27. lokak. 2021 klo 9.31
Subject: Integer consequat non purus
To: <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante e
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "ke 27. lokak. 2021 klo 9.31",
  "date_iso": "2021-03-08T23:00:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "ke 27. lokak. 2021 klo 9.31",
      "date_iso": "2021-03-08T23:00:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `gmail_fr_body.txt`

#### 📄 Contenu du Message

```
---------- Forwarded message ---------
De : John Doe <john.doe@acme.com>
Date: mer. 27 oct. 2021 à 09:31
Subject: Integer consequat non purus
To: <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, ele
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "mer. 27 oct. 2021 à 09:31",
  "date_iso": "2021-10-27T07:31:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "mer. 27 oct. 2021 à 09:31",
      "date_iso": "2021-10-27T07:31:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `gmail_hr_body.txt`

#### 📄 Contenu du Message

```
---------- Forwarded message ---------
Šalje: John Doe <john.doe@acme.com>
Date: sri, 27. lis 2021. u 09:31
Subject: Integer consequat non purus
To: <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, 
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "sri, 27. lis 2021. u 09:31"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "sri, 27. lis 2021. u 09:31",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "sri, 27. lis 2021. u 09:31",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"sri, 27. lis 2021. u 09:31\""
    ]
  }
}
```

---

### ✅ **PASSED** - `gmail_hu_body.txt`

#### 📄 Contenu du Message

```
---------- Forwarded message ---------
Feladó: John Doe <john.doe@acme.com>
Date: 2021. okt. 27., Sze, 9:31
Subject: Integer consequat non purus
To: <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, 
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "2021. okt. 27., Sze, 9:31"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "2021. okt. 27., Sze, 9:31",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "2021. okt. 27., Sze, 9:31",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"2021. okt. 27., Sze, 9:31\""
    ]
  }
}
```

---

### ✅ **PASSED** - `gmail_it_body.txt`

#### 📄 Contenu du Message

```
---------- Forwarded message ---------
Da: John Doe <john.doe@acme.com>
Date: mer 27 ott 2021 alle ore 09:31
Subject: Integer consequat non purus
To: <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget,
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "mer 27 ott 2021 alle ore 09:31"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "mer 27 ott 2021 alle ore 09:31",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "mer 27 ott 2021 alle ore 09:31",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"mer 27 ott 2021 alle ore 09:31\""
    ]
  }
}
```

---

### ✅ **PASSED** - `gmail_nl_body.txt`

#### 📄 Contenu du Message

```
---------- Forwarded message ---------
Van: John Doe <john.doe@acme.com>
Date: wo 27 okt. 2021 om 09:31
Subject: Integer consequat non purus
To: <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, elei
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "wo 27 okt. 2021 om 09:31"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "wo 27 okt. 2021 om 09:31",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "wo 27 okt. 2021 om 09:31",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"wo 27 okt. 2021 om 09:31\""
    ]
  }
}
```

---

### ✅ **PASSED** - `gmail_no_body.txt`

#### 📄 Contenu du Message

```
---------- Forwarded message ---------
Fra: John Doe <john.doe@acme.com>
Date: ons. 27. okt. 2021 kl. 09:31
Subject: Integer consequat non purus
To: <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, 
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "ons. 27. okt. 2021 kl. 09:31"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "ons. 27. okt. 2021 kl. 09:31",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "ons. 27. okt. 2021 kl. 09:31",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"ons. 27. okt. 2021 kl. 09:31\""
    ]
  }
}
```

---

### ✅ **PASSED** - `gmail_pl_body.txt`

#### 📄 Contenu du Message

```
---------- Forwarded message ---------
Od: John Doe <john.doe@acme.com>
Date: śr., 27 paź 2021 o 09:31
Subject: Integer consequat non purus
To: <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleif
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "śr., 27 paź 2021 o 09:31"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "śr., 27 paź 2021 o 09:31",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "śr., 27 paź 2021 o 09:31",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"śr., 27 paź 2021 o 09:31\""
    ]
  }
}
```

---

### ✅ **PASSED** - `gmail_pt_body.txt`

#### 📄 Contenu du Message

```
---------- Forwarded message ---------
De: John Doe <john.doe@acme.com>
Date: quarta, 27/10/2021 à(s) 09:31
Subject: Integer consequat non purus
To: <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, 
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "quarta, 27/10/2021 à(s) 09:31",
  "date_iso": "2021-10-27T07:31:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "quarta, 27/10/2021 à(s) 09:31",
      "date_iso": "2021-10-27T07:31:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `gmail_pt_br_body.txt`

#### 📄 Contenu du Message

```
---------- Forwarded message ---------
De: John Doe <john.doe@acme.com>
Date: qua., 27 de out. de 2021 às 09:31
Subject: Integer consequat non purus
To: <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eg
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "qua., 27 de out. de 2021 às 09:31"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "qua., 27 de out. de 2021 às 09:31",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "qua., 27 de out. de 2021 às 09:31",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"qua., 27 de out. de 2021 às 09:31\""
    ]
  }
}
```

---

### ✅ **PASSED** - `gmail_ro_body.txt`

#### 📄 Contenu du Message

```
---------- Forwarded message ---------
De la: John Doe <john.doe@acme.com>
Date: mie., 27 oct. 2021 la 09:31
Subject: Integer consequat non purus
To: <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget,
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "mie., 27 oct. 2021 la 09:31",
  "date_iso": "2021-10-27T07:31:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "mie., 27 oct. 2021 la 09:31",
      "date_iso": "2021-10-27T07:31:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `gmail_ru_body.txt`

#### 📄 Contenu du Message

```
---------- Forwarded message ---------
От: John Doe <john.doe@acme.com>
Date: ср, 27 окт. 2021 г. в 09:31
Subject: Integer consequat non purus
To: <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, el
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "ср, 27 окт. 2021 г. в 09:31"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "ср, 27 окт. 2021 г. в 09:31",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "ср, 27 окт. 2021 г. в 09:31",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"ср, 27 окт. 2021 г. в 09:31\""
    ]
  }
}
```

---

### ✅ **PASSED** - `gmail_sk_body.txt`

#### 📄 Contenu du Message

```
---------- Forwarded message ---------
Od: John Doe <john.doe@acme.com>
Date: st 27. 10. 2021 o 9:31
Subject: Integer consequat non purus
To: <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifen
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "st 27. 10. 2021 o 9:31",
  "date_iso": "2021-10-27T07:31:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "st 27. 10. 2021 o 9:31",
      "date_iso": "2021-10-27T07:31:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `gmail_sv_body.txt`

#### 📄 Contenu du Message

```
---------- Forwarded message ---------
Från: John Doe <john.doe@acme.com>
Date: ons 27 okt. 2021 kl 09:31
Subject: Integer consequat non purus
To: <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, el
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "ons 27 okt. 2021 kl 09:31"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "ons 27 okt. 2021 kl 09:31",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "ons 27 okt. 2021 kl 09:31",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"ons 27 okt. 2021 kl 09:31\""
    ]
  }
}
```

---

### ✅ **PASSED** - `gmail_tr_body.txt`

#### 📄 Contenu du Message

```
---------- Forwarded message ---------
Gönderen: John Doe <john.doe@acme.com>
Date: 27 Eki 2021 Çar, 09:31
Subject: Integer consequat non purus
To: <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, e
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "27 Eki 2021 Çar, 09:31"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "27 Eki 2021 Çar, 09:31",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "27 Eki 2021 Çar, 09:31",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"27 Eki 2021 Çar, 09:31\""
    ]
  }
}
```

---

### ✅ **PASSED** - `gmail_uk_body.txt`

#### 📄 Contenu du Message

```
---------- Forwarded message ---------
Від: John Doe <john.doe@acme.com>
Date: ср, 27 жовт. 2021 о 09:31
Subject: Integer consequat non purus
To: <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, ele
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "ср, 27 жовт. 2021 о 09:31"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "ср, 27 жовт. 2021 о 09:31",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "ср, 27 жовт. 2021 о 09:31",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"ср, 27 жовт. 2021 о 09:31\""
    ]
  }
}
```

---

### ✅ **PASSED** - `hubspot_de_body.txt`

#### 📄 Contenu du Message

```
---------- Weitergeleitete Nachricht ---------
Von: John Doe <john.doe@acme.com>
Datum: Montag, 19. September 2022, 17:55:44 -0400
Betreff: Integer consequat non purus
An: bessie.berry@acme.com
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Montag, 19. September 2022, 17:55:44 -0400",
  "date_iso": "2022-09-19T21:55:44.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Montag, 19. September 2022, 17:55:44 -0400",
      "date_iso": "2022-09-19T21:55:44.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `hubspot_en_body.txt`

#### 📄 Contenu du Message

```
---------- Forwarded message ---------
From: John Doe <john.doe@acme.com>
Date: Monday, September 19, 2022, 5:55:44 PM -0400
Subject: Integer consequat non purus
To: bessie.berry@acme.com
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euis
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Monday, September 19, 2022, 5:55:44 PM -0400",
  "date_iso": "2022-09-19T21:55:44.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Monday, September 19, 2022, 5:55:44 PM -0400",
      "date_iso": "2022-09-19T21:55:44.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `hubspot_es_body.txt`

#### 📄 Contenu du Message

```
---------- Mensaje reenviado ---------
De: John Doe <john.doe@acme.com>
Fecha: lunes, 19 de septiembre de 2022 17:55:44 -0400
Asunto: Integer consequat non purus
A: bessie.berry@acme.com
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euism
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "lunes, 19 de septiembre de 2022 17:55:44 -0400",
  "date_iso": "2022-09-19T15:55:44.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "lunes, 19 de septiembre de 2022 17:55:44 -0400",
      "date_iso": "2022-09-19T15:55:44.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `hubspot_fi_body.txt`

#### 📄 Contenu du Message

```
---------- Edelleenlähetetty viesti ---------
Lähettäjä: John Doe <john.doe@acme.com>
Päivämäärä: maanantai 19. syyskuuta 2022 klo 17.55.44 -0400
Aihe: Integer consequat non purus
Vastaanottaja: bessie.berry@acme.com
Kopio: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis mass
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "maanantai 19. syyskuuta 2022 klo 17.55.44 -0400",
  "date_iso": "2022-05-16T22:00:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "maanantai 19. syyskuuta 2022 klo 17.55.44 -0400",
      "date_iso": "2022-05-16T22:00:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `hubspot_fr_body.txt`

#### 📄 Contenu du Message

```
---------- Message transféré ---------
De : John Doe <john.doe@acme.com>
Date : lundi 19 septembre 2022 à 15:20:05 +0200
Objet : Integer consequat non purus
À : bessie.berry@acme.com
Cc : Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod 
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "lundi 19 septembre 2022 à 15:20:05 +0200",
  "date_iso": "2022-09-19T13:20:05.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "lundi 19 septembre 2022 à 15:20:05 +0200",
      "date_iso": "2022-09-19T13:20:05.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `hubspot_it_body.txt`

#### 📄 Contenu du Message

```
---------- Messaggio inoltrato ---------
Da: John Doe <john.doe@acme.com>
Data: lunedì 19 settembre 2022, 17:55:44 -0400
Oggetto: Integer consequat non purus
A: bessie.berry@acme.com
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod a
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "lunedì 19 settembre 2022, 17:55:44 -0400"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "lunedì 19 settembre 2022, 17:55:44 -0400",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "lunedì 19 settembre 2022, 17:55:44 -0400",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"lunedì 19 settembre 2022, 17:55:44 -0400\""
    ]
  }
}
```

---

### ✅ **PASSED** - `hubspot_ja_body.txt`

#### 📄 Contenu du Message

```
---------- メッセージを転送 ---------
送信元：John Doe <john.doe@acme.com>
日付：2022年9月19日月曜日 17:55:44 -0400
件名：Integer consequat non purus
送信先：bessie.berry@acme.com
CC：Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.

Praese
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "2022年9月19日月曜日 17:55:44 -0400"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "2022年9月19日月曜日 17:55:44 -0400",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "2022年9月19日月曜日 17:55:44 -0400",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"2022年9月19日月曜日 17:55:44 -0400\""
    ]
  }
}
```

---

### ✅ **PASSED** - `hubspot_nl_body.txt`

#### 📄 Contenu du Message

```
---------- Doorgestuurd bericht ---------
Van: John Doe <john.doe@acme.com>
Datum: maandag 19 september 2022 17:55:44 -0400
Onderwerp: Integer consequat non purus
Aan: bessie.berry@acme.com
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, eu
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "maandag 19 september 2022 17:55:44 -0400",
  "date_iso": "2022-09-19T21:55:44.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "maandag 19 september 2022 17:55:44 -0400",
      "date_iso": "2022-09-19T21:55:44.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `hubspot_pl_body.txt`

#### 📄 Contenu du Message

```
---------- Wiadomość przesłana dalej ---------
Od: John Doe <john.doe@acme.com>
Data: poniedziałek, 19 września 2022, 17:55:44 -0400
Temat: Integer consequat non purus
Do: bessie.berry@acme.com
DW: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "poniedziałek, 19 września 2022, 17:55:44 -0400"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "poniedziałek, 19 września 2022, 17:55:44 -0400",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "poniedziałek, 19 września 2022, 17:55:44 -0400",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"poniedziałek, 19 września 2022, 17:55:44 -0400\""
    ]
  }
}
```

---

### ✅ **PASSED** - `hubspot_pt_br_body.txt`

#### 📄 Contenu du Message

```
---------- Mensagem encaminhada ---------
De: John Doe <john.doe@acme.com>
Data: segunda-feira, 19 de setembro de 2022 17:55:44 -0400
Assunto: Integer consequat non purus
Para: bessie.berry@acme.com
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tinc
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "segunda-feira, 19 de setembro de 2022 17:55:44 -0400"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "segunda-feira, 19 de setembro de 2022 17:55:44 -0400",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "segunda-feira, 19 de setembro de 2022 17:55:44 -0400",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"segunda-feira, 19 de setembro de 2022 17:55:44 -0400\""
    ]
  }
}
```

---

### ✅ **PASSED** - `hubspot_sv_body.txt`

#### 📄 Contenu du Message

```
---------- Vidarebefordrat meddelande ---------
Från: John Doe <john.doe@acme.com>
Datum: måndag 19 september 2022 17:55:44 -0400
Ämne: Integer consequat non purus
Till: bessie.berry@acme.com
Kopia: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidun
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "måndag 19 september 2022 17:55:44 -0400",
  "date_iso": "2022-09-19T21:55:44.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "måndag 19 september 2022 17:55:44 -0400",
      "date_iso": "2022-09-19T21:55:44.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `ionos_one_and_one_en_body.txt`

#### 📄 Contenu du Message

```
> ---------- Original Message ----------
> From: John Doe <john.doe@acme.com>
> To: "bessie.berry@acme.com" <bessie.berry@acme.com>
> Date: 02/10/2023 4:52 PM EST
> Subject: Integer consequat non purus
>  
>  
> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.
>  
> Praesent ac ligul
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "02/10/2023 4:52 PM EST",
  "date_iso": "2023-02-10T21:52:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "02/10/2023 4:52 PM EST",
      "date_iso": "2023-02-10T21:52:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "> ---------- Original Message ----------\n> From: John Doe <john.doe@acme.com>\n> To: \"bessie.berry@acme.com\" <bessie.berry@acme.com>\n> Date: 02/10/2023 4:52 PM EST\n> Subject: Integer consequat non purus\n>  \n>  \n> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n>  \n> Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `mailmate_en_body.txt`

#### 📄 Contenu du Message

```
Forwarded message:

> From: John Doe <john.doe@acme.com>
> To: bessie.berry@acme.com
> Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
> Subject: Integer consequat non purus
> Date: Wed, 27 Oct 2021 09:31:00 +0000
>
> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, elei
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Wed, 27 Oct 2021 09:31:00 +0000",
  "date_iso": "2021-10-27T09:31:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Wed, 27 Oct 2021 09:31:00 +0000",
      "date_iso": "2021-10-27T09:31:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "Forwarded message:\n\n> From: John Doe <john.doe@acme.com>\n> To: bessie.berry@acme.com\n> Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\n> Subject: Integer consequat non purus\n> Date: Wed, 27 Oct 2021 09:31:00 +0000\n>\n> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n>\n> Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `missive_en_body.txt`

#### 📄 Contenu du Message

```
---------- Forwarded message ----------
From: John Doe <john.doe@acme.com>
Date: July 19, 2022 at 3:09 PM
To: bessie.berry@acme.com
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
Subject: Integer consequat non purus

> Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
> Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, 
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "July 19, 2022 at 3:09 PM",
  "date_iso": "2022-07-19T13:09:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "July 19, 2022 at 3:09 PM",
      "date_iso": "2022-07-19T13:09:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ❌ **FAILED** - `new_outlook_2019_cs_body.txt`

#### 📄 Contenu du Message

```
Od: John Doe <john.doe@acme.com>
Datum: čtvrtek, 28. října 2021 12:06
Komu: "bessie.berry@acme.com" <bessie.berry@acme.com>
Kopie: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
Předmět: Integer consequat non purus
Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend n
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 0
- **From :** wrapper@test.com
- **Subject :** Test Wrapper
- **History Count :** 1

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "",
    "address": "wrapper@test.com"
  },
  "subject": "Test Wrapper",
  "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
  "date_iso": "2026-01-27T12:00:00.000Z",
  "text": "Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "Od: John Doe <john.doe@acme.com>\nDatum: čtvrtek, 28. října 2021 12:06\nKomu: \"bessie.berry@acme.com\" <bessie.berry@acme.com>\nKopie: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\nPředmět: Integer consequat non purus\nAenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "fallback",
    "depth": 0,
    "parsedOk": false,
    "warnings": []
  }
}
```

---

### ❌ **FAILED** - `new_outlook_2019_da_body.txt`

#### 📄 Contenu du Message

```
Fra: John Doe <john.doe@acme.com>
Dato: torsdag, 28. oktober 2021 kl. 12.06
Til: bessie.berry@acme.com <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
Emne: Integer consequat non purus
Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 0
- **From :** wrapper@test.com
- **Subject :** Test Wrapper
- **History Count :** 1

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "",
    "address": "wrapper@test.com"
  },
  "subject": "Test Wrapper",
  "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
  "date_iso": "2026-01-27T12:00:00.000Z",
  "text": "Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "Fra: John Doe <john.doe@acme.com>\nDato: torsdag, 28. oktober 2021 kl. 12.06\nTil: bessie.berry@acme.com <bessie.berry@acme.com>\nCc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\nEmne: Integer consequat non purus\nAenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "fallback",
    "depth": 0,
    "parsedOk": false,
    "warnings": []
  }
}
```

---

### ❌ **FAILED** - `new_outlook_2019_de_body.txt`

#### 📄 Contenu du Message

```
Von: John Doe <john.doe@acme.com>
Datum: Donnerstag, 28. Oktober 2021 um 12:46
An: bessie.berry@acme.com <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
Betreff: Integer consequat non purus
Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 0
- **From :** wrapper@test.com
- **Subject :** Test Wrapper
- **History Count :** 1

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "",
    "address": "wrapper@test.com"
  },
  "subject": "Test Wrapper",
  "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
  "date_iso": "2026-01-27T12:00:00.000Z",
  "text": "Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "Von: John Doe <john.doe@acme.com>\nDatum: Donnerstag, 28. Oktober 2021 um 12:46\nAn: bessie.berry@acme.com <bessie.berry@acme.com>\nCc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\nBetreff: Integer consequat non purus\nAenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "fallback",
    "depth": 0,
    "parsedOk": false,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `new_outlook_2019_en_body.txt`

#### 📄 Contenu du Message

```
From: John Doe <john.doe@acme.com>
Date: Thursday, 28 October 2021 at 12:46
To: bessie.berry@acme.com <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
Subject: Integer consequat non purus
Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend ni
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Thursday, 28 October 2021 at 12:46",
  "date_iso": "2021-10-28T10:46:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Thursday, 28 October 2021 at 12:46",
      "date_iso": "2021-10-28T10:46:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:manual_fallback",
        "trust:medium_inline",
        "format:standard",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `new_outlook_2019_es_body.txt`

#### 📄 Contenu du Message

```
De: John Doe <john.doe@acme.com>
Fecha: jueves, 28 de octubre de 2021, 12:46
Para: bessie.berry@acme.com <bessie.berry@acme.com>
CC: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
Asunto: Integer consequat non purus
Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend 
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** N/A
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "address": "john.doe@acme.com"
  },
  "subject": null,
  "date_raw": null,
  "date_iso": null,
  "text": "Fecha: jueves, 28 de octubre de 2021, 12:46\nPara: bessie.berry@acme.com <bessie.berry@acme.com>\nCC: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\nAsunto: Integer consequat non purus\nAenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "address": "john.doe@acme.com"
      },
      "subject": null,
      "date_raw": null,
      "date_iso": null,
      "text": "Fecha: jueves, 28 de octubre de 2021, 12:46\nPara: bessie.berry@acme.com <bessie.berry@acme.com>\nCC: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\nAsunto: Integer consequat non purus\nAenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:manual_fallback",
        "trust:medium_inline",
        "format:standard",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ❌ **FAILED** - `new_outlook_2019_fi_body.txt`

#### 📄 Contenu du Message

```
Lähettäjä: John Doe <john.doe@acme.com>
Päivämäärä: torstaina, 28. lokakuuta 2021 klo 12.06
Vastaanottaja: bessie.berry@acme.com <bessie.berry@acme.com>
Kopio: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
Aihe: Integer consequat non purus
Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, eui
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 0
- **From :** wrapper@test.com
- **Subject :** Test Wrapper
- **History Count :** 1

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "",
    "address": "wrapper@test.com"
  },
  "subject": "Test Wrapper",
  "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
  "date_iso": "2026-01-27T12:00:00.000Z",
  "text": "Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "Lähettäjä: John Doe <john.doe@acme.com>\nPäivämäärä: torstaina, 28. lokakuuta 2021 klo 12.06\nVastaanottaja: bessie.berry@acme.com <bessie.berry@acme.com>\nKopio: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\nAihe: Integer consequat non purus\nAenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "fallback",
    "depth": 0,
    "parsedOk": false,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `new_outlook_2019_fr_body.txt`

#### 📄 Contenu du Message

```
De : John Doe <john.doe@acme.com>
Date : jeudi, 28 octobre 2021 à 12:06
À : bessie.berry@acme.com <bessie.berry@acme.com>
Cc : Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
Objet : Integer consequat non purus
Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.

... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "jeudi, 28 octobre 2021 à 12:06",
  "date_iso": "2021-10-28T10:06:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "jeudi, 28 octobre 2021 à 12:06",
      "date_iso": "2021-10-28T10:06:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:manual_fallback",
        "trust:medium_inline",
        "format:standard",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ❌ **FAILED** - `new_outlook_2019_hu_body.txt`

#### 📄 Contenu du Message

```
Feladó: John Doe <john.doe@acme.com>
Dátum: csütörtök, 2021. október 28. 12:46
Címzett: bessie.berry@acme.com <bessie.berry@acme.com>
Másolatot kap: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
Tárgy: Integer consequat non purus
Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante 
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 0
- **From :** wrapper@test.com
- **Subject :** Test Wrapper
- **History Count :** 1

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "",
    "address": "wrapper@test.com"
  },
  "subject": "Test Wrapper",
  "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
  "date_iso": "2026-01-27T12:00:00.000Z",
  "text": "Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "Feladó: John Doe <john.doe@acme.com>\nDátum: csütörtök, 2021. október 28. 12:46\nCímzett: bessie.berry@acme.com <bessie.berry@acme.com>\nMásolatot kap: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\nTárgy: Integer consequat non purus\nAenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "fallback",
    "depth": 0,
    "parsedOk": false,
    "warnings": []
  }
}
```

---

### ❌ **FAILED** - `new_outlook_2019_it_body.txt`

#### 📄 Contenu du Message

```
Da: John Doe <john.doe@acme.com>
Data: giovedì, 28 ottobre 2021 12:46
A: bessie.berry@acme.com <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
Oggetto: Integer consequat non purus
Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.

Pr
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 0
- **From :** wrapper@test.com
- **Subject :** Test Wrapper
- **History Count :** 1

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "",
    "address": "wrapper@test.com"
  },
  "subject": "Test Wrapper",
  "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
  "date_iso": "2026-01-27T12:00:00.000Z",
  "text": "Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "Da: John Doe <john.doe@acme.com>\nData: giovedì, 28 ottobre 2021 12:46\nA: bessie.berry@acme.com <bessie.berry@acme.com>\nCc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\nOggetto: Integer consequat non purus\nAenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "fallback",
    "depth": 0,
    "parsedOk": false,
    "warnings": []
  }
}
```

---

### ❌ **FAILED** - `new_outlook_2019_nl_body.txt`

#### 📄 Contenu du Message

```
Van: John Doe <john.doe@acme.com>
Datum: donderdag, 28 oktober 2021 om 12:06
Aan: bessie.berry@acme.com <bessie.berry@acme.com>
CC: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
Onderwerp: Integer consequat non purus
Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifen
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 0
- **From :** wrapper@test.com
- **Subject :** Test Wrapper
- **History Count :** 1

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "",
    "address": "wrapper@test.com"
  },
  "subject": "Test Wrapper",
  "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
  "date_iso": "2026-01-27T12:00:00.000Z",
  "text": "Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "Van: John Doe <john.doe@acme.com>\nDatum: donderdag, 28 oktober 2021 om 12:06\nAan: bessie.berry@acme.com <bessie.berry@acme.com>\nCC: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\nOnderwerp: Integer consequat non purus\nAenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "fallback",
    "depth": 0,
    "parsedOk": false,
    "warnings": []
  }
}
```

---

### ❌ **FAILED** - `new_outlook_2019_no_body.txt`

#### 📄 Contenu du Message

```
Fra: John Doe <john.doe@acme.com>
Dato: torsdag, 28. oktober 2021 kl. 12:46
Til: bessie.berry@acme.com <bessie.berry@acme.com>
Kopi: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
Emne: Integer consequat non purus
Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend ni
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 0
- **From :** wrapper@test.com
- **Subject :** Test Wrapper
- **History Count :** 1

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "",
    "address": "wrapper@test.com"
  },
  "subject": "Test Wrapper",
  "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
  "date_iso": "2026-01-27T12:00:00.000Z",
  "text": "Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "Fra: John Doe <john.doe@acme.com>\nDato: torsdag, 28. oktober 2021 kl. 12:46\nTil: bessie.berry@acme.com <bessie.berry@acme.com>\nKopi: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\nEmne: Integer consequat non purus\nAenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "fallback",
    "depth": 0,
    "parsedOk": false,
    "warnings": []
  }
}
```

---

### ❌ **FAILED** - `new_outlook_2019_pl_body.txt`

#### 📄 Contenu du Message

```
Od: John Doe <john.doe@acme.com>
Data: czwartek, 28 października 2021 o 12:46
Do: bessie.berry@acme.com <bessie.berry@acme.com>
DW: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
Temat: Integer consequat non purus
Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend ni
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 0
- **From :** wrapper@test.com
- **Subject :** Test Wrapper
- **History Count :** 1

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "",
    "address": "wrapper@test.com"
  },
  "subject": "Test Wrapper",
  "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
  "date_iso": "2026-01-27T12:00:00.000Z",
  "text": "Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "Od: John Doe <john.doe@acme.com>\nData: czwartek, 28 października 2021 o 12:46\nDo: bessie.berry@acme.com <bessie.berry@acme.com>\nDW: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\nTemat: Integer consequat non purus\nAenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "fallback",
    "depth": 0,
    "parsedOk": false,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `new_outlook_2019_pt_body.txt`

#### 📄 Contenu du Message

```
De: John Doe <john.doe@acme.com>
Data: quinta-feira, 28 de outubro de 2021, 12:46
Para: bessie.berry@acme.com <bessie.berry@acme.com>
CC: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
Assunto: Integer consequat non purus
Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, ele
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** N/A
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "address": "john.doe@acme.com"
  },
  "subject": null,
  "date_raw": null,
  "date_iso": null,
  "text": "Data: quinta-feira, 28 de outubro de 2021, 12:46\nPara: bessie.berry@acme.com <bessie.berry@acme.com>\nCC: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\nAssunto: Integer consequat non purus\nAenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "address": "john.doe@acme.com"
      },
      "subject": null,
      "date_raw": null,
      "date_iso": null,
      "text": "Data: quinta-feira, 28 de outubro de 2021, 12:46\nPara: bessie.berry@acme.com <bessie.berry@acme.com>\nCC: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\nAssunto: Integer consequat non purus\nAenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:manual_fallback",
        "trust:medium_inline",
        "format:standard",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `new_outlook_2019_pt_br_body.txt`

#### 📄 Contenu du Message

```
De: John Doe <john.doe@acme.com>
Data: quinta-feira, 28 de outubro de 2021, 12:46
Para: bessie.berry@acme.com <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
Assunto: Integer consequat non purus
Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, ele
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** N/A
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "address": "john.doe@acme.com"
  },
  "subject": null,
  "date_raw": null,
  "date_iso": null,
  "text": "Data: quinta-feira, 28 de outubro de 2021, 12:46\nPara: bessie.berry@acme.com <bessie.berry@acme.com>\nCc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\nAssunto: Integer consequat non purus\nAenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "address": "john.doe@acme.com"
      },
      "subject": null,
      "date_raw": null,
      "date_iso": null,
      "text": "Data: quinta-feira, 28 de outubro de 2021, 12:46\nPara: bessie.berry@acme.com <bessie.berry@acme.com>\nCc: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\nAssunto: Integer consequat non purus\nAenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:manual_fallback",
        "trust:medium_inline",
        "format:standard",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ❌ **FAILED** - `new_outlook_2019_ru_body.txt`

#### 📄 Contenu du Message

```
От: John Doe <john.doe@acme.com>
Дата: четверг, 28 октября 2021 г. в 12:46
Кому: bessie.berry@acme.com <bessie.berry@acme.com>
Копия: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
Тема: Integer consequat non purus
Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend n
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 0
- **From :** wrapper@test.com
- **Subject :** Test Wrapper
- **History Count :** 1

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "",
    "address": "wrapper@test.com"
  },
  "subject": "Test Wrapper",
  "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
  "date_iso": "2026-01-27T12:00:00.000Z",
  "text": "Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "От: John Doe <john.doe@acme.com>\nДата: четверг, 28 октября 2021 г. в 12:46\nКому: bessie.berry@acme.com <bessie.berry@acme.com>\nКопия: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\nТема: Integer consequat non purus\nAenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "fallback",
    "depth": 0,
    "parsedOk": false,
    "warnings": []
  }
}
```

---

### ❌ **FAILED** - `new_outlook_2019_sk_body.txt`

#### 📄 Contenu du Message

```
Od: John Doe <john.doe@acme.com>
Dátum: štvrtok, 28. októbra 2021, 12:46
Komu: bessie.berry@acme.com <bessie.berry@acme.com>
Kópia: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
Predmet: Integer consequat non purus
Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend 
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 0
- **From :** wrapper@test.com
- **Subject :** Test Wrapper
- **History Count :** 1

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "",
    "address": "wrapper@test.com"
  },
  "subject": "Test Wrapper",
  "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
  "date_iso": "2026-01-27T12:00:00.000Z",
  "text": "Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "Od: John Doe <john.doe@acme.com>\nDátum: štvrtok, 28. októbra 2021, 12:46\nKomu: bessie.berry@acme.com <bessie.berry@acme.com>\nKópia: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\nPredmet: Integer consequat non purus\nAenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "fallback",
    "depth": 0,
    "parsedOk": false,
    "warnings": []
  }
}
```

---

### ❌ **FAILED** - `new_outlook_2019_sv_body.txt`

#### 📄 Contenu du Message

```
Från: John Doe <john.doe@acme.com>
Datum: torsdag, 28 oktober 2021 12:46
Till: bessie.berry@acme.com <bessie.berry@acme.com>
Kopia: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
Ämne: Integer consequat non purus
Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nis
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 0
- **From :** wrapper@test.com
- **Subject :** Test Wrapper
- **History Count :** 1

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "",
    "address": "wrapper@test.com"
  },
  "subject": "Test Wrapper",
  "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
  "date_iso": "2026-01-27T12:00:00.000Z",
  "text": "Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "Från: John Doe <john.doe@acme.com>\nDatum: torsdag, 28 oktober 2021 12:46\nTill: bessie.berry@acme.com <bessie.berry@acme.com>\nKopia: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\nÄmne: Integer consequat non purus\nAenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "fallback",
    "depth": 0,
    "parsedOk": false,
    "warnings": []
  }
}
```

---

### ❌ **FAILED** - `new_outlook_2019_tr_body.txt`

#### 📄 Contenu du Message

```
Kimden: John Doe <john.doe@acme.com>
Tarih: Perşembe, 28 Ekim 2021 12:46
Kime: bessie.berry@acme.com <bessie.berry@acme.com>
Bilgi: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>
Konu: Integer consequat non purus
Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nis
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 0
- **From :** wrapper@test.com
- **Subject :** Test Wrapper
- **History Count :** 1

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "",
    "address": "wrapper@test.com"
  },
  "subject": "Test Wrapper",
  "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
  "date_iso": "2026-01-27T12:00:00.000Z",
  "text": "Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "Kimden: John Doe <john.doe@acme.com>\nTarih: Perşembe, 28 Ekim 2021 12:46\nKime: bessie.berry@acme.com <bessie.berry@acme.com>\nBilgi: Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>\nKonu: Integer consequat non purus\nAenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.\n",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "fallback",
    "depth": 0,
    "parsedOk": false,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `outlook_2013_en_body.txt`

#### 📄 Contenu du Message

```
From: John Doe [mailto:john.doe@acme.com]
Sent: 25 October 2021 11:17
To: bessie.berry@acme.com
Cc: Walter Sheltan [mailto:walter.sheltan@acme.com], Nicholas [mailto:nicholas@globex.corp]
Subject: Integer consequat non purus


Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.

... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** John Doe mailto:john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "address": "John Doe mailto:john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": null,
  "date_iso": null,
  "text": "Sent: 25 October 2021 11:17\nTo: bessie.berry@acme.com\nCc: Walter Sheltan [mailto:walter.sheltan@acme.com], Nicholas [mailto:nicholas@globex.corp]\nSubject: Integer consequat non purus\n\n\nAenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "address": "John Doe mailto:john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": null,
      "date_iso": null,
      "text": "Sent: 25 October 2021 11:17\nTo: bessie.berry@acme.com\nCc: Walter Sheltan [mailto:walter.sheltan@acme.com], Nicholas [mailto:nicholas@globex.corp]\nSubject: Integer consequat non purus\n\n\nAenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:manual_fallback",
        "trust:medium_inline",
        "format:standard",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `outlook_2019_cz_body.txt`

#### 📄 Contenu du Message

```
Dne 28/10/2021 12:46, John Doe <john.doe@acme.com> napsal(a):

    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.

    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.

```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** N/A
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": null,
  "date_raw": "28/10/2021 12:46",
  "date_iso": "2021-10-28T10:46:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": null,
      "date_raw": "28/10/2021 12:46",
      "date_iso": "2021-10-28T10:46:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "Dne 28/10/2021 12:46, John Doe <john.doe@acme.com> napsal(a):\n\n    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\n    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `outlook_2019_da_body.txt`

#### 📄 Contenu du Message

```
D. 28/10/2021 12.46 skrev "John Doe" <john.doe@acme.com>:

    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.

    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.

```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** N/A
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": null,
  "date_raw": "28/10/2021 12.46",
  "date_iso": "2021-10-27T22:00:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": null,
      "date_raw": "28/10/2021 12.46",
      "date_iso": "2021-10-27T22:00:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "D. 28/10/2021 12.46 skrev \"John Doe\" <john.doe@acme.com>:\n\n    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\n    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `outlook_2019_de_body.txt`

#### 📄 Contenu du Message

```
Am 28/10/2021, 12:46 schrieb "John Doe" <john.doe@acme.com>:

    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.

    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.

```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** N/A
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": null,
  "date_raw": "28/10/2021, 12:46",
  "date_iso": "2021-10-28T10:46:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": null,
      "date_raw": "28/10/2021, 12:46",
      "date_iso": "2021-10-28T10:46:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "Am 28/10/2021, 12:46 schrieb \"John Doe\" <john.doe@acme.com>:\n\n    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\n    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `outlook_2019_en_body.txt`

#### 📄 Contenu du Message

```
On 28/10/2021 12:46, "John Doe" <john.doe@acme.com> wrote:

    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.

    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.

```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** N/A
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": null,
  "date_raw": "28/10/2021 12:46",
  "date_iso": "2021-10-28T10:46:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": null,
      "date_raw": "28/10/2021 12:46",
      "date_iso": "2021-10-28T10:46:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "On 28/10/2021 12:46, \"John Doe\" <john.doe@acme.com> wrote:\n\n    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\n    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `outlook_2019_es_body.txt`

#### 📄 Contenu du Message

```
El 28/10/2021 12:46, "John Doe" <john.doe@acme.com> escribió:

    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.

    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.

```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** N/A
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": null,
  "date_raw": "28/10/2021 12:46",
  "date_iso": "2021-10-28T10:46:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": null,
      "date_raw": "28/10/2021 12:46",
      "date_iso": "2021-10-28T10:46:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "El 28/10/2021 12:46, \"John Doe\" <john.doe@acme.com> escribió:\n\n    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\n    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `outlook_2019_fi_body.txt`

#### 📄 Contenu du Message

```
John Doe <john.doe@acme.com> kirjoitti 28/10/2021 12.46:

    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.

    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.

```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** N/A
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": null,
  "date_raw": "28/10/2021 12.46",
  "date_iso": "2021-10-27T22:00:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": null,
      "date_raw": "28/10/2021 12.46",
      "date_iso": "2021-10-27T22:00:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "John Doe <john.doe@acme.com> kirjoitti 28/10/2021 12.46:\n\n    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\n    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `outlook_2019_fr_body.txt`

#### 📄 Contenu du Message

```
Le 28/10/2021 12:46, « John Doe » <john.doe@acme.com> a écrit :

    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.

    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.

```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** N/A
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": null,
  "date_raw": "28/10/2021 12:46",
  "date_iso": "2021-10-28T10:46:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": null,
      "date_raw": "28/10/2021 12:46",
      "date_iso": "2021-10-28T10:46:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "Le 28/10/2021 12:46, « John Doe » <john.doe@acme.com> a écrit :\n\n    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\n    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `outlook_2019_hu_body.txt`

#### 📄 Contenu du Message

```
28/10/2021 12:46 időpontban John Doe (john.doe@acme.com) ezt írta:

    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.

    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.

```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** N/A
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": null,
  "date_raw": "28/10/2021 12:46",
  "date_iso": "2021-10-28T10:46:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": null,
      "date_raw": "28/10/2021 12:46",
      "date_iso": "2021-10-28T10:46:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "28/10/2021 12:46 időpontban John Doe (john.doe@acme.com) ezt írta:\n\n    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\n    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `outlook_2019_it_body.txt`

#### 📄 Contenu du Message

```
Il giorno 28/10/2021, 12:46 "John Doe" <john.doe@acme.com> ha scritto:

    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.

    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.

```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** N/A
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": null,
  "date_raw": "28/10/2021, 12:46",
  "date_iso": "2021-10-28T10:46:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": null,
      "date_raw": "28/10/2021, 12:46",
      "date_iso": "2021-10-28T10:46:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "Il giorno 28/10/2021, 12:46 \"John Doe\" <john.doe@acme.com> ha scritto:\n\n    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\n    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `outlook_2019_nl_body.txt`

#### 📄 Contenu du Message

```
Op 28/10/2021 12:46 heeft John Doe <john.doe@acme.com> geschreven:

    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.

    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.

```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** N/A
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": null,
  "date_raw": "28/10/2021 12:46",
  "date_iso": "2021-10-28T10:46:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": null,
      "date_raw": "28/10/2021 12:46",
      "date_iso": "2021-10-28T10:46:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "Op 28/10/2021 12:46 heeft John Doe <john.doe@acme.com> geschreven:\n\n    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\n    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `outlook_2019_no_body.txt`

#### 📄 Contenu du Message

```
John Doe <john.doe@acme.com> skrev følgende den 28/10/2021, 12:46:

    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.

    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.

```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** N/A
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": null,
  "date_raw": "28/10/2021, 12:46",
  "date_iso": "2021-10-28T10:46:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": null,
      "date_raw": "28/10/2021, 12:46",
      "date_iso": "2021-10-28T10:46:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "John Doe <john.doe@acme.com> skrev følgende den 28/10/2021, 12:46:\n\n    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\n    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `outlook_2019_pl_body.txt`

#### 📄 Contenu du Message

```
Dnia 28/10/2021, 12:46 użytkownik „John Doe” <john.doe@acme.com> napisał:

    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.

    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.

```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** N/A
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": null,
  "date_raw": "28/10/2021, 12:46 użytkownik",
  "date_iso": "2021-10-28T10:46:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": null,
      "date_raw": "28/10/2021, 12:46 użytkownik",
      "date_iso": "2021-10-28T10:46:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "Dnia 28/10/2021, 12:46 użytkownik „John Doe” <john.doe@acme.com> napisał:\n\n    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\n    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `outlook_2019_pt_body.txt`

#### 📄 Contenu du Message

```
Em 28/10/21, 12:46, "John Doe" <john.doe@acme.com> escreveu:

    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.

    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.

```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** N/A
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": null,
  "date_raw": "28/10/21, 12:46",
  "date_iso": "2021-10-28T10:46:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": null,
      "date_raw": "28/10/21, 12:46",
      "date_iso": "2021-10-28T10:46:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "Em 28/10/21, 12:46, \"John Doe\" <john.doe@acme.com> escreveu:\n\n    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\n    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `outlook_2019_ru_body.txt`

#### 📄 Contenu du Message

```
28/10/2021, 12:46 пользователь "John Doe" <john.doe@acme.com> написал:

    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.

    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.

```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** N/A
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": null,
  "date_raw": "28/10/2021, 12:46",
  "date_iso": "2021-10-28T10:46:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": null,
      "date_raw": "28/10/2021, 12:46",
      "date_iso": "2021-10-28T10:46:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "28/10/2021, 12:46 пользователь \"John Doe\" <john.doe@acme.com> написал:\n\n    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\n    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `outlook_2019_sk_body.txt`

#### 📄 Contenu du Message

```
28/10/2021 12:46 používateľ John Doe (<john.doe@acme.com>) napísal:

    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.

    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.

```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** N/A
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": null,
  "date_raw": "28/10/2021 12:46",
  "date_iso": "2021-10-28T10:46:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": null,
      "date_raw": "28/10/2021 12:46",
      "date_iso": "2021-10-28T10:46:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "28/10/2021 12:46 používateľ John Doe (<john.doe@acme.com>) napísal:\n\n    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\n    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `outlook_2019_sv_body.txt`

#### 📄 Contenu du Message

```
Den 28/10/2021 12:46 skrev "John Doe" <john.doe@acme.com> följande:

    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.

    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.

```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** N/A
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": null,
  "date_raw": "28/10/2021 12:46",
  "date_iso": "2021-10-28T10:46:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": null,
      "date_raw": "28/10/2021 12:46",
      "date_iso": "2021-10-28T10:46:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "Den 28/10/2021 12:46 skrev \"John Doe\" <john.doe@acme.com> följande:\n\n    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\n    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `outlook_2019_tr_body.txt`

#### 📄 Contenu du Message

```
"John Doe" <john.doe@acme.com>, 28/10/2021 12:46 tarihinde şunu yazdı:

    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.

    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.

```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** N/A
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": null,
  "date_raw": "28/10/2021 12:46",
  "date_iso": "2021-10-28T10:46:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": null,
      "date_raw": "28/10/2021 12:46",
      "date_iso": "2021-10-28T10:46:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "\"John Doe\" <john.doe@acme.com>, 28/10/2021 12:46 tarihinde şunu yazdı:\n\n    Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\n    Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\n    Praesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `outlook_live_body.txt`

#### 📄 Contenu du Message

```
________________________________
From: John Doe <john.doe@acme.com>
Sent: Wednesday, October 27, 2021 15:14
To: bessie.berry@acme.com <bessie.berry@acme.com>
Cc: Walter Sheltan <walter.sheltan@acme.com>; Nicholas <nicholas@globex.corp>
Subject: Integer consequat non purus

Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidun
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": null,
  "date_iso": null,
  "text": "Sent: Wednesday, October 27, 2021 15:14\nTo: bessie.berry@acme.com <bessie.berry@acme.com>\nCc: Walter Sheltan <walter.sheltan@acme.com>; Nicholas <nicholas@globex.corp>\nSubject: Integer consequat non purus\n\nAenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": null,
      "date_iso": null,
      "text": "Sent: Wednesday, October 27, 2021 15:14\nTo: bessie.berry@acme.com <bessie.berry@acme.com>\nCc: Walter Sheltan <walter.sheltan@acme.com>; Nicholas <nicholas@globex.corp>\nSubject: Integer consequat non purus\n\nAenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:manual_fallback",
        "trust:medium_inline",
        "format:standard",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "________________________________",
      "depth": 0,
      "flags": [
        "trust:high_mime"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `thunderbird_cs_body.txt`

#### 📄 Contenu du Message

```
-------- Přeposlaná zpráva --------
Předmět: 	Integer consequat non purus
Datum: 	Wed, 3 Nov 2021 15:51:30 +0100
Od: 	John Doe <john.doe@acme.com>
Komu: 	bessie.berry@acme.com
Kopie: 	Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>



Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod an
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
  "date_iso": "2021-11-03T14:51:30.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
      "date_iso": "2021-11-03T14:51:30.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `thunderbird_da_body.txt`

#### 📄 Contenu du Message

```
-------- Videresendt meddelelse --------
Subject: 	Integer consequat non purus
Date: 	Wed, 3 Nov 2021 15:51:30 +0100
From: 	John Doe <john.doe@acme.com>
To: 	bessie.berry@acme.com
CC: 	Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>



Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod a
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
  "date_iso": "2021-11-03T14:51:30.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
      "date_iso": "2021-11-03T14:51:30.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `thunderbird_de_body.txt`

#### 📄 Contenu du Message

```
-------- Weitergeleitete Nachricht --------
Betreff: 	Integer consequat non purus
Datum: 	Wed, 3 Nov 2021 15:51:30 +0100
Von: 	John Doe <john.doe@acme.com>
An: 	bessie.berry@acme.com
Kopie (CC): 	Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>



Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
  "date_iso": "2021-11-03T14:51:30.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
      "date_iso": "2021-11-03T14:51:30.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `thunderbird_en_body.txt`

#### 📄 Contenu du Message

```
-------- Forwarded Message --------
Subject: 	Integer consequat non purus
Date: 	Wed, 3 Nov 2021 15:51:30 +0100
From: 	John Doe <john.doe@acme.com>
To: 	bessie.berry@acme.com
CC: 	Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>



Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante e
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
  "date_iso": "2021-11-03T14:51:30.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
      "date_iso": "2021-11-03T14:51:30.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `thunderbird_es_body.txt`

#### 📄 Contenu du Message

```
-------- Mensaje reenviado --------
Asunto: 	Integer consequat non purus
Fecha: 	Wed, 3 Nov 2021 15:51:30 +0100
De: 	John Doe <john.doe@acme.com>
Para: 	bessie.berry@acme.com
CC: 	Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>



Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante e
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
  "date_iso": "2021-11-03T14:51:30.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
      "date_iso": "2021-11-03T14:51:30.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `thunderbird_fi_body.txt`

#### 📄 Contenu du Message

```
-------- Välitetty viesti / Fwd.Msg --------
Aihe: 	Integer consequat non purus
Päiväys: 	Wed, 3 Nov 2021 15:51:30 +0100
Lähettäjä: 	John Doe <john.doe@acme.com>
Vastaanottaja: 	bessie.berry@acme.com
CC: 	Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>



Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi 
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
  "date_iso": "2021-11-03T14:51:30.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
      "date_iso": "2021-11-03T14:51:30.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `thunderbird_fr_body.txt`

#### 📄 Contenu du Message

```
-------- Message transféré --------
Sujet : 	Integer consequat non purus
Date : 	Wed, 3 Nov 2021 15:51:30 +0100
De : 	John Doe <john.doe@acme.com>
Pour : 	bessie.berry@acme.com
Copie à : 	Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>



Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismo
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
  "date_iso": "2021-11-03T14:51:30.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
      "date_iso": "2021-11-03T14:51:30.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `thunderbird_hr_body.txt`

#### 📄 Contenu du Message

```
-------- Proslijeđena poruka --------
Naslov: 	Integer consequat non purus
Datum: 	Wed, 3 Nov 2021 15:51:30 +0100
Šalje: 	John Doe <john.doe@acme.com>
Prima: 	bessie.berry@acme.com
CC: 	Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>



Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod 
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
  "date_iso": "2021-11-03T14:51:30.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
      "date_iso": "2021-11-03T14:51:30.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `thunderbird_hu_body.txt`

#### 📄 Contenu du Message

```
-------- Továbbított üzenet --------
Tárgy: 	Integer consequat non purus
Dátum: 	Wed, 3 Nov 2021 15:51:30 +0100
Feladó: 	John Doe <john.doe@acme.com>
Címzett: 	bessie.berry@acme.com
CC: 	Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>



Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
  "date_iso": "2021-11-03T14:51:30.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
      "date_iso": "2021-11-03T14:51:30.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `thunderbird_it_body.txt`

#### 📄 Contenu du Message

```
-------- Messaggio Inoltrato --------
Oggetto: 	Integer consequat non purus
Data: 	Wed, 3 Nov 2021 15:51:30 +0100
Mittente: 	John Doe <john.doe@acme.com>
A: 	bessie.berry@acme.com
CC: 	Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>



Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod a
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
  "date_iso": "2021-11-03T14:51:30.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
      "date_iso": "2021-11-03T14:51:30.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `thunderbird_nl_body.txt`

#### 📄 Contenu du Message

```
-------- Doorgestuurd bericht --------
Onderwerp: 	Integer consequat non purus
Datum: 	Wed, 3 Nov 2021 15:51:30 +0100
Van: 	John Doe <john.doe@acme.com>
Aan: 	bessie.berry@acme.com
CC: 	Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>



Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod 
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
  "date_iso": "2021-11-03T14:51:30.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
      "date_iso": "2021-11-03T14:51:30.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `thunderbird_no_body.txt`

#### 📄 Contenu du Message

```
-------- Videresendt melding --------
Emne: 	Integer consequat non purus
Dato: 	Wed, 3 Nov 2021 15:51:30 +0100
Fra: 	John Doe <john.doe@acme.com>
Til: 	bessie.berry@acme.com
CC: 	Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>



Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eg
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
  "date_iso": "2021-11-03T14:51:30.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
      "date_iso": "2021-11-03T14:51:30.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `thunderbird_pl_body.txt`

#### 📄 Contenu du Message

```
--- Treść przekazanej wiadomości ---
Temat: 	Integer consequat non purus
Data: 	Wed, 3 Nov 2021 15:51:30 +0100
Nadawca: 	John Doe <john.doe@acme.com>
Adresat: 	bessie.berry@acme.com
Kopia: 	Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>



Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euis
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
  "date_iso": "2021-11-03T14:51:30.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
      "date_iso": "2021-11-03T14:51:30.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `thunderbird_pt_body.txt`

#### 📄 Contenu du Message

```
-------- Mensagem reencaminhada --------
Assunto: 	Integer consequat non purus
Data: 	Wed, 3 Nov 2021 15:51:30 +0100
De: 	John Doe <john.doe@acme.com>
Para: 	bessie.berry@acme.com
CC: 	Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>



Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod a
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
  "date_iso": "2021-11-03T14:51:30.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
      "date_iso": "2021-11-03T14:51:30.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `thunderbird_pt_br_body.txt`

#### 📄 Contenu du Message

```
-------- Mensagem encaminhada --------
Assunto: 	Integer consequat non purus
Data: 	Wed, 3 Nov 2021 15:51:30 +0100
De: 	John Doe <john.doe@acme.com>
Para: 	bessie.berry@acme.com
CC: 	Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>



Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ant
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
  "date_iso": "2021-11-03T14:51:30.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
      "date_iso": "2021-11-03T14:51:30.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `thunderbird_ro_body.txt`

#### 📄 Contenu du Message

```
-------- Mesaj redirecționat --------
Subiect: 	Integer consequat non purus
Dată: 	Wed, 3 Nov 2021 15:51:30 +0100
de la: 	John Doe <john.doe@acme.com>
Către: 	bessie.berry@acme.com
CC: 	Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>



Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod 
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
  "date_iso": "2021-11-03T14:51:30.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
      "date_iso": "2021-11-03T14:51:30.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `thunderbird_ru_body.txt`

#### 📄 Contenu du Message

```
-------- Перенаправленное сообщение --------
Тема: 	Integer consequat non purus
Дата: 	Wed, 3 Nov 2021 15:51:30 +0100
От: 	John Doe <john.doe@acme.com>
Кому: 	bessie.berry@acme.com
Копия: 	Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>



Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euism
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
  "date_iso": "2021-11-03T14:51:30.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
      "date_iso": "2021-11-03T14:51:30.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `thunderbird_sk_body.txt`

#### 📄 Contenu du Message

```
-------- Preposlaná správa --- Forwarded Message --------
Predmet: 	Integer consequat non purus
Dátum: 	Wed, 3 Nov 2021 15:51:30 +0100
Od: 	John Doe <john.doe@acme.com>
Pre: 	bessie.berry@acme.com
Kópia: 	Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>



Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi 
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
  "date_iso": "2021-11-03T14:51:30.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
      "date_iso": "2021-11-03T14:51:30.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `thunderbird_sv_body.txt`

#### 📄 Contenu du Message

```
-------- Vidarebefordrat meddelande --------
Ämne: 	Integer consequat non purus
Datum: 	Wed, 3 Nov 2021 15:51:30 +0100
Från: 	John Doe <john.doe@acme.com>
Till: 	bessie.berry@acme.com
Kopia: 	Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>



Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, eu
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
  "date_iso": "2021-11-03T14:51:30.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
      "date_iso": "2021-11-03T14:51:30.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `thunderbird_tr_body.txt`

#### 📄 Contenu du Message

```
-------- İletilen İleti --------
Konu: 	Integer consequat non purus
Tarih: 	Wed, 3 Nov 2021 15:51:30 +0100
Kimden: 	John Doe <john.doe@acme.com>
Kime: 	bessie.berry@acme.com
CC: 	Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>



Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eg
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
  "date_iso": "2021-11-03T14:51:30.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
      "date_iso": "2021-11-03T14:51:30.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `thunderbird_uk_body.txt`

#### 📄 Contenu du Message

```
-------- Переслане повідомлення --------
Тема: 	Integer consequat non purus
Дата: 	Wed, 3 Nov 2021 15:51:30 +0100
Від: 	John Doe <john.doe@acme.com>
Кому: 	bessie.berry@acme.com
CC: 	Walter Sheltan <walter.sheltan@acme.com>, Nicholas <nicholas@globex.corp>



Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ant
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
  "date_iso": "2021-11-03T14:51:30.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Wed, 3 Nov 2021 15:51:30 +0100",
      "date_iso": "2021-11-03T14:51:30.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `yahoo_cs_body.txt`

#### 📄 Contenu du Message

```
   ----- Přeposlaná zpráva ----- Od: John Doe <john.doe@acme.com>Komu: "bessie.berry@acme.com" <bessie.berry@acme.com>Kopie: Walter Sheltan <walter.sheltan@acme.com>; Nicholas <nicholas@globex.corp>Datum: úterý 2. listopadu 2021 09:26:50 SEČPředmět: Integer consequat non purus
 Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tin
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "úterý 2. listopadu 2021 09:26:50 SEČ"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "úterý 2. listopadu 2021 09:26:50 SEČ",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "úterý 2. listopadu 2021 09:26:50 SEČ",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"úterý 2. listopadu 2021 09:26:50 SEČ\""
    ]
  }
}
```

---

### ✅ **PASSED** - `yahoo_da_body.txt`

#### 📄 Contenu du Message

```
   ----- Videresendt meddelelse ----- Fra: John Doe <john.doe@acme.com>Til: "bessie.berry@acme.com" <bessie.berry@acme.com>Cc: Walter Sheltan <walter.sheltan@acme.com>; Nicholas <nicholas@globex.corp>Sendt: tirsdag den 2. november 2021 09.26.50 CETEmne: Integer consequat non purus
 Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "tirsdag den 2. november 2021 09.26.50 CET",
  "date_iso": "2026-11-20T22:00:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "tirsdag den 2. november 2021 09.26.50 CET",
      "date_iso": "2026-11-20T22:00:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `yahoo_de_body.txt`

#### 📄 Contenu du Message

```
   ----- Weitergeleitete Nachricht ----- Von: John Doe <john.doe@acme.com>An: "bessie.berry@acme.com" <bessie.berry@acme.com>CC: Walter Sheltan <walter.sheltan@acme.com>; Nicholas <nicholas@globex.corp>Gesendet: Dienstag, 2. November 2021, 09:26:50 MEZBetreff: Integer consequat non purus
 Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi 
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Dienstag, 2. November 2021, 09:26:50 MEZ",
  "date_iso": "2021-11-02T08:26:50.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Dienstag, 2. November 2021, 09:26:50 MEZ",
      "date_iso": "2021-11-02T08:26:50.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `yahoo_en_body.txt`

#### 📄 Contenu du Message

```
   ----- Forwarded Message ----- From: John Doe <john.doe@acme.com>To: "bessie.berry@acme.com" <bessie.berry@acme.com>Cc: Walter Sheltan <walter.sheltan@acme.com>; Nicholas <nicholas@globex.corp>Sent: Tuesday, November 2, 2021, 09:26:50 AM GMT+1Subject: Integer consequat non purus
 Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "Tuesday, November 2, 2021, 09:26:50 AM GMT+1",
  "date_iso": "2021-11-02T08:26:50.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "Tuesday, November 2, 2021, 09:26:50 AM GMT+1",
      "date_iso": "2021-11-02T08:26:50.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `yahoo_es_body.txt`

#### 📄 Contenu du Message

```
   ----- Mensaje reenviado ----- De: John Doe <john.doe@acme.com>Para: "bessie.berry@acme.com" <bessie.berry@acme.com>CC: Walter Sheltan <walter.sheltan@acme.com>; Nicholas <nicholas@globex.corp>Enviado: martes, 2 de noviembre de 2021 09:26:50 CETAsunto: Integer consequat non purus
 Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nis
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "martes, 2 de noviembre de 2021 09:26:50 CET",
  "date_iso": "2021-11-02T07:26:50.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "martes, 2 de noviembre de 2021 09:26:50 CET",
      "date_iso": "2021-11-02T07:26:50.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `yahoo_fi_body.txt`

#### 📄 Contenu du Message

```
   ----- Edelleenlähetetty viesti ----- Lähettäjä: John Doe <john.doe@acme.com>Vastaanottaja: "bessie.berry@acme.com" <bessie.berry@acme.com>Kopio: Walter Sheltan <walter.sheltan@acme.com>; Nicholas <nicholas@globex.corp>Lähetetty: tiistaina 2. marraskuuta 2021 klo 09.26.50 UTC+1Aihe: Integer consequat non purus
 Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iacul
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "tiistaina 2. marraskuuta 2021 klo 09.26.50 UTC+1",
  "date_iso": "2021-02-08T22:00:00.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "tiistaina 2. marraskuuta 2021 klo 09.26.50 UTC+1",
      "date_iso": "2021-02-08T22:00:00.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `yahoo_fr_body.txt`

#### 📄 Contenu du Message

```
   ----- Message transmis ----- De : John Doe <john.doe@acme.com>À : "bessie.berry@acme.com" <bessie.berry@acme.com>Cc : Walter Sheltan <walter.sheltan@acme.com>; Nicholas <nicholas@globex.corp>Envoyé : mardi 2 novembre 2021, 09:26:50 UTC+1Objet : Integer consequat non purus
 Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tinci
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "mardi 2 novembre 2021, 09:26:50 UTC+1",
  "date_iso": "2021-11-02T08:26:50.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "mardi 2 novembre 2021, 09:26:50 UTC+1",
      "date_iso": "2021-11-02T08:26:50.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `yahoo_hu_body.txt`

#### 📄 Contenu du Message

```
   ----- Továbbított üzenet ----- Feladó: John Doe <john.doe@acme.com>Címzett: "bessie.berry@acme.com" <bessie.berry@acme.com>Másolat: Walter Sheltan <walter.sheltan@acme.com>; Nicholas <nicholas@globex.corp>Elküldve: 2021. november 2., kedd 09:26:50 CETTárgy: Integer consequat non purus
 Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi 
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "2021. november 2., kedd 09:26:50 CET",
  "date_iso": "2021-11-02T07:26:50.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "2021. november 2., kedd 09:26:50 CET",
      "date_iso": "2021-11-02T07:26:50.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `yahoo_it_body.txt`

#### 📄 Contenu du Message

```
   ----- Messaggio inoltrato ----- Da: John Doe <john.doe@acme.com>A: "bessie.berry@acme.com" <bessie.berry@acme.com>Cc: Walter Sheltan <walter.sheltan@acme.com>; Nicholas <nicholas@globex.corp>Inviato: martedì 2 novembre 2021, 09:26:50 CETOggetto: Integer consequat non purus
 Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tinc
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "martedì 2 novembre 2021, 09:26:50 CET",
  "date_iso": "2021-11-02T07:26:50.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "martedì 2 novembre 2021, 09:26:50 CET",
      "date_iso": "2021-11-02T07:26:50.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `yahoo_nl_body.txt`

#### 📄 Contenu du Message

```
   ----- Doorgestuurd bericht ----- Van: John Doe <john.doe@acme.com>Aan: "bessie.berry@acme.com" <bessie.berry@acme.com>Cc: Walter Sheltan <walter.sheltan@acme.com>; Nicholas <nicholas@globex.corp>Verzonden: dinsdag 2 november 2021 09:26:50 CETOnderwerp: Integer consequat non purus
 Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in ni
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "dinsdag 2 november 2021 09:26:50 CET",
  "date_iso": "2021-11-02T07:26:50.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "dinsdag 2 november 2021 09:26:50 CET",
      "date_iso": "2021-11-02T07:26:50.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `yahoo_no_body.txt`

#### 📄 Contenu du Message

```
   ----- Videresendt melding ----- Fra: John Doe <john.doe@acme.com>Til: "bessie.berry@acme.com" <bessie.berry@acme.com>Kopi: Walter Sheltan <walter.sheltan@acme.com>; Nicholas <nicholas@globex.corp>Sendt: tirsdag 2. november 2021, 09:26:50 CETEmne: Integer consequat non purus
 Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tin
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "tirsdag 2. november 2021, 09:26:50 CET",
  "date_iso": "2021-11-02T07:26:50.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "tirsdag 2. november 2021, 09:26:50 CET",
      "date_iso": "2021-11-02T07:26:50.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `yahoo_pl_body.txt`

#### 📄 Contenu du Message

```
   ----- Przekazana wiadomość ----- Od: John Doe <john.doe@acme.com>Do: "bessie.berry@acme.com" <bessie.berry@acme.com>Dw Walter Sheltan <walter.sheltan@acme.com>; Nicholas <nicholas@globex.corp>Wysłano: wtorek, 2 listopada 2021, 09:26:50 CETTemat: Integer consequat non purus
 Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tinc
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "wtorek, 2 listopada 2021, 09:26:50 CET"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "wtorek, 2 listopada 2021, 09:26:50 CET",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "wtorek, 2 listopada 2021, 09:26:50 CET",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"wtorek, 2 listopada 2021, 09:26:50 CET\""
    ]
  }
}
```

---

### ✅ **PASSED** - `yahoo_pt_body.txt`

#### 📄 Contenu du Message

```
   ----- Mensagem reencaminhada ----- De: John Doe <john.doe@acme.com>Para: "bessie.berry@acme.com" <bessie.berry@acme.com>Cc: Walter Sheltan <walter.sheltan@acme.com>; Nicholas <nicholas@globex.corp>Enviado: terça-feira, 2 de novembro de 2021, 09:26:50 CETAssunto Integer consequat non purus
 Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Mo
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "terça-feira, 2 de novembro de 2021, 09:26:50 CET",
  "date_iso": "2021-11-02T07:26:50.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "terça-feira, 2 de novembro de 2021, 09:26:50 CET",
      "date_iso": "2021-11-02T07:26:50.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `yahoo_pt_br_body.txt`

#### 📄 Contenu du Message

```
   ----- Mensagem encaminhada ----- De: John Doe <john.doe@acme.com>Para: "bessie.berry@acme.com" <bessie.berry@acme.com>Cc: Walter Sheltan <walter.sheltan@acme.com>; Nicholas <nicholas@globex.corp>Enviado: terça-feira, 2 de novembro de 2021 09:26:50 GMT+1Assunto: Integer consequat non purus
 Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Mo
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "terça-feira, 2 de novembro de 2021 09:26:50 GMT+1",
  "date_iso": "2021-11-02T08:26:50.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "terça-feira, 2 de novembro de 2021 09:26:50 GMT+1",
      "date_iso": "2021-11-02T08:26:50.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `yahoo_ro_body.txt`

#### 📄 Contenu du Message

```
   ----- Mesaj redirecționat ----- De la: John Doe <john.doe@acme.com>Către: "bessie.berry@acme.com" <bessie.berry@acme.com>Cc: Walter Sheltan <walter.sheltan@acme.com>; Nicholas <nicholas@globex.corp>Trimis: marți, 2 noiembrie 2021, 09:26:50 CETSubiect: Integer consequat non purus
 Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nis
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "marți, 2 noiembrie 2021, 09:26:50 CET"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "marți, 2 noiembrie 2021, 09:26:50 CET",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "marți, 2 noiembrie 2021, 09:26:50 CET",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"marți, 2 noiembrie 2021, 09:26:50 CET\""
    ]
  }
}
```

---

### ✅ **PASSED** - `yahoo_ru_body.txt`

#### 📄 Contenu du Message

```
   ----- Пересылаемое сообщение ----- От: John Doe <john.doe@acme.com>Кому: "bessie.berry@acme.com" <bessie.berry@acme.com>Копия: Walter Sheltan <walter.sheltan@acme.com>; Nicholas <nicholas@globex.corp>Отправлено: вторник, 2 ноября 2021 г., 09:26:50 GMT+1Тема: Integer consequat non purus
 Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "вторник, 2 ноября 2021 г., 09:26:50 GMT+1"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "вторник, 2 ноября 2021 г., 09:26:50 GMT+1",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "вторник, 2 ноября 2021 г., 09:26:50 GMT+1",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"вторник, 2 ноября 2021 г., 09:26:50 GMT+1\""
    ]
  }
}
```

---

### ✅ **PASSED** - `yahoo_sk_body.txt`

#### 📄 Contenu du Message

```
   ----- Preposlaná správa ----- Od: John Doe <john.doe@acme.com>Komu: "bessie.berry@acme.com" <bessie.berry@acme.com>Kópia: Walter Sheltan <walter.sheltan@acme.com>; Nicholas <nicholas@globex.corp>Odoslané: utorok 2. novembra 2021, 09:26:50 SEČPredmet: Integer consequat non purus
 Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "utorok 2. novembra 2021, 09:26:50 SEČ",
  "date_iso": "2021-11-02T08:26:50.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "utorok 2. novembra 2021, 09:26:50 SEČ",
      "date_iso": "2021-11-02T08:26:50.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `yahoo_sv_body.txt`

#### 📄 Contenu du Message

```
   ----- Vidarebefordrat meddelande ----- Från: John Doe <john.doe@acme.com>Till: "bessie.berry@acme.com" <bessie.berry@acme.com>Kopia: Walter Sheltan <walter.sheltan@acme.com>; Nicholas <nicholas@globex.corp>Skickat: tisdag 2 november 2021 09:26:50 CETÄmne: Integer consequat non purus
 Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "tisdag 2 november 2021 09:26:50 CET",
  "date_iso": "2021-11-02T07:26:50.000Z",
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "tisdag 2 november 2021 09:26:50 CET",
      "date_iso": "2021-11-02T07:26:50.000Z",
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": []
  }
}
```

---

### ✅ **PASSED** - `yahoo_tr_body.txt`

#### 📄 Contenu du Message

```
   ----- İletilmiş Mesaj ----- Kimden: John Doe <john.doe@acme.com>Kime: "bessie.berry@acme.com" <bessie.berry@acme.com>Cc: Walter Sheltan <walter.sheltan@acme.com>; Nicholas <nicholas@globex.corp>Gönderilen: 2 Kasım 2021 Salı 09:26:50 GMT+1Konu: Integer consequat non purus
 Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincid
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "2 Kasım 2021 Salı 09:26:50 GMT+1"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "2 Kasım 2021 Salı 09:26:50 GMT+1",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "2 Kasım 2021 Salı 09:26:50 GMT+1",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"2 Kasım 2021 Salı 09:26:50 GMT+1\""
    ]
  }
}
```

---

### ✅ **PASSED** - `yahoo_uk_body.txt`

#### 📄 Contenu du Message

```
   ----- Перенаправлене повідомлення ----- Від: John Doe <john.doe@acme.com>Кому: "bessie.berry@acme.com" <bessie.berry@acme.com>Копія: Walter Sheltan <walter.sheltan@acme.com>; Nicholas <nicholas@globex.corp>Відправлено: вівторок, 2 листопада 2021 р., 09:26:50 GMT+1Тема: Integer consequat non purus
 Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.
Sed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis m
... (tronqué)
```

#### 📊 Résultat

- **Depth :** 1
- **From :** john.doe@acme.com
- **Subject :** Integer consequat non purus
- **History Count :** 2
- **⚠️ Avertissement :** Could not normalize date: "вівторок, 2 листопада 2021 р., 09:26:50 GMT+1"

#### 🔍 Sortie JSON Complète

```json
{
  "from": {
    "name": "John Doe",
    "address": "john.doe@acme.com"
  },
  "subject": "Integer consequat non purus",
  "date_raw": "вівторок, 2 листопада 2021 р., 09:26:50 GMT+1",
  "date_iso": null,
  "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
  "attachments": [],
  "history": [
    {
      "from": {
        "name": "John Doe",
        "address": "john.doe@acme.com"
      },
      "subject": "Integer consequat non purus",
      "date_raw": "вівторок, 2 листопада 2021 р., 09:26:50 GMT+1",
      "date_iso": null,
      "text": "Aenean quis diam urna. Maecenas eleifend vulputate ligula ac consequat. Pellentesque cursus tincidunt mauris non venenatis.\nSed nec facilisis tellus. Nunc eget eros quis ex congue iaculis nec quis massa. Morbi in nisi tincidunt, euismod ante eget, eleifend nisi.\n\nPraesent ac ligula orci. Pellentesque convallis suscipit mi, at congue massa sagittis eget.",
      "depth": 1,
      "flags": [
        "method:crisp_engine",
        "trust:medium_inline",
        "level:deepest"
      ]
    },
    {
      "from": {
        "name": "",
        "address": "wrapper@test.com"
      },
      "subject": "Test Wrapper",
      "date_raw": "Tue Jan 27 2026 13:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "date_iso": "2026-01-27T12:00:00.000Z",
      "text": "",
      "depth": 0,
      "flags": [
        "trust:high_mime",
        "content:silent_forward"
      ]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 1,
    "parsedOk": true,
    "warnings": [
      "Could not normalize date: \"вівторок, 2 листопада 2021 р., 09:26:50 GMT+1\""
    ]
  }
}
```

---

