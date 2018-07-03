/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service {
    /**
     * Instantiates a new nem namespace and mosaics api.
     * 
     * @param {org.nem.core.node.NodeEndpoint} nodeEndpoint the node endpoint
     * @param {org.nem.core.connect.client.DefaultAsyncNemConnector} asyncNemConnector the async nem connector
     * @class
     */
    export class NemNamespaceAndMosaicsApi {
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

        public getNamespaceRootPage$() : Array<org.nem.core.model.ncc.NamespaceMetaDataPair> {
            let des : org.nem.core.serialization.Deserializer;
            let list : Array<org.nem.core.model.ncc.NamespaceMetaDataPair>;
            des = this.asyncNemConnector.getAsync(this.nodeEndpoint, org.nem.core.connect.client.NisApiId["_$wrappers"][org.nem.core.connect.client.NisApiId.NIS_REST_NAMESPACE_ROOT_PAGE], "").get();
            list = <Array<org.nem.core.model.ncc.NamespaceMetaDataPair>><any>des.readObjectArray<any>("data", (arg0) => { return new org.nem.core.model.ncc.NamespaceMetaDataPair(arg0) });
            return list;
        }

        public getNamespaceRootPage$java_lang_String(id : string) : Array<org.nem.core.model.ncc.NamespaceMetaDataPair> {
            let des : org.nem.core.serialization.Deserializer;
            let list : Array<org.nem.core.model.ncc.NamespaceMetaDataPair>;
            des = this.asyncNemConnector.getAsync(this.nodeEndpoint, org.nem.core.connect.client.NisApiId["_$wrappers"][org.nem.core.connect.client.NisApiId.NIS_REST_NAMESPACE_ROOT_PAGE], "id=" + id).get();
            list = <Array<org.nem.core.model.ncc.NamespaceMetaDataPair>><any>des.readObjectArray<any>("data", (arg0) => { return new org.nem.core.model.ncc.NamespaceMetaDataPair(arg0) });
            return list;
        }

        public getNamespaceRootPage$java_lang_String$java_lang_String(id : string, pageSize : string) : Array<org.nem.core.model.ncc.NamespaceMetaDataPair> {
            let des : org.nem.core.serialization.Deserializer;
            let list : Array<org.nem.core.model.ncc.NamespaceMetaDataPair>;
            des = this.asyncNemConnector.getAsync(this.nodeEndpoint, org.nem.core.connect.client.NisApiId["_$wrappers"][org.nem.core.connect.client.NisApiId.NIS_REST_NAMESPACE_ROOT_PAGE], "id=" + id + "&pagesize=" + pageSize).get();
            list = <Array<org.nem.core.model.ncc.NamespaceMetaDataPair>><any>des.readObjectArray<any>("data", (arg0) => { return new org.nem.core.model.ncc.NamespaceMetaDataPair(arg0) });
            return list;
        }

        /**
         * Gets the namespace root page.
         * 
         * @param {string} id the id
         * @param {string} pageSize the page size
         * @return {org.nem.core.model.ncc.NamespaceMetaDataPair[]} the namespace root page
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         */
        public getNamespaceRootPage(id? : any, pageSize? : any) : any {
            if(((typeof id === 'string') || id === null) && ((typeof pageSize === 'string') || pageSize === null)) {
                return <any>this.getNamespaceRootPage$java_lang_String$java_lang_String(id, pageSize);
            } else if(((typeof id === 'string') || id === null) && pageSize === undefined) {
                return <any>this.getNamespaceRootPage$java_lang_String(id);
            } else if(id === undefined && pageSize === undefined) {
                return <any>this.getNamespaceRootPage$();
            } else throw new Error('invalid overload');
        }

        /**
         * Gets the namespace.
         * 
         * @param {string} namespace the namespace
         * @return {org.nem.core.model.namespace.Namespace} the namespace
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         */
        public getNamespace(namespace : string) : org.nem.core.model.namespace.Namespace {
            let des : org.nem.core.serialization.Deserializer;
            des = this.asyncNemConnector.getAsync(this.nodeEndpoint, org.nem.core.connect.client.NisApiId["_$wrappers"][org.nem.core.connect.client.NisApiId.NIS_REST_NAMESPACE], "namespace=" + namespace).exceptionally((fn) => {
                console.error(fn.message, fn);
                return null;
            }).get();
            return new org.nem.core.model.namespace.Namespace(des);
        }

        public getNamespaceMosaicDefinitionPage$java_lang_String(namespace : string) : Array<org.nem.core.model.ncc.MosaicDefinitionMetaDataPair> {
            let des : org.nem.core.serialization.Deserializer;
            let list : Array<org.nem.core.model.ncc.MosaicDefinitionMetaDataPair>;
            des = this.asyncNemConnector.getAsync(this.nodeEndpoint, org.nem.core.connect.client.NisApiId["_$wrappers"][org.nem.core.connect.client.NisApiId.NIS_REST_NAMESPACE_MOSAIC_DEFINITION_PAGE], "namespace=" + namespace).get();
            list = <Array<org.nem.core.model.ncc.MosaicDefinitionMetaDataPair>><any>des.readObjectArray<any>("data", (arg0) => { return new org.nem.core.model.ncc.MosaicDefinitionMetaDataPair(arg0) });
            return list;
        }

        public getNamespaceMosaicDefinitionPage$java_lang_String$java_lang_String(namespace : string, id : string) : Array<org.nem.core.model.ncc.MosaicDefinitionMetaDataPair> {
            let des : org.nem.core.serialization.Deserializer;
            let list : Array<org.nem.core.model.ncc.MosaicDefinitionMetaDataPair>;
            des = this.asyncNemConnector.getAsync(this.nodeEndpoint, org.nem.core.connect.client.NisApiId["_$wrappers"][org.nem.core.connect.client.NisApiId.NIS_REST_NAMESPACE_MOSAIC_DEFINITION_PAGE], "namespace=" + namespace + "&id=" + id).get();
            list = <Array<org.nem.core.model.ncc.MosaicDefinitionMetaDataPair>><any>des.readObjectArray<any>("data", (arg0) => { return new org.nem.core.model.ncc.MosaicDefinitionMetaDataPair(arg0) });
            return list;
        }

        public getNamespaceMosaicDefinitionPage$java_lang_String$java_lang_String$java_lang_String(namespace : string, id : string, pageSize : string) : Array<org.nem.core.model.ncc.MosaicDefinitionMetaDataPair> {
            let des : org.nem.core.serialization.Deserializer;
            let list : Array<org.nem.core.model.ncc.MosaicDefinitionMetaDataPair>;
            des = this.asyncNemConnector.getAsync(this.nodeEndpoint, org.nem.core.connect.client.NisApiId["_$wrappers"][org.nem.core.connect.client.NisApiId.NIS_REST_NAMESPACE_MOSAIC_DEFINITION_PAGE], "namespace=" + namespace + "&id=" + id + "&pagesize=" + pageSize).get();
            list = <Array<org.nem.core.model.ncc.MosaicDefinitionMetaDataPair>><any>des.readObjectArray<any>("data", (arg0) => { return new org.nem.core.model.ncc.MosaicDefinitionMetaDataPair(arg0) });
            return list;
        }

        /**
         * Gets the namespace mosaic definition page.
         * 
         * @param {string} namespace the namespace
         * @param {string} id the id
         * @param {string} pageSize the page size
         * @return {org.nem.core.model.ncc.MosaicDefinitionMetaDataPair[]} the namespace mosaic definition page
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         */
        public getNamespaceMosaicDefinitionPage(namespace? : any, id? : any, pageSize? : any) : any {
            if(((typeof namespace === 'string') || namespace === null) && ((typeof id === 'string') || id === null) && ((typeof pageSize === 'string') || pageSize === null)) {
                return <any>this.getNamespaceMosaicDefinitionPage$java_lang_String$java_lang_String$java_lang_String(namespace, id, pageSize);
            } else if(((typeof namespace === 'string') || namespace === null) && ((typeof id === 'string') || id === null) && pageSize === undefined) {
                return <any>this.getNamespaceMosaicDefinitionPage$java_lang_String$java_lang_String(namespace, id);
            } else if(((typeof namespace === 'string') || namespace === null) && id === undefined && pageSize === undefined) {
                return <any>this.getNamespaceMosaicDefinitionPage$java_lang_String(namespace);
            } else throw new Error('invalid overload');
        }

        /**
         * Gets the mosaic information .
         * 
         * @param {string} namespace the namespace
         * @param {string} mosaic the mosaic
         * @return {org.nem.core.model.mosaic.MosaicDefinition} the mosaic information
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         */
        public getMosaicInformation(namespace : string, mosaic : string) : org.nem.core.model.mosaic.MosaicDefinition {
            let des : org.nem.core.serialization.Deserializer;
            let list : Array<org.nem.core.model.ncc.MosaicDefinitionMetaDataPair>;
            des = this.asyncNemConnector.getAsync(this.nodeEndpoint, org.nem.core.connect.client.NisApiId["_$wrappers"][org.nem.core.connect.client.NisApiId.NIS_REST_NAMESPACE_MOSAIC_DEFINITION_PAGE], "namespace=" + namespace).get();
            list = <Array<org.nem.core.model.ncc.MosaicDefinitionMetaDataPair>><any>des.readObjectArray<any>("data", (arg0) => { return new org.nem.core.model.ncc.MosaicDefinitionMetaDataPair(arg0) });
            for(let index184=0; index184 < list.length; index184++) {
                let mosaicDefinitionMetadataPair = list[index184];
                {
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(mosaicDefinitionMetadataPair.getEntity().getId().getName(),mosaic))) {
                        return mosaicDefinitionMetadataPair.getEntity();
                    }
                }
            }
            return null;
        }
    }
    NemNamespaceAndMosaicsApi["__class"] = "io.nem.xpx.service.NemNamespaceAndMosaicsApi";

}

