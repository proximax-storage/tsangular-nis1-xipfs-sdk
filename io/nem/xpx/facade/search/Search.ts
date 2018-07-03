/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.search {
    /**
     * Instantiates a new search.
     * 
     * @param {io.nem.xpx.facade.connection.PeerConnection} peerConnection            the peer connection
     * @class
     * @extends io.nem.xpx.facade.AbstractFacadeService
     */
    export class Search extends io.nem.xpx.facade.AbstractFacadeService {
        /**
         * The peer connection.
         */
        /*private*/ peerConnection : io.nem.xpx.facade.connection.PeerConnection;

        /**
         * The engine.
         */
        engine : org.nem.core.crypto.CryptoEngine;

        /**
         * The search api.
         */
        searchApi : io.nem.xpx.service.intf.SearchApi;

        /**
         * The is local peer connection.
         */
        isLocalPeerConnection : boolean;

        public constructor(peerConnection : io.nem.xpx.facade.connection.PeerConnection) {
            super();
            if(this.peerConnection===undefined) this.peerConnection = null;
            if(this.engine===undefined) this.engine = null;
            if(this.searchApi===undefined) this.searchApi = null;
            if(this.isLocalPeerConnection===undefined) this.isLocalPeerConnection = false;
            if(peerConnection == null) {
                throw new io.nem.xpx.exceptions.PeerConnectionNotFoundException("PeerConnection can\'t be null");
            }
            this.searchApi = peerConnection.getSearchApi();
            this.isLocalPeerConnection = peerConnection.isLocal();
            this.peerConnection = peerConnection;
            this.engine = org.nem.core.crypto.CryptoEngines.ed25519Engine();
        }

        /**
         * Search by name.
         * 
         * @param {string} xPvkey the x pvkey
         * @param {string} xPubkey the x pubkey
         * @param {string} name the name
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity[]} the list
         * @throws ApiException the api exception
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         */
        public searchByName(xPvkey : string, xPubkey : string, name : string) : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> {
            return this.searchApi.searchTransactionWithNameUsingGET(xPvkey, xPubkey, name);
        }

        /**
         * Search by keyword.
         * 
         * @param {string} xPvkey the x pvkey
         * @param {string} xPubkey the x pubkey
         * @param {string} keywords the keywords
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity[]} the list
         * @throws ApiException the api exception
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         */
        public searchByKeyword(xPvkey : string, xPubkey : string, keywords : string) : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> {
            return this.searchApi['searchTransactionWithKeywordUsingGET$java_lang_String$java_lang_String$java_lang_String'](xPvkey, xPubkey, keywords);
        }

        /**
         * Search by meta data key value.
         * 
         * @param {string} xPvkey the x pvkey
         * @param {string} xPubkey the x pubkey
         * @param {string} key the key
         * @param {string} value the value
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity[]} the string
         * @throws ApiException the api exception
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         */
        public searchByMetaDataKeyValue(xPvkey : string, xPubkey : string, key : string, value : string) : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> {
            return this.searchApi.searchTransactionWithMetadataKeyValuePair(xPvkey, xPubkey, key, value);
        }
    }
    Search["__class"] = "io.nem.xpx.facade.search.Search";

}

