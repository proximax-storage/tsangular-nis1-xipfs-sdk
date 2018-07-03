/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.model {
    /**
     * NodeInfo.
     * @class
     */
    export class NodeInfo {
        /**
         * The context uri.
         */
        /*private*/ __contextUri : string = null;

        /**
         * The nem address.
         */
        /*private*/ __nemAddress : string = null;

        /**
         * The network.
         */
        /*private*/ __network : string = null;

        /**
         * The network address.
         */
        /*private*/ __networkAddress : string = null;

        /**
         * The network port.
         */
        /*private*/ __networkPort : string = null;

        /**
         * The peer id.
         */
        /*private*/ __peerId : string = null;

        /**
         * Tlist of gateway URLs where uploads will be sync.
         */
        /*private*/ syncGateways : Array<string> = null;

        /**
         * Context uri.
         * 
         * @param {string} contextUri the context uri
         * @return {io.nem.xpx.model.NodeInfo} the node info
         */
        public contextUri(contextUri : string) : NodeInfo {
            this.__contextUri = contextUri;
            return this;
        }

        /**
         * Get contextUri.
         * 
         * @return {string} contextUri
         */
        public getContextUri() : string {
            return this.__contextUri;
        }

        /**
         * Sets the context uri.
         * 
         * @param {string} contextUri the new context uri
         */
        public setContextUri(contextUri : string) {
            this.__contextUri = contextUri;
        }

        /**
         * Nem address.
         * 
         * @param {string} nemAddress the nem address
         * @return {io.nem.xpx.model.NodeInfo} the node info
         */
        public nemAddress(nemAddress : string) : NodeInfo {
            this.__nemAddress = nemAddress;
            return this;
        }

        /**
         * Get nemAddress.
         * 
         * @return {string} nemAddress
         */
        public getNemAddress() : string {
            return this.__nemAddress;
        }

        /**
         * Sets the nem address.
         * 
         * @param {string} nemAddress the new nem address
         */
        public setNemAddress(nemAddress : string) {
            this.__nemAddress = nemAddress;
        }

        /**
         * Network.
         * 
         * @param {string} network the network
         * @return {io.nem.xpx.model.NodeInfo} the node info
         */
        public network(network : string) : NodeInfo {
            this.__network = network;
            return this;
        }

        /**
         * Get network.
         * 
         * @return {string} network
         */
        public getNetwork() : string {
            return this.__network;
        }

        /**
         * Sets the network.
         * 
         * @param {string} network the new network
         */
        public setNetwork(network : string) {
            this.__network = network;
        }

        /**
         * Network address.
         * 
         * @param {string} networkAddress the network address
         * @return {io.nem.xpx.model.NodeInfo} the node info
         */
        public networkAddress(networkAddress : string) : NodeInfo {
            this.__networkAddress = networkAddress;
            return this;
        }

        /**
         * Get networkAddress.
         * 
         * @return {string} networkAddress
         */
        public getNetworkAddress() : string {
            return this.__networkAddress;
        }

        /**
         * Sets the network address.
         * 
         * @param {string} networkAddress the new network address
         */
        public setNetworkAddress(networkAddress : string) {
            this.__networkAddress = networkAddress;
        }

        /**
         * Network port.
         * 
         * @param {string} networkPort the network port
         * @return {io.nem.xpx.model.NodeInfo} the node info
         */
        public networkPort(networkPort : string) : NodeInfo {
            this.__networkPort = networkPort;
            return this;
        }

        /**
         * Get networkPort.
         * 
         * @return {string} networkPort
         */
        public getNetworkPort() : string {
            return this.__networkPort;
        }

        /**
         * Sets the network port.
         * 
         * @param {string} networkPort the new network port
         */
        public setNetworkPort(networkPort : string) {
            this.__networkPort = networkPort;
        }

        /**
         * Peer id.
         * 
         * @param {string} peerId the peer id
         * @return {io.nem.xpx.model.NodeInfo} the node info
         */
        public peerId(peerId : string) : NodeInfo {
            this.__peerId = peerId;
            return this;
        }

        /**
         * Get peerId.
         * 
         * @return {string} peerId
         */
        public getPeerId() : string {
            return this.__peerId;
        }

        /**
         * Sets the peer id.
         * 
         * @param {string} peerId the new peer id
         */
        public setPeerId(peerId : string) {
            this.__peerId = peerId;
        }

        public getSyncGateways() : Array<string> {
            return this.syncGateways;
        }

        /**
         * 
         * @param {*} o
         * @return {boolean}
         */
        public equals(o : any) : boolean {
            if(this === o) {
                return true;
            }
            if(o == null || (<any>this.constructor) !== (<any>o.constructor)) {
                return false;
            }
            let nodeInfo : NodeInfo = <NodeInfo>o;
            return java.util.Objects.equals(this.__contextUri, nodeInfo.__contextUri) && java.util.Objects.equals(this.__nemAddress, nodeInfo.__nemAddress) && java.util.Objects.equals(this.__network, nodeInfo.__network) && java.util.Objects.equals(this.__networkAddress, nodeInfo.__networkAddress) && java.util.Objects.equals(this.__networkPort, nodeInfo.__networkPort) && java.util.Objects.equals(this.__peerId, nodeInfo.__peerId);
        }

        /**
         * 
         * @return {number}
         */
        public hashCode() : number {
            return /* hash */0;
        }

        /**
         * 
         * @return {string}
         */
        public toString() : string {
            let sb : { str: string } = { str: "", toString: function() { return this.str; } };
            /* append */(sb => { sb.str = sb.str.concat(<any>"class NodeInfo {\n"); return sb; })(sb);
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__contextUri)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    contextUri: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__nemAddress)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    nemAddress: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__network)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    network: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__networkAddress)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    networkAddress: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__networkPort)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    networkPort: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__peerId)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    peerId: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"}"); return sb; })(sb);
            return /* toString */sb.str;
        }

        /**
         * Convert the given object to string with each line indented by 4 spaces
         * (except the first line).
         * 
         * @param {*} o the o
         * @return {string} the string
         * @private
         */
        /*private*/ toIndentedString(o : any) : string {
            if(o == null) {
                return "null";
            }
            return /* replace */o.toString().split("\n").join("\n    ");
        }
    }
    NodeInfo["__class"] = "io.nem.xpx.model.NodeInfo";

}

