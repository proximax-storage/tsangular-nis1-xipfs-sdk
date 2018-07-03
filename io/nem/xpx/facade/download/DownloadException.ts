/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.download {
    /**
     * Instantiates a new download exception.
     * 
     * @param {string} message the message
     * @param {Error} exception the exception
     * @class
     * @extends Error
     */
    export class DownloadException extends Error {
        /**
         * The Constant serialVersionUID.
         */
        static serialVersionUID : number = 1;

        public constructor(message? : any, exception? : any) {
            if(((typeof message === 'string') || message === null) && ((exception != null && (exception["__classes"] && exception["__classes"].indexOf("java.lang.Exception") >= 0) || exception != null && exception instanceof <any>Error) || exception === null)) {
                let __args = Array.prototype.slice.call(arguments);
                super(message); this.message=message;
                (<any>Object).setPrototypeOf(this, DownloadException.prototype);
            } else if(((message != null && (message["__classes"] && message["__classes"].indexOf("java.lang.Exception") >= 0) || message != null && message instanceof <any>Error) || message === null) && exception === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                let exception : any = __args[0];
                super(exception); this.message=exception;
                (<any>Object).setPrototypeOf(this, DownloadException.prototype);
            } else if(((typeof message === 'string') || message === null) && exception === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                super(message); this.message=message;
                (<any>Object).setPrototypeOf(this, DownloadException.prototype);
            } else throw new Error('invalid overload');
        }
    }
    DownloadException["__class"] = "io.nem.xpx.facade.download.DownloadException";
    DownloadException["__interfaces"] = ["java.io.Serializable"];


}

