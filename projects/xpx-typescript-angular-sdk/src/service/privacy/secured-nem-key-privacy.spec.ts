import { TestBed } from '@angular/core/testing';
import { SecuredWithNemKeyPrivacy } from './secured-nem-key-privacy';
const nem = require('nem-sdk').default;

describe('SecuredWithNemKeyPrivacy', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: []
        });
    });



    it('can encrypt and decrypt message with keys', () => {


        const senderPrivateKey = '2a91e1d5c110a8d0105aad4683f962c2a56663a3cad46666b16d243174673d90';
        const recipientPrivateKey = '2618090794e9c9682f2ac6504369a2f4fb9fe7ee7746f9560aca228d355b1cb9';

        const senderKeys = nem.crypto.keyPair.create(senderPrivateKey);
        const recipientKeys = nem.crypto.keyPair.create(recipientPrivateKey);

        const privacy1 = new SecuredWithNemKeyPrivacy(senderPrivateKey, recipientKeys.publicKey.toString());

        const message = 'Proximax is a P2P storage';

        const encrypted = privacy1.encrypt(message);

        console.log('Encrypted data' + encrypted);

        const privacy2 = new SecuredWithNemKeyPrivacy(recipientPrivateKey, senderKeys.publicKey.toString());
        const decrypted = privacy2.decrypt(encrypted);
        console.log('decrypt message : ' + decrypted);

        const decryptedMessage = nem.utils.format.hexToUtf8(decrypted);

        console.log(decryptedMessage);
        expect(decryptedMessage).toBe(message);

    });


    it('failed decrypt message with invalid recipient public key', () => {
        const senderPrivateKey = '2a91e1d5c110a8d0105aad4683f962c2a56663a3cad46666b16d243174673d90';
        const recipientPrivateKey = '2618090794e9c9682f2ac6504369a2f4fb9fe7ee7746f9560aca228d355b1cb9';

        const senderKeys = nem.crypto.keyPair.create(senderPrivateKey);
        const recipientKeys = nem.crypto.keyPair.create(recipientPrivateKey);

        const privacy1 = new SecuredWithNemKeyPrivacy(senderPrivateKey, recipientKeys.publicKey.toString());

        const message = 'Proximax is a P2P storage';

        const encrypted = privacy1.encrypt(message);

        console.log('Encrypted data' + encrypted);

        const privacy2 = new SecuredWithNemKeyPrivacy(recipientPrivateKey, recipientKeys.publicKey.toString());
        const decrypted = privacy2.decrypt(encrypted);
        console.log('decrypt message : ' + decrypted);

        const decryptedMessage = nem.utils.format.hexToUtf8(decrypted);

        console.log(decryptedMessage);
        expect(decryptedMessage).not.toBe(message);

    });
});
