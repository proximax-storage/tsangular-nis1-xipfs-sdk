/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.utils {
    /**
     * The Class CryptoUtil.
     * @class
     */
    export class CryptoUtils {
        /**
         * Encrypt.
         * 
         * @param {Array} binary the binary
         * @param {Array} password the password
         * @return {Array} the byte[]
         * @throws InvalidKeyException the invalid key exception
         * @throws InvalidKeySpecException the invalid key spec exception
         * @throws NoSuchAlgorithmException the no such algorithm exception
         * @throws NoSuchPaddingException the no such padding exception
         * @throws InvalidAlgorithmParameterException the invalid algorithm parameter exception
         * @throws IllegalBlockSizeException the illegal block size exception
         * @throws BadPaddingException the bad padding exception
         */
        public static encrypt(binary : number[], password : string[]) : number[] {
            let basicBinaryEncryptor : io.nem.xpx.adapters.cipher.BinaryPBKDF2CipherEncryption = new io.nem.xpx.adapters.cipher.BinaryPBKDF2CipherEncryption();
            return basicBinaryEncryptor.encrypt(binary, password);
        }

        /**
         * Encrypt to base 64 string.
         * 
         * @param {Array} binary the binary
         * @param {Array} password the password
         * @return {string} the string
         * @throws InvalidKeyException the invalid key exception
         * @throws InvalidKeySpecException the invalid key spec exception
         * @throws NoSuchAlgorithmException the no such algorithm exception
         * @throws NoSuchPaddingException the no such padding exception
         * @throws InvalidAlgorithmParameterException the invalid algorithm parameter exception
         * @throws IllegalBlockSizeException the illegal block size exception
         * @throws BadPaddingException the bad padding exception
         */
        public static encryptToBase64String(binary : number[], password : string[]) : string {
            let basicBinaryEncryptor : io.nem.xpx.adapters.cipher.BinaryPBKDF2CipherEncryption = new io.nem.xpx.adapters.cipher.BinaryPBKDF2CipherEncryption();
            return basicBinaryEncryptor.encryptToBase64String(binary, password);
        }

        /**
         * Decrypt.
         * 
         * @param {Array} binary the binary
         * @param {Array} password the password
         * @return {Array} the byte[]
         * @throws InvalidKeyException the invalid key exception
         * @throws InvalidAlgorithmParameterException the invalid algorithm parameter exception
         * @throws IllegalBlockSizeException the illegal block size exception
         * @throws BadPaddingException the bad padding exception
         * @throws InvalidKeySpecException the invalid key spec exception
         * @throws NoSuchAlgorithmException the no such algorithm exception
         * @throws NoSuchPaddingException the no such padding exception
         */
        public static decrypt(binary : number[], password : string[]) : number[] {
            let basicBinaryEncryptor : io.nem.xpx.adapters.cipher.BinaryPBKDF2CipherEncryption = new io.nem.xpx.adapters.cipher.BinaryPBKDF2CipherEncryption();
            return basicBinaryEncryptor.decrypt$byte_A$char_A(binary, password);
        }

        public static decryptToBase64String$byte_A$char_A(binary : number[], password : string[]) : string {
            let basicBinaryEncryptor : io.nem.xpx.adapters.cipher.BinaryPBKDF2CipherEncryption = new io.nem.xpx.adapters.cipher.BinaryPBKDF2CipherEncryption();
            return basicBinaryEncryptor.decryptToBase64String$byte_A$char_A(binary, password);
        }

        /**
         * Decrypt to base 64 string.
         * 
         * @param {Array} binary the binary
         * @param {Array} password the password
         * @return {string} the string
         * @throws InvalidKeyException the invalid key exception
         * @throws InvalidAlgorithmParameterException the invalid algorithm parameter exception
         * @throws IllegalBlockSizeException the illegal block size exception
         * @throws BadPaddingException the bad padding exception
         * @throws InvalidKeySpecException the invalid key spec exception
         * @throws NoSuchAlgorithmException the no such algorithm exception
         * @throws NoSuchPaddingException the no such padding exception
         */
        public static decryptToBase64String(binary? : any, password? : any) : any {
            if(((binary != null && binary instanceof <any>Array && (binary.length==0 || binary[0] == null ||(typeof binary[0] === 'number'))) || binary === null) && ((password != null && password instanceof <any>Array && (password.length==0 || password[0] == null ||(typeof password[0] === 'string'))) || password === null)) {
                return <any>io.nem.xpx.utils.CryptoUtils.decryptToBase64String$byte_A$char_A(binary, password);
            } else if(((typeof binary === 'string') || binary === null) && ((password != null && password instanceof <any>Array && (password.length==0 || password[0] == null ||(typeof password[0] === 'string'))) || password === null)) {
                return <any>io.nem.xpx.utils.CryptoUtils.decryptToBase64String$java_lang_String$char_A(binary, password);
            } else throw new Error('invalid overload');
        }

        public static decryptToBase64String$java_lang_String$char_A(cipherEncryptedText : string, password : string[]) : string {
            let basicBinaryEncryptor : io.nem.xpx.adapters.cipher.BinaryPBKDF2CipherEncryption = new io.nem.xpx.adapters.cipher.BinaryPBKDF2CipherEncryption();
            return basicBinaryEncryptor.decryptToBase64String$java_lang_String$char_A(cipherEncryptedText, password);
        }
    }
    CryptoUtils["__class"] = "io.nem.xpx.utils.CryptoUtils";

}

