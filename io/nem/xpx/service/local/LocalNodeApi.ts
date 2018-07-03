/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.local {
    /**
     * Instantiates a new local node api.
     * 
     * @param {io.ipfs.api.IPFS} proximaxIfpsConnection the proximax ifps connection
     * @class
     */
    export class LocalNodeApi implements io.nem.xpx.service.intf.NodeApi {
        /**
         * The proximax ifps connection.
         */
        /*private*/ proximaxIfpsConnection : io.ipfs.api.IPFS;

        public constructor(proximaxIfpsConnection : io.ipfs.api.IPFS) {
            if(this.proximaxIfpsConnection===undefined) this.proximaxIfpsConnection = null;
            this.proximaxIfpsConnection = proximaxIfpsConnection;
        }

        /**
         * 
         * @return {io.nem.xpx.model.NodeInfo}
         */
        public getNodeInfoPeersUsingGET() : io.nem.xpx.model.NodeInfo {
            throw new io.nem.xpx.exceptions.ApiException("Method can\'t be accessed thru local connection");
        }

        /**
         * 
         * @return {io.nem.xpx.model.NodeInfo}
         */
        public getNodeInfoUsingGET() : io.nem.xpx.model.NodeInfo {
            throw new io.nem.xpx.exceptions.ApiException("Method can\'t be accessed thru local connection");
        }
    }
    LocalNodeApi["__class"] = "io.nem.xpx.service.local.LocalNodeApi";
    LocalNodeApi["__interfaces"] = ["io.nem.xpx.service.intf.NodeApi"];


}

