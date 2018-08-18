import { Injectable, Optional, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { RemoteNodeService } from './node.service';
import { PROXIMAX_REMOTE_BASE_URL, NEM_NETWORK } from '../../model/constants';
import {
  NetworkTypes, NemAnnounceResult,
  NEMLibrary, Account, TransferTransaction, TimeWindow, PlainMessage, SignedTransaction
} from 'nem-library';
import { MessageType } from '../../model/message-type';
import { XPX } from '../../model/XPX';


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

/**
 * Class represents remote transaction announce service
 */
@Injectable({
  providedIn: 'root'
})
export class RemoteTransactionAnnounceService {
  /**
   * The default baseUrl
   */
  private baseUrl = 'https://testnet2.gateway.proximax.io/';

  /**
   * The default NEM network
   */
  private nemNetwork = NetworkTypes.TEST_NET;

  /**
   * The instance of remote node service
   */
  private nodeService: RemoteNodeService;

  /**
   * RemoteTransactionAnnounceService Constructor
   * @param http the HttpClient instance
   * @param baseUrl the optional baseUrl
   */
  constructor(private http: HttpClient, @Optional() @Inject(PROXIMAX_REMOTE_BASE_URL) baseUrl: string,
    @Optional() @Inject(NEM_NETWORK) netNetwork: NetworkTypes) {

    if (baseUrl) {
      this.baseUrl = baseUrl;
    }

    if (netNetwork) {
      this.nemNetwork = netNetwork;
    }

    this.nodeService = new RemoteNodeService(this.http, this.baseUrl);

    // initialise NEM library
    NEMLibrary.reset();
    NEMLibrary.bootstrap(this.nemNetwork);
  }


  /**
   * Sign the data transaction
   * @param data the data to be signed
   * @param senderPrivateKey the sender private key
   * @param recipientPublicKey the recipient public key
   * @param messageType the message type
   * @returns the SignedTransaction
   */
  public signTransaction(data: string, senderPrivateKey: string, recipientPublicKey: string, messageType?: MessageType): SignedTransaction {

    if (data === null || data === undefined) {
      throw new Error('The request data is required');
    }

    if (senderPrivateKey === null || senderPrivateKey === undefined) {
      throw new Error('The sender private key is required');
    }

    if (recipientPublicKey === null || recipientPublicKey === undefined) {
      throw new Error('The recipient public key is required');
    }

    const senderAccount = Account.createWithPrivateKey(senderPrivateKey);

    if (senderAccount === null) {
      throw new Error('Unable to find the sender account');
    }

    const recipientAccount = Account.createWithPublicKey(recipientPublicKey);

    if (recipientAccount === null) {
      throw new Error('Unable to find the recipient account');
    }

    const xpxMosaic = new XPX(1);
    const message = (messageType === MessageType.SECURE) ? senderAccount.encryptMessage(data, recipientAccount) : PlainMessage.create(data);

    // do not need to attach the XEM mosaic
    const transferTransaction = TransferTransaction.createWithMosaics(
      TimeWindow.createWithDeadline(),
      recipientAccount.address,
      [xpxMosaic],
      message
    );

    return senderAccount.signTransaction(transferTransaction);

  }

  /**
   * Announce the data signature to NEM network
   * TODO: Upgrade to TransactionHttp from Nem-library when version 2.x is available
   * NOTE: This is a workaround method to announce transaction to NEM network
   * @param payload the SignedTransaction payload
   * @returns Observable<any>
   */
  public announceTransaction(signedTransaction: SignedTransaction): Observable<any> {
    
    if (signedTransaction === null) {
      throw new Error('The request SignedTransaction payload could not be null');
    }

    // retrieve the NEM network info specified in the node info
    return this.nodeService.getNetworkInfo().pipe(
      switchMap(node => {
        const endpoint = `${node.nemNetworkProtocol}://${node.networkAddress}:${node.networkPort}/transaction/announce`;

        // request headers
        const headers = new HttpHeaders({
          Accept: 'application/json'
        });

        const observe = 'response';
        console.log(endpoint);
        return this.http.post<NemAnnounceResult>(endpoint, signedTransaction, {
          headers: headers,
          observe: observe,
          reportProgress: true
        });
      })
    );
  }
}
