/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.callback {
    /**
     * The Class RemoteDataHashUploadCallback.
     * @class
     */
    export class RemoteDataHashUploadCallback implements io.nem.ApiCallback<string> {
        /**
         * The logger.
         */
        LOGGER : java.util.logging.Logger = java.util.logging.Logger.getAnonymousLogger();

        /**
         * 
         * @param {io.nem.xpx.exceptions.ApiException} e
         * @param {number} statusCode
         * @param {*} responseHeaders
         */
        public onFailure(e : io.nem.xpx.exceptions.ApiException, statusCode : number, responseHeaders : any) {
            java.util.logging.Logger.getAnonymousLogger().severe(e.message);
        }

        public onSuccess$java_lang_String$int$java_util_Map(result : string, statusCode : number, responseHeaders : any) {
            java.util.logging.Logger.getAnonymousLogger().info("onSuccess " + result);
        }

        /**
         * 
         * @param {string} result
         * @param {number} statusCode
         * @param {*} responseHeaders
         */
        public onSuccess(result? : any, statusCode? : any, responseHeaders? : any) : any {
            if(((typeof result === 'string') || result === null) && ((typeof statusCode === 'number') || statusCode === null) && ((responseHeaders != null && (responseHeaders instanceof Object)) || responseHeaders === null)) {
                return <any>this.onSuccess$java_lang_String$int$java_util_Map(result, statusCode, responseHeaders);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @param {number} bytesWritten
         * @param {number} contentLength
         * @param {boolean} done
         */
        public onUploadProgress(bytesWritten : number, contentLength : number, done : boolean) {
            java.util.logging.Logger.getAnonymousLogger().info("onUploadProgress: " + done);
        }

        /**
         * 
         * @param {number} bytesRead
         * @param {number} contentLength
         * @param {boolean} done
         */
        public onDownloadProgress(bytesRead : number, contentLength : number, done : boolean) {
            java.util.logging.Logger.getAnonymousLogger().info("onDownloadProgress: " + done);
        }

        constructor() {
        }
    }
    RemoteDataHashUploadCallback["__class"] = "io.nem.xpx.callback.RemoteDataHashUploadCallback";
    RemoteDataHashUploadCallback["__interfaces"] = ["io.nem.ApiCallback"];


}

