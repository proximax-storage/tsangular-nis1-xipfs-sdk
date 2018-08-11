import { Injectable, SimpleChange, Optional, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignedTransaction } from '../../model/signed-transaction';
import { Observable, Observer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { RemoteNodeService } from './node.service';
import { NemAnnounceResult } from '../../model/nem-announce-resource';
import { Network } from '../../model/network';
import { REMOTE_BASE_URL } from '../../model/constants';
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
    protected baseUrl = 'https://testnet2.gateway.proximax.io/';

    /**
    * RemoteTransactionAnnounceService Constructor
    * @param http the HttpClient instance
    * @param baseUrl the optional baseUrl
    */
    constructor(private http: HttpClient, @Optional() @Inject(REMOTE_BASE_URL) baseUrl: string) {
        if (baseUrl) {
            this.baseUrl = baseUrl;
        }
    }

    /**
     * Announce the data signature to NEM network
     * @param payload the SignedTransaction payload
     * @returns Observable<any>
     */
    public transactionAnnounce(payload: SignedTransaction): Observable<any> {

        if (payload === null) {
            throw new Error('The request SignedTransaction payload could not be null');
        }

        // get node info and announce to NEM network
        const nodeService = new RemoteNodeService(this.http, this.baseUrl);

        return nodeService.getNodeInfo().pipe(
            switchMap(node => {

                const endpoint = 'http://' + node.networkAddress + ':' + node.networkPort + '/transaction/announce';

                // request headers
                const headers = new HttpHeaders({
                    'Accept': 'application/json'
                });

                const observe = 'response';

                return this.http.post<NemAnnounceResult>(endpoint, payload, {
                    headers: headers,
                    observe: observe,
                    reportProgress: true
                });
            })
        );
    }

    /**
     * 
     * @param data 
     * @param pvKey 
     * @param pubKey 
     * @param network 
     */
    public generateSignedTransaction(data: any, pvKey: string, pubKey: string, network?: Network): Promise<SignedTransaction> {


        let signedTransaction: SignedTransaction = {
            data: '',
            signature: ''
        };

        if (data === null) {
            throw new Error('The data could not be null');
        }

        if (pvKey === null || pvKey === undefined) {
            throw new Error('The sender private key could not be null');
        }

        if (pubKey === null || pubKey === undefined) {
            throw new Error('The reciever public key could not be null');
        }


        // get empty unprepared transfer object
        let transferTransaction = nem.model.objects.get("transferTransaction");

        // Get a mosaicDefinitionMetaDataPair object with preloaded xem definition
        let mosaicDefinitionMetaDataPair = nem.model.objects.get("mosaicDefinitionMetaDataPair");

        // get common object to hold pass and key
        let common = nem.model.objects.get("common");


        if (!nem.utils.helpers.isPrivateKeyValid(pvKey)) {
            throw new Error('Invalid private key, the private key must be in hexadecimal');
        }

        if (!nem.utils.helpers.isPublicKeyValid(pubKey)) {
            throw new Error('Invalid private key, the private key must be in hexadecimal');
        }

        // assign private key
        common.privateKey = pvKey;

        // create keypair from the private key
        let senderKp = nem.crypto.keyPair.create(nem.utils.helpers.fixPrivateKey(common.privateKey));

        // create address from recipient public key
        const recipientAddress = nem.model.address.toAddress(pubKey, network.id)

        // attach message to transaction
        transferTransaction.message = data;

        // attach recipient to transaction
        transferTransaction.recipient = recipientAddress;


        // Create a Nem mosaic attachment object
        var nemMosaicAttachment = nem.model.objects.create("mosaicAttachment")("nem", "xem", 1);

        // Push attachment into transaction mosaics
        transferTransaction.mosaics.push(nemMosaicAttachment);

        // Create a XPX mosaic attachment object
        var xpxMosaicAttachment = nem.model.objects.create("mosaicAttachment")("prx", "xpx", 1);

        // Push attachment into transaction mosaics
        transferTransaction.mosaics.push(xpxMosaicAttachment);

        // get the definition
        const endpoint = nem.model.objects.create("endpoint")(network.nemNetworkProtocol + '://' + network.networkAddress, network.networkPort);

        return nem.com.requests.namespace.mosaicDefinitions(endpoint, xpxMosaicAttachment.mosaicId.namespaceId).then(response => {
            console.log(response.data);
            var neededDefinition = nem.utils.helpers.searchMosaicDefinitionArray(response.data, ["xpx"]);

            // Get full name of mosaic to use as object key
            var fullMosaicName = nem.utils.format.mosaicIdToName(xpxMosaicAttachment.mosaicId);

            // Check if the mosaic was found
            if (undefined === neededDefinition[fullMosaicName]) return console.error("Mosaic not found !");

            // Set eur mosaic definition into mosaicDefinitionMetaDataPair
            mosaicDefinitionMetaDataPair[fullMosaicName] = {};
            mosaicDefinitionMetaDataPair[fullMosaicName].mosaicDefinition = neededDefinition[fullMosaicName];

            // Prepare the updated transfer transaction object
            const transactionEntity = nem.model.transactions.prepare("mosaicTransferTransaction")(common, transferTransaction, mosaicDefinitionMetaDataPair, network.id);

            // Serialize the transaction
            const serialized = nem.utils.serialization.serializeTransaction(transactionEntity);

            // Sign the serialized transaction with keypair object
            const signature = senderKp.sign(serialized);

            signedTransaction.data = nem.utils.convert.ua2hex(serialized);
            signedTransaction.signature = signature.toString();

            return signedTransaction;
        });

    }

    /**
     * Get the XPX transaction
     * @param hash the NEM hash
     * @deprecated DO NOT USE
     */
    public getTransaction(hash: string): Observable<any> {
        const endpoint = this.baseUrl + 'transaction/get';

        if (hash === null || hash === undefined) {
            throw new Error('The hash is required');
        }

        // create url path based on the endpoint
        const urlPath = endpoint + '/' + encodeURIComponent(hash);

        // request headers
        const headers = new HttpHeaders({
            'Accept': 'application/json'
        });

        return this.http.get(urlPath, {
            headers: headers,
            reportProgress: true
        });

    }
}
