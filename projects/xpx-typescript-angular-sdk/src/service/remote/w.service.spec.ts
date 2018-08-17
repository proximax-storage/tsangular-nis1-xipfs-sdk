import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RemoteTransactionAnnounceService } from './transaction-announce.service';
import { RemoteUploadService } from './upload.service';
import { RemoteNodeService } from './node.service';
import { UploadTextRequest } from '../../model/upload-text-request';
import { map, switchMap } from 'rxjs/operators';
import { MessageType } from '../../model/message-type';
import { NEMLibrary, NetworkTypes } from 'nem-library';

describe('Test', () => {

    beforeAll(() => {
        NEMLibrary.bootstrap(NetworkTypes.TEST_NET);
    });

    afterAll(() => {
        NEMLibrary.reset();
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [RemoteTransactionAnnounceService, RemoteUploadService, RemoteNodeService]
        });
    });

    it('Generate sign announce instance should be created',
        async(inject([RemoteUploadService, RemoteTransactionAnnounceService, RemoteNodeService],
            (upload: RemoteUploadService, txt: RemoteTransactionAnnounceService, node: RemoteNodeService) => {

                // reciever address
                // TBRDDO-CQFL3L-KZHKEA-IA4WJ6-5JAFJ4-LJRAUX-TDZ6

                // sender address
                // TCM7R7-EL6KU4-5FR7GQ-INDPVI-TGIJQS-QB362F-STC6



                const metadata = {
                    'author': 'Proximax'
                };


                const payload: UploadTextRequest = {
                    contentType: 'text/plain',
                    encoding: 'utf-8',
                    name: 'test',
                    keywords: '',
                    text: Date.now() + '_Proximax P2P Storage Test Case 2',
                    metadata: JSON.stringify(metadata),
                    senderPrivateKey: 'f7c843068db612ca44f7f7815a11eb1260c614981eefe861e11bc6888cf307d1',
                    recieverPublicKey: '9a4309197988e13ecd2682b4d9f47b802bce0627a174ec5f96c184dfa6db794f',
                    messageType: MessageType.SECURE
                };

                upload.uploadTextToNem(payload).subscribe(console.log);

                // upload.uploadTextSync(payload);
                // txt.test();

            })));

});
