/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem {
    /**
     * Instantiates a new api response.
     * 
     * @param {number} statusCode The status code of HTTP response
     * @param {*} headers The headers of HTTP response
     * @param {*} data The object deserialized from response bod
     * @class
     */
    export class ApiResponse<T> {
        /**
         * The status code.
         */
        /*private*/ statusCode : number;

        /**
         * The headers.
         */
        /*private*/ headers : any;

        /**
         * The data.
         */
        /*private*/ data : T;

        public constructor(statusCode? : any, headers? : any, data? : any) {
            if(((typeof statusCode === 'number') || statusCode === null) && ((headers != null && (headers instanceof Object)) || headers === null) && ((data != null) || data === null)) {
                let __args = Array.prototype.slice.call(arguments);
                if(this.statusCode===undefined) this.statusCode = 0;
                if(this.headers===undefined) this.headers = null;
                if(this.data===undefined) this.data = null;
                if(this.statusCode===undefined) this.statusCode = 0;
                if(this.headers===undefined) this.headers = null;
                if(this.data===undefined) this.data = null;
                (() => {
                    this.statusCode = statusCode;
                    this.headers = headers;
                    this.data = data;
                })();
            } else if(((typeof statusCode === 'number') || statusCode === null) && ((headers != null && (headers instanceof Object)) || headers === null) && data === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let data : any = null;
                    if(this.statusCode===undefined) this.statusCode = 0;
                    if(this.headers===undefined) this.headers = null;
                    if(this.data===undefined) this.data = null;
                    if(this.statusCode===undefined) this.statusCode = 0;
                    if(this.headers===undefined) this.headers = null;
                    if(this.data===undefined) this.data = null;
                    (() => {
                        this.statusCode = statusCode;
                        this.headers = headers;
                        this.data = data;
                    })();
                }
            } else throw new Error('invalid overload');
        }

        /**
         * Gets the status code.
         * 
         * @return {number} the status code
         */
        public getStatusCode() : number {
            return this.statusCode;
        }

        /**
         * Gets the headers.
         * 
         * @return {*} the headers
         */
        public getHeaders() : any {
            return this.headers;
        }

        /**
         * Gets the data.
         * 
         * @return {*} the data
         */
        public getData() : T {
            return this.data;
        }
    }
    ApiResponse["__class"] = "io.nem.ApiResponse";

}

