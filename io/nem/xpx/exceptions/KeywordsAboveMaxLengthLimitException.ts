/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.exceptions {
    /**
     * Instantiates a new keywords above max length limit exception.
     * 
     * @param {string} message the message
     * @class
     * @extends Error
     */
    export class KeywordsAboveMaxLengthLimitException extends Error {
        public constructor(message : string) {
            super(message); this.message=message;
            (<any>Object).setPrototypeOf(this, KeywordsAboveMaxLengthLimitException.prototype);
        }
    }
    KeywordsAboveMaxLengthLimitException["__class"] = "io.nem.xpx.exceptions.KeywordsAboveMaxLengthLimitException";
    KeywordsAboveMaxLengthLimitException["__interfaces"] = ["java.io.Serializable"];


}

