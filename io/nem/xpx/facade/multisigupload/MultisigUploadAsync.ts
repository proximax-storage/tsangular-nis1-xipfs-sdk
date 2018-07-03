/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.multisigupload {
    /**
     * Instantiates a new upload.
     * 
     * @param {io.nem.xpx.facade.connection.PeerConnection} peerConnection
     * the peer connection
     * @throws PeerConnectionNotFoundException
     * the peer connection not found exception
     * @class
     * @extends io.nem.xpx.facade.AbstractAsyncFacadeService
     */
    export class MultisigUploadAsync extends io.nem.xpx.facade.AbstractAsyncFacadeService {
        /**
         * The multisig upload.
         */
        /*private*/ multisigUpload : io.nem.xpx.facade.multisigupload.MultisigUpload;

        public constructor(peerConnection : io.nem.xpx.facade.connection.PeerConnection) {
            super();
            if(this.multisigUpload===undefined) this.multisigUpload = null;
            this.multisigUpload = new io.nem.xpx.facade.multisigupload.MultisigUpload(peerConnection);
        }

        /**
         * Upload data on multisig transaction.
         * 
         * @param {io.nem.xpx.facade.multisigupload.MultisigUploadTextDataParameter} parameters the parameters
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the completable future
         */
        public uploadDataOnMultisigTransaction(parameters : io.nem.xpx.facade.multisigupload.MultisigUploadTextDataParameter, callback : io.nem.xpx.callback.ServiceAsyncCallback<io.nem.xpx.facade.multisigupload.MultisigUploadResult>) : java.util.concurrent.CompletableFuture<io.nem.xpx.facade.multisigupload.MultisigUploadResult> {
            return this.runAsync<any>(() => {
                try {
                    return this.multisigUpload.uploadDataOnMultisigTransaction(parameters);
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.util.concurrent.CompletionException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            }, <any>(callback));
        }

        /**
         * Upload file on multisig transaction.
         * 
         * @param {io.nem.xpx.facade.multisigupload.MultisigUploadFileParameter} parameters the parameters
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the completable future
         */
        public uploadFileOnMultisigTransaction(parameters : io.nem.xpx.facade.multisigupload.MultisigUploadFileParameter, callback : io.nem.xpx.callback.ServiceAsyncCallback<io.nem.xpx.facade.multisigupload.MultisigUploadResult>) : java.util.concurrent.CompletableFuture<io.nem.xpx.facade.multisigupload.MultisigUploadResult> {
            return this.runAsync<any>(() => {
                try {
                    return this.multisigUpload.uploadFileOnMultisigTransaction(parameters);
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.util.concurrent.CompletionException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            }, <any>(callback));
        }

        /**
         * Upload binary on multisig transaction.
         * 
         * @param {io.nem.xpx.facade.multisigupload.MultisigUploadBinaryParameter} parameters the parameters
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the completable future
         */
        public uploadBinaryOnMultisigTransaction(parameters : io.nem.xpx.facade.multisigupload.MultisigUploadBinaryParameter, callback : io.nem.xpx.callback.ServiceAsyncCallback<io.nem.xpx.facade.multisigupload.MultisigUploadResult>) : java.util.concurrent.CompletableFuture<io.nem.xpx.facade.multisigupload.MultisigUploadResult> {
            return this.runAsync<any>(() => {
                try {
                    return this.multisigUpload.uploadBinaryOnMultisigTransaction(parameters);
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.util.concurrent.CompletionException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            }, <any>(callback));
        }
    }
    MultisigUploadAsync["__class"] = "io.nem.xpx.facade.multisigupload.MultisigUploadAsync";

}

