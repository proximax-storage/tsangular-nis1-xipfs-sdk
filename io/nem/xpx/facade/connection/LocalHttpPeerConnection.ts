/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.connection {
    /**
     * Instantiates a new local http peer connection.
     * 
     * @param {org.nem.core.node.NodeEndpoint} nodeEndpoint the node endpoint
     * @param {io.ipfs.api.IPFS} ipfsConnection the ipfs connection
     * @param {Array} syncGateways list of gateway URLs where uploads will be sync
     * @class
     * @extends io.nem.xpx.facade.connection.AbstractLocalPeerConnection
     */
    export class LocalHttpPeerConnection extends io.nem.xpx.facade.connection.AbstractLocalPeerConnection {
        public constructor(nodeEndpoint? : any, ipfsConnection? : any, ...syncGateways : any[]) {
            if(((nodeEndpoint != null && nodeEndpoint instanceof <any>org.nem.core.node.NodeEndpoint) || nodeEndpoint === null) && ((ipfsConnection != null && ipfsConnection instanceof <any>io.ipfs.api.IPFS) || ipfsConnection === null) && ((syncGateways != null && syncGateways instanceof <any>Array && (syncGateways.length==0 || syncGateways[0] == null ||(typeof syncGateways[0] === 'string'))) || syncGateways === null)) {
                let __args = Array.prototype.slice.call(arguments);
                super(nodeEndpoint, ipfsConnection, /* asList */syncGateways.slice(0));
            } else if(((nodeEndpoint != null && nodeEndpoint instanceof <any>org.nem.core.node.NodeEndpoint) || nodeEndpoint === null) && ((ipfsConnection != null && ipfsConnection instanceof <any>io.ipfs.api.IPFS) || ipfsConnection === null) && ((syncGateways != null && (syncGateways instanceof Array)) || syncGateways === null)) {
                let __args = Array.prototype.slice.call(arguments);
                super(nodeEndpoint, ipfsConnection, syncGateways);
            } else if(((nodeEndpoint != null && nodeEndpoint instanceof <any>org.nem.core.node.NodeEndpoint) || nodeEndpoint === null) && ((typeof ipfsConnection === 'string') || ipfsConnection === null) && ((syncGateways != null && syncGateways instanceof <any>Array && (syncGateways.length==0 || syncGateways[0] == null ||(typeof syncGateways[0] === 'string'))) || syncGateways === null)) {
                let __args = Array.prototype.slice.call(arguments);
                let multiAddress : any = __args[1];
                super(nodeEndpoint, new io.ipfs.api.IPFS(new io.ipfs.multiaddr.MultiAddress(multiAddress)), /* asList */syncGateways.slice(0));
            } else if(((nodeEndpoint != null && nodeEndpoint instanceof <any>org.nem.core.node.NodeEndpoint) || nodeEndpoint === null) && ((typeof ipfsConnection === 'string') || ipfsConnection === null) && ((syncGateways != null && (syncGateways instanceof Array)) || syncGateways === null)) {
                let __args = Array.prototype.slice.call(arguments);
                let multiAddress : any = __args[1];
                super(nodeEndpoint, new io.ipfs.api.IPFS(new io.ipfs.multiaddr.MultiAddress(multiAddress)), syncGateways);
            } else if(((nodeEndpoint != null && nodeEndpoint instanceof <any>org.nem.core.node.NodeEndpoint) || nodeEndpoint === null) && ((ipfsConnection != null && ipfsConnection instanceof <any>Array && (ipfsConnection.length==0 || ipfsConnection[0] == null ||(typeof ipfsConnection[0] === 'string'))) || ipfsConnection === null) && syncGateways === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                let syncGateways : any[] = __args[1];
                super(nodeEndpoint, null, /* asList */syncGateways.slice(0));
            } else if(((nodeEndpoint != null && nodeEndpoint instanceof <any>org.nem.core.node.NodeEndpoint) || nodeEndpoint === null) && ((ipfsConnection != null && (ipfsConnection instanceof Array)) || ipfsConnection === null) && syncGateways === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                let syncGateways : any = __args[1];
                super(nodeEndpoint, null, syncGateways);
            } else throw new Error('invalid overload');
        }
    }
    LocalHttpPeerConnection["__class"] = "io.nem.xpx.facade.connection.LocalHttpPeerConnection";

}

