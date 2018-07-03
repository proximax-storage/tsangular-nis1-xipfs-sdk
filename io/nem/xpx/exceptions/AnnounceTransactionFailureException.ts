/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.exceptions {
    /**
     * Instantiates a new announce transaction failure exception.
     * 
     * @param {string} message the message
     * @class
     * @extends Error
     */
    export class AnnounceTransactionFailureException extends Error {
        public constructor(message : string) {
            super(message); this.message=message;
            (<any>Object).setPrototypeOf(this, AnnounceTransactionFailureException.prototype);
        }
    }
    AnnounceTransactionFailureException["__class"] = "io.nem.xpx.exceptions.AnnounceTransactionFailureException";
    AnnounceTransactionFailureException["__interfaces"] = ["java.io.Serializable"];


}

