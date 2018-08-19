import { TestBed, inject, async } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { RemoteDownloadService } from './download.service';
import { TransferMode } from '../../model/transfer-mode';
import { GenericResponseMessage } from '../../model/generic-response-message';

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


describe('RemoteDownloadServiceTest', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [RemoteDownloadService]
        });
    });

    it('RemoteTransactionAnnounceService instance should be created',
        inject([RemoteDownloadService], (service: RemoteDownloadService) => {
            expect(service).toBeTruthy();
        }));


    it('#downloadBinary should download binary file with transfer mode = bytes',
        async(inject([RemoteDownloadService], (service: RemoteDownloadService) => {
            expect(service).toBeTruthy();

            const nemHash = '8559edd2b79e38fb26e26139318ac43e80705254cf54c399d410debda221db66';

            service.downloadBinary(nemHash, TransferMode.BYTES).subscribe((res) => {
                /*  const keys = res.headers.keys();
                  console.log(keys);
                  console.log(keys.map(key =>
                      `${key}: ${res.headers.get(key)}`));
                      console.log(res.body);*/
                // expect(res.recipient).toBe('TBJMXXPDSP2XUL4N4ABKXNVKQH7OOFZNE4KGYFH4');
                expect(res.body instanceof Blob).toBeTruthy();
            });

        })));
    /*
    it('#downloadBinary should download binary file with transfer mode = stream',
        async(inject([RemoteDownloadService], (service: RemoteDownloadService) => {
            expect(service).toBeTruthy();

            const nemHash = '526fd05281b39b1dc09466ea70983b0ce41d6114cdc9a9536afbdbb218e0bae8';

            service.downloadBinary(nemHash, TransferMode.STREAM).subscribe((res) => {

                expect(res.body instanceof Blob).toBeTruthy();
            });

        })));

    it('#downloadDirectNemHash should return the data from Nem hash ',
        async(inject([RemoteDownloadService], (service: RemoteDownloadService) => {
            expect(service).toBeTruthy();

            const nemHash = 'b8919ddf1787f4103010359b9e97e25bd4d0ac8de8c5035a39c5dde393c62d60';

            service.downloadDirectNemhash(nemHash).subscribe((res) => {
                console.log(res);
                const result: GenericResponseMessage = res.body;
                expect(result.status).toEqual('ACCEPTED');
                expect(result.message.startsWith('Qm')).toBe(true);
            });

        })));

    it('#downloadDirectDatahash should return the data of the ifps datahash',
        async(inject([RemoteDownloadService], (service: RemoteDownloadService) => {
            expect(service).toBeTruthy();

            const dataHash = 'QmTMrVT7WMXuUuxPKAkzrV1RYMZDYCWm51tVXcDvvWReM2';

            service.downloadDirectDatahash(dataHash).subscribe((res) => {
                // console.log(res);
                expect(res.body instanceof Blob).toBeTruthy();
            });

        })));

    it('#downloadSecureBinary should download binary file with transfer mode = stream',
        async(inject([RemoteDownloadService], (service: RemoteDownloadService) => {
            expect(service).toBeTruthy();

            const nemHash = 'c458a5d4fb4b3514581d7b8dd0f46b1ed241c7bf4c6a5af41cd69395b47359cd';

            const pvKey = 'e62cccf54864884575a033481cabd4851429203a84849f5fc688fb651efd7f00';
            service.downloadSecureBinary(pvKey, nemHash, TransferMode.STREAM).subscribe((res) => {
                // console.log(res);
                expect(res.body instanceof Blob).toBeTruthy();
            });

        })));

    it('#downloadSecureFile should download binary file with transfer mode = stream',
        async(inject([RemoteDownloadService], (service: RemoteDownloadService) => {
            expect(service).toBeTruthy();

            const nemHash = 'c458a5d4fb4b3514581d7b8dd0f46b1ed241c7bf4c6a5af41cd69395b47359cd';

            const pvKey = 'e62cccf54864884575a033481cabd4851429203a84849f5fc688fb651efd7f00';
            service.downloadSecureFile(pvKey, nemHash, TransferMode.STREAM).subscribe((res) => {
                // console.log(res);
                expect(res.body instanceof Blob).toBeTruthy();
            });

        })));
*/
});
