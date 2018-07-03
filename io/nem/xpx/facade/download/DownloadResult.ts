/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.download {
    /**
     * Instantiate class.
     * 
     * @param {io.nem.xpx.service.model.buffers.ResourceHashMessage} dataMessage the data message
     * @param {Array} data the data
     * @param {io.nem.xpx.model.NemMessageType} messageType the message type
     * @class
     */
    export class DownloadResult {
        /**
         * The Constant serialVersionUID.
         */
        static serialVersionUID : number = 1;

        /**
         * The data message.
         */
        /*private*/ dataMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage;

        /**
         * The data.
         */
        /*private*/ data : number[];

        /**
         * The message type.
         */
        /*private*/ messageType : io.nem.xpx.model.NemMessageType;

        public constructor(dataMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage, data : number[], messageType : io.nem.xpx.model.NemMessageType) {
            if(this.dataMessage===undefined) this.dataMessage = null;
            if(this.data===undefined) this.data = null;
            if(this.messageType===undefined) this.messageType = null;
            this.dataMessage = dataMessage;
            this.data = data;
            this.messageType = messageType;
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
         * Gets the data.
         * 
         * @return {Array} the data
         */
        public getData() : number[] {
            return this.data;
        }

        /**
         * Gets the message type.
         * 
         * @return {io.nem.xpx.model.NemMessageType} the message type
         */
        public getMessageType() : io.nem.xpx.model.NemMessageType {
            return this.messageType;
        }

        /**
         * Gets the serialversionuid.
         * 
         * @return {number} the serialversionuid
         */
        public static getSerialversionuid() : number {
            return DownloadResult.serialVersionUID;
        }
    }
    DownloadResult["__class"] = "io.nem.xpx.facade.download.DownloadResult";
    DownloadResult["__interfaces"] = ["java.io.Serializable"];


}

