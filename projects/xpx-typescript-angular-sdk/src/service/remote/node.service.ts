import { HttpService } from '../http.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NodeInfo } from '../../model/node-info';
import { NodePeer } from '../../model/node-peer';
import { GenericResponseMessage } from '../../model/generic-response-message';
import { CustomHttpEncoder } from '../../model/custom-http-encoder';

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
 * Class represents the RemoteNodeService
 */
@Injectable({
    providedIn: 'root'
})
export class RemoteNodeService extends HttpService {

    /**
     * The default baseUrl
     */
    protected baseUrl = 'https://testnet2.gateway.proximax.io/';

    /**
     * NodeService constructor
     * @param  http the http client instance
     */
    constructor(http: HttpClient) {
        super(http);
    }


    /**
     * Check node information
     * Example:
     *
     *      checkNode().subscribe(response => {
     *          let message: GenericResponseMessage = response.body;
     *      });
     *
     * @returns  Observable<any>
     */
    public checkNode(): Observable<any> {
        const endpoint = this.baseUrl + 'node/check';

        // request headers
        const headers = new HttpHeaders({
            'Accept': 'application/json'
        });

        // return full repsonse
        const observe = 'response';

        return this.http.get<GenericResponseMessage>(endpoint, {
            headers: headers,
            observe: observe,
            reportProgress: true
        });
    }

    /**
     * Get the node information
     * Example:
     *
     *      getNodeInfo().subscribe(response => {
     *          let nodeInfo: NodeInfo = response.body;
     *      });
     *
     * @returns  Observable<any>
     */
    public getNodeInfo(): Observable<any> {
        const endpoint = this.baseUrl + 'node/info';

        // request headers
        const headers = new HttpHeaders({
            'Accept': 'application/json'
        });

        // return full repsonse
        const observe = 'response';

        return this.http.get<NodeInfo>(endpoint, {
            headers: headers,
            observe: observe,
            reportProgress: true
        });
    }

    /**
     * Get the node peer information
     * Example:
     *
     *      getNodePeer().subscribe(response => {
     *          let NodePeers: NodePeer[] = response.body;
     *      });
     *
     * @returns  Observable<any>
     */
    public getNodePeer(): Observable<any> {
        const endpoint = this.baseUrl + 'node/info/peers';

        // request headers
        const headers = new HttpHeaders({
            'Accept': 'application/json'
        });

        // return full repsonse
        const observe = 'response';

        return this.http.get<NodePeer[]>(endpoint, {
            headers: headers,
            observe: observe,
            reportProgress: true
        });

    }

    /**
     * Set the blockchain connection
     * Example:
     *
     *      setBlockchainConnection(network,domain,port).subscribe(response => {
     *          let NodePeers: NodePeer[] = response.body;
     *      });
     *
     * @param  network the network name or ip address
     * @param  domain the network domain
     * @param  port the network port
     * @returns   Observable<any>
     */
    public setBlockchainConnection(network: string, domain: string, port: string): Observable<any> {
        const endpoint = this.baseUrl + 'node/set/blockchain/connection';

        // request headers
        const headers = new HttpHeaders({
            'Accept': 'application/json'
        });

        // return full repsonse
        const observe = 'response';

        let queryParams = new HttpParams({ encoder: new CustomHttpEncoder() });
        if (network !== null) {
            queryParams = queryParams.set('network', network);
        }

        if (domain !== null) {
            queryParams = queryParams.set('domain', domain);
        }

        if (port !== null) {
            queryParams = queryParams.set('port', port);
        }
        return this.http.post<GenericResponseMessage>(endpoint, null, {
            headers: headers,
            params: queryParams,
            observe: observe,
            reportProgress: true
        });
    }
}
