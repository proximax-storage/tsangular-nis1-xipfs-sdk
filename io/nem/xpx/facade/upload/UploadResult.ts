/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.upload {
    /**
     * Instantiate class.
     * 
     * @param {io.nem.xpx.service.model.buffers.ResourceHashMessage} dataMessage the data message
     * @param {string} nemHash the nem hash
     * @class
     */
    export class UploadResult {
        /**
         * The Constant serialVersionUID.
         */
        static serialVersionUID : number = 1;

        /**
         * The data message.
         */
        /*private*/ dataMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage;

        /**
         * The nem hash.
         */
        /*private*/ nemHash : string;

        public constructor(dataMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage, nemHash : string) {
            if(this.dataMessage===undefined) this.dataMessage = null;
            if(this.nemHash===undefined) this.nemHash = null;
            this.dataMessage = dataMessage;
            this.nemHash = nemHash;
        }

        /**
         * Gets the data message.
         * 
         * @return {io.nem.xpx.service.model.buffers.ResourceHashMessage} the data message
         */
        public getDataMessage() : io.nem.xpx.service.model.buffers.ResourceHashMessage {
            return this.dataMessage;
        }

        /**
         * Gets the nem hash.
         * 
         * @return {string} the nem hash
         */
        public getNemHash() : string {
            return this.nemHash;
        }

        public getIpfsHash() : string {
            return this.dataMessage.hash();
        }
    }
    UploadResult["__class"] = "io.nem.xpx.facade.upload.UploadResult";
    UploadResult["__interfaces"] = ["java.io.Serializable"];


}

