/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.exceptions {
    /**
     * Instantiates a new decode nem message failure exception.
     * 
     * @param {string} message the message
     * @param {Error} cause the cause
     * @class
     * @extends Error
     */
    export class PeerConnectionInitFailureException extends Error {
        public constructor(message? : any, cause? : any) {
            if(((typeof message === 'string') || message === null) && ((cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.Throwable") >= 0) || cause != null && cause instanceof <any>Error) || cause === null)) {
                let __args = Array.prototype.slice.call(arguments);
                super(message); this.message=message;
                (<any>Object).setPrototypeOf(this, PeerConnectionInitFailureException.prototype);
            } else if(((typeof message === 'string') || message === null) && cause === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                super(message); this.message=message;
                (<any>Object).setPrototypeOf(this, PeerConnectionInitFailureException.prototype);
            } else throw new Error('invalid overload');
        }
    }
    PeerConnectionInitFailureException["__class"] = "io.nem.xpx.exceptions.PeerConnectionInitFailureException";
    PeerConnectionInitFailureException["__interfaces"] = ["java.io.Serializable"];


}

