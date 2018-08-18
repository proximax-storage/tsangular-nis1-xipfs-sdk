import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { RemoteAccountService } from './account.service';
import { AccountMetaDataPair } from '../../model/account-meta-data-pair';

/**
 * Copyright 2018 ProximaX Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


describe('AccountServiceTest', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [RemoteAccountService]
        });
    });

    it('AccountService instance should be created',
        inject([RemoteAccountService], (service: RemoteAccountService) => {
            expect(service).toBeTruthy();
        }));

    it('#getEntireTransaction should return all transactions info',
        async(inject([RemoteAccountService], (service: RemoteAccountService) => {
            expect(service).toBeTruthy();
            const pubKey = '3be53ccd491d878d7d2a8696ab0a1662ea9644388b81249fccdc921305336190';

            service.getEntireTransaction(pubKey).subscribe(res => {

                expect(res.status).toBe(202);
                const body = res.body;
                expect(body.length > 0).toBe(true);
                const tran = body[0];
                // console.log(tran);
                expect(tran.recipient).toBe('TBJMXXPDSP2XUL4N4ABKXNVKQH7OOFZNE4KGYFH4');
                // tslint:disable-next-line:max-line-length
                expect(tran.signature).toBe('6e6525d82d8b066b4eb477ac9fe9e473bd27869b0365d41684ec32e5f87b5e9990cb6f0908800f4dbd3dea17a3bbde907fb0360189da1f7940821544c0791806');
                expect(tran.signer).toBe('36e6fbc1cc5c3ef49d313721650b98d7d7d126a4f731d70071f4f3b4798cdc85');
                expect(tran.mosaics).not.toBe(null);
                expect(tran.mosaics.length > 0).toBe(true);
                const mosaics = tran.mosaics;
                // console.log(mosaics);
                expect(mosaics[0].mosaicId.namespaceId).toBe('prx');
                expect(mosaics[0].mosaicId.name).toBe('xpx');
            });

        })));

    it('#getIncomingTransactions should return all transactions info',
        async(inject([RemoteAccountService], (service: RemoteAccountService) => {
            expect(service).toBeTruthy();
            const pubKey = '3be53ccd491d878d7d2a8696ab0a1662ea9644388b81249fccdc921305336190';

            service.getIncomingTransactions(pubKey).subscribe(res => {

                // console.log(res);
                // const header = res.headers;
                // console.log(header);
                expect(res.status).toBe(202);
                const body = res.body;
                expect(body.length > 0).toBe(true);

                const tran = body[0];
                // console.log(tran);
                expect(tran.recipient).toBe('TBJMXXPDSP2XUL4N4ABKXNVKQH7OOFZNE4KGYFH4');
                // tslint:disable-next-line:max-line-length
                expect(tran.signature).toBe('6e6525d82d8b066b4eb477ac9fe9e473bd27869b0365d41684ec32e5f87b5e9990cb6f0908800f4dbd3dea17a3bbde907fb0360189da1f7940821544c0791806');
                expect(tran.signer).toBe('36e6fbc1cc5c3ef49d313721650b98d7d7d126a4f731d70071f4f3b4798cdc85');
                expect(tran.mosaics).not.toBe(null);
                expect(tran.mosaics.length > 0).toBe(true);
                const mosaics = tran.mosaics;
                // console.log(mosaics);
                expect(mosaics[0].mosaicId.namespaceId).toBe('prx');
                expect(mosaics[0].mosaicId.name).toBe('xpx');
            });

        })));

    it('#getAccountInfo should return Nem account information',
        async(inject([RemoteAccountService], (service: RemoteAccountService) => {
            expect(service).toBeTruthy();
            const pubKey = '3be53ccd491d878d7d2a8696ab0a1662ea9644388b81249fccdc921305336190';

            service.getAccountInfo(pubKey).subscribe(response => {
                console.log(response);
                expect(response.status).toEqual(202);
                const headers: HttpHeaders = response.headers;
                console.log(headers);
                const accountMetadataPair: AccountMetaDataPair = response.body;
                console.log(accountMetadataPair);
                console.log(accountMetadataPair.account);
                expect(accountMetadataPair).not.toBe(null);
            });

        })));

    it('#getOutgoingTransactions should return all outgoing Nem transaction',
        async(inject([RemoteAccountService], (service: RemoteAccountService) => {
            expect(service).toBeTruthy();
            const pubKey = '3be53ccd491d878d7d2a8696ab0a1662ea9644388b81249fccdc921305336190';

            service.getOutgoingTransactions(pubKey).subscribe(response => {
                //  console.log(response);
                expect(response.status).toEqual(202);
                const headers: HttpHeaders = response.headers;
                //  console.log(headers);
                const data = response.body;
                expect(data).not.toBe(null);
            });

        })));


    it('#getTransactions should return all  Nem transactions',
        async(inject([RemoteAccountService], (service: RemoteAccountService) => {
            expect(service).toBeTruthy();
            const pubKey = '3be53ccd491d878d7d2a8696ab0a1662ea9644388b81249fccdc921305336190';

            service.getTransactions(pubKey).subscribe(response => {
                // console.log(response);
                expect(response.status).toEqual(202);
                const headers: HttpHeaders = response.headers;
                // console.log(headers);
                const data = response.body;
                expect(data).not.toBe(null);
            });

        })));

    // TODO: add nem hash
    it('#getTransactions with Nem Hash should return all  Nem transactions',
        async(inject([RemoteAccountService], (service: RemoteAccountService) => {
            expect(service).toBeTruthy();
            const pubKey = '3be53ccd491d878d7d2a8696ab0a1662ea9644388b81249fccdc921305336190';
            const hash = '';
            service.getTransactions(pubKey, hash).subscribe(response => {
                // console.log(response);
                expect(response.status).toEqual(202);
                const headers: HttpHeaders = response.headers;
                // console.log(headers);
                const data = response.body;
                expect(data).not.toBe(null);
            });

        })));

    // TODO: add pagesize
    it('#getTransactions with page size should return all  Nem transactions',
        async(inject([RemoteAccountService], (service: RemoteAccountService) => {
            expect(service).toBeTruthy();
            const pubKey = '3be53ccd491d878d7d2a8696ab0a1662ea9644388b81249fccdc921305336190';
            const pageSize = null;
            service.getTransactions(pubKey, null, pageSize).subscribe(response => {
                // console.log(response);
                expect(response.status).toEqual(202);
                const headers: HttpHeaders = response.headers;
                // console.log(headers);
                const data = response.body;
                expect(data).not.toBe(null);
            });

        })));
});
