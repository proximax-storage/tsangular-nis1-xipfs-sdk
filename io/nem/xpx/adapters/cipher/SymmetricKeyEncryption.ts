/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.adapters.cipher {
    /**
     * The Class SymmetricKeyEncryption.
     * @class
     */
    export abstract class SymmetricKeyEncryption implements io.nem.xpx.adapters.cipher.CustomEncryption {
        /**
         * Encrypt.
         * 
         * @param {Array} data the data
         * @param {Array} key the key
         * @return {Array} the byte[]
         * @throws InvalidKeySpecException the invalid key spec exception
         * @throws NoSuchAlgorithmException the no such algorithm exception
         * @throws NoSuchPaddingException the no such padding exception
         * @throws InvalidKeyException the invalid key exception
         * @throws InvalidAlgorithmParameterException the invalid algorithm parameter exception
         * @throws IllegalBlockSizeException the illegal block size exception
         * @throws BadPaddingException the bad padding exception
         */
        public abstract encrypt(data : number[], key : string[]) : number[];

        /**
         * Decrypt.
         * 
         * @param {Array} data the data
         * @param {Array} key the key
         * @return {Array} the byte[]
         * @throws InvalidKeyException the invalid key exception
         * @throws InvalidAlgorithmParameterException the invalid algorithm parameter exception
         * @throws IllegalBlockSizeException the illegal block size exception
         * @throws BadPaddingException the bad padding exception
         * @throws InvalidKeySpecException the invalid key spec exception
         * @throws NoSuchAlgorithmException the no such algorithm exception
         * @throws NoSuchPaddingException the no such padding exception
         */
        public abstract decrypt(data : number[], key : string[]) : number[];

        constructor() {
        }
    }
    SymmetricKeyEncryption["__class"] = "io.nem.xpx.adapters.cipher.SymmetricKeyEncryption";
    SymmetricKeyEncryption["__interfaces"] = ["io.nem.xpx.adapters.cipher.CustomEncryption"];


}

