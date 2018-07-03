/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.exceptions {
    /**
     * Instantiates a new path upload not supported exception.
     * 
     * @param {string} message the message
     * @class
     * @extends Error
     */
    export class PathUploadNotSupportedException extends Error {
        public constructor(message : string) {
            super(message); this.message=message;
            (<any>Object).setPrototypeOf(this, PathUploadNotSupportedException.prototype);
        }
    }
    PathUploadNotSupportedException["__class"] = "io.nem.xpx.exceptions.PathUploadNotSupportedException";
    PathUploadNotSupportedException["__interfaces"] = ["java.io.Serializable"];


}

