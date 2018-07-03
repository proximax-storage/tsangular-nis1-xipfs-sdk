/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.factory {
    /**
     * A factory for creating Connector objects.
     * @class
     */
    export class ConnectionFactory {
        /**
         * The Constant CLIENT.
         */
        static CLIENT : org.nem.core.connect.HttpMethodClient<org.nem.core.connect.ErrorResponseDeserializerUnion>; public static CLIENT_$LI$() : org.nem.core.connect.HttpMethodClient<org.nem.core.connect.ErrorResponseDeserializerUnion> { if(ConnectionFactory.CLIENT == null) ConnectionFactory.CLIENT = ConnectionFactory.createHttpMethodClient(); return ConnectionFactory.CLIENT; };

        /**
         * Creates a new Connector object.
         * 
         * @return {org.nem.core.connect.client.DefaultAsyncNemConnector} the default async nem connector
         */
        public static createConnector() : org.nem.core.connect.client.DefaultAsyncNemConnector<org.nem.core.node.ApiId> {
            let connector : org.nem.core.connect.client.DefaultAsyncNemConnector<org.nem.core.node.ApiId> = <any>(new org.nem.core.connect.client.DefaultAsyncNemConnector<any>(ConnectionFactory.CLIENT_$LI$(), (r) => {
                throw Object.defineProperty(new Error(r.toString()), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }));
            connector.setAccountLookup((arg0) => { return new org.nem.core.model.Account(arg0) });
            return connector;
        }

        public static createNemNodeConnection$java_lang_String$java_lang_String$java_lang_String$int$java_lang_String(network : string, protocol : string, domainOrIp : string, port : number, wsPort : string) : org.nem.core.node.NodeEndpoint {
            ConnectionFactory.setNetwork(network);
            return new org.nem.core.node.NodeEndpoint(protocol, domainOrIp, port);
        }

        /**
         * Creates a new Connection object.
         * 
         * @param {string} network the nem network
         * @param {string} protocol the protocol
         * @param {string} domainOrIp the domain or ip
         * @param {number} port the port
         * @param {string} wsPort the ws port
         * @return {org.nem.core.node.NodeEndpoint} the node endpoint
         */
        public static createNemNodeConnection(network? : any, protocol? : any, domainOrIp? : any, port? : any, wsPort? : any) : any {
            if(((typeof network === 'string') || network === null) && ((typeof protocol === 'string') || protocol === null) && ((typeof domainOrIp === 'string') || domainOrIp === null) && ((typeof port === 'number') || port === null) && ((typeof wsPort === 'string') || wsPort === null)) {
                return <any>io.nem.xpx.factory.ConnectionFactory.createNemNodeConnection$java_lang_String$java_lang_String$java_lang_String$int$java_lang_String(network, protocol, domainOrIp, port, wsPort);
            } else if(((typeof network === 'string') || network === null) && ((typeof protocol === 'string') || protocol === null) && ((typeof domainOrIp === 'string') || domainOrIp === null) && ((typeof port === 'number') || port === null) && wsPort === undefined) {
                return <any>io.nem.xpx.factory.ConnectionFactory.createNemNodeConnection$java_lang_String$java_lang_String$java_lang_String$int(network, protocol, domainOrIp, port);
            } else throw new Error('invalid overload');
        }

        public static createNemNodeConnection$java_lang_String$java_lang_String$java_lang_String$int(network : string, protocol : string, domainOrIp : string, port : number) : org.nem.core.node.NodeEndpoint {
            ConnectionFactory.setNetwork(network);
            return new org.nem.core.node.NodeEndpoint(protocol, domainOrIp, port);
        }

        /**
         * Creates a new Connection object.
         * 
         * @param {string} multiAddress the multi address
         * @return {io.ipfs.api.IPFS} the ipfs
         */
        public static createIPFSNodeConnection(multiAddress : string) : io.ipfs.api.IPFS {
            return new io.ipfs.api.IPFS(new io.ipfs.multiaddr.MultiAddress(multiAddress));
        }

        public static setNetwork(network : string) {
            let networkInfo : org.nem.core.model.NetworkInfo = org.nem.core.model.NetworkInfos.getTestNetworkInfo();
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(network,"mainnet"))) {
                networkInfo = org.nem.core.model.NetworkInfos.getMainNetworkInfo();
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(network,"mijinnet"))) {
                networkInfo = org.nem.core.model.NetworkInfos.getMijinNetworkInfo();
            }
            org.nem.core.model.NetworkInfos.setDefault(networkInfo);
        }

        /**
         * Creates a new Connector object.
         * 
         * @return {org.nem.core.connect.HttpMethodClient} the http method client< error response deserializer union>
         * @private
         */
        /*private*/ static createHttpMethodClient() : org.nem.core.connect.HttpMethodClient<org.nem.core.connect.ErrorResponseDeserializerUnion> {
            let connectionTimeout : number = 4000;
            let socketTimeout : number = 10000;
            let requestTimeout : number = 30000;
            return <any>(new org.nem.core.connect.HttpMethodClient<any>(connectionTimeout, socketTimeout, requestTimeout));
        }
    }
    ConnectionFactory["__class"] = "io.nem.xpx.factory.ConnectionFactory";

}


io.nem.xpx.factory.ConnectionFactory.CLIENT_$LI$();
