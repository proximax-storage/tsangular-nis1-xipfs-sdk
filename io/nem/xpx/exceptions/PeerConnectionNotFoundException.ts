/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.exceptions {
    /**
     * Instantiates a new peer connection not found exception.
     * 
     * @param {string} message the message
     * @class
     * @extends Error
     */
    export class PeerConnectionNotFoundException extends Error {
        public constructor(message : string) {
            super(message); this.message=message;
            (<any>Object).setPrototypeOf(this, PeerConnectionNotFoundException.prototype);
        }
    }
    PeerConnectionNotFoundException["__class"] = "io.nem.xpx.exceptions.PeerConnectionNotFoundException";
    PeerConnectionNotFoundException["__interfaces"] = ["java.io.Serializable"];


}

