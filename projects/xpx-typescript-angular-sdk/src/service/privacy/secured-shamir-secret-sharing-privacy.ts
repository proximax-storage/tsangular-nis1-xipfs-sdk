import { TextEncoder, TextDecoder } from 'text-encoding-utf-8';
import { SecuredCipher } from './secured-cipher';
import { Observable, from} from 'rxjs';
const crypto = require('secrets.js-grempe');

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
 * Class represents SecuredWithShamirSecretSharingPrivacy
 */
export class SecuredWithShamirSecretSharingPrivacy {

    /**
     * SecuredCipher provider
     */
    private cipher: SecuredCipher;

    /**
     * Constructor
     * @param hexSecretParts the array of secret parts in hex
     */
    constructor(hexSecretParts: Array<string>) {

        if (hexSecretParts === null || hexSecretParts.length <= 0) {
            throw new Error('List of secret parts in hex string is required');
        }

        // combine secretParts
        const secret = crypto.combine(hexSecretParts);
        const secretPart = new TextEncoder().encode(secret);
        this.cipher = new SecuredCipher(secretPart);
    }

    /**
     * Create shares from the secret
     * @param secret the secret in string
     * @param numShares the number of shares to compute
     * @param threshold the number of shares requires to reconstruct the secret
     * @returns Array<string>
     */
    public static createShares(secret: string, numShares: number, threshold: number): Array<string> {

        const hexSecret = crypto.str2hex(secret);
        return crypto.share(hexSecret, numShares, threshold);
    }

    /**
     * Combine shares to reconstruct the secret
     * @param hexSecretParts the array of secret parts in hex
     * @return the hex string
     */
    public static combineShares(hexSecretParts: Array<string>): string {
        return crypto.combine(hexSecretParts);

    }

    /**
     * Convert hex to string
     * @param hex the hex string
     * @returns the hex in string format
     */
    public static hexToString(hex): string {
        return crypto.str2hex(hex);
    }


    /**
    * Encrypts raw data
    * @param data the raw data
    * @returns Observable<any>
    */
    public encrypt(data: any): Observable<any> {
        return from(this.cipher.encrypt(data));
    }

    /**
     * Decrypts the encrypted data
     * @param data the encrypted data
     * @returns Observable<any>
     */
    public decrypt(data: any): Observable<any> {
        return from(this.cipher.decrypt(data));
    }
}
