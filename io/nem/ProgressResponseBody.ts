/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem {
    /**
     * Instantiates a new progress response body.
     * 
     * @param {com.squareup.okhttp.ResponseBody} responseBody the response body
     * @param {*} progressListener the progress listener
     * @class
     * @extends com.squareup.okhttp.ResponseBody
     */
    export class ProgressResponseBody extends com.squareup.okhttp.ResponseBody {
        /**
         * The response body.
         */
        /*private*/ responseBody : com.squareup.okhttp.ResponseBody;

        /**
         * The progress listener.
         */
        /*private*/ progressListener : ProgressResponseBody.ProgressListener;

        /**
         * The buffered source.
         */
        /*private*/ bufferedSource : okio.BufferedSource;

        public constructor(responseBody : com.squareup.okhttp.ResponseBody, progressListener : ProgressResponseBody.ProgressListener) {
            super();
            if(this.responseBody===undefined) this.responseBody = null;
            if(this.progressListener===undefined) this.progressListener = null;
            if(this.bufferedSource===undefined) this.bufferedSource = null;
            this.responseBody = responseBody;
            this.progressListener = progressListener;
        }

        /**
         * 
         * @return {com.squareup.okhttp.MediaType}
         */
        public contentType() : com.squareup.okhttp.MediaType {
            return this.responseBody.contentType();
        }

        /**
         * 
         * @return {number}
         */
        public contentLength() : number {
            return this.responseBody.contentLength();
        }

        public source$() : okio.BufferedSource {
            if(this.bufferedSource == null) {
                this.bufferedSource = okio.Okio.buffer(this.source$okio_Source(this.responseBody.source()));
            }
            return this.bufferedSource;
        }

        public source$okio_Source(source : okio.Source) : okio.Source {
            return new ProgressResponseBody.ProgressResponseBody$0(this, source);
        }

        /**
         * Source.
         * 
         * @param {*} source the source
         * @return {*} the source
         * @private
         */
        public source(source? : any) : any {
            if(((source != null && (source["__interfaces"] != null && source["__interfaces"].indexOf("okio.Source") >= 0 || source.constructor != null && source.constructor["__interfaces"] != null && source.constructor["__interfaces"].indexOf("okio.Source") >= 0)) || source === null)) {
                return <any>this.source$okio_Source(source);
            } else if(source === undefined) {
                return <any>this.source$();
            } else throw new Error('invalid overload');
        }
    }
    ProgressResponseBody["__class"] = "io.nem.ProgressResponseBody";
    ProgressResponseBody["__interfaces"] = ["java.io.Closeable","java.lang.AutoCloseable"];



    export namespace ProgressResponseBody {

        /**
         * The listener interface for receiving progress events.
         * The class that is interested in processing a progress
         * event implements this interface, and the object created
         * with that class is registered with a component using the
         * component's <code>addProgressListener</code> method. When
         * the progress event occurs, that object's appropriate
         * method is invoked.
         * @class
         */
        export interface ProgressListener {
            /**
             * Update.
             * 
             * @param {number} bytesRead the bytes read
             * @param {number} contentLength the content length
             * @param {boolean} done the done
             */
            update(bytesRead : number, contentLength : number, done : boolean);
        }

        export class ProgressResponseBody$0 extends okio.ForwardingSource {
            public __parent: any;
            totalBytesRead : number;

            /**
             * 
             * @param {okio.Buffer} sink
             * @param {number} byteCount
             * @return {number}
             */
            public read(sink : okio.Buffer, byteCount : number) : number {
                let bytesRead : number = super.read(sink, byteCount);
                this.totalBytesRead += bytesRead !== -1?bytesRead:0;
                this.__parent.progressListener.update(this.totalBytesRead, this.__parent.responseBody.contentLength(), bytesRead === -1);
                return bytesRead;
            }

            constructor(__parent: any, __arg0: any) {
                super(__arg0);
                this.__parent = __parent;
                this.totalBytesRead = 0;
            }
        }
        ProgressResponseBody$0["__interfaces"] = ["okio.Source","java.io.Closeable","java.lang.AutoCloseable"];


    }

}

