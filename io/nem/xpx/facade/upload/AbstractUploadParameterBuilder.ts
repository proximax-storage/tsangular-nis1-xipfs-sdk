/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.upload {
    /**
     * The Class AbstractUploadParameterBuilder.
     * 
     * @param <NextBuildStepAfterPublicKey> the generic type
     * @param <FinalBuildSteps> the generic type
     * @class
     */
    export abstract class AbstractUploadParameterBuilder<NextBuildStepAfterPublicKey, FinalBuildSteps> implements io.nem.xpx.builder.steps.CommonUploadBuildSteps<FinalBuildSteps>, io.nem.xpx.builder.steps.SenderPrivateKeyStep<any>, io.nem.xpx.builder.steps.ReceiverPublicKeyStep<any> {
        /**
         * The instance.
         */
        instance : io.nem.xpx.facade.upload.AbstractUploadParameter;

        constructor(instance : io.nem.xpx.facade.upload.AbstractUploadParameter) {
            if(this.instance===undefined) this.instance = null;
            this.instance = instance;
        }

        /**
         * 
         * @param {Array} mosaics
         * @return {*}
         */
        public mosaics(...mosaics : org.nem.core.model.mosaic.Mosaic[]) : FinalBuildSteps {
            this.instance.setMosaics(mosaics);
            return <FinalBuildSteps><any>this;
        }

        /**
         * 
         * @param {string} keywords
         * @return {*}
         */
        public keywords(keywords : string) : FinalBuildSteps {
            this.instance.setKeywords(keywords);
            return <FinalBuildSteps><any>this;
        }

        /**
         * 
         * @param {*} metadata
         * @return {*}
         */
        public metadata(metadata : any) : FinalBuildSteps {
            this.instance.setMetaData(metadata);
            return <FinalBuildSteps><any>this;
        }

        /**
         * 
         * @param {io.nem.xpx.strategy.privacy.PrivacyStrategy} privacyStrategy
         * @return {*}
         */
        public privacyStrategy(privacyStrategy : io.nem.xpx.strategy.privacy.PrivacyStrategy) : FinalBuildSteps {
            this.instance.setPrivacyStrategy(privacyStrategy);
            return <FinalBuildSteps><any>this;
        }

        /**
         * 
         * @return {*}
         */
        public plainPrivacy() : FinalBuildSteps {
            this.instance.setPrivacyStrategy(io.nem.xpx.strategy.privacy.PrivacyStrategyFactory.plainPrivacy());
            return <FinalBuildSteps><any>this;
        }

        /**
         * 
         * @return {*}
         */
        public securedWithNemKeysPrivacyStrategy() : FinalBuildSteps {
            this.instance.setPrivacyStrategy(io.nem.xpx.strategy.privacy.PrivacyStrategyFactory.securedWithNemKeysPrivacyStrategy(this.instance.getSenderPrivateKey(), this.instance.getReceiverPublicKey()));
            return <FinalBuildSteps><any>this;
        }

        /**
         * 
         * @param {string} password
         * @return {*}
         */
        public securedWithPasswordPrivacyStrategy(password : string) : FinalBuildSteps {
            this.instance.setPrivacyStrategy(io.nem.xpx.strategy.privacy.PrivacyStrategyFactory.securedWithPasswordPrivacyStrategy(password));
            return <FinalBuildSteps><any>this;
        }

        public securedWithShamirSecretSharingPrivacyStrategy$int$int$io_nem_xpx_strategy_privacy_SecuredWithShamirSecretSharingPrivacyStrategy_SecretPart_A(secretTotalPartCount : number, secretMinimumPartCountToBuild : number, ...secretParts : io.nem.xpx.strategy.privacy.SecuredWithShamirSecretSharingPrivacyStrategy.SecretPart[]) : FinalBuildSteps {
            this.instance.setPrivacyStrategy(io.nem.xpx.strategy.privacy.PrivacyStrategyFactory.securedWithShamirSecretSharingPrivacyStrategy(secretTotalPartCount, secretMinimumPartCountToBuild, <any>(java.util.stream.Stream.of<any>(secretParts).collect<any, any>(java.util.stream.Collectors.toMap<any, any, any>((parts) => parts.index, (parts) => parts.__secretPart)))));
            return <FinalBuildSteps><any>this;
        }

        /**
         * 
         * @param {number} secretTotalPartCount
         * @param {number} secretMinimumPartCountToBuild
         * @param {Array} secretParts
         * @return {*}
         */
        public securedWithShamirSecretSharingPrivacyStrategy(secretTotalPartCount? : any, secretMinimumPartCountToBuild? : any, ...secretParts : any[]) : any {
            if(((typeof secretTotalPartCount === 'number') || secretTotalPartCount === null) && ((typeof secretMinimumPartCountToBuild === 'number') || secretMinimumPartCountToBuild === null) && ((secretParts != null && secretParts instanceof <any>Array && (secretParts.length==0 || secretParts[0] == null ||(secretParts[0] != null && secretParts[0] instanceof <any>io.nem.xpx.strategy.privacy.SecuredWithShamirSecretSharingPrivacyStrategy.SecretPart))) || secretParts === null)) {
                return <any>this.securedWithShamirSecretSharingPrivacyStrategy$int$int$io_nem_xpx_strategy_privacy_SecuredWithShamirSecretSharingPrivacyStrategy_SecretPart_A(secretTotalPartCount, secretMinimumPartCountToBuild, secretParts);
            } else if(((typeof secretTotalPartCount === 'number') || secretTotalPartCount === null) && ((typeof secretMinimumPartCountToBuild === 'number') || secretMinimumPartCountToBuild === null) && ((secretParts != null && (secretParts instanceof Array)) || secretParts === null)) {
                return <any>this.securedWithShamirSecretSharingPrivacyStrategy$int$int$java_util_List(secretTotalPartCount, secretMinimumPartCountToBuild, secretParts);
            } else if(((typeof secretTotalPartCount === 'number') || secretTotalPartCount === null) && ((typeof secretMinimumPartCountToBuild === 'number') || secretMinimumPartCountToBuild === null) && ((secretParts != null && (secretParts instanceof Object)) || secretParts === null)) {
                return <any>this.securedWithShamirSecretSharingPrivacyStrategy$int$int$java_util_Map(secretTotalPartCount, secretMinimumPartCountToBuild, secretParts);
            } else throw new Error('invalid overload');
        }

        public securedWithShamirSecretSharingPrivacyStrategy$int$int$java_util_List(secretTotalPartCount : number, secretMinimumPartCountToBuild : number, secretParts : Array<io.nem.xpx.strategy.privacy.SecuredWithShamirSecretSharingPrivacyStrategy.SecretPart>) : FinalBuildSteps {
            this.instance.setPrivacyStrategy(io.nem.xpx.strategy.privacy.PrivacyStrategyFactory.securedWithShamirSecretSharingPrivacyStrategy(secretTotalPartCount, secretMinimumPartCountToBuild, secretParts == null?/* emptyMap */{}:<any>(secretParts.stream().collect<any, any>(java.util.stream.Collectors.toMap<any, any, any>((parts) => parts.index, (parts) => parts.__secretPart)))));
            return <FinalBuildSteps><any>this;
        }

        public securedWithShamirSecretSharingPrivacyStrategy$int$int$java_util_Map(secretTotalPartCount : number, secretMinimumPartCountToBuild : number, secretParts : any) : FinalBuildSteps {
            this.instance.setPrivacyStrategy(io.nem.xpx.strategy.privacy.PrivacyStrategyFactory.securedWithShamirSecretSharingPrivacyStrategy(secretTotalPartCount, secretMinimumPartCountToBuild, secretParts == null?/* emptyMap */{}:secretParts));
            return <FinalBuildSteps><any>this;
        }

        /**
         * 
         * @param {string} senderPrivateKeyStep
         * @return {*}
         */
        public senderPrivateKey(senderPrivateKeyStep : string) : io.nem.xpx.builder.steps.ReceiverPublicKeyStep<any> {
            this.instance.setSenderPrivateKey(senderPrivateKeyStep);
            return this;
        }

        /**
         * 
         * @param {string} receiverPublicKey
         * @return {*}
         */
        public receiverPublicKey(receiverPublicKey : string) : NextBuildStepAfterPublicKey {
            this.instance.setReceiverPublicKey(receiverPublicKey);
            return <NextBuildStepAfterPublicKey><any>this;
        }
    }
    AbstractUploadParameterBuilder["__class"] = "io.nem.xpx.facade.upload.AbstractUploadParameterBuilder";
    AbstractUploadParameterBuilder["__interfaces"] = ["io.nem.xpx.builder.steps.KeywordsStep","io.nem.xpx.builder.steps.PrivacyStrategyUploadStep","io.nem.xpx.builder.steps.MosaicsStep","io.nem.xpx.builder.steps.ReceiverPublicKeyStep","io.nem.xpx.builder.steps.MetadataStep","io.nem.xpx.builder.steps.SenderPrivateKeyStep","io.nem.xpx.builder.steps.CommonUploadBuildSteps"];


}

