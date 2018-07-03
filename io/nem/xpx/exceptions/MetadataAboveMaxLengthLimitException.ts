/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.exceptions {
    /**
     * Instantiates a new metadata above max length limit exception.
     * 
     * @param {string} message the message
     * @class
     * @extends Error
     */
    export class MetadataAboveMaxLengthLimitException extends Error {
        public constructor(message : string) {
            super(message); this.message=message;
            (<any>Object).setPrototypeOf(this, MetadataAboveMaxLengthLimitException.prototype);
        }
    }
    MetadataAboveMaxLengthLimitException["__class"] = "io.nem.xpx.exceptions.MetadataAboveMaxLengthLimitException";
    MetadataAboveMaxLengthLimitException["__interfaces"] = ["java.io.Serializable"];


}

