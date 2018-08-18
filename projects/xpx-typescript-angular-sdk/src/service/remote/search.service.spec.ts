import { TestBed, inject, async } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { RemoteSearchService } from './search.service';
import { ResourceHashMessage } from '../../model/resource-hash-message';

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

describe('RemoteSearchServiceTest', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [RemoteSearchService]
        });
    });


    it('RemoteSearchService instance should be created',
        inject([RemoteSearchService], (service: RemoteSearchService) => {
            expect(service).toBeTruthy();
        }));

    it('#seachByKeywords should return the resource message hash array',
        async(inject([RemoteSearchService], (service: RemoteSearchService) => {
            expect(service).toBeTruthy();
            const keywords = 'test';
            const pubKey = '3be53ccd491d878d7d2a8696ab0a1662ea9644388b81249fccdc921305336190';

            service.seachByKeywords(pubKey, keywords).subscribe((response) => {
                console.log(response);
                expect(response.status).toEqual(202);
                const resoures: Array<ResourceHashMessage> = response.body;
                expect(resoures.length >= 0).toBe(true);
            });

        })));

    it('#seachByName should return the resource message hash array',
        async(inject([RemoteSearchService], (service: RemoteSearchService) => {
            expect(service).toBeTruthy();
            const name = 'test';
            const pubKey = '3be53ccd491d878d7d2a8696ab0a1662ea9644388b81249fccdc921305336190';

            service.seachByName(pubKey, name).subscribe((response) => {
                console.log(response);
                expect(response.status).toEqual(202);
                const resoures: Array<ResourceHashMessage> = response.body;
                expect(resoures.length >= 0).toBe(true);
            });

        })));

    it('#seachByMetadata should return the resource message hash array',
        async(inject([RemoteSearchService], (service: RemoteSearchService) => {
            expect(service).toBeTruthy();
            const key = 'test';
            const value = 'test';
            const pubKey = '3be53ccd491d878d7d2a8696ab0a1662ea9644388b81249fccdc921305336190';

            service.seachByMetadata(pubKey, key, value).subscribe((response) => {
                console.log(response);
                expect(response.status).toEqual(202);
                const resoures: Array<ResourceHashMessage> = response.body;
                expect(resoures.length >= 0).toBe(true);
            });

        })));
});
