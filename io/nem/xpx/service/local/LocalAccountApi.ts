/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.local {
    /**
     * Instantiates a new local account api.
     * 
     * @param {io.nem.xpx.service.NemTransactionApi} nemTransactionApi the nem transaction api
     * @class
     */
    export class LocalAccountApi implements io.nem.xpx.service.intf.AccountApi {
        /**
         * The nem transaction api.
         */
        /*private*/ nemTransactionApi : io.nem.xpx.service.NemTransactionApi;

        public constructor(nemTransactionApi : io.nem.xpx.service.NemTransactionApi) {
            if(this.nemTransactionApi===undefined) this.nemTransactionApi = null;
            this.nemTransactionApi = nemTransactionApi;
        }

        /**
         * 
         * @param {string} publicKey
         * @return {string}
         */
        public getAllIncomingNemAddressTransactionsUsingGET(publicKey : string) : string {
            let listOfTxnMetaDataPair : Array<org.nem.core.model.ncc.TransactionMetaDataPair> = this.nemTransactionApi.getIncomingTransactions$java_lang_String(org.nem.core.model.Address.fromPublicKey(org.nem.core.crypto.PublicKey.fromHexString(publicKey)).getEncoded());
            let transactionString : Array<string> = <any>([]);
            for(let index174=0; index174 < listOfTxnMetaDataPair.length; index174++) {
                let metaDataPair = listOfTxnMetaDataPair[index174];
                {
                    if(this.checkIfTxnHaveXPXMosaic(metaDataPair.getEntity())) {
                        /* add */(transactionString.push(org.nem.core.serialization.JsonSerializer.serializeToJson(metaDataPair.getEntity()).toJSONString())>0);
                    }
                }
            }
            return io.nem.xpx.utils.JsonUtils.toJson(transactionString);
        }

        /**
         * 
         * @param {string} publicKey
         * @return {string}
         */
        public getAllNemAddressTransactionsUsingGET(publicKey : string) : string {
            let listOfTxnMetaDataPair : Array<org.nem.core.model.ncc.TransactionMetaDataPair> = this.nemTransactionApi.getAllTransactions$java_lang_String(org.nem.core.model.Address.fromPublicKey(org.nem.core.crypto.PublicKey.fromHexString(publicKey)).getEncoded());
            let transactionString : Array<string> = <any>([]);
            for(let index175=0; index175 < listOfTxnMetaDataPair.length; index175++) {
                let metaDataPair = listOfTxnMetaDataPair[index175];
                {
                    if(this.checkIfTxnHaveXPXMosaic(metaDataPair.getEntity())) {
                        /* add */(transactionString.push(org.nem.core.serialization.JsonSerializer.serializeToJson(metaDataPair.getEntity()).toJSONString())>0);
                    }
                }
            }
            return io.nem.xpx.utils.JsonUtils.toJson(transactionString);
        }

        /**
         * 
         * @param {string} publicKey
         * @param {string} pageSize
         * @return {string}
         */
        public getAllNemAddressTransactionsWithPageSizeUsingGET(publicKey : string, pageSize : string) : string {
            let listOfTxnMetaDataPair : Array<org.nem.core.model.ncc.TransactionMetaDataPair> = this.nemTransactionApi.getAllTransactionsWithPageSize(org.nem.core.model.Address.fromPublicKey(org.nem.core.crypto.PublicKey.fromHexString(publicKey)).getEncoded(), pageSize);
            let transactionString : Array<string> = <any>([]);
            for(let index176=0; index176 < listOfTxnMetaDataPair.length; index176++) {
                let metaDataPair = listOfTxnMetaDataPair[index176];
                {
                    if(this.checkIfTxnHaveXPXMosaic(metaDataPair.getEntity())) {
                        /* add */(transactionString.push(org.nem.core.serialization.JsonSerializer.serializeToJson(metaDataPair.getEntity()).toJSONString())>0);
                    }
                }
            }
            return io.nem.xpx.utils.JsonUtils.toJson(transactionString);
        }

        /**
         * 
         * @param {string} publicKey
         * @return {string}
         */
        public getAllOutgoingNemAddressTransactionsUsingGET(publicKey : string) : string {
            let listOfTxnMetaDataPair : Array<org.nem.core.model.ncc.TransactionMetaDataPair> = this.nemTransactionApi.getOutgoingTransactions$java_lang_String(org.nem.core.model.Address.fromPublicKey(org.nem.core.crypto.PublicKey.fromHexString(publicKey)).getEncoded());
            let transactionString : Array<string> = <any>([]);
            for(let index177=0; index177 < listOfTxnMetaDataPair.length; index177++) {
                let metaDataPair = listOfTxnMetaDataPair[index177];
                {
                    if(this.checkIfTxnHaveXPXMosaic(metaDataPair.getEntity())) {
                        /* add */(transactionString.push(org.nem.core.serialization.JsonSerializer.serializeToJson(metaDataPair.getEntity()).toJSONString())>0);
                    }
                }
            }
            return io.nem.xpx.utils.JsonUtils.toJson(transactionString);
        }

        /**
         * 
         * @param {string} publicKey
         * @return {string}
         */
        public getAllUnconfirmedNemAddressTransactionsUsingGET(publicKey : string) : string {
            let listOfTxnMetaDataPair : Array<org.nem.core.model.ncc.TransactionMetaDataPair> = this.nemTransactionApi.getUnconfirmedTransactions(org.nem.core.model.Address.fromPublicKey(org.nem.core.crypto.PublicKey.fromHexString(publicKey)).getEncoded());
            let transactionString : Array<string> = <any>([]);
            for(let index178=0; index178 < listOfTxnMetaDataPair.length; index178++) {
                let metaDataPair = listOfTxnMetaDataPair[index178];
                {
                    /* add */(transactionString.push(org.nem.core.serialization.JsonSerializer.serializeToJson(metaDataPair.getEntity()).toJSONString())>0);
                }
            }
            return io.nem.xpx.utils.JsonUtils.toJson(transactionString);
        }

        /**
         * 
         * @param {string} publicKey
         * @return {io.nem.xpx.model.AccountMetaDataPair}
         */
        public getNemAddressDetailsUsingGET(publicKey : string) : io.nem.xpx.model.AccountMetaDataPair {
            return null;
        }

        /**
         * Check if txn have XPX mosaic.
         * 
         * @param {org.nem.core.model.Transaction} transaction the transaction
         * @return {boolean} true, if successful
         */
        checkIfTxnHaveXPXMosaic(transaction : org.nem.core.model.Transaction) : boolean {
            if(transaction != null && transaction instanceof <any>org.nem.core.model.TransferTransaction) {
                let mosaicIter : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})((<org.nem.core.model.TransferTransaction>transaction).getMosaics());
                while((mosaicIter.hasNext())) {
                    let mosaic : org.nem.core.model.mosaic.Mosaic = mosaicIter.next();
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(mosaic.getMosaicId().getNamespaceId().getRoot().toString(),"prx")) && /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(mosaic.getMosaicId().getName(),"xpx"))) {
                        return true;
                    }
                };
            }
            return false;
        }
    }
    LocalAccountApi["__class"] = "io.nem.xpx.service.local.LocalAccountApi";
    LocalAccountApi["__interfaces"] = ["io.nem.xpx.service.intf.AccountApi"];


}

