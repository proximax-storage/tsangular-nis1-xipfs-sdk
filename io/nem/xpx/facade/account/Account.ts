/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.account {
    /**
     * Instantiates a new search.
     * 
     * @param {io.nem.xpx.facade.connection.PeerConnection} peerConnection            the peer connection
     * @param {string} publicKey the public key
     * @throws PeerConnectionNotFoundException             the peer connection not found exception
     * @class
     * @extends io.nem.xpx.facade.AbstractFacadeService
     */
    export class Account extends io.nem.xpx.facade.AbstractFacadeService {
        /**
         * The public key.
         */
        publicKey : string;

        /**
         * The peer connection.
         */
        /*private*/ peerConnection : io.nem.xpx.facade.connection.PeerConnection;

        /**
         * The engine.
         */
        /*private*/ engine : org.nem.core.crypto.CryptoEngine;

        /**
         * The account api.
         */
        /*private*/ accountApi : io.nem.xpx.service.intf.AccountApi;

        /**
         * The nem transaction api.
         */
        nemTransactionApi : io.nem.xpx.service.NemTransactionApi;

        /**
         * The search api.
         */
        searchApi : io.nem.xpx.service.intf.SearchApi;

        /**
         * The is local peer connection.
         */
        /*private*/ isLocalPeerConnection : boolean;

        public constructor(peerConnection : io.nem.xpx.facade.connection.PeerConnection, publicKey : string) {
            super();
            if(this.publicKey===undefined) this.publicKey = null;
            if(this.peerConnection===undefined) this.peerConnection = null;
            if(this.engine===undefined) this.engine = null;
            if(this.accountApi===undefined) this.accountApi = null;
            if(this.nemTransactionApi===undefined) this.nemTransactionApi = null;
            if(this.searchApi===undefined) this.searchApi = null;
            if(this.isLocalPeerConnection===undefined) this.isLocalPeerConnection = false;
            if(peerConnection == null) {
                throw new io.nem.xpx.exceptions.PeerConnectionNotFoundException("PeerConnection can\'t be null");
            }
            this.accountApi = peerConnection.getAccountApi();
            this.searchApi = peerConnection.getSearchApi();
            this.isLocalPeerConnection = peerConnection.isLocal();
            this.peerConnection = peerConnection;
            this.nemTransactionApi = peerConnection.getNemTransactionApi();
            this.engine = org.nem.core.crypto.CryptoEngines.ed25519Engine();
            this.publicKey = publicKey;
        }

        /**
         * Gets the incoming transactions.
         * 
         * @return {org.nem.core.model.ncc.TransactionMetaDataPair[]} the incoming transactions
         * @throws ApiException             the api exception
         * @throws InterruptedException             the interrupted exception
         * @throws ExecutionException             the execution exception
         */
        public getIncomingTransactions() : Array<org.nem.core.model.ncc.TransactionMetaDataPair> {
            let returnListOfTxnMetaDataPair : Array<org.nem.core.model.ncc.TransactionMetaDataPair> = <any>([]);
            let listOfTxnMetaDataPair : Array<org.nem.core.model.ncc.TransactionMetaDataPair> = this.nemTransactionApi.getIncomingTransactions$java_lang_String(org.nem.core.model.Address.fromPublicKey(org.nem.core.crypto.PublicKey.fromHexString(this.publicKey)).getEncoded());
            for(let index152=0; index152 < listOfTxnMetaDataPair.length; index152++) {
                let metaDataPair = listOfTxnMetaDataPair[index152];
                {
                    if(this.checkIfTxnHaveXPXMosaic(metaDataPair.getEntity())) {
                        /* add */(returnListOfTxnMetaDataPair.push(metaDataPair)>0);
                    }
                }
            }
            return returnListOfTxnMetaDataPair;
        }

        /**
         * Gets the all transactions.
         * 
         * @return {org.nem.core.model.ncc.TransactionMetaDataPair[]} the all transactions
         * @throws ApiException             the api exception
         * @throws InterruptedException             the interrupted exception
         * @throws ExecutionException             the execution exception
         */
        public getAllTransactions() : Array<org.nem.core.model.ncc.TransactionMetaDataPair> {
            let returnListOfTxnMetaDataPair : Array<org.nem.core.model.ncc.TransactionMetaDataPair> = <any>([]);
            let listOfTxnMetaDataPair : Array<org.nem.core.model.ncc.TransactionMetaDataPair> = this.nemTransactionApi.getAllTransactions$java_lang_String(org.nem.core.model.Address.fromPublicKey(org.nem.core.crypto.PublicKey.fromHexString(this.publicKey)).getEncoded());
            for(let index153=0; index153 < listOfTxnMetaDataPair.length; index153++) {
                let metaDataPair = listOfTxnMetaDataPair[index153];
                {
                    if(this.checkIfTxnHaveXPXMosaic(metaDataPair.getEntity())) {
                        /* add */(returnListOfTxnMetaDataPair.push(metaDataPair)>0);
                    }
                }
            }
            return returnListOfTxnMetaDataPair;
        }

        /**
         * Gets the outgoing transactions.
         * 
         * @return {org.nem.core.model.ncc.TransactionMetaDataPair[]} the outgoing transactions
         * @throws ApiException             the api exception
         * @throws InterruptedException             the interrupted exception
         * @throws ExecutionException             the execution exception
         */
        public getOutgoingTransactions() : Array<org.nem.core.model.ncc.TransactionMetaDataPair> {
            let returnListOfTxnMetaDataPair : Array<org.nem.core.model.ncc.TransactionMetaDataPair> = <any>([]);
            let listOfTxnMetaDataPair : Array<org.nem.core.model.ncc.TransactionMetaDataPair> = this.nemTransactionApi.getOutgoingTransactions$java_lang_String(org.nem.core.model.Address.fromPublicKey(org.nem.core.crypto.PublicKey.fromHexString(this.publicKey)).getEncoded());
            for(let index154=0; index154 < listOfTxnMetaDataPair.length; index154++) {
                let metaDataPair = listOfTxnMetaDataPair[index154];
                {
                    if(this.checkIfTxnHaveXPXMosaic(metaDataPair.getEntity())) {
                        /* add */(returnListOfTxnMetaDataPair.push(metaDataPair)>0);
                    }
                }
            }
            return returnListOfTxnMetaDataPair;
        }

        /**
         * Gets the unconfirmed transactions.
         * 
         * @return {org.nem.core.model.ncc.TransactionMetaDataPair[]} the unconfirmed transactions
         * @throws ApiException             the api exception
         * @throws InterruptedException             the interrupted exception
         * @throws ExecutionException             the execution exception
         */
        public getUnconfirmedTransactions() : Array<org.nem.core.model.ncc.TransactionMetaDataPair> {
            let returnListOfTxnMetaDataPair : Array<org.nem.core.model.ncc.TransactionMetaDataPair> = <any>([]);
            let listOfTxnMetaDataPair : Array<org.nem.core.model.ncc.TransactionMetaDataPair> = this.nemTransactionApi.getUnconfirmedTransactions(org.nem.core.model.Address.fromPublicKey(org.nem.core.crypto.PublicKey.fromHexString(this.publicKey)).getEncoded());
            for(let index155=0; index155 < listOfTxnMetaDataPair.length; index155++) {
                let metaDataPair = listOfTxnMetaDataPair[index155];
                {
                    if(this.checkIfTxnHaveXPXMosaic(metaDataPair.getEntity())) {
                        /* add */(returnListOfTxnMetaDataPair.push(metaDataPair)>0);
                    }
                }
            }
            return returnListOfTxnMetaDataPair;
        }

        /**
         * Search by name.
         * 
         * @param {string} xPvkey the x pvkey
         * @param {string} name the name
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity[]} the list
         * @throws ApiException the api exception
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         */
        public searchByName(xPvkey : string, name : string) : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> {
            return this.searchApi['searchTransactionWithKeywordUsingGET$java_lang_String$java_lang_String$java_lang_String'](xPvkey, this.publicKey, name);
        }

        /**
         * Search by keyword.
         * 
         * @param {string} xPvkey            the x pvkey
         * @param {string} keywords            the keywords
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity[]} the list
         * @throws ApiException             the api exception
         * @throws InterruptedException             the interrupted exception
         * @throws ExecutionException             the execution exception
         */
        public searchByKeyword(xPvkey : string, keywords : string) : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> {
            return this.searchApi['searchTransactionWithKeywordUsingGET$java_lang_String$java_lang_String$java_lang_String'](xPvkey, this.publicKey, keywords);
        }

        /**
         * Search by meta data key value.
         * 
         * @param {string} xPvkey            the x pvkey
         * @param {string} key            the key
         * @param {string} value            the value
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity[]} the string
         * @throws ApiException             the api exception
         * @throws InterruptedException             the interrupted exception
         * @throws ExecutionException             the execution exception
         */
        public searchByMetaDataKeyValue(xPvkey : string, key : string, value : string) : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> {
            return this.searchApi.searchTransactionWithMetadataKeyValuePair(xPvkey, this.publicKey, key, value);
        }
    }
    Account["__class"] = "io.nem.xpx.facade.account.Account";

}

