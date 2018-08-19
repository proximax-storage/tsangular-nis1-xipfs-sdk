import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RemoteTransactionAnnounceService } from './transaction-announce.service';
import { RemoteNodeService } from './node.service';

import { PROXIMAX_REMOTE_BASE_URL } from '../../model/constants';
import { Converter } from '../../utils/converter';
import { Account, EncryptedMessage, PlainMessage } from 'nem-library';
import { DownloadRequest } from '../../model/download-request';
import { RemoteDownloadService } from './download.service';
import { MessageType } from '../../model/message-type';

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
    beforeAll(() => {
        // NEMLibrary.bootstrap(NetworkTypes.TEST_NET);
    });

    afterAll(() => {
        // NEMLibrary.reset();
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [RemoteTransactionAnnounceService, RemoteNodeService,
                {
                    provide: PROXIMAX_REMOTE_BASE_URL, useValue: 'https://testnet.gateway.proximax.io/'
                }]
        });


    });
    /*
       
        it('RemoteTransactionAnnounceService instance should be created',
            inject([RemoteTransactionAnnounceService], (service: RemoteTransactionAnnounceService) => {
                expect(service).toBeTruthy();
            }));
    
        it('#signTransaction with PLAIN message type should return result',
            inject([RemoteTransactionAnnounceService], (service: RemoteTransactionAnnounceService) => {
    
                const data = 'ProximaX is an advanced extension of the Blockchain and Distributed'
                    + 'Ledger Technology (DLT) with utility-rich services and protocols';
    
                const senderPVKey = 'f7c843068db612ca44f7f7815a11eb1260c614981eefe861e11bc6888cf307d1';
                const recipientPubKey = '9a4309197988e13ecd2682b4d9f47b802bce0627a174ec5f96c184dfa6db794f';
                const messageType = MessageType.PLAIN;
    
                const signTransaction = service.signTransaction(data, senderPVKey, recipientPubKey, messageType);
                console.log(signTransaction);
                expect(signTransaction.data.length > 0).toBe(true);
                expect(signTransaction.signature.length > 0).toBe(true);
            }));
    
        it('#announceTransaction with PLAIN message type should return datahash',
            inject([RemoteTransactionAnnounceService], (service: RemoteTransactionAnnounceService) => {
    
                const data = Date.now() + ' _ProximaX is an advanced extension of the Blockchain and Distributed'
                    + 'Ledger Technology (DLT) with utility-rich services and protocols';
    
                const senderPVKey = 'f7c843068db612ca44f7f7815a11eb1260c614981eefe861e11bc6888cf307d1';
                const recipientPubKey = '9a4309197988e13ecd2682b4d9f47b802bce0627a174ec5f96c184dfa6db794f';
                const messageType = MessageType.PLAIN;
    
                const signTransaction = service.signTransaction(data, senderPVKey, recipientPubKey, messageType);
                console.log(signTransaction);
                expect(signTransaction.data.length > 0).toBe(true);
                expect(signTransaction.signature.length > 0).toBe(true);
    
                service.announceTransaction(signTransaction).subscribe(
                    response => {
                        console.log(response);
                        const nr: NemAnnounceResult = response.body;
                        console.log(nr.transactionHash.data);
                        expect(response.status).toBe(200);
                        expect(nr).not.toBe(null);
                        expect(nr.transactionHash.data.length > 0).toBe(true);
                    }
                );
            }));
    
        it('#announceTransaction with SECURE message type should return datahash',
            inject([RemoteTransactionAnnounceService], (service: RemoteTransactionAnnounceService) => {
    
                // tslint:disable-next-line:max-line-length
                const data = 'GAAAABQAJAAgABwAGAAUABAAAAAIAAQAFAAAACAAAADL7RhGZQEAACQAAAAsAAAARAAAAEgAAAB4AAAACgAAAHRleHQvcGxhaW4AAAQAAAB0ZXN0AAAAABUAAAB7ImF1dGhvciI6IlByb3hpbWF4In0AAAAAAAAAAAAAAC4AAABRbVZ5M3R3SllZUmVHVmRvdUVkNnZpUUh5aFJZa1l6VnBuUEhWZmRMUmVxdlA2AABAAAAAZDJiMDc2OTQ0OWZkOWUxMDdmOGUyNGE3OWZiNmVjMzMyMzQ3MjdlZWEzMjE5M2Q2NDllMTA3ZjMyNzRkNTM1NQAAAAA=';
    
                const senderPVKey = 'f7c843068db612ca44f7f7815a11eb1260c614981eefe861e11bc6888cf307d1';
                const recipientPubKey = '9a4309197988e13ecd2682b4d9f47b802bce0627a174ec5f96c184dfa6db794f';
                const messageType = MessageType.SECURE;
    
                const signTransaction = service.signTransaction(data, senderPVKey, recipientPubKey, messageType);
                console.log(signTransaction);
                expect(signTransaction.data.length > 0).toBe(true);
                expect(signTransaction.signature.length > 0).toBe(true);
    
                service.announceTransaction(signTransaction).subscribe(
                    response => {
                        console.log(response);
                        const nr: NemAnnounceResult = response.body;
                        console.log(nr.transactionHash.data);
                        expect(response.status).toBe(200);
                        expect(nr).not.toBe(null);
                        expect(nr.transactionHash.data.length > 0).toBe(true);
                    }
                );
            }));*/
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
    it('#getTransaction should be return transaction details',
        async(inject([RemoteDownloadService], (service: RemoteDownloadService) => {


            const nemHash = '419d7b8f2a00e05a64ab84100f2d9a97bb21569b6710b227add8fa80f91abeea';
            const downloadRequest: DownloadRequest = {
                hash: '82b691eb118436f9384ff9ff9e81a3438035e4b4ca3f4b7276c5f86199d5e5b2',
                senderPublicKey: '3be53ccd491d878d7d2a8696ab0a1662ea9644388b81249fccdc921305336190',
                recipientPrivateKey: 'e104daf06a4a35e9ef1a2d27c95542f184147772d2f624e1034321c33023d2ee', 
                messageType: MessageType.PLAIN
            }

            service.download(downloadRequest).subscribe((res) => {
                // console.log(res);


                console.log(res);
                /*
                                const strPayload = Converter.hexToStr(payload);
                
                                const senderPublicKey = '3be53ccd491d878d7d2a8696ab0a1662ea9644388b81249fccdc921305336190';
                                const recipientPrivateKey = 'e104daf06a4a35e9ef1a2d27c95542f184147772d2f624e1034321c33023d2ee';
                
                                const senderAccount = Account.createWithPublicKey(senderPublicKey);
                                const recipientAccount = Account.createWithPrivateKey(recipientPrivateKey);
                
                                const plainPaylod = Converter.decodeHex(nem.crypto.helpers.decode(recipientPrivateKey,senderPublicKey, payload));
                                console.log(plainPaylod);
                                const encryptedMessage =  EncryptedMessage.createFromDTO(payload);
                                console.log(encryptedMessage);
                                const plainMessage = recipientAccount.decryptMessage(encryptedMessage, senderAccount);
                                console.log(plainMessage);
                                //expect(transaction).not.toBe(null);
                                */
            });

        })));

});
