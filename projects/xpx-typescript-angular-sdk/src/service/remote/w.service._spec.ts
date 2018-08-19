import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RemoteTransactionAnnounceService } from './transaction-announce.service';
import { RemoteUploadService } from './upload.service';
import { RemoteNodeService } from './node.service';
import { UploadTextRequest } from '../../model/upload-text-request';

import { MessageType } from '../../model/message-type';
import { PROXIMAX_REMOTE_BASE_URL } from '../../model/constants';
import { UploadBinaryRequest } from '../../model/upload-binary-request';
import { Converter } from '../../utils/converter';


describe('Test', () => {

    beforeAll(() => {
        //  NEMLibrary.bootstrap(NetworkTypes.TEST_NET);
    });

    afterAll(() => {
        //   NEMLibrary.reset();
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [RemoteTransactionAnnounceService, RemoteUploadService, RemoteNodeService,
                {
                    provide: PROXIMAX_REMOTE_BASE_URL, useValue: 'https://testnet.gateway.proximax.io/'
                }]
        });
    });

    /*
    it('#upload text should return nem hash',
        async(inject([RemoteUploadService, RemoteTransactionAnnounceService, RemoteNodeService],
            (upload: RemoteUploadService, txt: RemoteTransactionAnnounceService, node: RemoteNodeService) => {

                const metadata = {
                    'author': 'Proximax'
                };


                const payload: UploadTextRequest = {
                    contentType: 'text/plain',
                    encoding: 'utf-8',
                    name: 'test',
                    keywords: '',
                    text: Date.now() + '_Proximax P2P Storage Test Case',
                    metadata: JSON.stringify(metadata),
                    senderPrivateKey: 'e62cccf54864884575a033481cabd4851429203a84849f5fc688fb651efd7f00',
                    recieverPublicKey: '12dffce507f53945b6fcffd600a7500d32c53816fcf8c0c98c6ec7e1e7f8480c',
                    messageType: MessageType.PLAIN
                };

                upload.uploadText(payload).subscribe(console.log);

                // upload.uploadTextSync(payload);
                // txt.test();

            })));

         */   
    it('#upload text with SECURE messsage type should return nem hash',
    async(inject([RemoteUploadService, RemoteTransactionAnnounceService, RemoteNodeService],
        (upload: RemoteUploadService, txt: RemoteTransactionAnnounceService, node: RemoteNodeService) => {

            const metadata = {
                'author': 'Proximax'
            };


            const payload: UploadTextRequest = {
                contentType: 'text/plain',
                encoding: 'utf-8',
                name: 'test',
                keywords: '',
                text: Date.now() + '_Proximax P2P Storage Test Case',
                metadata: JSON.stringify(metadata),
                senderPrivateKey: 'e62cccf54864884575a033481cabd4851429203a84849f5fc688fb651efd7f00',
                recieverPublicKey: '12dffce507f53945b6fcffd600a7500d32c53816fcf8c0c98c6ec7e1e7f8480c',
                messageType: MessageType.SECURE
            };

            upload.uploadText(payload).subscribe(console.log);

            // upload.uploadTextSync(payload);
            // txt.test();

        })));

        /*
    it('#upload binary should return nem hash',
        async(inject([RemoteUploadService, RemoteTransactionAnnounceService, RemoteNodeService],
            (upload: RemoteUploadService, txt: RemoteTransactionAnnounceService, node: RemoteNodeService) => {

                // reciever address
                // TBRDDO-CQFL3L-KZHKEA-IA4WJ6-5JAFJ4-LJRAUX-TDZ6

                // sender address
                // TCM7R7-EL6KU4-5FR7GQ-INDPVI-TGIJQS-QB362F-STC6

                const metadata = {
                    'author': 'Proximax'
                };

                const base64ImageData = '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';


                const payload: UploadBinaryRequest = {
                    contentType: 'image/jpeg',
                    name: 'test',
                    keywords: '',
                    metadata: JSON.stringify(metadata),
                    senderPrivateKey: 'e62cccf54864884575a033481cabd4851429203a84849f5fc688fb651efd7f00',
                    recieverPublicKey: '12dffce507f53945b6fcffd600a7500d32c53816fcf8c0c98c6ec7e1e7f8480c',
                    messageType: MessageType.PLAIN,
                    data: Converter.strToArray(base64ImageData)
                };

                upload.uploadBinary(payload).subscribe(console.log);


            })));
*/
});
