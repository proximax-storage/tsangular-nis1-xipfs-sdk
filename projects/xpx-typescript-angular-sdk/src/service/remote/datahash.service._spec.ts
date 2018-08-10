import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RemoteDataHashService } from './datahash.service';

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

describe('RemoteDataHashServiceTest', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [RemoteDataHashService]
        });
    });

    it('RemoteDataHashService instance should be created',
        inject([RemoteDataHashService], (service: RemoteDataHashService) => {
            expect(service).toBeTruthy();
        }));

    it('#generateDatahash should return hash',
        inject([RemoteDataHashService], (service: RemoteDataHashService) => {
            expect(service).toBeTruthy();

            const data = 'Proximax RemoteDataHashService';

            const byteArray = [];
            for (let i = 0; i < data.length; i++) {
                byteArray.push(data.charCodeAt(i));
            }

            service.generateDatahash(byteArray).subscribe(response => {
                console.log(response);
                expect(response.status).toBe(202);
                const body = response.body;
                console.log(body);
            }, err => {
                console.log(err);
                expect(err).toBe(null);
            });

        }));
});
