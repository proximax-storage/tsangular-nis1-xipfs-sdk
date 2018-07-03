/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.strategy.privacy {
    /**
     * The Class AbstractPlainMessagePrivacyStrategy.
     * @class
     * @extends io.nem.xpx.strategy.privacy.PrivacyStrategy
     */
    export abstract class AbstractPlainMessagePrivacyStrategy extends io.nem.xpx.strategy.privacy.PrivacyStrategy {
        /**
         * 
         * @return {io.nem.xpx.model.NemMessageType}
         */
        public getNemMessageType() : io.nem.xpx.model.NemMessageType {
            return io.nem.xpx.model.NemMessageType.PLAIN;
        }

        /**
         * 
         * @param {Array} data
         * @return {org.nem.core.model.Message}
         */
        public encodeToMessage(data : number[]) : org.nem.core.model.Message {
            return new org.nem.core.messages.PlainMessage(data);
        }

        /**
         * 
         * @param {org.nem.core.model.TransferTransaction} transaction
         * @return {Array}
         */
        public decodeTransaction(transaction : org.nem.core.model.TransferTransaction) : number[] {
            if(transaction.getMessage().getType() === org.nem.core.model.MessageTypes.SECURE) throw new io.nem.xpx.exceptions.DecodeNemMessageFailureException("Unable to decode secure message with plain privacy strategy");
            return transaction.getMessage().getDecodedPayload();
        }
    }
    AbstractPlainMessagePrivacyStrategy["__class"] = "io.nem.xpx.strategy.privacy.AbstractPlainMessagePrivacyStrategy";

}

