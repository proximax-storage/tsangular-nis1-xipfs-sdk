/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.connection {
    /**
     * Instantiates a new remote peer connection.
     * 
     * @param {string} baseUrl the base url
     * @param {Array} syncGateways list of gateway URLs where uploads will be sync
     * @class
     * @extends io.nem.xpx.facade.connection.PeerConnection
     */
    export class RemotePeerConnection extends io.nem.xpx.facade.connection.PeerConnection {
        /**
         * The api client.
         */
        /*private*/ apiClient : io.nem.ApiClient;

        /**
         * The account api.
         */
        /*private*/ accountApi : io.nem.xpx.service.intf.AccountApi;

        /**
         * The data hash api.
         */
        /*private*/ dataHashApi : io.nem.xpx.service.intf.DataHashApi;

        /**
         * The directory load api.
         */
        /*private*/ directoryLoadApi : io.nem.xpx.service.intf.DirectoryLoadApi;

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

        public constructor(baseUrl? : any, syncGateways? : any, remoteNodeApi? : any) {
            if(((typeof baseUrl === 'string') || baseUrl === null) && ((syncGateways != null && (syncGateways instanceof Array)) || syncGateways === null) && ((remoteNodeApi != null && remoteNodeApi instanceof <any>io.nem.xpx.service.remote.RemoteNodeApi) || remoteNodeApi === null)) {
                let __args = Array.prototype.slice.call(arguments);
                super();
                if(this.apiClient===undefined) this.apiClient = null;
                if(this.accountApi===undefined) this.accountApi = null;
                if(this.dataHashApi===undefined) this.dataHashApi = null;
                if(this.directoryLoadApi===undefined) this.directoryLoadApi = null;
                if(this.downloadApi===undefined) this.downloadApi = null;
                if(this.nodeApi===undefined) this.nodeApi = null;
                if(this.publishAndSubscribeApi===undefined) this.publishAndSubscribeApi = null;
                if(this.searchApi===undefined) this.searchApi = null;
                if(this.transactionAndAnnounceApi===undefined) this.transactionAndAnnounceApi = null;
                if(this.fileAndNamingRouteApi===undefined) this.fileAndNamingRouteApi = null;
                if(this.uploadApi===undefined) this.uploadApi = null;
                if(this.apiClient===undefined) this.apiClient = null;
                if(this.accountApi===undefined) this.accountApi = null;
                if(this.dataHashApi===undefined) this.dataHashApi = null;
                if(this.directoryLoadApi===undefined) this.directoryLoadApi = null;
                if(this.downloadApi===undefined) this.downloadApi = null;
                if(this.nodeApi===undefined) this.nodeApi = null;
                if(this.publishAndSubscribeApi===undefined) this.publishAndSubscribeApi = null;
                if(this.searchApi===undefined) this.searchApi = null;
                if(this.transactionAndAnnounceApi===undefined) this.transactionAndAnnounceApi = null;
                if(this.fileAndNamingRouteApi===undefined) this.fileAndNamingRouteApi = null;
                if(this.uploadApi===undefined) this.uploadApi = null;
                (() => {
                    this.init(baseUrl, syncGateways, remoteNodeApi);
                })();
            } else if(((typeof baseUrl === 'string') || baseUrl === null) && ((syncGateways != null && syncGateways instanceof <any>Array && (syncGateways.length==0 || syncGateways[0] == null ||(typeof syncGateways[0] === 'string'))) || syncGateways === null) && remoteNodeApi === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let syncGateways : any = /* asList */__args[1].slice(0);
                    super();
                    if(this.apiClient===undefined) this.apiClient = null;
                    if(this.accountApi===undefined) this.accountApi = null;
                    if(this.dataHashApi===undefined) this.dataHashApi = null;
                    if(this.directoryLoadApi===undefined) this.directoryLoadApi = null;
                    if(this.downloadApi===undefined) this.downloadApi = null;
                    if(this.nodeApi===undefined) this.nodeApi = null;
                    if(this.publishAndSubscribeApi===undefined) this.publishAndSubscribeApi = null;
                    if(this.searchApi===undefined) this.searchApi = null;
                    if(this.transactionAndAnnounceApi===undefined) this.transactionAndAnnounceApi = null;
                    if(this.fileAndNamingRouteApi===undefined) this.fileAndNamingRouteApi = null;
                    if(this.uploadApi===undefined) this.uploadApi = null;
                    if(this.apiClient===undefined) this.apiClient = null;
                    if(this.accountApi===undefined) this.accountApi = null;
                    if(this.dataHashApi===undefined) this.dataHashApi = null;
                    if(this.directoryLoadApi===undefined) this.directoryLoadApi = null;
                    if(this.downloadApi===undefined) this.downloadApi = null;
                    if(this.nodeApi===undefined) this.nodeApi = null;
                    if(this.publishAndSubscribeApi===undefined) this.publishAndSubscribeApi = null;
                    if(this.searchApi===undefined) this.searchApi = null;
                    if(this.transactionAndAnnounceApi===undefined) this.transactionAndAnnounceApi = null;
                    if(this.fileAndNamingRouteApi===undefined) this.fileAndNamingRouteApi = null;
                    if(this.uploadApi===undefined) this.uploadApi = null;
                    (() => {
                        this.init(baseUrl, syncGateways, null);
                    })();
                }
            } else if(((typeof baseUrl === 'string') || baseUrl === null) && ((syncGateways != null && (syncGateways instanceof Array)) || syncGateways === null) && remoteNodeApi === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                super();
                if(this.apiClient===undefined) this.apiClient = null;
                if(this.accountApi===undefined) this.accountApi = null;
                if(this.dataHashApi===undefined) this.dataHashApi = null;
                if(this.directoryLoadApi===undefined) this.directoryLoadApi = null;
                if(this.downloadApi===undefined) this.downloadApi = null;
                if(this.nodeApi===undefined) this.nodeApi = null;
                if(this.publishAndSubscribeApi===undefined) this.publishAndSubscribeApi = null;
                if(this.searchApi===undefined) this.searchApi = null;
                if(this.transactionAndAnnounceApi===undefined) this.transactionAndAnnounceApi = null;
                if(this.fileAndNamingRouteApi===undefined) this.fileAndNamingRouteApi = null;
                if(this.uploadApi===undefined) this.uploadApi = null;
                if(this.apiClient===undefined) this.apiClient = null;
                if(this.accountApi===undefined) this.accountApi = null;
                if(this.dataHashApi===undefined) this.dataHashApi = null;
                if(this.directoryLoadApi===undefined) this.directoryLoadApi = null;
                if(this.downloadApi===undefined) this.downloadApi = null;
                if(this.nodeApi===undefined) this.nodeApi = null;
                if(this.publishAndSubscribeApi===undefined) this.publishAndSubscribeApi = null;
                if(this.searchApi===undefined) this.searchApi = null;
                if(this.transactionAndAnnounceApi===undefined) this.transactionAndAnnounceApi = null;
                if(this.fileAndNamingRouteApi===undefined) this.fileAndNamingRouteApi = null;
                if(this.uploadApi===undefined) this.uploadApi = null;
                (() => {
                    this.init(baseUrl, syncGateways, null);
                })();
            } else throw new Error('invalid overload');
        }

        /*private*/ init(baseUrl : string, syncGateways : Array<string>, remoteNodeApi : io.nem.xpx.service.remote.RemoteNodeApi) {
            this.apiClient = new io.nem.ApiClient().setBasePath(baseUrl);
            this.nodeApi = remoteNodeApi == null?new io.nem.xpx.service.remote.RemoteNodeApi(this.apiClient):remoteNodeApi;
            try {
                let nodeInfo : io.nem.xpx.model.NodeInfo = this.nodeApi.getNodeInfoUsingGET();
                io.nem.xpx.factory.ConnectionFactory.setNetwork(nodeInfo.getNetwork());
                this.nodeEndpoint = new org.nem.core.node.NodeEndpoint("http", nodeInfo.getNetworkAddress(), parseFloat(nodeInfo.getNetworkPort()));
                this.setSyncGateways(syncGateways, nodeInfo.getSyncGateways());
            } catch(e) {
                throw new io.nem.xpx.exceptions.PeerConnectionInitFailureException(java.lang.String.format("Failed it initialise due exception on API: %s", baseUrl), e);
            };
        }

        /**
         * Gets the api client.
         * 
         * @return {io.nem.ApiClient} the api client
         */
        public getApiClient() : io.nem.ApiClient {
            return this.apiClient;
        }

        /**
         * 
         * @return {boolean}
         */
        public isLocal() : boolean {
            return false;
        }

        /**
         * 
         * @return {*}
         */
        public getAccountApi() : io.nem.xpx.service.intf.AccountApi {
            if(this.accountApi == null) this.accountApi = new io.nem.xpx.service.remote.RemoteAccountApi(this.apiClient);
            return this.accountApi;
        }

        /**
         * 
         * @return {*}
         */
        public getDataHashApi() : io.nem.xpx.service.intf.DataHashApi {
            if(this.dataHashApi == null) this.dataHashApi = new io.nem.xpx.service.remote.RemoteDataHashApi(this.apiClient);
            return this.dataHashApi;
        }

        /**
         * 
         * @return {*}
         */
        public getDirectoryLoadApi() : io.nem.xpx.service.intf.DirectoryLoadApi {
            if(this.directoryLoadApi == null) this.directoryLoadApi = new io.nem.xpx.service.remote.RemoteDirectoryLoadApi(this.apiClient);
            return this.directoryLoadApi;
        }

        /**
         * 
         * @return {*}
         */
        public getDownloadApi() : io.nem.xpx.service.intf.DownloadApi {
            if(this.downloadApi == null) this.downloadApi = new io.nem.xpx.service.remote.RemoteDownloadApi(this.apiClient);
            return this.downloadApi;
        }

        /**
         * 
         * @return {*}
         */
        public getNodeApi() : io.nem.xpx.service.intf.NodeApi {
            return this.nodeApi;
        }

        /**
         * 
         * @return {*}
         */
        public getPublishAndSubscribeApi() : io.nem.xpx.service.intf.PublishAndSubscribeApi {
            if(this.publishAndSubscribeApi == null) this.publishAndSubscribeApi = new io.nem.xpx.service.remote.RemotePublishAndSubscribeApi(this.apiClient);
            return this.publishAndSubscribeApi;
        }

        /**
         * 
         * @return {io.nem.xpx.service.common.FileAndNamingRouteApi}
         */
        public getFileAndNamingRouteApi() : io.nem.xpx.service.common.FileAndNamingRouteApi {
            if(this.fileAndNamingRouteApi == null) this.fileAndNamingRouteApi = new io.nem.xpx.service.common.FileAndNamingRouteApi(this.apiClient);
            return this.fileAndNamingRouteApi;
        }

        /**
         * 
         * @return {*}
         */
        public getSearchApi() : io.nem.xpx.service.intf.SearchApi {
            if(this.searchApi == null) this.searchApi = new io.nem.xpx.service.remote.RemoteSearchApi(this.apiClient, this.getNemTransactionApi());
            return this.searchApi;
        }

        /**
         * 
         * @return {*}
         */
        public getTransactionAndAnnounceApi() : io.nem.xpx.service.intf.TransactionAndAnnounceApi {
            if(this.transactionAndAnnounceApi == null) this.transactionAndAnnounceApi = new io.nem.xpx.service.remote.RemoteTransactionAndAnnounceApi(this.apiClient);
            return this.transactionAndAnnounceApi;
        }

        /**
         * 
         * @return {*}
         */
        public getUploadApi() : io.nem.xpx.service.intf.UploadApi {
            if(this.uploadApi == null) this.uploadApi = new io.nem.xpx.service.remote.RemoteUploadApi(this.apiClient);
            return this.uploadApi;
        }
    }
    RemotePeerConnection["__class"] = "io.nem.xpx.facade.connection.RemotePeerConnection";

}

