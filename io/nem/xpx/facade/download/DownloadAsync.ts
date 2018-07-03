/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.download {
    /**
     * Instantiates a new download async.
     * 
     * @param {io.nem.xpx.facade.connection.PeerConnection} peerConnection the peer connection
     * @class
     * @extends io.nem.xpx.facade.AbstractAsyncFacadeService
     */
    export class DownloadAsync extends io.nem.xpx.facade.AbstractAsyncFacadeService {
        /**
         * The download.
         */
        /*private*/ download : io.nem.xpx.facade.download.Download;

        public constructor(peerConnection : io.nem.xpx.facade.connection.PeerConnection) {
            super();
            if(this.download===undefined) this.download = null;
            this.download = new io.nem.xpx.facade.download.Download(peerConnection);
        }

        /**
         * Download binary.
         * 
         * @param {io.nem.xpx.facade.download.DownloadParameter} downloadParameter the download parameter
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the completable future
         */
        public downloadBinary(downloadParameter : io.nem.xpx.facade.download.DownloadParameter, callback : io.nem.xpx.callback.ServiceAsyncCallback<io.nem.xpx.facade.download.DownloadBinaryResult>) : java.util.concurrent.CompletableFuture<io.nem.xpx.facade.download.DownloadBinaryResult> {
            return this.runAsync<any>(() => {
                try {
                    return this.download.downloadBinary(downloadParameter);
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.util.concurrent.CompletionException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            }, <any>(callback));
        }

        /**
         * Download text data.
         * 
         * @param {io.nem.xpx.facade.download.DownloadParameter} downloadParameter the download parameter
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the completable future
         */
        public downloadTextData(downloadParameter : io.nem.xpx.facade.download.DownloadParameter, callback : io.nem.xpx.callback.ServiceAsyncCallback<io.nem.xpx.facade.download.DownloadTextDataResult>) : java.util.concurrent.CompletableFuture<io.nem.xpx.facade.download.DownloadTextDataResult> {
            return this.runAsync<any>(() => {
                try {
                    return this.download.downloadTextData(downloadParameter);
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.util.concurrent.CompletionException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            }, <any>(callback));
        }

        /**
         * Download file.
         * 
         * @param {io.nem.xpx.facade.download.DownloadParameter} downloadParameter the download parameter
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the completable future
         */
        public downloadFile(downloadParameter : io.nem.xpx.facade.download.DownloadParameter, callback : io.nem.xpx.callback.ServiceAsyncCallback<io.nem.xpx.facade.download.DownloadFileResult>) : java.util.concurrent.CompletableFuture<io.nem.xpx.facade.download.DownloadFileResult> {
            return this.runAsync<any>(() => {
                try {
                    return this.download.downloadFile(downloadParameter);
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.util.concurrent.CompletionException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            }, <any>(callback));
        }
    }
    DownloadAsync["__class"] = "io.nem.xpx.facade.download.DownloadAsync";

}

