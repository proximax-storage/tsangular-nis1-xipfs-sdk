/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.adapters.cipher {
    /**
     * The Class BinaryPBKDF2Cipher.
     * @class
     * @extends io.nem.xpx.adapters.cipher.SymmetricKeyEncryption
     */
    export class BinaryPBKDF2CipherEncryption extends io.nem.xpx.adapters.cipher.SymmetricKeyEncryption {
        /**
         * The Constant CONST_ALGO_PBKDF2.
         */
        static CONST_ALGO_PBKDF2 : string = "PBKDF2WithHmacSHA256";

        /**
         * The Constant SALT.
         */
        static SALT : number[]; public static SALT_$LI$() : number[] { if(BinaryPBKDF2CipherEncryption.SALT == null) BinaryPBKDF2CipherEncryption.SALT = [(<number>169|0), (<number>155|0), (<number>200|0), (<number>50|0), (<number>86|0), (<number>53|0), (<number>227|0), (<number>3|0)]; return BinaryPBKDF2CipherEncryption.SALT; };

        /**
         * The Constant FIXED_NONCE.
         */
        static FIXED_NONCE : number[]; public static FIXED_NONCE_$LI$() : number[] { if(BinaryPBKDF2CipherEncryption.FIXED_NONCE == null) BinaryPBKDF2CipherEncryption.FIXED_NONCE = [(<number>169|0), (<number>155|0), (<number>200|0), (<number>50|0), (<number>86|0), (<number>53|0), (<number>227|0), (<number>3|0)]; return BinaryPBKDF2CipherEncryption.FIXED_NONCE; };

        /**
         * Encrypt.
         * 
         * @param {Array} binary the binary
         * @param {Array} password the password
         * @return {Array} the byte[]
         * @throws InvalidKeySpecException the invalid key spec exception
         * @throws NoSuchAlgorithmException the no such algorithm exception
         * @throws NoSuchPaddingException the no such padding exception
         * @throws InvalidKeyException the invalid key exception
         * @throws InvalidAlgorithmParameterException the invalid algorithm parameter exception
         * @throws IllegalBlockSizeException the illegal block size exception
         * @throws BadPaddingException the bad padding exception
         */
        public encrypt(binary : number[], password : string[]) : number[] {
            let factory : javax.crypto.SecretKeyFactory = javax.crypto.SecretKeyFactory.getInstance(BinaryPBKDF2CipherEncryption.CONST_ALGO_PBKDF2);
            let keyspec : java.security.spec.KeySpec = new javax.crypto.spec.PBEKeySpec(password, BinaryPBKDF2CipherEncryption.SALT_$LI$(), 65536, 128);
            let tmp : javax.crypto.SecretKey = factory.generateSecret(keyspec);
            let key : javax.crypto.SecretKey = new javax.crypto.spec.SecretKeySpec(tmp.getEncoded(), "AES");
            let cipher : javax.crypto.Cipher = javax.crypto.Cipher.getInstance("AES/GCM/NoPadding");
            let spec : javax.crypto.spec.GCMParameterSpec = new javax.crypto.spec.GCMParameterSpec(16 * 8, BinaryPBKDF2CipherEncryption.FIXED_NONCE_$LI$());
            cipher.init(javax.crypto.Cipher.ENCRYPT_MODE, key, spec);
            let byteCipher : number[] = cipher.doFinal(binary);
            return byteCipher;
        }

        /**
         * Encrypt to base 64 string.
         * 
         * @param {Array} binary the binary
         * @param {Array} password the password
         * @return {string} the string
         * @throws InvalidKeySpecException the invalid key spec exception
         * @throws NoSuchAlgorithmException the no such algorithm exception
         * @throws NoSuchPaddingException the no such padding exception
         * @throws InvalidKeyException the invalid key exception
         * @throws InvalidAlgorithmParameterException the invalid algorithm parameter exception
         * @throws IllegalBlockSizeException the illegal block size exception
         * @throws BadPaddingException the bad padding exception
         */
        public encryptToBase64String(binary : number[], password : string[]) : string {
            let factory : javax.crypto.SecretKeyFactory = javax.crypto.SecretKeyFactory.getInstance(BinaryPBKDF2CipherEncryption.CONST_ALGO_PBKDF2);
            let keyspec : java.security.spec.KeySpec = new javax.crypto.spec.PBEKeySpec(password, BinaryPBKDF2CipherEncryption.SALT_$LI$(), 65536, 128);
            let tmp : javax.crypto.SecretKey = factory.generateSecret(keyspec);
            let key : javax.crypto.SecretKey = new javax.crypto.spec.SecretKeySpec(tmp.getEncoded(), "AES");
            let cipher : javax.crypto.Cipher = javax.crypto.Cipher.getInstance("AES/GCM/NoPadding");
            let spec : javax.crypto.spec.GCMParameterSpec = new javax.crypto.spec.GCMParameterSpec(16 * 8, BinaryPBKDF2CipherEncryption.FIXED_NONCE_$LI$());
            cipher.init(javax.crypto.Cipher.ENCRYPT_MODE, key, spec);
            let byteCipher : number[] = cipher.doFinal(binary);
            let cipherText : string = String.fromCharCode.apply(null, java.util.Base64.getEncoder().encode(byteCipher));
            return cipherText;
        }

        public decrypt$java_lang_String$char_A(encodedCipherText : string, password : string[]) : number[] {
            let factory : javax.crypto.SecretKeyFactory = javax.crypto.SecretKeyFactory.getInstance(BinaryPBKDF2CipherEncryption.CONST_ALGO_PBKDF2);
            let keyspec : java.security.spec.KeySpec = new javax.crypto.spec.PBEKeySpec(password, BinaryPBKDF2CipherEncryption.SALT_$LI$(), 65536, 128);
            let tmp : javax.crypto.SecretKey = factory.generateSecret(keyspec);
            let key : javax.crypto.SecretKey = new javax.crypto.spec.SecretKeySpec(tmp.getEncoded(), "AES");
            let cipher : javax.crypto.Cipher = javax.crypto.Cipher.getInstance("AES/GCM/NoPadding");
            let spec : javax.crypto.spec.GCMParameterSpec = new javax.crypto.spec.GCMParameterSpec(16 * 8, BinaryPBKDF2CipherEncryption.FIXED_NONCE_$LI$());
            cipher.init(javax.crypto.Cipher.DECRYPT_MODE, key, spec);
            let decryptedCipher : number[] = cipher.doFinal(java.util.Base64.getDecoder().decode(encodedCipherText));
            return decryptedCipher;
        }

        /**
         * Decrypt.
         * 
         * @param {string} encodedCipherText the encoded cipher text
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
        public decrypt(encodedCipherText? : any, password? : any) : any {
            if(((typeof encodedCipherText === 'string') || encodedCipherText === null) && ((password != null && password instanceof <any>Array && (password.length==0 || password[0] == null ||(typeof password[0] === 'string'))) || password === null)) {
                return <any>this.decrypt$java_lang_String$char_A(encodedCipherText, password);
            } else if(((encodedCipherText != null && encodedCipherText instanceof <any>Array && (encodedCipherText.length==0 || encodedCipherText[0] == null ||(typeof encodedCipherText[0] === 'number'))) || encodedCipherText === null) && ((password != null && password instanceof <any>Array && (password.length==0 || password[0] == null ||(typeof password[0] === 'string'))) || password === null)) {
                return <any>this.decrypt$byte_A$char_A(encodedCipherText, password);
            } else throw new Error('invalid overload');
        }

        public decryptToBase64String$java_lang_String$char_A(encodedCipherText : string, password : string[]) : string {
            let factory : javax.crypto.SecretKeyFactory = javax.crypto.SecretKeyFactory.getInstance(BinaryPBKDF2CipherEncryption.CONST_ALGO_PBKDF2);
            let keyspec : java.security.spec.KeySpec = new javax.crypto.spec.PBEKeySpec(password, BinaryPBKDF2CipherEncryption.SALT_$LI$(), 65536, 128);
            let tmp : javax.crypto.SecretKey = factory.generateSecret(keyspec);
            let key : javax.crypto.SecretKey = new javax.crypto.spec.SecretKeySpec(tmp.getEncoded(), "AES");
            let cipher : javax.crypto.Cipher = javax.crypto.Cipher.getInstance("AES/GCM/NoPadding");
            let spec : javax.crypto.spec.GCMParameterSpec = new javax.crypto.spec.GCMParameterSpec(16 * 8, BinaryPBKDF2CipherEncryption.FIXED_NONCE_$LI$());
            cipher.init(javax.crypto.Cipher.DECRYPT_MODE, key, spec);
            let decryptedCipher : number[] = cipher.doFinal(java.util.Base64.getDecoder().decode(encodedCipherText));
            let decryptedCipherText : string = String.fromCharCode.apply(null, decryptedCipher);
            return decryptedCipherText;
        }

        /**
         * Decrypt to base 64 string.
         * 
         * @param {string} encodedCipherText the encoded cipher text
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
        public decryptToBase64String(encodedCipherText? : any, password? : any) : any {
            if(((typeof encodedCipherText === 'string') || encodedCipherText === null) && ((password != null && password instanceof <any>Array && (password.length==0 || password[0] == null ||(typeof password[0] === 'string'))) || password === null)) {
                return <any>this.decryptToBase64String$java_lang_String$char_A(encodedCipherText, password);
            } else if(((encodedCipherText != null && encodedCipherText instanceof <any>Array && (encodedCipherText.length==0 || encodedCipherText[0] == null ||(typeof encodedCipherText[0] === 'number'))) || encodedCipherText === null) && ((password != null && password instanceof <any>Array && (password.length==0 || password[0] == null ||(typeof password[0] === 'string'))) || password === null)) {
                return <any>this.decryptToBase64String$byte_A$char_A(encodedCipherText, password);
            } else throw new Error('invalid overload');
        }

        public decrypt$byte_A$char_A(binary : number[], password : string[]) : number[] {
            let factory : javax.crypto.SecretKeyFactory = javax.crypto.SecretKeyFactory.getInstance(BinaryPBKDF2CipherEncryption.CONST_ALGO_PBKDF2);
            let keyspec : java.security.spec.KeySpec = new javax.crypto.spec.PBEKeySpec(password, BinaryPBKDF2CipherEncryption.SALT_$LI$(), 65536, 128);
            let tmp : javax.crypto.SecretKey = factory.generateSecret(keyspec);
            let key : javax.crypto.SecretKey = new javax.crypto.spec.SecretKeySpec(tmp.getEncoded(), "AES");
            let cipher : javax.crypto.Cipher = javax.crypto.Cipher.getInstance("AES/GCM/NoPadding");
            let spec : javax.crypto.spec.GCMParameterSpec = new javax.crypto.spec.GCMParameterSpec(16 * 8, BinaryPBKDF2CipherEncryption.FIXED_NONCE_$LI$());
            cipher.init(javax.crypto.Cipher.DECRYPT_MODE, key, spec);
            let decryptedCipher : number[] = cipher.doFinal(binary);
            return decryptedCipher;
        }

        public decryptToBase64String$byte_A$char_A(binary : number[], password : string[]) : string {
            let factory : javax.crypto.SecretKeyFactory = javax.crypto.SecretKeyFactory.getInstance(BinaryPBKDF2CipherEncryption.CONST_ALGO_PBKDF2);
            let keyspec : java.security.spec.KeySpec = new javax.crypto.spec.PBEKeySpec(password, BinaryPBKDF2CipherEncryption.SALT_$LI$(), 65536, 128);
            let tmp : javax.crypto.SecretKey = factory.generateSecret(keyspec);
            let key : javax.crypto.SecretKey = new javax.crypto.spec.SecretKeySpec(tmp.getEncoded(), "AES");
            let cipher : javax.crypto.Cipher = javax.crypto.Cipher.getInstance("AES/GCM/NoPadding");
            let spec : javax.crypto.spec.GCMParameterSpec = new javax.crypto.spec.GCMParameterSpec(16 * 8, BinaryPBKDF2CipherEncryption.FIXED_NONCE_$LI$());
            cipher.init(javax.crypto.Cipher.DECRYPT_MODE, key, spec);
            let decryptedCipher : number[] = cipher.doFinal(binary);
            let decryptedCipherText : string = String.fromCharCode.apply(null, decryptedCipher);
            return decryptedCipherText;
        }

        constructor() {
            super();
        }
    }
    BinaryPBKDF2CipherEncryption["__class"] = "io.nem.xpx.adapters.cipher.BinaryPBKDF2CipherEncryption";
    BinaryPBKDF2CipherEncryption["__interfaces"] = ["io.nem.xpx.adapters.cipher.CustomEncryption"];


}


io.nem.xpx.adapters.cipher.BinaryPBKDF2CipherEncryption.FIXED_NONCE_$LI$();

io.nem.xpx.adapters.cipher.BinaryPBKDF2CipherEncryption.SALT_$LI$();
