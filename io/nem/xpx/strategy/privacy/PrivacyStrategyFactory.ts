/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.strategy.privacy {
    /**
     * A factory for creating PrivacyStrategy objects.
     * @class
     */
    export class PrivacyStrategyFactory {
        /**
         * The plain privacy strategy.
         */
        public static plainPrivacyStrategy : io.nem.xpx.strategy.privacy.PrivacyStrategy = null;

        constructor() {
        }

        /**
         * Plain privacy.
         * 
         * @return {io.nem.xpx.strategy.privacy.PrivacyStrategy} the privacy strategy
         */
        public static plainPrivacy() : io.nem.xpx.strategy.privacy.PrivacyStrategy {
            if(PrivacyStrategyFactory.plainPrivacyStrategy == null) PrivacyStrategyFactory.plainPrivacyStrategy = new io.nem.xpx.strategy.privacy.PlainPrivacyStrategy();
            return PrivacyStrategyFactory.plainPrivacyStrategy;
        }

        /**
         * Secured with nem keys privacy strategy.
         * 
         * @param {string} senderOrReceiverPrivateKey the sender or receiver private key
         * @param {string} receiverOrSenderPublicKey the receiver or sender public key
         * @return {io.nem.xpx.strategy.privacy.PrivacyStrategy} the privacy strategy
         */
        public static securedWithNemKeysPrivacyStrategy(senderOrReceiverPrivateKey : string, receiverOrSenderPublicKey : string) : io.nem.xpx.strategy.privacy.PrivacyStrategy {
            return new io.nem.xpx.strategy.privacy.SecuredWithNemKeysPrivacyStrategy(senderOrReceiverPrivateKey, receiverOrSenderPublicKey);
        }

        /**
         * Secured with password privacy strategy.
         * 
         * @param {string} password the password
         * @return {io.nem.xpx.strategy.privacy.PrivacyStrategy} the privacy strategy
         */
        public static securedWithPasswordPrivacyStrategy(password : string) : io.nem.xpx.strategy.privacy.PrivacyStrategy {
            return new io.nem.xpx.strategy.privacy.SecuredWithPasswordPrivacyStrategy(new io.nem.xpx.adapters.cipher.BinaryPBKDF2CipherEncryption(), password);
        }

        public static securedWithShamirSecretSharingPrivacyStrategy(secretTotalPartCount : number, secretMinimumPartCountToBuild : number, secretParts : any) : io.nem.xpx.strategy.privacy.PrivacyStrategy {
            return new io.nem.xpx.strategy.privacy.SecuredWithShamirSecretSharingPrivacyStrategy(new io.nem.xpx.adapters.cipher.BinaryPBKDF2CipherEncryption(), secretTotalPartCount, secretMinimumPartCountToBuild, secretParts);
        }
    }
    PrivacyStrategyFactory["__class"] = "io.nem.xpx.strategy.privacy.PrivacyStrategyFactory";

}

