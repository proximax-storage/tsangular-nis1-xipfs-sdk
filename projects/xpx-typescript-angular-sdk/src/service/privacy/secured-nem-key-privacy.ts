const nem = require('nem-sdk').default;

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
 * Class represents Secured With Nem Key Privacy Strategy
 */
export class SecuredWithNemKeyPrivacy {

    /**
     * The private key
     */
    private pvKey: string;

    /**
     * The public key
     */
    private pubKey: string;

    /**
     * Constructor
     * @param pvKey the Nem private key
     * @param pubKey the Nem public key
     */
    constructor(pvKey: string, pubKey: string) {
        this.pvKey = pvKey;
        this.pubKey = pubKey;
    }

    /**
     * Encrypt the data based on sender private key and recipient public key
     * @param data the input data
     * @returns encrypted data
     */
    public encrypt(data: any) {
        return nem.crypto.helpers.encode(this.pvKey, this.pubKey, data);
    }

    /**
     * Decrupt the data based on recipient private key and sender public key
     * @param data the input data
     * @returns decrypted data
     */
    public decrypt(data: any) {
        return nem.crypto.helpers.decode(this.pvKey, this.pubKey, data);
    }
}
