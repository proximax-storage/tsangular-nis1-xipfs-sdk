/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.utils {
    /**
     * The Class KeyUtils.
     * @class
     */
    export class KeyUtils {
        /**
         * get address from private key.
         * 
         * @param {string} privateKeyString the private key string
         * @return {string} the address from private key
         */
        public static getAddressFromPrivateKey(privateKeyString : string) : string {
            let privateKey : org.nem.core.crypto.PrivateKey = org.nem.core.crypto.PrivateKey.fromHexString(privateKeyString);
            let keyPair : org.nem.core.crypto.KeyPair = new org.nem.core.crypto.KeyPair(privateKey);
            return org.nem.core.model.Address.fromPublicKey(keyPair.getPublicKey()).toString();
        }

        /**
         * get public key from private key.
         * 
         * @param {string} privateKeyString the private key string
         * @return {string} the public from private key
         */
        public static getPublicFromPrivateKey(privateKeyString : string) : string {
            let privateKey : org.nem.core.crypto.PrivateKey = org.nem.core.crypto.PrivateKey.fromHexString(privateKeyString);
            let keyPair : org.nem.core.crypto.KeyPair = new org.nem.core.crypto.KeyPair(privateKey);
            return keyPair.getPublicKey().toString();
        }

        /**
         * get address from public key.
         * 
         * @param {string} publicKeyString the public key string
         * @return {string} the address from public key
         */
        public static getAddressFromPublicKey(publicKeyString : string) : string {
            let publicKey : org.nem.core.crypto.PublicKey = org.nem.core.crypto.PublicKey.fromHexString(publicKeyString);
            let address : org.nem.core.model.Address = org.nem.core.model.Address.fromPublicKey(publicKey);
            return address.toString();
        }
    }
    KeyUtils["__class"] = "io.nem.xpx.utils.KeyUtils";

}

