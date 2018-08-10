import { TestBed } from '@angular/core/testing';
import { SecuredWithPasswordPrivacy } from './secured-password-privacy';
import { mergeMap, map } from 'rxjs/operators';


describe('SecuredWithPasswordPrivacy', () => {
    let securedPasswordPrivacy: SecuredWithPasswordPrivacy;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: []
        });


    });

    it('SecuredWithPasswordPrivacy should throw error if no password is provided', () => {
       expect(() => new SecuredWithPasswordPrivacy(null)).toThrowError('The password is required');
    });


    it('#encrypt should encrypt data', () => {
        // tslint:disable-next-line:max-line-length
        const plainText = 'ProximaX is an advanced extension of the Blockchain and Distributed Ledger Technology (DLT) with utility-rich services and protocols';
        const password = 'lkNzBmYmYyNTExZjZmNDYyZTdjYWJmNmY1MjJiYjFmZTk3Zjg2NDA5ZDlhOD';

        securedPasswordPrivacy = new SecuredWithPasswordPrivacy(password);
        const encryption = securedPasswordPrivacy.encrypt(plainText);
        encryption.subscribe(encrypted => {
            console.log('Encrypted data ' + encrypted);
            expect(encrypted).not.toEqual(plainText);
        });

    });


    it('#decrypt should decrypt the message', () => {
        // tslint:disable-next-line:max-line-length
        const plainText = 'ProximaX is an advanced extension of the Blockchain and Distributed Ledger Technology (DLT) with utility-rich services and protocols';
        // tslint:disable-next-line:max-line-length
        const encrypted = 'kwZrCQEwgBhoRiz1hi52qyUAgyDXHrUD+lw0o4qB3EBVjCG1j3M5TGaHT2lYpqcx1igF4SSNG9Djitj1Ukmkpcy+4QOyQYgQQkMwPg5zoIVeoRLcQO6B/6tes3kc33ClrIZyP32VF1zUCNu4pvlWGD3r0aaCPzXokGuA4+l3apj+ZFOdtgdo2oFjUOYuP9z9H1KBlQ==';
        const password = 'lkNzBmYmYyNTExZjZmNDYyZTdjYWJmNmY1MjJiYjFmZTk3Zjg2NDA5ZDlhOD';

        securedPasswordPrivacy = new SecuredWithPasswordPrivacy(password);

        const decryption = securedPasswordPrivacy.decrypt(encrypted);
        decryption.subscribe(decrypted => {
            console.log('Plain text ' + decrypted);
            expect(decrypted).toEqual(plainText);
        });

    });


    it('should encrypt data then decrypt it back to the original data', () => {
        // tslint:disable-next-line:max-line-length
        const plainText = 'ProximaX is an advanced extension of the Blockchain and Distributed Ledger Technology (DLT) with utility-rich services and protocols';
        // const encodeText = encode(plainText);
        const password = 'lkNzBmYmYyNTExZjZmNDYyZTdjYWJmNmY1MjJiYjFmZTk3Zjg2NDA5ZDlhOD';

        securedPasswordPrivacy = new SecuredWithPasswordPrivacy(password);

        securedPasswordPrivacy.encrypt(plainText).pipe(mergeMap(encrypted => {
            console.log('Encrypted data 2 ' + encrypted);
            return securedPasswordPrivacy.decrypt(encrypted);
        })).subscribe(decrypted => {
            console.log('Decrypted data 2 ' + decrypted);
            expect(decrypted).toEqual(plainText);
        });
    });

});

