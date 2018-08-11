import { Injectable, Optional, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TransferMode } from '../../model/transfer-mode';
import { Observable } from 'rxjs';
import { CustomHttpEncoder } from '../../model/custom-http-encoder';
import { GenericResponseMessage } from '../../model/generic-response-message';
import { REMOTE_BASE_URL } from '../../model/constants';

/*
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
 * Class represents remote download service
 */
@Injectable({
    providedIn: 'root'
})
export class RemoteDownloadService {

    /**
     * The default baseUrl
     */
    protected baseUrl = 'https://testnet2.gateway.proximax.io/';

    /**
    * RemoteDownloadService constructor
    * @param http the HttpClient instance
    * @param baseUrl the optional baseUrl
    */
    constructor(private http: HttpClient, @Optional() @Inject(REMOTE_BASE_URL) baseUrl: string) {
        if (baseUrl) {
            this.baseUrl = baseUrl;
        }
    }


    /**
     * Download the binary file associated to a NEM Hash.
     * If NEM Hash uses SECURE Message, it returns the NEM TXN Payload Instead
     * Example:
     *
     *      downloadBinary(hash,transferMode).subscribe(response => {
     *           const statusCode = response.status; //202 accepted
     *           const header:HttpHeaders = response.headers;
     *           const data = response.body;
     *      });
     *
     * @param  hash the NEM hash
     * @param  transferMode the transfer mode either Bytes, Stream or Base64
     * @returns  Observable<any>
     */
    public downloadBinary(hash: string, transferMode: TransferMode): Observable<any> {
        // request endpoint
        const endpoint = this.baseUrl + 'download/binary';

        if (hash === null || hash === undefined) {
            throw new Error('The hash is required');
        }

        // return response type
        const responseType = 'blob';

        // return full http response
        const observe = 'response';

        // request headers
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        let queryParams = new HttpParams({ encoder: new CustomHttpEncoder() });
        if (hash !== null) {
            queryParams = queryParams.set('nemHash', hash);
        }

        if (transferMode !== null) {
            queryParams = queryParams.set('transferMode', transferMode.toLowerCase());
        }

        return this.http.get(endpoint, {
            responseType: responseType,
            headers: headers,
            params: queryParams,
            reportProgress: true,
            observe: observe
        });
    }

    /**
    * Download the text file associated to a NEM Hash. If NEM Hash uses SECURE Message,
    * it returns the NEM TXN Payload Instead
    * Example:
    *
    *      downloadText(hash,transferMode).subscribe(response => {
    *           const statusCode = response.status; //202 accepted
    *           const header:HttpHeaders = response.headers;
    *           const data = response.body;
    *      });
    *
    * @param  hash the NEM hash
    * @param  transferMode the transfer mode either Bytes, Stream or Base64
    * @returns Observable<any>
    */
    public downloadText(hash: string, transferMode: TransferMode): Observable<any> {
        // request endpoint
        const endpoint = this.baseUrl + 'download/text';

        if (hash === null || hash === undefined) {
            throw new Error('The hash is required');
        }

        // return response type
        const responseType = 'blob';

        // return full http response
        const observe = 'response';


        // request headers
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        let queryParams = new HttpParams({ encoder: new CustomHttpEncoder() });
        if (hash !== null) {
            queryParams = queryParams.set('nemHash', hash);
        }

        if (transferMode !== null) {
            queryParams = queryParams.set('transferMode', transferMode.toLowerCase());
        }

        return this.http.get(endpoint, {
            responseType: responseType,
            headers: headers,
            params: queryParams,
            reportProgress: true,
            observe: observe
        });
    }

    /**
     * Download the binary file associated to a NEM Hash. If NEM Hash uses SECURE Message, it returns the NEM TXN Payload Instead
     * Example:
     *
     *      downloadSecureBinary(pvkey,hash,transferMode).subscribe(response => {
     *           const statusCode = response.status; //202 accepted
     *           const header:HttpHeaders = response.headers;
     *           const data = response.body;
     *      });
     *
     * @param  pvkey the private key
     * @param  hash the NEM hash
     * @param  transferMode the transfer mode either Bytes, Stream or Base64
     * @returns  Observable<any>
     */
    public downloadSecureBinary(pvkey: string, hash: string, transferMode: TransferMode): Observable<any> {
        // request endpoint
        const endpoint = this.baseUrl + 'download/secure/binary';

        if (pvkey === null || pvkey === undefined) {
            throw new Error('The private key is required for signing and announcing to the network.');
        }

        if (hash === null || hash === undefined) {
            throw new Error('The hash is required');
        }

        // return response type
        const responseType = 'blob';

        // return full http response
        const observe = 'response';


        // request headers
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'x-pvkey': pvkey,
        });

        let queryParams = new HttpParams({ encoder: new CustomHttpEncoder() });
        if (hash !== null) {
            queryParams = queryParams.set('nemHash', hash);
        }

        if (transferMode !== null) {
            queryParams = queryParams.set('transferType', transferMode.toLowerCase());
        }

        return this.http.get(endpoint, {
            responseType: responseType,
            headers: headers,
            params: queryParams,
            reportProgress: true,
            observe: observe
        });
    }

    /**
     * Download data associated to a IPFS Hash.
     * Example:
     *
     *     downloadSecureFile(pvkey,hash,transferMode).subscribe(response => {
     *           const statusCode = response.status; //202 accepted
     *           const header:HttpHeaders = response.headers;
     *           const data = response.body;
     *      });
     *
     * @param  pvkey the private key
     * @param  hash the NEM hash
     * @param  transferMode the transfer mode either Bytes, Stream or Base64
     * @returns  Observable<any>
     */
    public downloadSecureFile(pvkey: string, hash: string, transferMode: TransferMode): Observable<any> {
        // request endpoint
        const endpoint = this.baseUrl + 'download/secure/file';

        if (pvkey === null || pvkey === undefined) {
            throw new Error('The private key is required for signing and announcing to the network.');
        }

        if (hash === null || hash === undefined) {
            throw new Error('The hash is required');
        }

        // return response type
        const responseType = 'blob';

        // return full http response
        const observe = 'response';


        // request headers
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'x-pvkey': pvkey,
        });

        let queryParams = new HttpParams({ encoder: new CustomHttpEncoder() });
        if (hash !== null) {
            queryParams = queryParams.set('nemHash', hash);
        }

        if (transferMode !== null) {
            queryParams = queryParams.set('transferType', transferMode.toLowerCase());
        }

        return this.http.get(endpoint, {
            responseType: responseType,
            headers: headers,
            params: queryParams,
            reportProgress: true,
            observe: observe
        });
    }

    /**
     * Download the data  associated to a NEM Hash.
     * Example:
     *
     *     downloadDirectNemhash(hash).subscribe(response => {
     *           const statusCode = response.status; //202 accepted
     *           const header:HttpHeaders = response.headers;
     *           const data = response.body;
     *      });
     *
     * @param  nemhash the NEM hash
     * @returns  Observable<any>
     */
    public downloadDirectNemhash(nemhash: string): Observable<any> {
        // request endpoint
        const endpoint = this.baseUrl + 'download/direct/nemHash';


        if (nemhash === null || nemhash === undefined) {
            throw new Error('The hash is required');
        }

        // request headers
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': '*/*'
        });

        // create url path based on the endpoint
        const urlPath = endpoint + '/' + encodeURIComponent(nemhash);

        // return full http response
        const observe = 'response';

        return this.http.get<GenericResponseMessage>(urlPath, {
            responseType: 'json',
            headers: headers,
            observe: observe,
            reportProgress: true
        });

    }

    /**
    * Download the data from Datahash.
    * Example:
    *
    *     downloadDirectDatahash(hash).subscribe(response => {
    *           const statusCode = response.status; //202 accepted
    *           const header:HttpHeaders = response.headers;
    *           const data = response.body;
    *      });
    *
    * @param  hash the NEM hash
    * @returns  Observable<any>
    */
    public downloadDirectDatahash(dataHash: string): Observable<any> {
        // request endpoint
        const endpoint = this.baseUrl + 'download/direct/datahash';

        if (dataHash === null || dataHash === undefined) {
            throw new Error('The hash is required');
        }

        // return response type
        const responseType = 'blob';

        // return full http response
        const observe = 'response';

        // request headers
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': '*/*'
        });

        // create url path based on the endpoint
        const path = endpoint + '/' + encodeURIComponent(dataHash);
        // let queryParams = new HttpParams({ encoder: new CustomHttpEncoder() });
        // if (dataHash !== null) {
        //     queryParams = queryParams.set('dataHash', dataHash);
        // }

        // console.log(queryParams);

        return this.http.get(path, {
            responseType: responseType,
            headers: headers,
            //    params: queryParams,
            observe: observe,
            reportProgress: true
        });

    }
}
