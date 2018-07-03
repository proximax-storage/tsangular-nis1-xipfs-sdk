/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.model {
    /**
     * The Class NemTransactionInfo.
     * @class
     */
    export class NemTransactionInfo {
        /**
         * The nem hash.
         */
        /*private*/ nemHash : string;

        /**
         * The sender.
         */
        /*private*/ sender : string;

        /**
         * The receiver.
         */
        /*private*/ receiver : string;

        /**
         * The payload.
         */
        /*private*/ payload : string;

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

        /**
         * Gets the sender.
         * 
         * @return {string} the sender
         */
        public getSender() : string {
            return this.sender;
        }

        /**
         * Sets the sender.
         * 
         * @param {string} sender the new sender
         */
        public setSender(sender : string) {
            this.sender = sender;
        }

        /**
         * Gets the receiver.
         * 
         * @return {string} the receiver
         */
        public getReceiver() : string {
            return this.receiver;
        }

        /**
         * Sets the receiver.
         * 
         * @param {string} receiver the new receiver
         */
        public setReceiver(receiver : string) {
            this.receiver = receiver;
        }

        /**
         * Gets the payload.
         * 
         * @return {string} the payload
         */
        public getPayload() : string {
            return this.payload;
        }

        /**
         * Sets the payload.
         * 
         * @param {string} payload the new payload
         */
        public setPayload(payload : string) {
            this.payload = payload;
        }

        constructor() {
            if(this.nemHash===undefined) this.nemHash = null;
            if(this.sender===undefined) this.sender = null;
            if(this.receiver===undefined) this.receiver = null;
            if(this.payload===undefined) this.payload = null;
        }
    }
    NemTransactionInfo["__class"] = "io.nem.xpx.model.NemTransactionInfo";
    NemTransactionInfo["__interfaces"] = ["java.io.Serializable"];


}

