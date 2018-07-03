/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.intf {
    /**
     * The Interface NodeApi.
     * @class
     */
    export interface NodeApi {
        /**
         * Gets the node info peers using GET.
         * 
         * @return {io.nem.xpx.model.NodeInfo} the node info peers using GET
         * @throws ApiException the api exception
         */
        getNodeInfoPeersUsingGET() : io.nem.xpx.model.NodeInfo;

        /**
         * Gets the node info using GET.
         * 
         * @return {io.nem.xpx.model.NodeInfo} the node info using GET
         * @throws ApiException the api exception
         */
        getNodeInfoUsingGET() : io.nem.xpx.model.NodeInfo;
    }
}

