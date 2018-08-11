import { Injectable, Optional, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResourceHashMessage } from '../../model/resource-hash-message';
import { CustomHttpEncoder } from '../../model/custom-http-encoder';
import { REMOTE_BASE_URL } from '../../model/constants';


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
* Class represents the RemoteSearchService
*/
@Injectable({
    providedIn: 'root'
})
export class RemoteSearchService {

    /**
     * The default baseUrl
     */
    protected baseUrl = 'https://testnet2.gateway.proximax.io/';

   
    /**
     * RemoteSearchService Constructor
     * @param http the HttpClient instance
     * @param baseUrl the optional baseUrl
     */
    constructor(private http: HttpClient, @Optional() @Inject(REMOTE_BASE_URL) baseUrl: string) {
        if (baseUrl) {
            this.baseUrl = baseUrl;
        }
    }


    /**
     * Search files in IPFS network by keywords
     * Example:
     *
     *      seachByKeywords(pubKey,keywords).subscribe(response => {
     *          let result = response.body;
     *      });
     * @param  pubKey the Nem public key
     * @param  keywords the search keywords seperated by comma
     * @returns  Observable<any>
     */
    public seachByKeywords(pubKey: string, keywords?: string): Observable<any> {
        const endpoint = this.baseUrl + 'search/by/keywords';

        if (pubKey === null || pubKey === undefined) {
            throw new Error('Public key is required');
        }

        // request headers
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'x-pubkey': pubKey
        });

        // return full repsonse
        const observe = 'response';

        // request path
        const path = endpoint + '/' + encodeURIComponent(keywords);

        return this.http.get<Array<ResourceHashMessage>>(path, {
            headers: headers,
            observe: observe,
            reportProgress: true
        });
    }

    /**
     * Search files in IPFS network by name
     * Example:
     *
     *      seachByName(pubKey,name).subscribe(response => {
     *          let result = response.body;
     *      });
     * @param  pubKey the Nem public key
     * @param  name the search name seperated by comma
     * @returns  Observable<any>
     */
    public seachByName(pubKey: string, name?: string): Observable<any> {
        const endpoint = this.baseUrl + 'search/by/name';

        if (pubKey === null || pubKey === undefined) {
            throw new Error('Public key is required');
        }

        // request headers
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'x-pubkey': pubKey
        });

        // return full repsonse
        const observe = 'response';

        // request path
        const path = endpoint + '/' + encodeURIComponent(name);

        return this.http.get<Array<ResourceHashMessage>>(path, {
            headers: headers,
            observe: observe,
            reportProgress: true
        });
    }

    /**
    * Search files in IPFS network by metadata
    * Example:
    *
    *      seachByName(pubKey,name).subscribe(response => {
    *          let result = response.body;
    *      });
    * @param  pubKey the Nem public key
    * @param  key the metadata key
    * @param  value the metadata value
    * @returns  Observable<any>
    */
    public seachByMetadata(pubKey: string, key?: string, value?: string): Observable<any> {
        const endpoint = this.baseUrl + 'search/by/metadata';

        if (pubKey === null || pubKey === undefined) {
            throw new Error('Public key is required');
        }

        // request headers
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'x-pubkey': pubKey
        });

        // return full repsonse
        const observe = 'response';

        let queryParams = new HttpParams({ encoder: new CustomHttpEncoder() });
        if (key !== null) {
            queryParams = queryParams.set('key', key);
        }

        if (value !== null) {
            queryParams = queryParams.set('value', value);
        }

        return this.http.get<Array<ResourceHashMessage>>(endpoint, {
            headers: headers,
            params: queryParams,
            observe: observe,
            reportProgress: true
        });
    }
}
