/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.strategy.privacy {
    /**
     * The Class PrivacyStrategy.
     * @class
     */
    export abstract class PrivacyStrategy {
        /**
         * Gets the nem message type.
         * 
         * @return {io.nem.xpx.model.NemMessageType} the nem message type
         */
        public abstract getNemMessageType() : io.nem.xpx.model.NemMessageType;

        /**
         * Encrypt.
         * 
         * @param {Array} data the data
         * @return {Array} the byte[]
         */
        public abstract encrypt(data : number[]) : number[];

        /**
         * Decrypt.
         * 
         * @param {Array} data the data
         * @param {org.nem.core.model.TransferTransaction} transaction the transaction
         * @param {io.nem.xpx.service.model.buffers.ResourceHashMessage} hashMessage the hash message
         * @return {Array} the byte[]
         */
        public abstract decrypt(data : number[], transaction : org.nem.core.model.TransferTransaction, hashMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage) : number[];

        /**
         * Encode to message.
         * 
         * @param {Array} payload the payload
         * @return {org.nem.core.model.Message} the message
         */
        public abstract encodeToMessage(payload : number[]) : org.nem.core.model.Message;

        /**
         * Decode transaction.
         * 
         * @param {org.nem.core.model.TransferTransaction} transaction the transaction
         * @return {Array} the byte[]
         */
        public abstract decodeTransaction(transaction : org.nem.core.model.TransferTransaction) : number[];
    }
    PrivacyStrategy["__class"] = "io.nem.xpx.strategy.privacy.PrivacyStrategy";

}

