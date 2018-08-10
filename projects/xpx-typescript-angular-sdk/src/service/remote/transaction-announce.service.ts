import { HttpService } from '../http.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignedTransaction } from '../../model/signed-transaction';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { RemoteNodeService } from './node.service';
import { NemAnnounceResult } from '../../model/nem-announce-resource';

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
export class RemoteTransactionAnnounceService extends HttpService {

    /**
     * The default baseUrl
     */
    protected baseUrl = 'https://testnet2.gateway.proximax.io/';

    /**
     * RemoteTransactionAnnounceService constructor
     * @param  http the http client instance
     */
    constructor(http: HttpClient) {
        super(http);
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
        const nodeService = new RemoteNodeService(this.http);

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
