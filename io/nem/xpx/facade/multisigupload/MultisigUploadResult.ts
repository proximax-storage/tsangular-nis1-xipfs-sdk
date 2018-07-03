/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.multisigupload {
    /**
     * Instantiate class.
     * 
     * @param {io.nem.xpx.facade.upload.UploadResult} uploadData the upload data
     * @param {string} secretKey the secret key
     * @class
     */
    export class MultisigUploadResult {
        /**
         * The Constant serialVersionUID.
         */
        static serialVersionUID : number = 1;

        /**
         * The upload data.
         */
        /*private*/ uploadResult : io.nem.xpx.facade.upload.UploadResult;

        /**
         * The secret key.
         */
        /*private*/ secretKey : string;

        public constructor(uploadData : io.nem.xpx.facade.upload.UploadResult, secretKey : string) {
            if(this.uploadResult===undefined) this.uploadResult = null;
            if(this.secretKey===undefined) this.secretKey = null;
            this.uploadResult = uploadData;
            this.secretKey = secretKey;
        }

        /**
         * Gets the upload result.
         * 
         * @return {io.nem.xpx.facade.upload.UploadResult} the upload result
         */
        public getUploadResult() : io.nem.xpx.facade.upload.UploadResult {
            return this.uploadResult;
        }

        /**
         * Gets the secret key.
         * 
         * @return {string} the secret key
         */
        public getSecretKey() : string {
            return this.secretKey;
        }
    }
    MultisigUploadResult["__class"] = "io.nem.xpx.facade.multisigupload.MultisigUploadResult";
    MultisigUploadResult["__interfaces"] = ["java.io.Serializable"];


}

