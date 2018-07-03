/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.search {
    /**
     * Instantiates a new search.
     * 
     * @param {io.nem.xpx.facade.connection.PeerConnection} peerConnection            the peer connection
     * @class
     * @extends io.nem.xpx.facade.AbstractAsyncFacadeService
     */
    export class SearchAsync extends io.nem.xpx.facade.AbstractAsyncFacadeService {
        /**
         * The search.
         */
        /*private*/ search : io.nem.xpx.facade.search.Search;

        public constructor(peerConnection : io.nem.xpx.facade.connection.PeerConnection) {
            super();
            if(this.search===undefined) this.search = null;
            this.search = new io.nem.xpx.facade.search.Search(peerConnection);
        }

        /**
         * Search by name.
         * 
         * @param {string} xPvkey the x pvkey
         * @param {string} xPubkey the x pubkey
         * @param {string} name the name
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the completable future
         */
        public searchByName(xPvkey : string, xPubkey : string, name : string, callback : io.nem.xpx.callback.ServiceAsyncCallback<Array<io.nem.xpx.model.ResourceHashMessageJsonEntity>>) : java.util.concurrent.CompletableFuture<Array<io.nem.xpx.model.ResourceHashMessageJsonEntity>> {
            return this.runAsync<any>(() => {
                try {
                    return this.search.searchByName(xPvkey, xPubkey, name);
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.util.concurrent.CompletionException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            }, <any>(callback));
        }

        /**
         * Search by keyword.
         * 
         * @param {string} xPvkey the x pvkey
         * @param {string} xPubkey the x pubkey
         * @param {string} keywords the keywords
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the completable future
         */
        public searchByKeyword(xPvkey : string, xPubkey : string, keywords : string, callback : io.nem.xpx.callback.ServiceAsyncCallback<Array<io.nem.xpx.model.ResourceHashMessageJsonEntity>>) : java.util.concurrent.CompletableFuture<Array<io.nem.xpx.model.ResourceHashMessageJsonEntity>> {
            return this.runAsync<any>(() => {
                try {
                    return this.search.searchByKeyword(xPvkey, xPubkey, keywords);
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.util.concurrent.CompletionException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            }, <any>(callback));
        }

        /**
         * Search by keyword.
         * 
         * @param {string} xPvkey the x pvkey
         * @param {string} xPubkey the x pubkey
         * @param {string} key the key
         * @param {string} value the value
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the completable future
         */
        public searchByMetaDataKeyValue(xPvkey : string, xPubkey : string, key : string, value : string, callback : io.nem.xpx.callback.ServiceAsyncCallback<Array<io.nem.xpx.model.ResourceHashMessageJsonEntity>>) : java.util.concurrent.CompletableFuture<Array<io.nem.xpx.model.ResourceHashMessageJsonEntity>> {
            return this.runAsync<any>(() => {
                try {
                    return this.search.searchByMetaDataKeyValue(xPvkey, xPubkey, key, value);
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.util.concurrent.CompletionException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            }, <any>(callback));
        }
    }
    SearchAsync["__class"] = "io.nem.xpx.facade.search.SearchAsync";

}

