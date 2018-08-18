import { TestBed } from '@angular/core/testing';
import { SecuredWithShamirSecretSharingPrivacy } from './secured-shamir-secret-sharing-privacy';
import { mergeMap } from 'rxjs/operators';


describe('SecuredWithShamirSecretSharingPrivacy', () => {
    let securedShamirSecretPrivacy: SecuredWithShamirSecretSharingPrivacy;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: []
        });


    });


    it('SecuredWithShamirSecretSharingPrivacy should throw error if no secret part is provided', () => {
        expect(() => new SecuredWithShamirSecretSharingPrivacy(null)).toThrowError('List of secret parts in hex string is required');
    });


    it('should generate a key, encrypt and decrypt', async () => {
        // tslint:disable-next-line:max-line-length
        const plainText = 'ProximaX is an advanced extension of the Blockchain and Distributed Ledger Technology (DLT) with utility-rich services and protocols';

        const secret = 'dhsakdhsauihcxznmneywquidkjsanjcbnxztyduisyaheqkwjncbxzcgyuiagsdiujasodjk' +
            'wqehqtsyiudhsandmbsamnbcxzygcahgisudhasnmbdmnasbcysagciugxziuhkjsbdamndnmsabfgaduishadshakdnsakdbsajbeh' +
            'wqyuieyqwiueyqwohdsanlnalsfjkhgkzgmnbcmnxzbhjgdsajgduisayiuyewquehwqkjbeqwnbdmnabsdabjshgdasudhgsuakghk' +
            'cbxzcbajsbdkasjgkjhwgquegqwbzmcbmzxn';

        const numShares = 5;
        const threshold = 3;

        // create shares from secret string
        const secretParts = SecuredWithShamirSecretSharingPrivacy.createShares(secret, numShares, threshold);

        // encrypt data
        securedShamirSecretPrivacy = new SecuredWithShamirSecretSharingPrivacy(secretParts);

        securedShamirSecretPrivacy.encrypt(plainText).pipe(mergeMap(encrypted => {
            console.log('Encrypted data ' + encrypted);

            const minSecretParts = [secretParts[1], secretParts[2], secretParts[4]];
            securedShamirSecretPrivacy = new SecuredWithShamirSecretSharingPrivacy(minSecretParts);

            return securedShamirSecretPrivacy.decrypt(encrypted);
        })).subscribe(decrypted => {
            console.log('Decrypted data ' + decrypted);
            expect(decrypted).toEqual(plainText);

        });



    });



});

