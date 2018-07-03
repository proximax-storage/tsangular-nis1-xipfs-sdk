/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem {
    /**
     * Encodes request bodies using gzip.
     * 
     * Taken from https://github.com/square/okhttp/issues/350
     * @class
     */
    export class GzipRequestInterceptor implements com.squareup.okhttp.Interceptor {
        /**
         * 
         * @param {*} chain
         * @return {com.squareup.okhttp.Response}
         */
        public intercept(chain : Interceptor.Chain) : com.squareup.okhttp.Response {
            let originalRequest : com.squareup.okhttp.Request = chain.request();
            if(originalRequest.body() == null || originalRequest.header("Content-Encoding") != null) {
                return chain.proceed(originalRequest);
            }
            let compressedRequest : com.squareup.okhttp.Request = originalRequest.newBuilder().header("Content-Encoding", "gzip").method(originalRequest.method(), this.forceContentLength(this.gzip(originalRequest.body()))).build();
            return chain.proceed(compressedRequest);
        }

        /**
         * Force content length.
         * 
         * @param {com.squareup.okhttp.RequestBody} requestBody the request body
         * @return {com.squareup.okhttp.RequestBody} the request body
         * @throws IOException Signals that an I/O exception has occurred.
         * @private
         */
        /*private*/ forceContentLength(requestBody : com.squareup.okhttp.RequestBody) : com.squareup.okhttp.RequestBody {
            let buffer : okio.Buffer = new okio.Buffer();
            requestBody.writeTo(buffer);
            return new GzipRequestInterceptor.GzipRequestInterceptor$0(this, requestBody, buffer);
        }

        /**
         * Gzip.
         * 
         * @param {com.squareup.okhttp.RequestBody} body the body
         * @return {com.squareup.okhttp.RequestBody} the request body
         * @private
         */
        /*private*/ gzip(body : com.squareup.okhttp.RequestBody) : com.squareup.okhttp.RequestBody {
            return new GzipRequestInterceptor.GzipRequestInterceptor$1(this, body);
        }

        constructor() {
        }
    }
    GzipRequestInterceptor["__class"] = "io.nem.GzipRequestInterceptor";
    GzipRequestInterceptor["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



    export namespace GzipRequestInterceptor {

        export class GzipRequestInterceptor$0 extends com.squareup.okhttp.RequestBody {
            public __parent: any;
            /**
             * 
             * @return {com.squareup.okhttp.MediaType}
             */
            public contentType() : com.squareup.okhttp.MediaType {
                return this.requestBody.contentType();
            }

            /**
             * 
             * @return {number}
             */
            public contentLength() : number {
                return this.buffer.size();
            }

            /**
             * 
             * @param {*} sink
             */
            public writeTo(sink : okio.BufferedSink) {
                sink.write(this.buffer.snapshot());
            }

            constructor(__parent: any, private requestBody: any, private buffer: any) {
                super();
                this.__parent = __parent;
            }
        }


        export class GzipRequestInterceptor$1 extends com.squareup.okhttp.RequestBody {
            public __parent: any;
            /**
             * 
             * @return {com.squareup.okhttp.MediaType}
             */
            public contentType() : com.squareup.okhttp.MediaType {
                return this.body.contentType();
            }

            /**
             * 
             * @return {number}
             */
            public contentLength() : number {
                return -1;
            }

            /**
             * 
             * @param {*} sink
             */
            public writeTo(sink : okio.BufferedSink) {
                let gzipSink : okio.BufferedSink = okio.Okio.buffer(new okio.GzipSink(sink));
                this.body.writeTo(gzipSink);
                gzipSink.close();
            }

            constructor(__parent: any, private body: any) {
                super();
                this.__parent = __parent;
            }
        }

    }

}

