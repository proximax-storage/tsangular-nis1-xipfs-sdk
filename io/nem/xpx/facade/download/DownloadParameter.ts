/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.download {
    /**
     * The Class DownloadParameter.
     * @class
     */
    export class DownloadParameter {
        /*private*/ ipfsHash : string;

        /**
         * The nem hash.
         */
        /*private*/ nemHash : string;

        /**
         * The sender or receiver private key.
         */
        /*private*/ senderOrReceiverPrivateKey : string;

        /**
         * The receiver or sender public key.
         */
        /*private*/ receiverOrSenderPublicKey : string;

        /**
         * The privacy strategy.
         */
        /*private*/ privacyStrategy : io.nem.xpx.strategy.privacy.PrivacyStrategy = io.nem.xpx.strategy.privacy.PrivacyStrategyFactory.plainPrivacy();

        /**
         * Gets the nem hash.
         * 
         * @return {string} the nem hash
         */
        public getNemHash() : string {
            return this.nemHash;
        }

        /**
         * Sets the nem hash.
         * 
         * @param {string} nemHash the new nem hash
         */
        public setNemHash(nemHash : string) {
            this.nemHash = nemHash;
        }

        public getIpfsHash() : string {
            return this.ipfsHash;
        }

        public setIpfsHash(ipfsHash : string) {
            this.ipfsHash = ipfsHash;
        }

        /**
         * Gets the sender or receiver private key.
         * 
         * @return {string} the sender or receiver private key
         */
        public getSenderOrReceiverPrivateKey() : string {
            return this.senderOrReceiverPrivateKey;
        }

        /**
         * Sets the sender or receiver private key.
         * 
         * @param {string} senderOrReceiverPrivateKey the new sender or receiver private key
         */
        public setSenderOrReceiverPrivateKey(senderOrReceiverPrivateKey : string) {
            this.senderOrReceiverPrivateKey = senderOrReceiverPrivateKey;
        }

        /**
         * Gets the receiver or sender public key.
         * 
         * @return {string} the receiver or sender public key
         */
        public getReceiverOrSenderPublicKey() : string {
            return this.receiverOrSenderPublicKey;
        }

        /**
         * Sets the receiver or sender public key.
         * 
         * @param {string} receiverOrSenderPublicKey the new receiver or sender public key
         */
        public setReceiverOrSenderPublicKey(receiverOrSenderPublicKey : string) {
            this.receiverOrSenderPublicKey = receiverOrSenderPublicKey;
        }

        /**
         * Gets the privacy strategy.
         * 
         * @return {io.nem.xpx.strategy.privacy.PrivacyStrategy} the privacy strategy
         */
        public getPrivacyStrategy() : io.nem.xpx.strategy.privacy.PrivacyStrategy {
            return this.privacyStrategy;
        }

        /**
         * Sets the privacy strategy.
         * 
         * @param {io.nem.xpx.strategy.privacy.PrivacyStrategy} privacyStrategy the new privacy strategy
         */
        public setPrivacyStrategy(privacyStrategy : io.nem.xpx.strategy.privacy.PrivacyStrategy) {
            this.privacyStrategy = privacyStrategy;
        }

        /**
         * Creates the.
         * 
         * @return {*} the nem hash step
         */
        public static create() : io.nem.xpx.builder.steps.HashStep<DownloadParameter.BuildStep> {
            return new DownloadParameter.Builder();
        }

        constructor() {
            if(this.ipfsHash===undefined) this.ipfsHash = null;
            if(this.nemHash===undefined) this.nemHash = null;
            if(this.senderOrReceiverPrivateKey===undefined) this.senderOrReceiverPrivateKey = null;
            if(this.receiverOrSenderPublicKey===undefined) this.receiverOrSenderPublicKey = null;
        }
    }
    DownloadParameter["__class"] = "io.nem.xpx.facade.download.DownloadParameter";
    DownloadParameter["__interfaces"] = ["java.io.Serializable"];



    export namespace DownloadParameter {

        /**
         * The Interface BuildStep.
         * @class
         */
        export interface BuildStep extends io.nem.xpx.builder.steps.PrivacyStrategyDownloadStep<DownloadParameter.BuildStep> {
            /**
             * Builds the.
             * 
             * @return {io.nem.xpx.facade.download.DownloadParameter} the download parameter
             */
            build() : io.nem.xpx.facade.download.DownloadParameter;
        }

        /**
         * The Class Builder.
         * @class
         */
        export class Builder implements io.nem.xpx.builder.steps.HashStep<any>, DownloadParameter.BuildStep {
            /**
             * The instance.
             */
            instance : io.nem.xpx.facade.download.DownloadParameter;

            constructor() {
                if(this.instance===undefined) this.instance = null;
                this.instance = new io.nem.xpx.facade.download.DownloadParameter();
            }

            /**
             * 
             * @param {io.nem.xpx.strategy.privacy.PrivacyStrategy} privacyStrategy
             * @return {*}
             */
            public privacyStrategy(privacyStrategy : io.nem.xpx.strategy.privacy.PrivacyStrategy) : DownloadParameter.BuildStep {
                this.instance.setPrivacyStrategy(privacyStrategy);
                return this;
            }

            /**
             * 
             * @return {*}
             */
            public plainPrivacy() : DownloadParameter.BuildStep {
                this.instance.setPrivacyStrategy(io.nem.xpx.strategy.privacy.PrivacyStrategyFactory.plainPrivacy());
                return this;
            }

            /**
             * 
             * @param {string} senderOrReceiverPrivateKey
             * @param {string} receiverOrSenderPublicKey
             * @return {*}
             */
            public securedWithNemKeysPrivacyStrategy(senderOrReceiverPrivateKey : string, receiverOrSenderPublicKey : string) : DownloadParameter.BuildStep {
                this.instance.setPrivacyStrategy(io.nem.xpx.strategy.privacy.PrivacyStrategyFactory.securedWithNemKeysPrivacyStrategy(senderOrReceiverPrivateKey, receiverOrSenderPublicKey));
                this.instance.setSenderOrReceiverPrivateKey(senderOrReceiverPrivateKey);
                this.instance.setReceiverOrSenderPublicKey(receiverOrSenderPublicKey);
                return this;
            }

            /**
             * 
             * @param {string} password
             * @return {*}
             */
            public securedWithPasswordPrivacyStrategy(password : string) : DownloadParameter.BuildStep {
                this.instance.setPrivacyStrategy(io.nem.xpx.strategy.privacy.PrivacyStrategyFactory.securedWithPasswordPrivacyStrategy(password));
                return this;
            }

            public securedWithShamirSecretSharingPrivacyStrategy$int$int$io_nem_xpx_strategy_privacy_SecuredWithShamirSecretSharingPrivacyStrategy_SecretPart_A(secretTotalPartCount : number, secretMinimumPartCountToBuild : number, ...secretParts : io.nem.xpx.strategy.privacy.SecuredWithShamirSecretSharingPrivacyStrategy.SecretPart[]) : DownloadParameter.BuildStep {
                this.instance.setPrivacyStrategy(io.nem.xpx.strategy.privacy.PrivacyStrategyFactory.securedWithShamirSecretSharingPrivacyStrategy(secretTotalPartCount, secretMinimumPartCountToBuild, <any>(java.util.stream.Stream.of<any>(secretParts).collect<any, any>(java.util.stream.Collectors.toMap<any, any, any>((parts) => parts.index, (parts) => parts.__secretPart)))));
                return <DownloadParameter.BuildStep><any>this;
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

            public securedWithShamirSecretSharingPrivacyStrategy$int$int$java_util_List(secretTotalPartCount : number, secretMinimumPartCountToBuild : number, secretParts : Array<io.nem.xpx.strategy.privacy.SecuredWithShamirSecretSharingPrivacyStrategy.SecretPart>) : DownloadParameter.BuildStep {
                this.instance.setPrivacyStrategy(io.nem.xpx.strategy.privacy.PrivacyStrategyFactory.securedWithShamirSecretSharingPrivacyStrategy(secretTotalPartCount, secretMinimumPartCountToBuild, secretParts == null?/* emptyMap */{}:<any>(secretParts.stream().collect<any, any>(java.util.stream.Collectors.toMap<any, any, any>((parts) => parts.index, (parts) => parts.__secretPart)))));
                return <DownloadParameter.BuildStep><any>this;
            }

            public securedWithShamirSecretSharingPrivacyStrategy$int$int$java_util_Map(secretTotalPartCount : number, secretMinimumPartCountToBuild : number, secretParts : any) : DownloadParameter.BuildStep {
                this.instance.setPrivacyStrategy(io.nem.xpx.strategy.privacy.PrivacyStrategyFactory.securedWithShamirSecretSharingPrivacyStrategy(secretTotalPartCount, secretMinimumPartCountToBuild, secretParts == null?/* emptyMap */{}:secretParts));
                return <DownloadParameter.BuildStep><any>this;
            }

            /**
             * 
             * @param {string} nemHash
             * @return {*}
             */
            public nemHash(nemHash : string) : DownloadParameter.BuildStep {
                this.instance.setNemHash(nemHash);
                return this;
            }

            /**
             * 
             * @param {string} ipfsHash
             * @return {*}
             */
            public ipfsHash(ipfsHash : string) : DownloadParameter.BuildStep {
                this.instance.setIpfsHash(ipfsHash);
                return this;
            }

            /**
             * 
             * @return {io.nem.xpx.facade.download.DownloadParameter}
             */
            public build() : io.nem.xpx.facade.download.DownloadParameter {
                return this.instance;
            }
        }
        Builder["__class"] = "io.nem.xpx.facade.download.DownloadParameter.Builder";
        Builder["__interfaces"] = ["io.nem.xpx.facade.download.DownloadParameter.BuildStep","io.nem.xpx.builder.steps.HashStep","io.nem.xpx.builder.steps.PrivacyStrategyDownloadStep"];


    }

}

