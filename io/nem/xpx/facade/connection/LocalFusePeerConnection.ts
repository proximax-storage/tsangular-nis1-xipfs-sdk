/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.connection {
    /**
     * Instantiates a new local fuse peer connection.
     * 
     * @param {org.nem.core.node.NodeEndpoint} nodeEndpoint the node endpoint
     * @param {string} multiAddress the multi address
     * @param {Array} syncGateways list of gateway URLs where uploads will be sync
     * @class
     * @extends io.nem.xpx.facade.connection.AbstractLocalPeerConnection
     */
    export class LocalFusePeerConnection extends io.nem.xpx.facade.connection.AbstractLocalPeerConnection {
        public constructor(nodeEndpoint? : any, multiAddress? : any, ...syncGateways : any[]) {
            if(((nodeEndpoint != null && nodeEndpoint instanceof <any>org.nem.core.node.NodeEndpoint) || nodeEndpoint === null) && ((typeof multiAddress === 'string') || multiAddress === null) && ((syncGateways != null && syncGateways instanceof <any>Array && (syncGateways.length==0 || syncGateways[0] == null ||(typeof syncGateways[0] === 'string'))) || syncGateways === null)) {
                let __args = Array.prototype.slice.call(arguments);
                super(nodeEndpoint, new io.ipfs.api.IPFS(new io.ipfs.multiaddr.MultiAddress(multiAddress)), /* asList */syncGateways.slice(0));
            } else if(((nodeEndpoint != null && nodeEndpoint instanceof <any>org.nem.core.node.NodeEndpoint) || nodeEndpoint === null) && ((typeof multiAddress === 'string') || multiAddress === null) && ((syncGateways != null && (syncGateways instanceof Array)) || syncGateways === null)) {
                let __args = Array.prototype.slice.call(arguments);
                super(nodeEndpoint, new io.ipfs.api.IPFS(new io.ipfs.multiaddr.MultiAddress(multiAddress)), syncGateways);
            } else if(((nodeEndpoint != null && nodeEndpoint instanceof <any>org.nem.core.node.NodeEndpoint) || nodeEndpoint === null) && ((multiAddress != null && multiAddress instanceof <any>Array && (multiAddress.length==0 || multiAddress[0] == null ||(typeof multiAddress[0] === 'string'))) || multiAddress === null) && syncGateways === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                let syncGateways : any[] = __args[1];
                super(nodeEndpoint, new io.ipfs.api.IPFS(new io.ipfs.multiaddr.MultiAddress("/ip4/127.0.0.1/tcp/5001")), /* asList */syncGateways.slice(0));
            } else if(((nodeEndpoint != null && nodeEndpoint instanceof <any>org.nem.core.node.NodeEndpoint) || nodeEndpoint === null) && ((multiAddress != null && (multiAddress instanceof Array)) || multiAddress === null) && syncGateways === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                let syncGateways : any = __args[1];
                super(nodeEndpoint, new io.ipfs.api.IPFS(new io.ipfs.multiaddr.MultiAddress("/ip4/127.0.0.1/tcp/5001")), syncGateways);
            } else throw new Error('invalid overload');
        }
    }
    LocalFusePeerConnection["__class"] = "io.nem.xpx.facade.connection.LocalFusePeerConnection";

}

