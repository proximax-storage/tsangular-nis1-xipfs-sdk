/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.upload {
    /**
     * The Class AbstractUploadParameter.
     * @class
     */
    export abstract class AbstractUploadParameter {
        /**
         * The Constant MAX_LENGTH_ALLOWED_FOR_METADATA.
         */
        public static MAX_LENGTH_ALLOWED_FOR_METADATA : number = 400;

        /**
         * The Constant MAX_LENGTH_ALLOWED_FOR_KEYWORDS.
         */
        public static MAX_LENGTH_ALLOWED_FOR_KEYWORDS : number = 80;

        /**
         * The sender private key.
         */
        /*private*/ senderPrivateKey : string;

        /**
         * The receiver public key.
         */
        /*private*/ receiverPublicKey : string;

        /**
         * The content type.
         */
        /*private*/ contentType : string;

        /**
         * The name.
         */
        /*private*/ name : string;

        /**
         * The keywords.
         */
        /*private*/ keywords : string;

        /**
         * The meta data.
         */
        /*private*/ metaData : string;

        /**
         * The mosaics.
         */
        /*private*/ mosaics : org.nem.core.model.mosaic.Mosaic[];

        /**
         * The privacy strategy.
         */
        /*private*/ privacyStrategy : io.nem.xpx.strategy.privacy.PrivacyStrategy = io.nem.xpx.strategy.privacy.PrivacyStrategyFactory.plainPrivacy();

        /**
         * Gets the sender private key.
         * 
         * @return {string} the sender private key
         */
        public getSenderPrivateKey() : string {
            return this.senderPrivateKey;
        }

        /**
         * Sets the sender private key.
         * 
         * @param {string} senderPrivateKey the new sender private key
         */
        public setSenderPrivateKey(senderPrivateKey : string) {
            this.senderPrivateKey = senderPrivateKey;
        }

        /**
         * Gets the receiver public key.
         * 
         * @return {string} the receiver public key
         */
        public getReceiverPublicKey() : string {
            return this.receiverPublicKey;
        }

        /**
         * Sets the receiver public key.
         * 
         * @param {string} receiverPublicKey the new receiver public key
         */
        public setReceiverPublicKey(receiverPublicKey : string) {
            this.receiverPublicKey = receiverPublicKey;
        }

        /**
         * Gets the content type.
         * 
         * @return {string} the content type
         */
        public getContentType() : string {
            return this.contentType;
        }

        /**
         * Sets the content type.
         * 
         * @param {string} contentType the new content type
         */
        public setContentType(contentType : string) {
            this.contentType = contentType;
        }

        /**
         * Gets the name.
         * 
         * @return {string} the name
         */
        public getName() : string {
            return this.name;
        }

        /**
         * Sets the name.
         * 
         * @param {string} name the new name
         */
        public setName(name : string) {
            this.name = name;
        }

        /**
         * Gets the keywords.
         * 
         * @return {string} the keywords
         */
        public getKeywords() : string {
            return this.keywords;
        }

        /**
         * Sets the keywords.
         * 
         * @param {string} keywords the new keywords
         */
        public setKeywords(keywords : string) {
            if(keywords != null && keywords.length > AbstractUploadParameter.MAX_LENGTH_ALLOWED_FOR_KEYWORDS) throw new io.nem.xpx.exceptions.KeywordsAboveMaxLengthLimitException(java.lang.String.format("The provided keywords exceeds the maximum %d characters allowed: %s", AbstractUploadParameter.MAX_LENGTH_ALLOWED_FOR_KEYWORDS, keywords));
            this.keywords = keywords;
        }

        /**
         * Gets the meta data as string.
         * 
         * @return {string} the meta data as string
         */
        public getMetaDataAsString() : string {
            return this.metaData;
        }

        /**
         * Sets the meta data.
         * 
         * @param {*} metaData the meta data
         */
        public setMetaData(metaData : any) {
            if(metaData != null) {
                let metadataAsString : string = io.nem.xpx.utils.JsonUtils.toJson(metaData);
                if(metadataAsString.length > AbstractUploadParameter.MAX_LENGTH_ALLOWED_FOR_METADATA) throw new io.nem.xpx.exceptions.MetadataAboveMaxLengthLimitException(java.lang.String.format("The provided metadata exceeds the maximum %d characters allowed: %s", AbstractUploadParameter.MAX_LENGTH_ALLOWED_FOR_METADATA, metadataAsString));
                this.metaData = metadataAsString;
            } else {
                this.metaData = null;
            }
        }

        /**
         * Gets the mosaics.
         * 
         * @return {Array} the mosaics
         */
        public getMosaics() : org.nem.core.model.mosaic.Mosaic[] {
            return this.mosaics == null?[]:this.mosaics;
        }

        /**
         * Sets the mosaics.
         * 
         * @param {Array} mosaics the new mosaics
         */
        public setMosaics(mosaics : org.nem.core.model.mosaic.Mosaic[]) {
            this.mosaics = mosaics;
        }

        /**
         * Adds the mosaic.
         * 
         * @param {org.nem.core.model.mosaic.Mosaic} mosaic the mosaic
         */
        public addMosaic(mosaic : org.nem.core.model.mosaic.Mosaic) {
            this.mosaics[this.mosaics.length - 1] = mosaic;
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

        constructor() {
            if(this.senderPrivateKey===undefined) this.senderPrivateKey = null;
            if(this.receiverPublicKey===undefined) this.receiverPublicKey = null;
            if(this.contentType===undefined) this.contentType = null;
            if(this.name===undefined) this.name = null;
            if(this.keywords===undefined) this.keywords = null;
            if(this.metaData===undefined) this.metaData = null;
            if(this.mosaics===undefined) this.mosaics = null;
        }
    }
    AbstractUploadParameter["__class"] = "io.nem.xpx.facade.upload.AbstractUploadParameter";

}

