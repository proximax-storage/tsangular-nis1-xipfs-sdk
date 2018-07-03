/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.exceptions {
    /**
     * Instantiates a new api exception.
     * 
     * @param {string} message the message
     * @param {Error} throwable the throwable
     * @param {number} code the code
     * @param {*} responseHeaders the response headers
     * @param {string} responseBody the response body
     * @class
     * @extends Error
     */
    export class ApiException extends Error {
        /**
         * The code.
         */
        /*private*/ code : number;

        /**
         * The response headers.
         */
        /*private*/ responseHeaders : any;

        /**
         * The response body.
         */
        /*private*/ responseBody : string;

        public constructor(message? : any, throwable? : any, code? : any, responseHeaders? : any, responseBody? : any) {
            if(((typeof message === 'string') || message === null) && ((throwable != null && (throwable["__classes"] && throwable["__classes"].indexOf("java.lang.Throwable") >= 0) || throwable != null && throwable instanceof <any>Error) || throwable === null) && ((typeof code === 'number') || code === null) && ((responseHeaders != null && (responseHeaders instanceof Object)) || responseHeaders === null) && ((typeof responseBody === 'string') || responseBody === null)) {
                let __args = Array.prototype.slice.call(arguments);
                super(message); this.message=message;
                this.code = 0;
                this.responseHeaders = null;
                this.responseBody = null;
                (<any>Object).setPrototypeOf(this, ApiException.prototype);
                (() => {
                    this.code = code;
                    this.responseHeaders = responseHeaders;
                    this.responseBody = responseBody;
                })();
            } else if(((typeof message === 'string') || message === null) && ((throwable != null && (throwable["__classes"] && throwable["__classes"].indexOf("java.lang.Throwable") >= 0) || throwable != null && throwable instanceof <any>Error) || throwable === null) && ((typeof code === 'number') || code === null) && ((responseHeaders != null && (responseHeaders instanceof Object)) || responseHeaders === null) && responseBody === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let responseBody : any = null;
                    super(message); this.message=message;
                    this.code = 0;
                    this.responseHeaders = null;
                    this.responseBody = null;
                    (<any>Object).setPrototypeOf(this, ApiException.prototype);
                    (() => {
                        this.code = code;
                        this.responseHeaders = responseHeaders;
                        this.responseBody = responseBody;
                    })();
                }
            } else if(((typeof message === 'string') || message === null) && ((typeof throwable === 'number') || throwable === null) && ((code != null && (code instanceof Object)) || code === null) && ((typeof responseHeaders === 'string') || responseHeaders === null) && responseBody === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                let code : any = __args[1];
                let responseHeaders : any = __args[2];
                let responseBody : any = __args[3];
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let throwable : any = <Error>null;
                    super(message); this.message=message;
                    this.code = 0;
                    this.responseHeaders = null;
                    this.responseBody = null;
                    (<any>Object).setPrototypeOf(this, ApiException.prototype);
                    (() => {
                        this.code = code;
                        this.responseHeaders = responseHeaders;
                        this.responseBody = responseBody;
                    })();
                }
            } else if(((typeof message === 'number') || message === null) && ((typeof throwable === 'string') || throwable === null) && ((code != null && (code instanceof Object)) || code === null) && ((typeof responseHeaders === 'string') || responseHeaders === null) && responseBody === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                let code : any = __args[0];
                let message : any = __args[1];
                let responseHeaders : any = __args[2];
                let responseBody : any = __args[3];
                {
                    let __args = Array.prototype.slice.call(arguments);
                    super(message); this.message=message;
                    this.code = 0;
                    this.responseHeaders = null;
                    this.responseBody = null;
                    (<any>Object).setPrototypeOf(this, ApiException.prototype);
                    (() => {
                        this.code = code;
                    })();
                }
                (() => {
                    this.responseHeaders = responseHeaders;
                    this.responseBody = responseBody;
                })();
            } else if(((typeof message === 'number') || message === null) && ((throwable != null && (throwable instanceof Object)) || throwable === null) && ((typeof code === 'string') || code === null) && responseHeaders === undefined && responseBody === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                let code : any = __args[0];
                let responseHeaders : any = __args[1];
                let responseBody : any = __args[2];
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let message : any = <string>null;
                    let throwable : any = <Error>null;
                    super(message); this.message=message;
                    this.code = 0;
                    this.responseHeaders = null;
                    this.responseBody = null;
                    (<any>Object).setPrototypeOf(this, ApiException.prototype);
                    (() => {
                        this.code = code;
                        this.responseHeaders = responseHeaders;
                        this.responseBody = responseBody;
                    })();
                }
            } else if(((typeof message === 'number') || message === null) && ((typeof throwable === 'string') || throwable === null) && code === undefined && responseHeaders === undefined && responseBody === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                let code : any = __args[0];
                let message : any = __args[1];
                super(message); this.message=message;
                this.code = 0;
                this.responseHeaders = null;
                this.responseBody = null;
                (<any>Object).setPrototypeOf(this, ApiException.prototype);
                (() => {
                    this.code = code;
                })();
            } else if(((message != null && (message["__classes"] && message["__classes"].indexOf("java.lang.Throwable") >= 0) || message != null && message instanceof <any>Error) || message === null) && throwable === undefined && code === undefined && responseHeaders === undefined && responseBody === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                let throwable : any = __args[0];
                super(throwable); this.message=throwable;
                this.code = 0;
                this.responseHeaders = null;
                this.responseBody = null;
                (<any>Object).setPrototypeOf(this, ApiException.prototype);
            } else if(((typeof message === 'string') || message === null) && throwable === undefined && code === undefined && responseHeaders === undefined && responseBody === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                super(message); this.message=message;
                this.code = 0;
                this.responseHeaders = null;
                this.responseBody = null;
                (<any>Object).setPrototypeOf(this, ApiException.prototype);
            } else if(message === undefined && throwable === undefined && code === undefined && responseHeaders === undefined && responseBody === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                super();
                this.code = 0;
                this.responseHeaders = null;
                this.responseBody = null;
                (<any>Object).setPrototypeOf(this, ApiException.prototype);
            } else throw new Error('invalid overload');
        }

        /**
         * Get the HTTP status code.
         * 
         * @return {number} HTTP status code
         */
        public getCode() : number {
            return this.code;
        }

        /**
         * Get the HTTP response headers.
         * 
         * @return {*} A map of list of string
         */
        public getResponseHeaders() : any {
            return this.responseHeaders;
        }

        /**
         * Get the HTTP response body.
         * 
         * @return {string} Response body in the form of string
         */
        public getResponseBody() : string {
            return this.responseBody;
        }
    }
    ApiException["__class"] = "io.nem.xpx.exceptions.ApiException";
    ApiException["__interfaces"] = ["java.io.Serializable"];


}

