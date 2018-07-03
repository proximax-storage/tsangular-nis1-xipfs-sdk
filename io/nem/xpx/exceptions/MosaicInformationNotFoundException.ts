/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.exceptions {
    /**
     * Instantiates a new mosaic information not found exception.
     * 
     * @param {string} message the message
     * @class
     * @extends Error
     */
    export class MosaicInformationNotFoundException extends Error {
        public constructor(message : string) {
            super(message); this.message=message;
            (<any>Object).setPrototypeOf(this, MosaicInformationNotFoundException.prototype);
        }
    }
    MosaicInformationNotFoundException["__class"] = "io.nem.xpx.exceptions.MosaicInformationNotFoundException";
    MosaicInformationNotFoundException["__interfaces"] = ["java.io.Serializable"];


}

