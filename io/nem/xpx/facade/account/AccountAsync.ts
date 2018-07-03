/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.account {
    /**
     * Instantiates a new account async.
     * 
     * @param {io.nem.xpx.facade.connection.PeerConnection} peerConnection the peer connection
     * @param {string} publicKey the public key
     * @class
     * @extends io.nem.xpx.facade.AbstractAsyncFacadeService
     */
    export class AccountAsync extends io.nem.xpx.facade.AbstractAsyncFacadeService {
        /**
         * The account.
         */
        /*private*/ account : io.nem.xpx.facade.account.Account;

        public constructor(peerConnection : io.nem.xpx.facade.connection.PeerConnection, publicKey : string) {
            super();
            if(this.account===undefined) this.account = null;
            this.account = new io.nem.xpx.facade.account.Account(peerConnection, publicKey);
        }

        /**
         * Gets the incoming transactions.
         * 
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the incoming transactions
         */
        public getIncomingTransactions(callback : io.nem.xpx.callback.ServiceAsyncCallback<Array<org.nem.core.model.ncc.TransactionMetaDataPair>>) : java.util.concurrent.CompletableFuture<Array<org.nem.core.model.ncc.TransactionMetaDataPair>> {
            return this.runAsync<any>(() => {
                try {
                    return this.account.getIncomingTransactions();
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.util.concurrent.CompletionException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            }, <any>(callback));
        }

        /**
         * Gets the all transactions.
         * 
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the all transactions
         */
        public getAllTransactions(callback : io.nem.xpx.callback.ServiceAsyncCallback<Array<org.nem.core.model.ncc.TransactionMetaDataPair>>) : java.util.concurrent.CompletableFuture<Array<org.nem.core.model.ncc.TransactionMetaDataPair>> {
            return this.runAsync<any>(() => {
                try {
                    return this.account.getAllTransactions();
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.util.concurrent.CompletionException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            }, <any>(callback));
        }

        /**
         * Gets the outgoing transactions.
         * 
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the outgoing transactions
         */
        public getOutgoingTransactions(callback : io.nem.xpx.callback.ServiceAsyncCallback<Array<org.nem.core.model.ncc.TransactionMetaDataPair>>) : java.util.concurrent.CompletableFuture<Array<org.nem.core.model.ncc.TransactionMetaDataPair>> {
            return this.runAsync<any>(() => {
                try {
                    return this.account.getOutgoingTransactions();
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.util.concurrent.CompletionException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            }, <any>(callback));
        }

        /**
         * Gets the unconfirmed transactions.
         * 
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the unconfirmed transactions
         */
        public getUnconfirmedTransactions(callback : io.nem.xpx.callback.ServiceAsyncCallback<Array<org.nem.core.model.ncc.TransactionMetaDataPair>>) : java.util.concurrent.CompletableFuture<Array<org.nem.core.model.ncc.TransactionMetaDataPair>> {
            return this.runAsync<any>(() => {
                try {
                    return this.account.getUnconfirmedTransactions();
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.util.concurrent.CompletionException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            }, <any>(callback));
        }
    }
    AccountAsync["__class"] = "io.nem.xpx.facade.account.AccountAsync";

}

