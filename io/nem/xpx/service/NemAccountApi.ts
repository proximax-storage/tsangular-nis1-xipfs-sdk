/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service {
    /**
     * Instantiates a new nem account api.
     * 
     * @param {org.nem.core.node.NodeEndpoint} nodeEndpoint the node endpoint
     * @param {org.nem.core.connect.client.DefaultAsyncNemConnector} asyncNemConnector the async nem connector
     * @class
     */
    export class NemAccountApi {
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
         * Gets the account by address.
         * 
         * @param {string} address            the address
         * @return {org.nem.core.model.ncc.AccountMetaDataPair} the account by address
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         * @throws ApiException the api exception
         */
        public getAccountByAddress(address : string) : org.nem.core.model.ncc.AccountMetaDataPair {
            let des : org.nem.core.serialization.Deserializer;
            des = this.asyncNemConnector.getAsync(this.nodeEndpoint, org.nem.core.connect.client.NisApiId["_$wrappers"][org.nem.core.connect.client.NisApiId.NIS_REST_ACCOUNT_LOOK_UP], "address=" + address).exceptionally((fn) => {
                console.error(fn.message, fn);
                return null;
            }).get();
            return new org.nem.core.model.ncc.AccountMetaDataPair(des);
        }

        /**
         * Gets the account owned mosaic.
         * 
         * @param {string} address            the address
         * @return {org.nem.core.model.mosaic.Mosaic[]} the account owned mosaic
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         * @throws ApiException the api exception
         */
        public getAccountOwnedMosaic(address : string) : Array<org.nem.core.model.mosaic.Mosaic> {
            let des : org.nem.core.serialization.Deserializer;
            let list : Array<org.nem.core.model.mosaic.Mosaic>;
            des = this.asyncNemConnector.getAsync(this.nodeEndpoint, org.nem.core.connect.client.NisApiId["_$wrappers"][org.nem.core.connect.client.NisApiId.NIS_REST_ACCOUNT_MOSAIC_OWNED], "address=" + address).get();
            list = <Array<org.nem.core.model.mosaic.Mosaic>><any>des.readObjectArray<any>("data", (arg0) => { return new org.nem.core.model.mosaic.Mosaic(arg0) });
            return list;
        }

        /**
         * Get the list of Harvest Info for the account.
         * 
         * @param {string} address the address
         * @return {org.nem.core.model.ncc.HarvestInfo[]} the account harvest info
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         * @throws ApiException the api exception
         */
        public getAccountHarvestInfo(address : string) : Array<org.nem.core.model.ncc.HarvestInfo> {
            let des : org.nem.core.serialization.Deserializer;
            let list : Array<org.nem.core.model.ncc.HarvestInfo>;
            des = this.asyncNemConnector.getAsync(this.nodeEndpoint, org.nem.core.connect.client.NisApiId["_$wrappers"][org.nem.core.connect.client.NisApiId.NIS_REST_ACCOUNT_HARVESTS], "address=" + address).get();
            list = <Array<org.nem.core.model.ncc.HarvestInfo>><any>des.readObjectArray<any>("data", (arg0) => { return new org.nem.core.model.ncc.HarvestInfo(arg0) });
            return list;
        }

        /**
         * Generate account.
         * 
         * @return {io.nem.xpx.model.GeneratedAccount} the key pair view model
         */
        public generateAccount() : io.nem.xpx.model.GeneratedAccount {
            let ga : io.nem.xpx.model.GeneratedAccount = new io.nem.xpx.model.GeneratedAccount();
            let kp : org.nem.core.crypto.KeyPair = new org.nem.core.crypto.KeyPair();
            let account : org.nem.core.model.Account = new org.nem.core.model.Account(kp);
            ga.setKeyPair(kp);
            ga.setAccount(account);
            ga.setEncodedAddress(account.getAddress().getEncoded());
            ga.setEncodedPrivateKey(kp.getPrivateKey().toString());
            ga.setEncodedPublicKey(kp.getPublicKey().toString());
            return ga;
        }
    }
    NemAccountApi["__class"] = "io.nem.xpx.service.NemAccountApi";

}

