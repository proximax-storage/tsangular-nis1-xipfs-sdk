/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem {
    /**
     * Instantiates a new progress request body.
     * 
     * @param {com.squareup.okhttp.RequestBody} requestBody the request body
     * @param {*} progressListener the progress listener
     * @class
     * @extends com.squareup.okhttp.RequestBody
     */
    export class ProgressRequestBody extends com.squareup.okhttp.RequestBody {
        /**
         * The request body.
         */
        /*private*/ requestBody : com.squareup.okhttp.RequestBody;

        /**
         * The progress listener.
         */
        /*private*/ progressListener : ProgressRequestBody.ProgressRequestListener;

        public constructor(requestBody : com.squareup.okhttp.RequestBody, progressListener : ProgressRequestBody.ProgressRequestListener) {
            super();
            if(this.requestBody===undefined) this.requestBody = null;
            if(this.progressListener===undefined) this.progressListener = null;
            this.requestBody = requestBody;
            this.progressListener = progressListener;
        }

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
            return this.requestBody.contentLength();
        }

        /**
         * 
         * @param {*} sink
         */
        public writeTo(sink : okio.BufferedSink) {
            let bufferedSink : okio.BufferedSink = okio.Okio.buffer(this.sink(sink));
            this.requestBody.writeTo(bufferedSink);
            bufferedSink.flush();
        }

        /**
         * Sink.
         * 
         * @param {*} sink the sink
         * @return {*} the sink
         * @private
         */
        sink(sink : okio.Sink) : okio.Sink {
            return new ProgressRequestBody.ProgressRequestBody$0(this, sink);
        }
    }
    ProgressRequestBody["__class"] = "io.nem.ProgressRequestBody";


    export namespace ProgressRequestBody {

        /**
         * The listener interface for receiving progressRequest events.
         * The class that is interested in processing a progressRequest
         * event implements this interface, and the object created
         * with that class is registered with a component using the
         * component's <code>addProgressRequestListener</code> method. When
         * the progressRequest event occurs, that object's appropriate
         * method is invoked.
         * @class
         */
        export interface ProgressRequestListener {
            /**
             * On request progress.
             * 
             * @param {number} bytesWritten the bytes written
             * @param {number} contentLength the content length
             * @param {boolean} done the done
             */
            onRequestProgress(bytesWritten : number, contentLength : number, done : boolean);
        }

        export class ProgressRequestBody$0 extends okio.ForwardingSink {
            public __parent: any;
            bytesWritten : number;

            contentLength : number;

            /**
             * 
             * @param {okio.Buffer} source
             * @param {number} byteCount
             */
            public write(source : okio.Buffer, byteCount : number) {
                super.write(source, byteCount);
                if(this.contentLength === 0) {
                    this.contentLength = this.__parent.contentLength();
                }
                this.bytesWritten += byteCount;
                this.__parent.progressListener.onRequestProgress(this.bytesWritten, this.contentLength, this.bytesWritten === this.contentLength);
            }

            constructor(__parent: any, __arg0: any) {
                super(__arg0);
                this.__parent = __parent;
                this.bytesWritten = 0;
                this.contentLength = 0;
            }
        }
        ProgressRequestBody$0["__interfaces"] = ["java.io.Closeable","java.lang.AutoCloseable","okio.Sink","java.io.Flushable"];


    }

}

