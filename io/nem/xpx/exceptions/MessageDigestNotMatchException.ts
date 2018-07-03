/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.exceptions {
    /**
     * Instantiates a new resource not found exception.
     * 
     * @param {string} message the message
     * @param {Error} cause the cause
     * @class
     * @extends Error
     */
    export class MessageDigestNotMatchException extends Error {
        /**
         * The Constant serialVersionUID.
         */
        static serialVersionUID : number = 1;

        public constructor(message? : any, cause? : any) {
            if(((typeof message === 'string') || message === null) && ((cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.Throwable") >= 0) || cause != null && cause instanceof <any>Error) || cause === null)) {
                let __args = Array.prototype.slice.call(arguments);
                super(message); this.message=message;
                (<any>Object).setPrototypeOf(this, MessageDigestNotMatchException.prototype);
            } else if(((typeof message === 'string') || message === null) && cause === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                super(message); this.message=message;
                (<any>Object).setPrototypeOf(this, MessageDigestNotMatchException.prototype);
            } else if(((message != null && (message["__classes"] && message["__classes"].indexOf("java.lang.Throwable") >= 0) || message != null && message instanceof <any>Error) || message === null) && cause === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                let cause : any = __args[0];
                super(cause); this.message=cause;
                (<any>Object).setPrototypeOf(this, MessageDigestNotMatchException.prototype);
            } else if(message === undefined && cause === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                super();
                (<any>Object).setPrototypeOf(this, MessageDigestNotMatchException.prototype);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @return {string}
         */
        public toString() : string {
            return "MessageDigestNotMatchException []";
        }
    }
    MessageDigestNotMatchException["__class"] = "io.nem.xpx.exceptions.MessageDigestNotMatchException";
    MessageDigestNotMatchException["__interfaces"] = ["java.io.Serializable"];


}

