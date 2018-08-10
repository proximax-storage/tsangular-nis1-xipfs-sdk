import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
 * Class represents remote data hash service
 */
@Injectable({
    providedIn: 'root'
})
export class RemoteDataHashService extends HttpService {

    /**
     * The default baseUrl
     */
    protected baseUrl = 'https://testnet2.gateway.proximax.io/';

    /**
     * RemoteDataHashService constructor
     * @param http  the http client instance
     */
    constructor(http: HttpClient) {
        super(http);
    }

    /**
     * Generates datahash for free form data
     * Example:
     *
     *      generateDatahash(data).subscribe(response => {
     *           const statusCode = response.status; //202 accepted
     *           const header:HttpHeaders = response.headers;
     *           const data = response.body;
     *      });
     *
     * @param data the free form data
     * @returns Observable<any>
     */
    public generateDatahash(data: any): Observable<any> {
        // the endpoint
        const endpoint = this.baseUrl + 'datahash/hash-only';

        // return full http response
        const observe = 'response';

        if (data === null || data === undefined) {
            throw new Error('The data to be hashed is required.');
        }

        // request headers
        const headers = new HttpHeaders({
            // NOTE: Need to disable the content-type in headerfor multipart/form-data.
            // This is a bug from httpClient that prevent the post method to send the form data
            // 'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
        });

        // upload file using multipart/form-data
        const formData = new FormData();
        formData.append('data', <any>data);

        return this.http.post(endpoint, formData, {
            headers: headers,
            observe: observe,
            reportProgress: true
        });

    }
}
