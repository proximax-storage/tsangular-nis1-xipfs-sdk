/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.exceptions {
    /**
     * Instantiates a new insufficient amount exception.
     * 
     * @param {Error} exception the exception
     * @class
     * @extends io.nem.xpx.facade.upload.UploadException
     */
    export class InsufficientAmountException extends io.nem.xpx.facade.upload.UploadException {
        /**
         * The Constant serialVersionUID.
         */
        static __io_nem_xpx_exceptions_InsufficientAmountException_serialVersionUID : number = 1;

        public constructor(exception? : any) {
            if(((exception != null && (exception["__classes"] && exception["__classes"].indexOf("java.lang.Exception") >= 0) || exception != null && exception instanceof <any>Error) || exception === null)) {
                let __args = Array.prototype.slice.call(arguments);
                super(exception);
                (<any>Object).setPrototypeOf(this, InsufficientAmountException.prototype);
            } else if(((typeof exception === 'string') || exception === null)) {
                let __args = Array.prototype.slice.call(arguments);
                let message : any = __args[0];
                super(message);
                (<any>Object).setPrototypeOf(this, InsufficientAmountException.prototype);
            } else throw new Error('invalid overload');
        }
    }
    InsufficientAmountException["__class"] = "io.nem.xpx.exceptions.InsufficientAmountException";
    InsufficientAmountException["__interfaces"] = ["java.io.Serializable"];


}

