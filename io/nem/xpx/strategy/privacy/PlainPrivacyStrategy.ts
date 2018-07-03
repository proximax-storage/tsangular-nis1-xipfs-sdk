/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.strategy.privacy {
    /**
     * The Class PlainPrivacyStrategy.
     * @class
     * @extends io.nem.xpx.strategy.privacy.AbstractPlainMessagePrivacyStrategy
     */
    export class PlainPrivacyStrategy extends io.nem.xpx.strategy.privacy.AbstractPlainMessagePrivacyStrategy {
        /**
         * 
         * @param {Array} data
         * @return {Array}
         */
        public encrypt(data : number[]) : number[] {
            return data;
        }

        /**
         * 
         * @param {Array} data
         * @param {org.nem.core.model.TransferTransaction} transaction
         * @param {io.nem.xpx.service.model.buffers.ResourceHashMessage} hashMessage
         * @return {Array}
         */
        public decrypt(data : number[], transaction : org.nem.core.model.TransferTransaction, hashMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage) : number[] {
            return data;
        }
    }
    PlainPrivacyStrategy["__class"] = "io.nem.xpx.strategy.privacy.PlainPrivacyStrategy";

}

