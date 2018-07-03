/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service {
    /**
     * Instantiates a new nem transaction api.
     * 
     * @param {org.nem.core.node.NodeEndpoint} nodeEndpoint the node endpoint
     * @param {org.nem.core.connect.client.DefaultAsyncNemConnector} asyncNemConnector the async nem connector
     * @class
     */
    export class NemTransactionApi {
        /**
         * The node endpoint.
         */
        /*private*/ nodeEndpoint : org.nem.core.node.NodeEndpoint;

        /**
         * The async nem connector.
         */
        /*private*/ asyncNemConnector : org.nem.core.connect.client.DefaultAsyncNemConnector<org.nem.core.node.ApiId>;

        public constructor(nodeEndpoint : org.nem.core.node.NodeEndpoint, asyncNemConnector : org.nem.core.connect.client.DefaultAsyncNemConnector<org.nem.core.node.ApiId>) {
            if(this.nodeEndpoint===undefined) this.nodeEndpoint = null;
            if(this.asyncNemConnector===undefined) this.asyncNemConnector = null;
            this.nodeEndpoint = nodeEndpoint;
            this.asyncNemConnector = asyncNemConnector;
        }

        /**
         * Gets the transaction.
         * 
         * @param {string} hash
         * the hash
         * @return {org.nem.core.model.ncc.TransactionMetaDataPair} the transaction
         * @throws InterruptedException
         * the interrupted exception
         * @throws ExecutionException
         * the execution exception
         * @throws ApiException
         * the api exception
         */
        public getTransaction(hash : string) : org.nem.core.model.ncc.TransactionMetaDataPair {
            let des : org.nem.core.serialization.Deserializer;
            let trans : org.nem.core.model.ncc.TransactionMetaDataPair;
            des = this.asyncNemConnector.getAsync(this.nodeEndpoint, org.nem.core.connect.client.NisApiId["_$wrappers"][org.nem.core.connect.client.NisApiId.NIS_REST_TRANSACTION_GET], "hash=" + hash).get();
            trans = new org.nem.core.model.ncc.TransactionMetaDataPair(des);
            return trans;
        }

        public getAllTransactions$java_lang_String(address : string) : Array<org.nem.core.model.ncc.TransactionMetaDataPair> {
            let des : org.nem.core.serialization.Deserializer;
            let list : Array<org.nem.core.model.ncc.TransactionMetaDataPair>;
            des = this.asyncNemConnector.getAsync(this.nodeEndpoint, org.nem.core.connect.client.NisApiId["_$wrappers"][org.nem.core.connect.client.NisApiId.NIS_REST_ACCOUNT_TRANSFERS_ALL], "address=" + address).get();
            list = <Array<org.nem.core.model.ncc.TransactionMetaDataPair>><any>des.readObjectArray<any>("data", (arg0) => { return new org.nem.core.model.ncc.TransactionMetaDataPair(arg0) });
            return list;
        }

        /**
         * Gets the all transactions with a page size.
         * 
         * @param {string} address
         * the address
         * @param {string} pageSize
         * the page size
         * @return {org.nem.core.model.ncc.TransactionMetaDataPair[]} the all transactions with page size
         * @throws InterruptedException
         * the interrupted exception
         * @throws ExecutionException
         * the execution exception
         * @throws ApiException
         * the api exception
         */
        public getAllTransactionsWithPageSize(address : string, pageSize : string) : Array<org.nem.core.model.ncc.TransactionMetaDataPair> {
            let des : org.nem.core.serialization.Deserializer;
            let list : Array<org.nem.core.model.ncc.TransactionMetaDataPair>;
            des = this.asyncNemConnector.getAsync(this.nodeEndpoint, org.nem.core.connect.client.NisApiId["_$wrappers"][org.nem.core.connect.client.NisApiId.NIS_REST_ACCOUNT_TRANSFERS_ALL], "address=" + address + "&pageSize=" + pageSize).get();
            list = <Array<org.nem.core.model.ncc.TransactionMetaDataPair>><any>des.readObjectArray<any>("data", (arg0) => { return new org.nem.core.model.ncc.TransactionMetaDataPair(arg0) });
            return list;
        }

        public getAllTransactions$java_lang_String$java_lang_String(address : string, hash : string) : Array<org.nem.core.model.ncc.TransactionMetaDataPair> {
            let des : org.nem.core.serialization.Deserializer;
            let list : Array<org.nem.core.model.ncc.TransactionMetaDataPair>;
            des = this.asyncNemConnector.getAsync(this.nodeEndpoint, org.nem.core.connect.client.NisApiId["_$wrappers"][org.nem.core.connect.client.NisApiId.NIS_REST_ACCOUNT_TRANSFERS_ALL], "address=" + address + "&hash=" + hash).get();
            list = <Array<org.nem.core.model.ncc.TransactionMetaDataPair>><any>des.readObjectArray<any>("data", (arg0) => { return new org.nem.core.model.ncc.TransactionMetaDataPair(arg0) });
            return list;
        }

        public getAllTransactions$java_lang_String$java_lang_String$java_lang_String(address : string, hash : string, id : string) : Array<org.nem.core.model.ncc.TransactionMetaDataPair> {
            let des : org.nem.core.serialization.Deserializer;
            let list : Array<org.nem.core.model.ncc.TransactionMetaDataPair>;
            des = this.asyncNemConnector.getAsync(this.nodeEndpoint, org.nem.core.connect.client.NisApiId["_$wrappers"][org.nem.core.connect.client.NisApiId.NIS_REST_ACCOUNT_TRANSFERS_ALL], "address=" + address + "&hash=" + hash + "&id=" + id).get();
            list = <Array<org.nem.core.model.ncc.TransactionMetaDataPair>><any>des.readObjectArray<any>("data", (arg0) => { return new org.nem.core.model.ncc.TransactionMetaDataPair(arg0) });
            return list;
        }

        /**
         * Gets the all transactions.
         * 
         * @param {string} address
         * the address
         * @param {string} hash
         * the hash
         * @param {string} id
         * the id
         * @return {org.nem.core.model.ncc.TransactionMetaDataPair[]} the all transactions
         * @throws InterruptedException
         * the interrupted exception
         * @throws ExecutionException
         * the execution exception
         * @throws ApiException
         * the api exception
         */
        public getAllTransactions(address? : any, hash? : any, id? : any) : any {
            if(((typeof address === 'string') || address === null) && ((typeof hash === 'string') || hash === null) && ((typeof id === 'string') || id === null)) {
                return <any>this.getAllTransactions$java_lang_String$java_lang_String$java_lang_String(address, hash, id);
            } else if(((typeof address === 'string') || address === null) && ((typeof hash === 'string') || hash === null) && id === undefined) {
                return <any>this.getAllTransactions$java_lang_String$java_lang_String(address, hash);
            } else if(((typeof address === 'string') || address === null) && hash === undefined && id === undefined) {
                return <any>this.getAllTransactions$java_lang_String(address);
            } else throw new Error('invalid overload');
        }

        public getIncomingTransactions$java_lang_String(address : string) : Array<org.nem.core.model.ncc.TransactionMetaDataPair> {
            let des : org.nem.core.serialization.Deserializer;
            let list : Array<org.nem.core.model.ncc.TransactionMetaDataPair>;
            des = this.asyncNemConnector.getAsync(this.nodeEndpoint, org.nem.core.connect.client.NisApiId["_$wrappers"][org.nem.core.connect.client.NisApiId.NIS_REST_ACCOUNT_TRANSFERS_INCOMING], "address=" + address).get();
            list = <Array<org.nem.core.model.ncc.TransactionMetaDataPair>><any>des.readObjectArray<any>("data", (arg0) => { return new org.nem.core.model.ncc.TransactionMetaDataPair(arg0) });
            return list;
        }

        public getIncomingTransactions$java_lang_String$java_lang_String(address : string, hash : string) : Array<org.nem.core.model.ncc.TransactionMetaDataPair> {
            let des : org.nem.core.serialization.Deserializer;
            let list : Array<org.nem.core.model.ncc.TransactionMetaDataPair>;
            des = this.asyncNemConnector.getAsync(this.nodeEndpoint, org.nem.core.connect.client.NisApiId["_$wrappers"][org.nem.core.connect.client.NisApiId.NIS_REST_ACCOUNT_TRANSFERS_INCOMING], "address=" + address + "&hash=" + hash).get();
            list = <Array<org.nem.core.model.ncc.TransactionMetaDataPair>><any>des.readObjectArray<any>("data", (arg0) => { return new org.nem.core.model.ncc.TransactionMetaDataPair(arg0) });
            return list;
        }

        public getIncomingTransactions$java_lang_String$java_lang_String$java_lang_String(address : string, hash : string, id : string) : Array<org.nem.core.model.ncc.TransactionMetaDataPair> {
            let des : org.nem.core.serialization.Deserializer;
            let list : Array<org.nem.core.model.ncc.TransactionMetaDataPair>;
            des = this.asyncNemConnector.getAsync(this.nodeEndpoint, org.nem.core.connect.client.NisApiId["_$wrappers"][org.nem.core.connect.client.NisApiId.NIS_REST_ACCOUNT_TRANSFERS_INCOMING], "address=" + address + "&hash=" + hash + "&id=" + id).get();
            list = <Array<org.nem.core.model.ncc.TransactionMetaDataPair>><any>des.readObjectArray<any>("data", (arg0) => { return new org.nem.core.model.ncc.TransactionMetaDataPair(arg0) });
            return list;
        }

        /**
         * Gets the incoming transactions.
         * 
         * @param {string} address
         * the address
         * @param {string} hash
         * the hash
         * @param {string} id
         * the id
         * @return {org.nem.core.model.ncc.TransactionMetaDataPair[]} the incoming transactions
         * @throws InterruptedException
         * the interrupted exception
         * @throws ExecutionException
         * the execution exception
         * @throws ApiException
         * the api exception
         */
        public getIncomingTransactions(address? : any, hash? : any, id? : any) : any {
            if(((typeof address === 'string') || address === null) && ((typeof hash === 'string') || hash === null) && ((typeof id === 'string') || id === null)) {
                return <any>this.getIncomingTransactions$java_lang_String$java_lang_String$java_lang_String(address, hash, id);
            } else if(((typeof address === 'string') || address === null) && ((typeof hash === 'string') || hash === null) && id === undefined) {
                return <any>this.getIncomingTransactions$java_lang_String$java_lang_String(address, hash);
            } else if(((typeof address === 'string') || address === null) && hash === undefined && id === undefined) {
                return <any>this.getIncomingTransactions$java_lang_String(address);
            } else throw new Error('invalid overload');
        }

        public getOutgoingTransactions$java_lang_String(address : string) : Array<org.nem.core.model.ncc.TransactionMetaDataPair> {
            let list : Array<org.nem.core.model.ncc.TransactionMetaDataPair>;
            let des : org.nem.core.serialization.Deserializer;
            des = this.asyncNemConnector.getAsync(this.nodeEndpoint, org.nem.core.connect.client.NisApiId["_$wrappers"][org.nem.core.connect.client.NisApiId.NIS_REST_ACCOUNT_TRANSFERS_OUTGOING], "address=" + address).get();
            list = <Array<org.nem.core.model.ncc.TransactionMetaDataPair>><any>des.readObjectArray<any>("data", (arg0) => { return new org.nem.core.model.ncc.TransactionMetaDataPair(arg0) });
            return list;
        }

        public getOutgoingTransactions$java_lang_String$java_lang_String(address : string, hash : string) : Array<org.nem.core.model.ncc.TransactionMetaDataPair> {
            let list : Array<org.nem.core.model.ncc.TransactionMetaDataPair>;
            let des : org.nem.core.serialization.Deserializer;
            des = this.asyncNemConnector.getAsync(this.nodeEndpoint, org.nem.core.connect.client.NisApiId["_$wrappers"][org.nem.core.connect.client.NisApiId.NIS_REST_ACCOUNT_TRANSFERS_OUTGOING], "address=" + address + "&hash=" + hash).get();
            list = <Array<org.nem.core.model.ncc.TransactionMetaDataPair>><any>des.readObjectArray<any>("data", (arg0) => { return new org.nem.core.model.ncc.TransactionMetaDataPair(arg0) });
            return list;
        }

        public getOutgoingTransactions$java_lang_String$java_lang_String$java_lang_String(address : string, hash : string, id : string) : Array<org.nem.core.model.ncc.TransactionMetaDataPair> {
            let list : Array<org.nem.core.model.ncc.TransactionMetaDataPair>;
            let des : org.nem.core.serialization.Deserializer;
            des = this.asyncNemConnector.getAsync(this.nodeEndpoint, org.nem.core.connect.client.NisApiId["_$wrappers"][org.nem.core.connect.client.NisApiId.NIS_REST_ACCOUNT_TRANSFERS_OUTGOING], "address=" + address + "&hash=" + hash + "&id=" + id).get();
            list = <Array<org.nem.core.model.ncc.TransactionMetaDataPair>><any>des.readObjectArray<any>("data", (arg0) => { return new org.nem.core.model.ncc.TransactionMetaDataPair(arg0) });
            return list;
        }

        /**
         * Gets the outgoing transactions.
         * 
         * @param {string} address
         * the address
         * @param {string} hash
         * the hash
         * @param {string} id
         * the id
         * @return {org.nem.core.model.ncc.TransactionMetaDataPair[]} the outgoing transactions
         * @throws InterruptedException
         * the interrupted exception
         * @throws ExecutionException
         * the execution exception
         * @throws ApiException
         * the api exception
         */
        public getOutgoingTransactions(address? : any, hash? : any, id? : any) : any {
            if(((typeof address === 'string') || address === null) && ((typeof hash === 'string') || hash === null) && ((typeof id === 'string') || id === null)) {
                return <any>this.getOutgoingTransactions$java_lang_String$java_lang_String$java_lang_String(address, hash, id);
            } else if(((typeof address === 'string') || address === null) && ((typeof hash === 'string') || hash === null) && id === undefined) {
                return <any>this.getOutgoingTransactions$java_lang_String$java_lang_String(address, hash);
            } else if(((typeof address === 'string') || address === null) && hash === undefined && id === undefined) {
                return <any>this.getOutgoingTransactions$java_lang_String(address);
            } else throw new Error('invalid overload');
        }

        /**
         * Gets the unconfirmed transactions.
         * 
         * @param {string} address
         * the address
         * @return {org.nem.core.model.ncc.TransactionMetaDataPair[]} the unconfirmed transactions
         * @throws InterruptedException
         * the interrupted exception
         * @throws ExecutionException
         * the execution exception
         * @throws ApiException
         * the api exception
         */
        public getUnconfirmedTransactions(address : string) : Array<org.nem.core.model.ncc.TransactionMetaDataPair> {
            let des : org.nem.core.serialization.Deserializer;
            let list : Array<org.nem.core.model.ncc.TransactionMetaDataPair>;
            des = this.asyncNemConnector.getAsync(this.nodeEndpoint, org.nem.core.connect.client.NisApiId["_$wrappers"][org.nem.core.connect.client.NisApiId.NIS_REST_ACCOUNT_UNCONFIRMED], "address=" + address).get();
            list = <Array<org.nem.core.model.ncc.TransactionMetaDataPair>><any>des.readObjectArray<any>("data", (arg0) => { return new org.nem.core.model.ncc.TransactionMetaDataPair(arg0) });
            return list;
        }

        /**
         * Send transfer transaction.
         * 
         * @param {Array} data the data
         * @param {Array} signature the signature
         * @return {org.nem.core.model.ncc.NemAnnounceResult} the nem announce result
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         * @throws ApiException the api exception
         */
        public sendTransferTransaction(data : number[], signature : number[]) : org.nem.core.model.ncc.NemAnnounceResult {
            let request : org.nem.core.model.ncc.RequestAnnounce = new org.nem.core.model.ncc.RequestAnnounce(data, signature);
            let future : java.util.concurrent.CompletableFuture<org.nem.core.serialization.Deserializer> = this.announceTransaction(request);
            let transDes : org.nem.core.serialization.Deserializer = future.get();
            return new org.nem.core.model.ncc.NemAnnounceResult(transDes);
        }

        /**
         * Announce transaction.
         * 
         * @param {org.nem.core.model.ncc.RequestAnnounce} request
         * the request
         * @return {java.util.concurrent.CompletableFuture} the completable future
         */
        public announceTransaction(request : org.nem.core.model.ncc.RequestAnnounce) : java.util.concurrent.CompletableFuture<org.nem.core.serialization.Deserializer> {
            let des : java.util.concurrent.CompletableFuture<org.nem.core.serialization.Deserializer> = this.asyncNemConnector.postAsync(this.nodeEndpoint, org.nem.core.connect.client.NisApiId["_$wrappers"][org.nem.core.connect.client.NisApiId.NIS_REST_TRANSACTION_ANNOUNCE], new org.nem.core.connect.HttpJsonPostRequest(request));
            return des;
        }
    }
    NemTransactionApi["__class"] = "io.nem.xpx.service.NemTransactionApi";

}

