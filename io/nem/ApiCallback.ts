/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem {
    /**
     * Callback for asynchronous API call.
     * 
     * @param <T> The return type
     * @class
     */
    export interface ApiCallback<T> {
        /**
         * This is called when the API call fails.
         * 
         * @param {io.nem.xpx.exceptions.ApiException} e The exception causing the failure
         * @param {number} statusCode Status code of the response if available, otherwise it would be 0
         * @param {*} responseHeaders Headers of the response if available, otherwise it would be null
         */
        onFailure(e : io.nem.xpx.exceptions.ApiException, statusCode : number, responseHeaders : any);

        /**
         * This is called when the API call succeeded.
         * 
         * @param {*} result The result deserialized from response
         * @param {number} statusCode Status code of the response
         * @param {*} responseHeaders Headers of the response
         */
        onSuccess(result : T, statusCode : number, responseHeaders : any);

        /**
         * This is called when the API upload processing.
         * 
         * @param {number} bytesWritten bytes Written
         * @param {number} contentLength content length of request body
         * @param {boolean} done write end
         */
        onUploadProgress(bytesWritten : number, contentLength : number, done : boolean);

        /**
         * This is called when the API downlond processing.
         * 
         * @param {number} bytesRead bytes Read
         * @param {number} contentLength content lenngth of the response
         * @param {boolean} done Read end
         */
        onDownloadProgress(bytesRead : number, contentLength : number, done : boolean);
    }
}

