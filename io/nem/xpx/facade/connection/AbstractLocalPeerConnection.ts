/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.connection {
    /**
     * The Class AbstractLocalPeerConnection.
     * @extends io.nem.xpx.facade.connection.PeerConnection
     * @class
     */
    export abstract class AbstractLocalPeerConnection extends io.nem.xpx.facade.connection.PeerConnection {
        /**
         * The Ipfs *.
         */
        /*private*/ proximaxIpfsConnection : io.ipfs.api.IPFS;

        /**
         * The account api.
         */
        /*private*/ accountApi : io.nem.xpx.service.intf.AccountApi;

        /**
         * The data hash api.
         */
        /*private*/ dataHashApi : io.nem.xpx.service.intf.DataHashApi;

        /**
         * The download api.
         */
        /*private*/ downloadApi : io.nem.xpx.service.intf.DownloadApi;

        /**
         * The node api.
         */
        /*private*/ nodeApi : io.nem.xpx.service.intf.NodeApi;

        /**
         * The publish and subscribe api.
         */
        /*private*/ publishAndSubscribeApi : io.nem.xpx.service.intf.PublishAndSubscribeApi;

        /**
         * The search api.
         */
        /*private*/ searchApi : io.nem.xpx.service.intf.SearchApi;

        /**
         * The transaction and announce api.
         */
        /*private*/ transactionAndAnnounceApi : io.nem.xpx.service.intf.TransactionAndAnnounceApi;

        /*private*/ fileAndNamingRouteApi : io.nem.xpx.service.common.FileAndNamingRouteApi;

        /**
         * The upload api.
         */
        /*private*/ uploadApi : io.nem.xpx.service.intf.UploadApi;

        /**
         * The async nem connector.
         */
        /*private*/ __io_nem_xpx_facade_connection_AbstractLocalPeerConnection_asyncNemConnector : org.nem.core.connect.client.DefaultAsyncNemConnector<org.nem.core.node.ApiId>;

        /**
         * The nem transaction api.
         */
        /*private*/ __io_nem_xpx_facade_connection_AbstractLocalPeerConnection_nemTransactionApi : io.nem.xpx.service.NemTransactionApi;

        /**
         * The nem account api.
         */
        /*private*/ __io_nem_xpx_facade_connection_AbstractLocalPeerConnection_nemAccountApi : io.nem.xpx.service.NemAccountApi;

        /**
         * The transaction sender.
         */
        /*private*/ __io_nem_xpx_facade_connection_AbstractLocalPeerConnection_transactionSender : io.nem.xpx.service.TransactionSender;

        /**
         * The transaction fee calculators.
         */
        /*private*/ __io_nem_xpx_facade_connection_AbstractLocalPeerConnection_transactionFeeCalculators : io.nem.xpx.service.TransactionFeeCalculators;

        constructor(nodeEndpoint : org.nem.core.node.NodeEndpoint, ipfsConnection : io.ipfs.api.IPFS, syncGateways : Array<string>) {
            super();
            if(this.proximaxIpfsConnection===undefined) this.proximaxIpfsConnection = null;
            if(this.accountApi===undefined) this.accountApi = null;
            if(this.dataHashApi===undefined) this.dataHashApi = null;
            if(this.downloadApi===undefined) this.downloadApi = null;
            if(this.nodeApi===undefined) this.nodeApi = null;
            if(this.publishAndSubscribeApi===undefined) this.publishAndSubscribeApi = null;
            if(this.searchApi===undefined) this.searchApi = null;
            if(this.transactionAndAnnounceApi===undefined) this.transactionAndAnnounceApi = null;
            if(this.fileAndNamingRouteApi===undefined) this.fileAndNamingRouteApi = null;
            if(this.uploadApi===undefined) this.uploadApi = null;
            if(this.__io_nem_xpx_facade_connection_AbstractLocalPeerConnection_asyncNemConnector===undefined) this.__io_nem_xpx_facade_connection_AbstractLocalPeerConnection_asyncNemConnector = null;
            if(this.__io_nem_xpx_facade_connection_AbstractLocalPeerConnection_nemTransactionApi===undefined) this.__io_nem_xpx_facade_connection_AbstractLocalPeerConnection_nemTransactionApi = null;
            if(this.__io_nem_xpx_facade_connection_AbstractLocalPeerConnection_nemAccountApi===undefined) this.__io_nem_xpx_facade_connection_AbstractLocalPeerConnection_nemAccountApi = null;
            if(this.__io_nem_xpx_facade_connection_AbstractLocalPeerConnection_transactionSender===undefined) this.__io_nem_xpx_facade_connection_AbstractLocalPeerConnection_transactionSender = null;
            if(this.__io_nem_xpx_facade_connection_AbstractLocalPeerConnection_transactionFeeCalculators===undefined) this.__io_nem_xpx_facade_connection_AbstractLocalPeerConnection_transactionFeeCalculators = null;
            this.nodeEndpoint = nodeEndpoint;
            this.proximaxIpfsConnection = ipfsConnection;
            this.setSyncGateways(syncGateways);
        }

        /**
         * 
         * @return {boolean}
         */
        public isLocal() : boolean {
            return true;
        }

        /**
         * 
         * @return {*}
         */
        public getAccountApi() : io.nem.xpx.service.intf.AccountApi {
            if(this.accountApi == null) this.accountApi = new io.nem.xpx.service.local.LocalAccountApi(this.getNemTransactionApi());
            return this.accountApi;
        }

        /**
         * 
         * @return {*}
         */
        public getDataHashApi() : io.nem.xpx.service.intf.DataHashApi {
            if(this.dataHashApi == null) this.dataHashApi = new io.nem.xpx.service.local.LocalDataHashApi(this.proximaxIpfsConnection);
            return this.dataHashApi;
        }

        /**
         * 
         * @return {*}
         */
        public getDirectoryLoadApi() : io.nem.xpx.service.intf.DirectoryLoadApi {
            throw Object.defineProperty(new Error("not supported"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * 
         * @return {io.nem.xpx.service.common.FileAndNamingRouteApi}
         */
        public getFileAndNamingRouteApi() : io.nem.xpx.service.common.FileAndNamingRouteApi {
            throw Object.defineProperty(new Error("not supported"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * 
         * @return {*}
         */
        public getDownloadApi() : io.nem.xpx.service.intf.DownloadApi {
            if(this.downloadApi == null) this.downloadApi = new io.nem.xpx.service.local.LocalDownloadApi(this.getNemTransactionApi(), this.proximaxIpfsConnection);
            return this.downloadApi;
        }

        /**
         * 
         * @return {*}
         */
        public getNodeApi() : io.nem.xpx.service.intf.NodeApi {
            if(this.nodeApi == null) this.nodeApi = new io.nem.xpx.service.local.LocalNodeApi(this.proximaxIpfsConnection);
            return this.nodeApi;
        }

        /**
         * 
         * @return {*}
         */
        public getPublishAndSubscribeApi() : io.nem.xpx.service.intf.PublishAndSubscribeApi {
            if(this.publishAndSubscribeApi == null) this.publishAndSubscribeApi = new io.nem.xpx.service.local.LocalPublishAndSubscribeApi(this.proximaxIpfsConnection);
            return this.publishAndSubscribeApi;
        }

        /**
         * 
         * @return {*}
         */
        public getSearchApi() : io.nem.xpx.service.intf.SearchApi {
            if(this.searchApi == null) this.searchApi = new io.nem.xpx.service.local.LocalSearchApi(this.getNemTransactionApi());
            return this.searchApi;
        }

        /**
         * 
         * @return {*}
         */
        public getTransactionAndAnnounceApi() : io.nem.xpx.service.intf.TransactionAndAnnounceApi {
            if(this.transactionAndAnnounceApi == null) this.transactionAndAnnounceApi = new io.nem.xpx.service.local.LocalTransactionAndAnnounceApi(this.getNemTransactionApi());
            return this.transactionAndAnnounceApi;
        }

        /**
         * 
         * @return {*}
         */
        public getUploadApi() : io.nem.xpx.service.intf.UploadApi {
            if(this.uploadApi == null) this.uploadApi = new io.nem.xpx.service.local.LocalUploadApi(this.proximaxIpfsConnection);
            return this.uploadApi;
        }
    }
    AbstractLocalPeerConnection["__class"] = "io.nem.xpx.facade.connection.AbstractLocalPeerConnection";

}

