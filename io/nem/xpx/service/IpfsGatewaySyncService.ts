/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service {
    export class IpfsGatewaySyncService {
        /*private*/ syncGateways : Array<string>;

        /*private*/ executor : java.util.concurrent.ExecutorService;

        /*private*/ httpClient : io.nem.xpx.service.HttpClient;

        public constructor(syncGateways? : any, httpClient? : any) {
            if(((syncGateways != null && (syncGateways instanceof Array)) || syncGateways === null) && ((httpClient != null && httpClient instanceof <any>io.nem.xpx.service.HttpClient) || httpClient === null)) {
                let __args = Array.prototype.slice.call(arguments);
                if(this.syncGateways===undefined) this.syncGateways = null;
                if(this.executor===undefined) this.executor = null;
                if(this.httpClient===undefined) this.httpClient = null;
                if(this.syncGateways===undefined) this.syncGateways = null;
                if(this.executor===undefined) this.executor = null;
                if(this.httpClient===undefined) this.httpClient = null;
                (() => {
                    this.syncGateways = syncGateways;
                    this.executor = java.util.concurrent.Executors.newCachedThreadPool();
                    this.httpClient = httpClient;
                })();
            } else if(((syncGateways != null && (syncGateways instanceof Array)) || syncGateways === null) && httpClient === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let httpClient : any = new io.nem.xpx.service.HttpClient();
                    if(this.syncGateways===undefined) this.syncGateways = null;
                    if(this.executor===undefined) this.executor = null;
                    if(this.httpClient===undefined) this.httpClient = null;
                    if(this.syncGateways===undefined) this.syncGateways = null;
                    if(this.executor===undefined) this.executor = null;
                    if(this.httpClient===undefined) this.httpClient = null;
                    (() => {
                        this.syncGateways = syncGateways;
                        this.executor = java.util.concurrent.Executors.newCachedThreadPool();
                        this.httpClient = httpClient;
                    })();
                }
            } else throw new Error('invalid overload');
        }

        public syncToGatewaysAsynchronously(dataHash : string) {
            if(this.syncGateways == null || /* isEmpty */(this.syncGateways.length == 0)) return;
            this.executor.submit(() => this.syncGateways.forEach((gateway) => {
                try {
                    let gatewayUrl : java.net.URL = new java.net.URL(gateway + "/ipfs/" + dataHash);
                    this.httpClient.head(gatewayUrl);
                } catch(e) {
                    org.pmw.tinylog.Logger.error(java.lang.String.format("Error syncing to gateways %s for hash %s", gateway, dataHash), e);
                };
            }));
        }
    }
    IpfsGatewaySyncService["__class"] = "io.nem.xpx.service.IpfsGatewaySyncService";

}

