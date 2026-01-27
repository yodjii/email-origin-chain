import { extractDeepestHybrid } from '../src/index';

describe('Anonymized Extraction Tests', () => {
    test('simple email', async () => {
        const raw = `From: user@email.com\nSubject: Hello\nDate: Mon, 26 Jan 2026 15:00:00 +0100\n\nBody`;
        const res = await extractDeepestHybrid(raw);
        expect(res.from?.address).toBe('user@email.com');
        expect(res.diagnostics.depth).toBe(0);
    });

    test('double inline forward', async () => {
        const raw = `From: root@test.com
Subject: Root Topic

Ce premier commentaire.

---------- Forwarded message ---------
From: <inter@email.com>
Date: Mon, Jan 26, 2026 at 3:00 PM
Subject: Fwd: Topic
To: <user@email.com>

Ce second commentaire.

---------- Forwarded message ---------
From: <original@source.com>
Date: Mon, Jan 26, 2026 at 10:00 AM
Subject: Topic
To: <inter@email.com>

Content`;
        const res = await extractDeepestHybrid(raw);
        expect(res.from?.address).toBe('original@source.com');
        expect(res.diagnostics.depth).toBe(2);

        // Full History Check (3 levels)
        expect(res.history.length).toBe(3);

        // history[0] is the deepest (original)
        expect(res.history[0].from?.address).toBe('original@source.com');
        expect(res.history[0].text).toBe('Content');

        // history[1] is the intermediate forward
        expect(res.history[1].from?.address).toBe('inter@email.com');
        expect(res.history[1].text).toBe('Ce second commentaire.');

        // history[2] is the root
        expect(res.history[2].from?.address).toBe('root@test.com');
        expect(res.history[2].text).toBe('Ce premier commentaire.');
    });

    test('french forward', async () => {
        const raw = `From: root@test.fr

Message racine ici.

---------- Message transféré ---------
De : Entreprise <contact@entreprise.fr>
Date : lun. 10 févr. 2025 à 11:39
Objet : Facture

Texte de la facture`;
        const res = await extractDeepestHybrid(raw);
        expect(res.from?.address).toBe('contact@entreprise.fr');

        // History check
        expect(res.history.length).toBe(2);
        expect(res.history[0].text).toBe('Texte de la facture');
        expect(res.history[1].text).toBe('Message racine ici.');
    });

    test('no date provided', async () => {
        const raw = `From: user@email.com\nSubject: None\n\nBody only`;
        const res = await extractDeepestHybrid(raw);
        expect(res.from?.address).toBe('user@email.com');
        expect(res.date_iso).toBeNull();
    });
});
