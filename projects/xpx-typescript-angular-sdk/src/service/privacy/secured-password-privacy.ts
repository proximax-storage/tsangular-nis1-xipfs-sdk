import { SecuredCipher } from './secured-cipher';
import { TextEncoder } from 'text-encoding-utf-8';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/fromPromise';

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
 * Class represents SecuredWithPasswordPrivacy
 */
export class SecuredWithPasswordPrivacy {

    /**
     * SecuredCipher provider
     */
    private cipher: SecuredCipher;

    /**
     * Constructor
     * @param password the password
     */
    constructor(password: string) {

        if (password === null || password === undefined) {
            throw new Error('The password is required');
        }

        this.cipher = new SecuredCipher(new TextEncoder().encode(password));
    }

    /**
     * Encrypts raw data
     * @param data the raw data
     * @returns Observable<any>
     */
    public encrypt(data: any): Observable<any> {
        return Observable.fromPromise(this.cipher.encrypt(data));

    }

    /**
     * Decrypts the encrypted data
     * @param data the encrypted data
     * @returns Observable<any>
     */
    public decrypt(data: any): Observable<any> {
        return Observable.fromPromise(this.cipher.decrypt(data));
    }

}
