/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.upload {
    /**
     * Instantiates a new upload.
     * 
     * @param {io.nem.xpx.facade.connection.PeerConnection} peerConnection
     * the peer connection
     * @class
     * @extends io.nem.xpx.facade.AbstractAsyncFacadeService
     */
    export class UploadAsync extends io.nem.xpx.facade.AbstractAsyncFacadeService {
        /**
         * The upload.
         */
        /*private*/ upload : io.nem.xpx.facade.upload.Upload;

        public constructor(peerConnection : io.nem.xpx.facade.connection.PeerConnection) {
            super();
            if(this.upload===undefined) this.upload = null;
            this.upload = new io.nem.xpx.facade.upload.Upload(peerConnection);
        }

        /**
         * Upload file.
         * 
         * @param {io.nem.xpx.facade.upload.UploadFileParameter} uploadParameter the upload parameter
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the future
         */
        public uploadFile(uploadParameter : io.nem.xpx.facade.upload.UploadFileParameter, callback : io.nem.xpx.callback.ServiceAsyncCallback<io.nem.xpx.facade.upload.UploadResult>) : java.util.concurrent.CompletableFuture<io.nem.xpx.facade.upload.UploadResult> {
            return this.runAsync<any>(() => {
                try {
                    return this.upload.uploadFile(uploadParameter);
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.util.concurrent.CompletionException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            }, <any>(callback));
        }

        /**
         * Upload text data.
         * 
         * @param {io.nem.xpx.facade.upload.UploadTextDataParameter} uploadParameter the upload parameter
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the future
         */
        public uploadTextData(uploadParameter : io.nem.xpx.facade.upload.UploadTextDataParameter, callback : io.nem.xpx.callback.ServiceAsyncCallback<io.nem.xpx.facade.upload.UploadResult>) : java.util.concurrent.CompletableFuture<io.nem.xpx.facade.upload.UploadResult> {
            return this.runAsync<any>(() => {
                try {
                    return this.upload.uploadTextData(uploadParameter);
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.util.concurrent.CompletionException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            }, <any>(callback));
        }

        /**
         * Upload binary.
         * 
         * @param {io.nem.xpx.facade.upload.UploadBinaryParameter} uploadParameter the upload parameter
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the future
         */
        public uploadBinary(uploadParameter : io.nem.xpx.facade.upload.UploadBinaryParameter, callback : io.nem.xpx.callback.ServiceAsyncCallback<io.nem.xpx.facade.upload.UploadResult>) : java.util.concurrent.CompletableFuture<io.nem.xpx.facade.upload.UploadResult> {
            return this.runAsync<any>(() => {
                try {
                    return this.upload.uploadBinary(uploadParameter);
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.util.concurrent.CompletionException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            }, <any>(callback));
        }

        /**
         * Upload path.
         * 
         * @param {io.nem.xpx.facade.upload.UploadPathParameter} uploadParameter the upload parameter
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the future
         */
        public uploadPath(uploadParameter : io.nem.xpx.facade.upload.UploadPathParameter, callback : io.nem.xpx.callback.ServiceAsyncCallback<io.nem.xpx.facade.upload.UploadResult>) : java.util.concurrent.CompletableFuture<io.nem.xpx.facade.upload.UploadResult> {
            return this.runAsync<any>(() => {
                try {
                    return this.upload.uploadPath(uploadParameter);
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.util.concurrent.CompletionException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            }, <any>(callback));
        }

        /**
         * Upload files as zip.
         * 
         * @param {io.nem.xpx.facade.upload.UploadFilesAsZipParameter} uploadParameter the upload parameter
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the completable future
         */
        public uploadFilesAsZip(uploadParameter : io.nem.xpx.facade.upload.UploadFilesAsZipParameter, callback : io.nem.xpx.callback.ServiceAsyncCallback<io.nem.xpx.facade.upload.UploadResult>) : java.util.concurrent.CompletableFuture<io.nem.xpx.facade.upload.UploadResult> {
            return this.runAsync<any>(() => {
                try {
                    return this.upload.uploadFilesAsZip(uploadParameter);
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.util.concurrent.CompletionException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            }, <any>(callback));
        }

        /**
         * Upload multiple files.
         * 
         * @param {io.nem.xpx.facade.upload.UploadMultipleFilesParameter} uploadParameter the upload parameter
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the completable future
         */
        public uploadMultipleFiles(uploadParameter : io.nem.xpx.facade.upload.UploadMultipleFilesParameter, callback : io.nem.xpx.callback.ServiceAsyncCallback<io.nem.xpx.facade.upload.MultiFileUploadResult>) : java.util.concurrent.CompletableFuture<io.nem.xpx.facade.upload.MultiFileUploadResult> {
            return this.runAsync<any>(() => {
                try {
                    return this.upload.uploadMultipleFiles(uploadParameter);
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.util.concurrent.CompletionException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            }, <any>(callback));
        }

        /**
         * Upload from URL.
         * 
         * @param {io.nem.xpx.facade.upload.UploadFromUrlParameter} uploadParameter the upload parameter
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the completable future
         */
        public uploadFromUrl(uploadParameter : io.nem.xpx.facade.upload.UploadFromUrlParameter, callback : io.nem.xpx.callback.ServiceAsyncCallback<io.nem.xpx.facade.upload.UploadResult>) : java.util.concurrent.CompletableFuture<io.nem.xpx.facade.upload.UploadResult> {
            return this.runAsync<any>(() => {
                try {
                    return this.upload.uploadFromUrl(uploadParameter);
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.util.concurrent.CompletionException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            }, <any>(callback));
        }
    }
    UploadAsync["__class"] = "io.nem.xpx.facade.upload.UploadAsync";

}

