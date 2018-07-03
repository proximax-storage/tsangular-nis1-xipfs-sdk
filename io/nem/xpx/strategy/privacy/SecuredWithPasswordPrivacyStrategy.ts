/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.strategy.privacy {
    /**
     * Instantiates a new secured with password privacy strategy.
     * 
     * @param {io.nem.xpx.adapters.cipher.BinaryPBKDF2CipherEncryption} encryptor the encryptor
     * @param {string} password the password
     * @class
     * @extends io.nem.xpx.strategy.privacy.AbstractPlainMessagePrivacyStrategy
     */
    export class SecuredWithPasswordPrivacyStrategy extends io.nem.xpx.strategy.privacy.AbstractPlainMessagePrivacyStrategy {
        /**
         * The Constant MINIMUM_PASSWORD_LENGTH.
         */
        static MINIMUM_PASSWORD_LENGTH : number = 50;

        /**
         * The encryptor.
         */
        /*private*/ encryptor : io.nem.xpx.adapters.cipher.BinaryPBKDF2CipherEncryption;

        /**
         * The password.
         */
        /*private*/ password : string[];

        public constructor(encryptor : io.nem.xpx.adapters.cipher.BinaryPBKDF2CipherEncryption, password : string) {
            super();
            if(this.encryptor===undefined) this.encryptor = null;
            if(this.password===undefined) this.password = null;
            io.nem.xpx.utils.ParameterValidationUtils.checkParameter(password != null, "password is required");
            io.nem.xpx.utils.ParameterValidationUtils.checkParameter(password.length >= SecuredWithPasswordPrivacyStrategy.MINIMUM_PASSWORD_LENGTH, "minimum length for password is 50");
            this.encryptor = encryptor;
            this.password = /* toCharArray */(password).split('');
        }

        /**
         * 
         * @param {Array} data
         * @return {Array}
         */
        public encrypt(data : number[]) : number[] {
            try {
                return this.encryptor.encrypt(data, this.password);
            } catch(e) {
                throw new io.nem.xpx.exceptions.EncryptionFailureException("Exception encountered encrypting data", e);
            };
        }

        /**
         * 
         * @param {Array} data
         * @param {org.nem.core.model.TransferTransaction} transaction
         * @param {io.nem.xpx.service.model.buffers.ResourceHashMessage} hashMessage
         * @return {Array}
         */
        public decrypt(data : number[], transaction : org.nem.core.model.TransferTransaction, hashMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage) : number[] {
            try {
                return this.encryptor.decrypt$byte_A$char_A(data, this.password);
            } catch(e) {
                throw new io.nem.xpx.exceptions.EncryptionFailureException("Exception encountered decrypting data", e);
            };
        }
    }
    SecuredWithPasswordPrivacyStrategy["__class"] = "io.nem.xpx.strategy.privacy.SecuredWithPasswordPrivacyStrategy";

}

