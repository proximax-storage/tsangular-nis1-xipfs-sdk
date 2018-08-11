import { TestBed, inject, async } from '@angular/core/testing';

import { RemoteUploadService } from './upload.service';
import { HttpClientModule } from '@angular/common/http';
import { UploadBinaryRequest } from '../../model/upload-binary-request';


import { MessageType } from '../../model/message-type';

import { RemoteTransactionAnnounceService } from './transaction-announce.service';
import { switchMap } from 'rxjs/operators';
import { Network } from '../../model/network';
const nem = require('nem-sdk').default;
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

describe('RemoteTransactionAnnounceServiceTest', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [RemoteTransactionAnnounceService, RemoteUploadService]
        });
    });

    it('RemoteTransactionAnnounceService instance should be created',
        inject([RemoteTransactionAnnounceService], (service: RemoteTransactionAnnounceService) => {
            expect(service).toBeTruthy();
        }));

    it('#generateSignedTransaction should return SignedTransaction',
        inject([RemoteTransactionAnnounceService], (service: RemoteTransactionAnnounceService) => {
            expect(service).toBeTruthy();

            const senderPvKey = 'e62cccf54864884575a033481cabd4851429203a84849f5fc688fb651efd7f00';
            const senderPvKey2 = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
            const networkId = -104;
            const recipientPubKey = '3be53ccd491d878d7d2a8696ab0a1662ea9644388b81249fccdc921305336190';
            // get common object to hold pass and key
            let common = nem.model.objects.get("common");
            common.privateKey = senderPvKey;
            console.log(common);
            const isValid = nem.utils.helpers.isPrivateKeyValid(common.privateKey);
            console.log(isValid);
            const senderKp = nem.crypto.keyPair.create(nem.utils.helpers.fixPrivateKey(common.privateKey));
            console.log(senderKp);

            const recipientAddress = nem.model.address.toAddress(recipientPubKey, networkId)
            console.log(recipientAddress);
            let network: Network = {
                id: -104,
                prefix: '68',
                char: 'T',
                networkAddress: '23.228.67.85',
                networkPort: 7890,
                nemNetworkProtocol:'http'
            }
            const data = 'This is a message data';

            const signedTransaction = service.generateSignedTransaction(data, senderPvKey, recipientPubKey, network).then(response => {
                console.log(response);
            });
         
            
        }));

    /*
      it('#announceTransaction should return Datahash',
  
          async(inject([RemoteUploadService, RemoteTransactionAnnounceService],
              (uploadService: RemoteUploadService, announceService: RemoteTransactionAnnounceService) => {
                  expect(uploadService).toBeTruthy();
                  expect(announceService).toBeTruthy();
  
                  const metadata = {
                      'author': 'Proximax'
                  };
  
                  // tslint:disable-next-line:max-line-length
                  const base64Data = 'VEVTVCBBTk5PVU5DRSBUTyBORU0gTkVUV09SSw==';
  
                  // need to convert the base64 string to byte array
                  const byteArray = [];
                  for (let i = 0; i < base64Data.length; i++) {
                      byteArray.push(base64Data.charCodeAt(i));
                  }
  
                  const pubKey = '3be53ccd491d878d7d2a8696ab0a1662ea9644388b81249fccdc921305336190';
                  const pvKey = 'e62cccf54864884575a033481cabd4851429203a84849f5fc688fb651efd7f00';
                  const messageType = MessageType.PLAIN;
  
                  const payload = new UploadBinaryRequest('test', byteArray, 'test', JSON.stringify(metadata), 'text/plain');
                  uploadService.uploadSignAnnounce(pvKey, pubKey, messageType, payload).pipe(
                      switchMap((res) => {
  
                          console.log(res);
  
                          const announcePayload = res;
                          console.log('###PAYLOAD###');
                          // console.log(announcePayload);
                          // announce the transaction
                          return announceService.transactionAnnounce(announcePayload);
                      })).subscribe(txt => {
                          console.log(txt);
                          // console.log('Announce Data ' + data.data);
                          expect(txt.data.length > 0).toBe(true);
                      });
              })));
              */
    /*
    it('#getTransaction should be return transaction details',
        async(inject([RemoteTransactionAnnounceService], (service: RemoteTransactionAnnounceService) => {
            expect(service).toBeTruthy();

            const nemHash = '526fd05281b39b1dc09466ea70983b0ce41d6114cdc9a9536afbdbb218e0bae8';
            service.getTransaction(nemHash).subscribe((res) => {
                console.log(res);
                expect(res.recipient).toBe('TBJMXXPDSP2XUL4N4ABKXNVKQH7OOFZNE4KGYFH4');
            });

        })));
        */
});
