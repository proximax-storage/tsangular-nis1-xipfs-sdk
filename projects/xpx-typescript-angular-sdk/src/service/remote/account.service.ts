import { Injectable, Optional, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountMetaDataPair } from '../../model/account-meta-data-pair';
import { PROXIMAX_REMOTE_BASE_URL } from '../../model/constants';
import { Transaction } from 'nem-library';

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
 * Class represents Remote account service
 */
@Injectable({
    providedIn: 'root'
})
export class RemoteAccountService {

    /**
     * The default baseURl
     */
    private baseUrl = 'https://testnet2.gateway.proximax.io/';

    /**
     * RemoteAccountService constructor
     * @param http the HttpClient instance
     * @param baseUrl the optional baseUrl
     */
    constructor(private http: HttpClient, @Optional() @Inject(PROXIMAX_REMOTE_BASE_URL) baseUrl: string) {
        if (baseUrl) {
            this.baseUrl = baseUrl;
        }
    }

    /**
     * Gets the entire Nem account transactions by the public key
     * Example:
     *
     *      getEntireTransaction(publicKey).subscribe(response => {
     *           const statusCode = response.status; //202 accepted
     *           const header:HttpHeaders = response.headers;
     *           const data = response.body;
     *      });
     *
     * @param  pubKey Nem account public key
     * @returns  Observable<any>
     */
    public getEntireTransaction(pubKey: string): Observable<any> {
        // base endpoint
        const endpoint = this.baseUrl + 'account/get/entire/transactions';

        const observe = 'response';

        if (pubKey === null || pubKey === undefined) {
            throw new Error('The pubKey is required');
        }

        // request path
        const path = endpoint + '/' + encodeURIComponent(pubKey);

        // request headers
        const headers = new HttpHeaders({
            'Accept': 'application/json'
        });

        return this.http.get<Transaction[]>(path, {
            headers: headers,
            observe: observe,
            reportProgress: true
        });

    }

    /**
     * Gets all incoming Nem transactions by the public key
     * Example:
     *
     *      getIncomingTransactions(publicKey).subscribe(response => {
     *           const statusCode = response.status; //202 accepted
     *           const header:HttpHeaders = response.headers;
     *           const data = response.body;
     *      });
     *
     * @param  pubKey Nem account public key
     * @returns  Observable<any>
     */
    public getIncomingTransactions(pubKey: string): Observable<any> {
        // base endpoint
        const endpoint = this.baseUrl + 'account/get/incoming/transactions';

        // return full http response
        const observe = 'response';

        if (pubKey === null || pubKey === undefined) {
            throw new Error('The pubKey is required');
        }

        // request path
        const path = endpoint + '/' + encodeURIComponent(pubKey);

        // request headers
        const headers = new HttpHeaders({
            'Accept': 'application/json'
        });

        return this.http.get(path, {
            headers: headers,
            observe: observe,
            reportProgress: true
        });
    }

    /**
     * Gets Nem account information by the public key
     * Example:
     *
     *      getAccountInfo(publicKey).subscribe(response => {
     *           const statusCode = response.status; //202 accepted
     *           const header:HttpHeaders = response.headers;
     *           const accountMetaDataPair: AccountMetaDataPair = response.body;
     *      });
     *
     * @param  pubKey Nem account public key
     * @returns  Observable<any>
     */
    public getAccountInfo(pubKey: string): Observable<any> {
        // base endpoint
        const endpoint = this.baseUrl + 'account/get/info';

        // return full http response
        const observe = 'response';

        if (pubKey === null || pubKey === undefined) {
            throw new Error('The pubKey is required');
        }

        // request path
        const path = endpoint + '/' + encodeURIComponent(pubKey);

        // request headers
        const headers = new HttpHeaders({
            'Accept': 'application/json'
        });

        return this.http.get<AccountMetaDataPair>(path, {
            headers: headers,
            observe: observe,
            reportProgress: false
        });
    }


    /**
     * Gets all outgoing Nem transactions by the public key
     * Example:
     *
     *      getOutgoingTransactions(publicKey).subscribe(response => {
     *           const statusCode = response.status; //202 accepted
     *           const header:HttpHeaders = response.headers;
     *           const data = response.body;
     *      });
     *
     * @param  pubKey Nem account public key
     * @returns  Observable<any>
     */
    public getOutgoingTransactions(pubKey: string): Observable<any> {
        // base endpoint
        const endpoint = this.baseUrl + 'account/get/outgoing/transactions';

        // return full http response
        const observe = 'response';

        if (pubKey === null || pubKey === undefined) {
            throw new Error('The pubKey is required');
        }

        // request path
        const path = endpoint + '/' + encodeURIComponent(pubKey);

        // request headers
        const headers = new HttpHeaders({
            'Accept': 'application/json'
        });

        return this.http.get(path, {
            headers: headers,
            observe: observe,
            reportProgress: false
        });
    }

    /**
     * Gets all Nem transactions by the public key
     * Example:
     *
     *      getTransactions(publicKey).subscribe(response => {
     *           const statusCode = response.status; //202 accepted
     *           const header:HttpHeaders = response.headers;
     *           const data = response.body;
     *      });
     *
     * @param  pubKey the Nem account public key
     * @param  hash the Nem transaction hash
     * @param  pageSize the page size of transaction list
     * @returns  Observable<any>
     */
    public getTransactions(pubKey: string, hash?: string, pageSize?: number): Observable<any> {
        // base endpoint
        const endpoint = this.baseUrl + 'account/get/transactions';

        // return full http response
        const observe = 'response';

        if (pubKey === null || pubKey === undefined) {
            throw new Error('The pubKey is required');
        }

        // request path
        let path = endpoint + '/' + encodeURIComponent(pubKey);

        // should use as query params
        if (hash != null) {
            path = path + '/' + encodeURIComponent(hash);
        }

        // should use as query params
        if (pageSize != null) {
            path = path + '/' + encodeURIComponent(pageSize.toString());
        }


        // request headers
        const headers = new HttpHeaders({
            'Accept': 'application/json'
        });

        return this.http.get(path, {
            headers: headers,
            observe: observe,
            reportProgress: false
        });
    }

    /**
     * Gets all unconfirmed Nem transactions by the public key
     * Example:
     *
     *      getUnconfirmedTransactions(publicKey).subscribe(response => {
     *           const statusCode = response.status; //202 accepted
     *           const header:HttpHeaders = response.headers;
     *           const data = response.body;
     *      });
     *
     * @param  pubKey Nem account public key
     * @returns  Observable<any>
     */
    public getUnconfirmedTransactions(pubKey: string): Observable<any> {
        // base endpoint
        const endpoint = this.baseUrl + 'account/get/unconfirmed/transactions';

        // return full http response
        const observe = 'response';

        if (pubKey === null || pubKey === undefined) {
            throw new Error('The pubKey is required');
        }

        // request path
        const path = endpoint + '/' + encodeURIComponent(pubKey);

        // request headers
        const headers = new HttpHeaders({
            'Accept': 'application/json'
        });

        return this.http.get(path, {
            headers: headers,
            observe: observe,
            reportProgress: false
        });
    }

}
