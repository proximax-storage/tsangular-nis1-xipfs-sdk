/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.transaction {
    /**
     * Instantiates a new search.
     * 
     * @param {io.nem.xpx.facade.connection.PeerConnection} peerConnection
     * the peer connection
     * @throws PeerConnectionNotFoundException
     * the peer connection not found exception
     * @class
     * @extends io.nem.xpx.facade.AbstractFacadeService
     */
    export class Transaction extends io.nem.xpx.facade.AbstractFacadeService {
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
         * The is local peer connection.
         */
        /*private*/ isLocalPeerConnection : boolean;

        public constructor(peerConnection : io.nem.xpx.facade.connection.PeerConnection) {
            super();
            if(this.peerConnection===undefined) this.peerConnection = null;
            if(this.engine===undefined) this.engine = null;
            if(this.accountApi===undefined) this.accountApi = null;
            if(this.nemTransactionApi===undefined) this.nemTransactionApi = null;
            if(this.isLocalPeerConnection===undefined) this.isLocalPeerConnection = false;
            if(peerConnection == null) {
                throw new io.nem.xpx.exceptions.PeerConnectionNotFoundException("PeerConnection can\'t be null");
            }
            this.accountApi = peerConnection.getAccountApi();
            this.isLocalPeerConnection = peerConnection.isLocal();
            this.peerConnection = peerConnection;
            this.nemTransactionApi = peerConnection.getNemTransactionApi();
            this.engine = org.nem.core.crypto.CryptoEngines.ed25519Engine();
        }

        /**
         * Gets the transaction.
         * 
         * @param {string} hash the hash
         * @return {org.nem.core.model.ncc.TransactionMetaDataPair} the transaction
         * @throws ApiException the api exception
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         */
        public getTransaction(hash : string) : org.nem.core.model.ncc.TransactionMetaDataPair {
            let transaction : org.nem.core.model.ncc.TransactionMetaDataPair = this.nemTransactionApi.getTransaction(hash);
            return transaction;
        }

        /**
         * Gets the incoming transactions.
         * 
         * @param {string} publicKey
         * the public key
         * @return {org.nem.core.model.ncc.TransactionMetaDataPair[]} the incoming transactions
         * @throws ApiException
         * the api exception
         * @throws InterruptedException
         * the interrupted exception
         * @throws ExecutionException
         * the execution exception
         */
        public getIncomingTransactions(publicKey : string) : Array<org.nem.core.model.ncc.TransactionMetaDataPair> {
            let returnListOfTxnMetaDataPair : Array<org.nem.core.model.ncc.TransactionMetaDataPair> = <any>([]);
            let listOfTxnMetaDataPair : Array<org.nem.core.model.ncc.TransactionMetaDataPair> = this.nemTransactionApi.getIncomingTransactions$java_lang_String(org.nem.core.model.Address.fromPublicKey(org.nem.core.crypto.PublicKey.fromHexString(publicKey)).getEncoded());
            for(let index156=0; index156 < listOfTxnMetaDataPair.length; index156++) {
                let metaDataPair = listOfTxnMetaDataPair[index156];
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
         * @param {string} publicKey
         * the public key
         * @return {org.nem.core.model.ncc.TransactionMetaDataPair[]} the all transactions
         * @throws ApiException
         * the api exception
         * @throws InterruptedException
         * the interrupted exception
         * @throws ExecutionException
         * the execution exception
         */
        public getAllTransactions(publicKey : string) : Array<org.nem.core.model.ncc.TransactionMetaDataPair> {
            let returnListOfTxnMetaDataPair : Array<org.nem.core.model.ncc.TransactionMetaDataPair> = <any>([]);
            let listOfTxnMetaDataPair : Array<org.nem.core.model.ncc.TransactionMetaDataPair> = this.nemTransactionApi.getAllTransactions$java_lang_String(org.nem.core.model.Address.fromPublicKey(org.nem.core.crypto.PublicKey.fromHexString(publicKey)).getEncoded());
            for(let index157=0; index157 < listOfTxnMetaDataPair.length; index157++) {
                let metaDataPair = listOfTxnMetaDataPair[index157];
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
         * @param {string} publicKey            the public key
         * @return {org.nem.core.model.ncc.TransactionMetaDataPair[]} the outgoing transactions
         * @throws ApiException             the api exception
         * @throws InterruptedException             the interrupted exception
         * @throws ExecutionException             the execution exception
         */
        public getOutgoingTransactions(publicKey : string) : Array<org.nem.core.model.ncc.TransactionMetaDataPair> {
            let returnListOfTxnMetaDataPair : Array<org.nem.core.model.ncc.TransactionMetaDataPair> = <any>([]);
            let listOfTxnMetaDataPair : Array<org.nem.core.model.ncc.TransactionMetaDataPair> = this.nemTransactionApi.getOutgoingTransactions$java_lang_String(org.nem.core.model.Address.fromPublicKey(org.nem.core.crypto.PublicKey.fromHexString(publicKey)).getEncoded());
            for(let index158=0; index158 < listOfTxnMetaDataPair.length; index158++) {
                let metaDataPair = listOfTxnMetaDataPair[index158];
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
         * @param {string} publicKey            the public key
         * @return {org.nem.core.model.ncc.TransactionMetaDataPair[]} the unconfirmed transactions
         * @throws ApiException             the api exception
         * @throws InterruptedException             the interrupted exception
         * @throws ExecutionException             the execution exception
         */
        public getUnconfirmedTransactions(publicKey : string) : Array<org.nem.core.model.ncc.TransactionMetaDataPair> {
            let returnListOfTxnMetaDataPair : Array<org.nem.core.model.ncc.TransactionMetaDataPair> = <any>([]);
            let listOfTxnMetaDataPair : Array<org.nem.core.model.ncc.TransactionMetaDataPair> = this.nemTransactionApi.getUnconfirmedTransactions(org.nem.core.model.Address.fromPublicKey(org.nem.core.crypto.PublicKey.fromHexString(publicKey)).getEncoded());
            for(let index159=0; index159 < listOfTxnMetaDataPair.length; index159++) {
                let metaDataPair = listOfTxnMetaDataPair[index159];
                {
                    if(this.checkIfTxnHaveXPXMosaic(metaDataPair.getEntity())) {
                        /* add */(returnListOfTxnMetaDataPair.push(metaDataPair)>0);
                    }
                }
            }
            return returnListOfTxnMetaDataPair;
        }
    }
    Transaction["__class"] = "io.nem.xpx.facade.transaction.Transaction";

}

