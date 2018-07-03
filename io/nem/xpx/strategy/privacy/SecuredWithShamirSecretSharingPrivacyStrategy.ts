/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.strategy.privacy {
    export class SecuredWithShamirSecretSharingPrivacyStrategy extends io.nem.xpx.strategy.privacy.AbstractPlainMessagePrivacyStrategy {
        /*private*/ secret : string[];

        /*private*/ encryptor : io.nem.xpx.adapters.cipher.BinaryPBKDF2CipherEncryption;

        public constructor(encryptor : io.nem.xpx.adapters.cipher.BinaryPBKDF2CipherEncryption, secretTotalPartCount : number, secretMinimumPartCountToBuild : number, secretParts : any) {
            super();
            if(this.secret===undefined) this.secret = null;
            if(this.encryptor===undefined) this.encryptor = null;
            io.nem.xpx.utils.ParameterValidationUtils.checkParameter(secretTotalPartCount > 0, "secretTotalPartCount should be a positive number");
            io.nem.xpx.utils.ParameterValidationUtils.checkParameter(secretMinimumPartCountToBuild > 0 && secretMinimumPartCountToBuild <= secretTotalPartCount, "secretMinimumPartCountToBuild should be a positive number less than or equal to secretTotalPartCount");
            io.nem.xpx.utils.ParameterValidationUtils.checkParameter(secretParts != null, "secretParts is required");
            io.nem.xpx.utils.ParameterValidationUtils.checkParameter(/* size */((m) => { if(m.entries==null) m.entries=[]; return m.entries.length; })(<any>secretParts) >= secretMinimumPartCountToBuild, "secretParts should meet minimum part count as defined by secretMinimumPartCountToBuild");
            this.secret = /* toCharArray */(String.fromCharCode.apply(null, com.codahale.shamir.Scheme.of(secretTotalPartCount, secretMinimumPartCountToBuild).join(secretParts))).split('');
            this.encryptor = encryptor;
        }

        /**
         * 
         * @param {Array} data
         * @return {Array}
         */
        public encrypt(data : number[]) : number[] {
            try {
                return this.encryptor.encrypt(data, this.secret);
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
                return this.encryptor.decrypt$byte_A$char_A(data, this.secret);
            } catch(e) {
                throw new io.nem.xpx.exceptions.EncryptionFailureException("Exception encountered decrypting data", e);
            };
        }
    }
    SecuredWithShamirSecretSharingPrivacyStrategy["__class"] = "io.nem.xpx.strategy.privacy.SecuredWithShamirSecretSharingPrivacyStrategy";


    export namespace SecuredWithShamirSecretSharingPrivacyStrategy {

        export class SecretPart {
            public index : number;

            public __secretPart : number[];

            public constructor(index : number, secretPart : number[]) {
                if(this.index===undefined) this.index = 0;
                if(this.__secretPart===undefined) this.__secretPart = null;
                this.index = index;
                this.__secretPart = secretPart;
            }

            public static secretPart(index : number, secretPart : number[]) : SecuredWithShamirSecretSharingPrivacyStrategy.SecretPart {
                return new SecuredWithShamirSecretSharingPrivacyStrategy.SecretPart(index, secretPart);
            }
        }
        SecretPart["__class"] = "io.nem.xpx.strategy.privacy.SecuredWithShamirSecretSharingPrivacyStrategy.SecretPart";

    }

}

