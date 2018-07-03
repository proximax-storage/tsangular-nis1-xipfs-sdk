/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.builder.steps {
    /**
     * The Interface PrivacyStrategyDownloadStep.
     * 
     * @param <T> the generic type
     * @class
     */
    export interface PrivacyStrategyDownloadStep<T> {
        /**
         * Privacy strategy.
         * 
         * @param {io.nem.xpx.strategy.privacy.PrivacyStrategy} privacyStrategy the privacy strategy
         * @return {*} the t
         */
        privacyStrategy(privacyStrategy : io.nem.xpx.strategy.privacy.PrivacyStrategy) : T;

        /**
         * Plain privacy.
         * 
         * @return {*} the t
         */
        plainPrivacy() : T;

        /**
         * Secured with nem keys privacy strategy.
         * 
         * @param {string} senderOrReceiverPrivateKey the sender or receiver private key
         * @param {string} receiverOrSenderPublicKey the receiver or sender public key
         * @return {*} the t
         */
        securedWithNemKeysPrivacyStrategy(senderOrReceiverPrivateKey : string, receiverOrSenderPublicKey : string) : T;

        /**
         * Secured with password privacy strategy.
         * 
         * @param {string} password the password
         * @return {*} the t
         */
        securedWithPasswordPrivacyStrategy(password : string) : T;

        securedWithShamirSecretSharingPrivacyStrategy(secretTotalPartCount? : any, secretMinimumPartCountToBuild? : any, ...secretParts : any[]) : any;
    }
}

