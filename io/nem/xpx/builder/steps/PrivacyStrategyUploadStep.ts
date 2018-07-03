/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.builder.steps {
    /**
     * The Interface PrivacyStrategyUploadStep.
     * 
     * @param <T> the generic type
     * @class
     */
    export interface PrivacyStrategyUploadStep<T> {
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
         * @return {*} the t
         */
        securedWithNemKeysPrivacyStrategy() : T;

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

