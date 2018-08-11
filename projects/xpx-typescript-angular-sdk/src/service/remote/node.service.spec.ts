import { TestBed, inject, async } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { RemoteNodeService } from './node.service';
import { GenericResponseMessage } from '../../model/generic-response-message';
import { PROXIMAX_REMOTE_BASE_URL } from '../../model/constants';


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

describe('RemoteNodeServiceTest', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [RemoteNodeService,
                { provide: PROXIMAX_REMOTE_BASE_URL, useValue: "https://testnet2.gateway.proximax.io/" }]
        });
    });

    it('NodeService instance should be created',
        inject([RemoteNodeService], (service: RemoteNodeService) => {
            expect(service).toBeTruthy();
        }));

    it('#checkNode should return the node information',
        async(inject([RemoteNodeService], (service: RemoteNodeService) => {
            expect(service).toBeTruthy();

            service.checkNode().subscribe((response) => {
                console.log(response);
                expect(response.status).toEqual(202);
                const message: GenericResponseMessage = response.body;
                expect(message.message).toBe('alive');
                expect(message.status).toBe('ACCEPTED');

            });

        })));

    it('#getNodeInfo should return the node information',
        async(inject([RemoteNodeService], (service: RemoteNodeService) => {
            expect(service).toBeTruthy();

            service.getNodeInfo().subscribe((response) => {
                // console.log(response);
                expect(response.status).toEqual(202);
                const nodeInfo = response.body;
                expect(nodeInfo.mosaic).toBe('xpx');
                expect(nodeInfo.namespace).toBe('prx');
                expect(nodeInfo.network).toBe('testnet');
                expect(nodeInfo.syncGateways.length > 0).toBe(true);
            });

        })));

    it('#getNodePeers should return the node peers information',
        async(inject([RemoteNodeService], (service: RemoteNodeService) => {
            expect(service).toBeTruthy();

            service.getNodePeer().subscribe((response) => {
                // console.log(response);
                expect(response.status).toEqual(202);

                const nodePeers = response.body;
                // console.log(nodePeers);
                expect(nodePeers.length > 0).toBe(true);
            });

        })));

    it('#setBlockchainConnection should return the message information',
        async(inject([RemoteNodeService], (service: RemoteNodeService) => {
            expect(service).toBeTruthy();
            const network = 'testnet';
            const domain = 'proximax.io';
            const port = '2455';
            service.setBlockchainConnection(network, domain, port).subscribe((response) => {
                console.log(response);
                expect(response.status).toEqual(202);

                const message = response.body;

                // console.log(nodePeers);
                expect(message.status).toBe('ACCEPTED');
            });

        })));
});
