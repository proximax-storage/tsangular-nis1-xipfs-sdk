import { TestBed, inject, async } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { RemoteDownloadService } from './download.service';
import { TransferMode } from '../../model/transfer-mode';
import { GenericResponseMessage } from '../../model/generic-response-message';
import { DownloadRequest } from '../../model/download-request';
import { DownloadType } from '../../model/download-type';
import { MessageType } from '../../model/message-type';

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




    it('#download should be return download detail',
        async(inject([RemoteDownloadService], (service: RemoteDownloadService) => {


            const nemHash = '419d7b8f2a00e05a64ab84100f2d9a97bb21569b6710b227add8fa80f91abeea';
            const downloadRequest: DownloadRequest = {
                hash: 'de578d34ba39f3c91f6de7572df0885290671b0627f2cd2a7f9411f887f25380',
                senderPublicKey: '3be53ccd491d878d7d2a8696ab0a1662ea9644388b81249fccdc921305336190',
                recipientPrivateKey: 'e104daf06a4a35e9ef1a2d27c95542f184147772d2f624e1034321c33023d2ee',
                downloadType: DownloadType.BLOG,
                messageType: MessageType.PLAIN
            }

            service.download(downloadRequest).subscribe((res) => {
                 console.log(res);
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
