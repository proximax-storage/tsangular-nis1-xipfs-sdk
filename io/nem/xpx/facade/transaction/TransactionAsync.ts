/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.transaction {
    /**
     * Instantiates a new transaction async.
     * 
     * @param {io.nem.xpx.facade.connection.PeerConnection} peerConnection the peer connection
     * @class
     * @extends io.nem.xpx.facade.AbstractAsyncFacadeService
     */
    export class TransactionAsync extends io.nem.xpx.facade.AbstractAsyncFacadeService {
        /**
         * The transaction.
         */
        /*private*/ transaction : io.nem.xpx.facade.transaction.Transaction;

        public constructor(peerConnection : io.nem.xpx.facade.connection.PeerConnection) {
            super();
            if(this.transaction===undefined) this.transaction = null;
            this.transaction = new io.nem.xpx.facade.transaction.Transaction(peerConnection);
        }

        /**
         * Gets the transaction.
         * 
         * @param {string} hash the hash
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the transaction
         */
        public getTransaction(hash : string, callback : io.nem.xpx.callback.ServiceAsyncCallback<org.nem.core.model.ncc.TransactionMetaDataPair>) : java.util.concurrent.CompletableFuture<org.nem.core.model.ncc.TransactionMetaDataPair> {
            return this.runAsync<any>(() => {
                try {
                    return this.transaction.getTransaction(hash);
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.util.concurrent.CompletionException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            }, <any>(callback));
        }

        /**
         * Gets the all transactions.
         * 
         * @param {string} publicKey the public key
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the all transactions
         */
        public getAllTransactions(publicKey : string, callback : io.nem.xpx.callback.ServiceAsyncCallback<Array<org.nem.core.model.ncc.TransactionMetaDataPair>>) : java.util.concurrent.CompletableFuture<Array<org.nem.core.model.ncc.TransactionMetaDataPair>> {
            return this.runAsync<any>(() => {
                try {
                    return this.transaction.getAllTransactions(publicKey);
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.util.concurrent.CompletionException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            }, <any>(callback));
        }

        /**
         * Gets the incoming transactions.
         * 
         * @param {string} publicKey the public key
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the incoming transactions
         */
        public getIncomingTransactions(publicKey : string, callback : io.nem.xpx.callback.ServiceAsyncCallback<Array<org.nem.core.model.ncc.TransactionMetaDataPair>>) : java.util.concurrent.CompletableFuture<Array<org.nem.core.model.ncc.TransactionMetaDataPair>> {
            return this.runAsync<any>(() => {
                try {
                    return this.transaction.getIncomingTransactions(publicKey);
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.util.concurrent.CompletionException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            }, <any>(callback));
        }

        /**
         * Gets the outgoing transactions.
         * 
         * @param {string} publicKey the public key
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the outgoing transactions
         */
        public getOutgoingTransactions(publicKey : string, callback : io.nem.xpx.callback.ServiceAsyncCallback<Array<org.nem.core.model.ncc.TransactionMetaDataPair>>) : java.util.concurrent.CompletableFuture<Array<org.nem.core.model.ncc.TransactionMetaDataPair>> {
            return this.runAsync<any>(() => {
                try {
                    return this.transaction.getOutgoingTransactions(publicKey);
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.util.concurrent.CompletionException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            }, <any>(callback));
        }

        /**
         * Gets the unconfirmed transactions.
         * 
         * @param {string} publicKey the public key
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the unconfirmed transactions
         */
        public getUnconfirmedTransactions(publicKey : string, callback : io.nem.xpx.callback.ServiceAsyncCallback<Array<org.nem.core.model.ncc.TransactionMetaDataPair>>) : java.util.concurrent.CompletableFuture<Array<org.nem.core.model.ncc.TransactionMetaDataPair>> {
            return this.runAsync<any>(() => {
                try {
                    return this.transaction.getUnconfirmedTransactions(publicKey);
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.util.concurrent.CompletionException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            }, <any>(callback));
        }
    }
    TransactionAsync["__class"] = "io.nem.xpx.facade.transaction.TransactionAsync";

}

