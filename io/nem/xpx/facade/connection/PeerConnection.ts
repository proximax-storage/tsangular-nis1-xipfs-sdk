/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.connection {
    /**
     * The Class PeerConnection.
     * @class
     */
    export abstract class PeerConnection {
        /**
         * The node endpoint.
         */
        nodeEndpoint : org.nem.core.node.NodeEndpoint;

        /*private*/ syncGateways : Array<string>;

        /**
         * The async nem connector.
         */
        /*private*/ asyncNemConnector : org.nem.core.connect.client.DefaultAsyncNemConnector<org.nem.core.node.ApiId>;

        /**
         * The nem transaction api.
         */
        /*private*/ nemTransactionApi : io.nem.xpx.service.NemTransactionApi;

        /**
         * The nem account api.
         */
        /*private*/ nemAccountApi : io.nem.xpx.service.NemAccountApi;

        /**
         * The nem namespace and mosaics api.
         */
        /*private*/ nemNamespaceAndMosaicsApi : io.nem.xpx.service.NemNamespaceAndMosaicsApi;

        /**
         * The transaction sender.
         */
        /*private*/ transactionSender : io.nem.xpx.service.TransactionSender;

        /**
         * The transaction fee calculators.
         */
        /*private*/ transactionFeeCalculators : io.nem.xpx.service.TransactionFeeCalculators;

        /**
         * The transaction announcer.
         */
        /*private*/ transactionAnnouncer : io.nem.xpx.service.TransactionAnnouncer;

        public constructor() {
            if(this.nodeEndpoint===undefined) this.nodeEndpoint = null;
            if(this.syncGateways===undefined) this.syncGateways = null;
            if(this.asyncNemConnector===undefined) this.asyncNemConnector = null;
            if(this.nemTransactionApi===undefined) this.nemTransactionApi = null;
            if(this.nemAccountApi===undefined) this.nemAccountApi = null;
            if(this.nemNamespaceAndMosaicsApi===undefined) this.nemNamespaceAndMosaicsApi = null;
            if(this.transactionSender===undefined) this.transactionSender = null;
            if(this.transactionFeeCalculators===undefined) this.transactionFeeCalculators = null;
            if(this.transactionAnnouncer===undefined) this.transactionAnnouncer = null;
            this.syncGateways = /* emptyList */[];
        }

        /**
         * Checks if is local.
         * 
         * @return {boolean} true, if is local
         */
        public abstract isLocal() : boolean;

        /**
         * Gets the account api.
         * 
         * @return {*} the account api
         */
        public abstract getAccountApi() : io.nem.xpx.service.intf.AccountApi;

        /**
         * Gets the data hash api.
         * 
         * @return {*} the data hash api
         */
        public abstract getDataHashApi() : io.nem.xpx.service.intf.DataHashApi;

        /**
         * Gets the directory load api.
         * 
         * @return {*} the directory load api
         */
        public abstract getDirectoryLoadApi() : io.nem.xpx.service.intf.DirectoryLoadApi;

        /**
         * Gets the download api.
         * 
         * @return {*} the download api
         */
        public abstract getDownloadApi() : io.nem.xpx.service.intf.DownloadApi;

        /**
         * Gets the node api.
         * 
         * @return {*} the node api
         */
        public abstract getNodeApi() : io.nem.xpx.service.intf.NodeApi;

        /**
         * Gets the publish and subscribe api.
         * 
         * @return {*} the publish and subscribe api
         */
        public abstract getPublishAndSubscribeApi() : io.nem.xpx.service.intf.PublishAndSubscribeApi;

        public abstract getFileAndNamingRouteApi() : io.nem.xpx.service.common.FileAndNamingRouteApi;

        /**
         * Gets the search api.
         * 
         * @return {*} the search api
         */
        public abstract getSearchApi() : io.nem.xpx.service.intf.SearchApi;

        /**
         * Gets the transaction and announce api.
         * 
         * @return {*} the transaction and announce api
         */
        public abstract getTransactionAndAnnounceApi() : io.nem.xpx.service.intf.TransactionAndAnnounceApi;

        /**
         * Gets the upload api.
         * 
         * @return {*} the upload api
         */
        public abstract getUploadApi() : io.nem.xpx.service.intf.UploadApi;

        setSyncGateways(...syncGateways : Array<string>[]) {
            this.syncGateways = /* unmodifiableList */java.util.stream.Stream.of<any>(syncGateways).filter((arg0) => { return java.util.Objects.nonNull(arg0) }).flatMap<any>((list) => list.stream()).collect<any, any>(java.util.stream.Collectors.toList<any>()).slice(0);
        }

        /**
         * Gets the sync gateways.
         * 
         * @return {string[]} list of gateway URLs where uploads will be sync
         */
        public getSyncGateways() : Array<string> {
            return this.syncGateways;
        }

        /**
         * Gets the nem transaction api.
         * 
         * @return {io.nem.xpx.service.NemTransactionApi} the nem transaction api
         */
        public getNemTransactionApi() : io.nem.xpx.service.NemTransactionApi {
            if(this.nemTransactionApi == null) this.nemTransactionApi = new io.nem.xpx.service.NemTransactionApi(this.nodeEndpoint, this.getAsyncNemConnector());
            return this.nemTransactionApi;
        }

        /**
         * Gets the nem account api.
         * 
         * @return {io.nem.xpx.service.NemAccountApi} the nem account api
         */
        public getNemAccountApi() : io.nem.xpx.service.NemAccountApi {
            if(this.nemAccountApi == null) this.nemAccountApi = new io.nem.xpx.service.NemAccountApi(this.nodeEndpoint, this.getAsyncNemConnector());
            return this.nemAccountApi;
        }

        /**
         * Gets the nem namespace and mosaics api.
         * 
         * @return {io.nem.xpx.service.NemNamespaceAndMosaicsApi} the nem namespace and mosaics api
         */
        public getNemNamespaceAndMosaicsApi() : io.nem.xpx.service.NemNamespaceAndMosaicsApi {
            if(this.nemNamespaceAndMosaicsApi == null) this.nemNamespaceAndMosaicsApi = new io.nem.xpx.service.NemNamespaceAndMosaicsApi(this.nodeEndpoint, this.getAsyncNemConnector());
            return this.nemNamespaceAndMosaicsApi;
        }

        /**
         * Gets the transaction sender.
         * 
         * @return {io.nem.xpx.service.TransactionSender} the transaction sender
         */
        public getTransactionSender() : io.nem.xpx.service.TransactionSender {
            if(this.transactionSender == null) this.transactionSender = new io.nem.xpx.service.TransactionSender(this.getNemTransactionApi(), this.getNemAccountApi());
            return this.transactionSender;
        }

        /**
         * Gets the transaction fee calculators.
         * 
         * @return {io.nem.xpx.service.TransactionFeeCalculators} the transaction fee calculators
         */
        public getTransactionFeeCalculators() : io.nem.xpx.service.TransactionFeeCalculators {
            if(this.transactionFeeCalculators == null) this.transactionFeeCalculators = new io.nem.xpx.service.TransactionFeeCalculators(this.getNemAccountApi(), this.getNemNamespaceAndMosaicsApi());
            return this.transactionFeeCalculators;
        }

        /**
         * Gets the transaction announcer.
         * 
         * @return {io.nem.xpx.service.TransactionAnnouncer} the transaction announcer
         */
        public getTransactionAnnouncer() : io.nem.xpx.service.TransactionAnnouncer {
            if(this.transactionAnnouncer == null) this.transactionAnnouncer = new io.nem.xpx.service.TransactionAnnouncer(this.getTransactionFeeCalculators(), this.getTransactionSender());
            return this.transactionAnnouncer;
        }

        /**
         * Gets the async nem connector.
         * 
         * @return {org.nem.core.connect.client.DefaultAsyncNemConnector} the async nem connector
         * @private
         */
        /*private*/ getAsyncNemConnector() : org.nem.core.connect.client.DefaultAsyncNemConnector<org.nem.core.node.ApiId> {
            if(this.asyncNemConnector == null) this.asyncNemConnector = io.nem.xpx.factory.ConnectionFactory.createConnector();
            return this.asyncNemConnector;
        }
    }
    PeerConnection["__class"] = "io.nem.xpx.facade.connection.PeerConnection";

}

