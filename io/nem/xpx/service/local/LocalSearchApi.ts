/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.local {
    /**
     * Instantiates a new local search api.
     * 
     * @param {io.nem.xpx.service.NemTransactionApi} nemTransactionApi the nem transaction api
     * @class
     * @extends io.nem.xpx.service.common.PrivateSearchApi
     */
    export class LocalSearchApi extends io.nem.xpx.service.common.PrivateSearchApi implements io.nem.xpx.service.intf.SearchApi {
        /**
         * The nem transaction api.
         */
        /*private*/ __io_nem_xpx_service_local_LocalSearchApi_nemTransactionApi : io.nem.xpx.service.NemTransactionApi;

        public constructor(nemTransactionApi : io.nem.xpx.service.NemTransactionApi) {
            super(nemTransactionApi);
            if(this.__io_nem_xpx_service_local_LocalSearchApi_nemTransactionApi===undefined) this.__io_nem_xpx_service_local_LocalSearchApi_nemTransactionApi = null;
            this.__io_nem_xpx_service_local_LocalSearchApi_nemTransactionApi = nemTransactionApi;
        }

        public searchTransactionWithKeywordUsingGET$java_lang_String$java_lang_String(xPubkey : string, keywords : string) : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> {
            let pbKey : org.nem.core.crypto.PublicKey = org.nem.core.crypto.PublicKey.fromHexString(xPubkey);
            let address : org.nem.core.model.Address = org.nem.core.model.Address.fromPublicKey(pbKey);
            let publicKeyAddress : string = address.toString();
            let listOfTransactionMetadataPair : Array<org.nem.core.model.ncc.TransactionMetaDataPair> = this.__io_nem_xpx_service_local_LocalSearchApi_nemTransactionApi.getAllTransactions$java_lang_String(publicKeyAddress);
            let encryptedMessage : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> = <any>([]);
            let currentHash : string = "";
            for(let index179=0; index179 < listOfTransactionMetadataPair.length; index179++) {
                let tmp = listOfTransactionMetadataPair[index179];
                {
                    currentHash = tmp.getMetaData().getHash().toString();
                    if(tmp.getEntity() != null && tmp.getEntity() instanceof <any>org.nem.core.model.TransferTransaction) {
                        let transferTransaction : org.nem.core.model.TransferTransaction = <org.nem.core.model.TransferTransaction>tmp.getEntity();
                        if(this.checkIfTxnHaveXPXMosaic(transferTransaction)) {
                            try {
                                if(transferTransaction.getMessage().getType() === 1) {
                                    let found : boolean = false;
                                    let resourceMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage = io.nem.xpx.service.model.buffers.ResourceHashMessage.getRootAsResourceHashMessage$java_nio_ByteBuffer(java.nio.ByteBuffer.wrap(org.apache.commons.codec.binary.Base64.decodeBase64(transferTransaction.getMessage().getDecodedPayload())));
                                    let commaSeparatedkeywordsSplit : string[] = keywords.split(",");
                                    for(let index180=0; index180 < commaSeparatedkeywordsSplit.length; index180++) {
                                        let keyword = commaSeparatedkeywordsSplit[index180];
                                        {
                                            if(/* contains */(resourceMessage.keywords().indexOf(keyword) != -1)) {
                                                found = true;
                                                break;
                                            }
                                        }
                                    }
                                    if(found) {
                                        /* add */(encryptedMessage.push(this.toEntity(currentHash, resourceMessage))>0);
                                    }
                                }
                            } catch(e) {
                                continue;
                            };
                        }
                    }
                }
            }
            return encryptedMessage;
        }

        /**
         * 
         * @param {string} xPubkey
         * @param {string} key
         * @param {string} value
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity[]}
         */
        public searchTransactionWithMetadataUsingGET(xPubkey : string, key : string, value : string) : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> {
            let pbKey : org.nem.core.crypto.PublicKey = org.nem.core.crypto.PublicKey.fromHexString(xPubkey);
            let address : org.nem.core.model.Address = org.nem.core.model.Address.fromPublicKey(pbKey);
            let publicKeyAddress : string = address.toString();
            let listOfTransactionMetadataPair : Array<org.nem.core.model.ncc.TransactionMetaDataPair> = this.__io_nem_xpx_service_local_LocalSearchApi_nemTransactionApi.getAllTransactions$java_lang_String(publicKeyAddress);
            let encryptedMessage : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> = <any>([]);
            for(let index181=0; index181 < listOfTransactionMetadataPair.length; index181++) {
                let tmp = listOfTransactionMetadataPair[index181];
                {
                    let currentHash : string = "";
                    if(tmp.getEntity() != null && tmp.getEntity() instanceof <any>org.nem.core.model.TransferTransaction) {
                        let transferTransaction : org.nem.core.model.TransferTransaction = <org.nem.core.model.TransferTransaction>tmp.getEntity();
                        currentHash = tmp.getMetaData().getHash().toString();
                        if(this.checkIfTxnHaveXPXMosaic(transferTransaction)) {
                            try {
                                if(transferTransaction.getMessage().getType() === 1) {
                                    let found : boolean = false;
                                    let resourceMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage = io.nem.xpx.service.model.buffers.ResourceHashMessage.getRootAsResourceHashMessage$java_nio_ByteBuffer(java.nio.ByteBuffer.wrap(org.apache.commons.codec.binary.Base64.decodeBase64(transferTransaction.getMessage().getDecodedPayload())));
                                    if(resourceMessage.metaData() != null) {
                                        let jsonToMap : any = <any>(io.nem.xpx.utils.JsonUtils.fromJson<any>(resourceMessage.metaData(), "java.util.Map"));
                                        if(/* containsKey */jsonToMap.hasOwnProperty(key) && /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(/* get */((m,k) => m[k]===undefined?null:m[k])(jsonToMap, key),value))) {
                                            found = true;
                                        }
                                    }
                                    if(found) {
                                        /* add */(encryptedMessage.push(this.toEntity(currentHash, resourceMessage))>0);
                                    }
                                }
                            } catch(e) {
                                org.pmw.tinylog.Logger.info("Error on decoding NEM Transaction Message." + e.message);
                                continue;
                            };
                        }
                    }
                }
            }
            return encryptedMessage;
        }

        /**
         * 
         * @param {string} xPvKey
         * @param {string} xPubkey
         * @param {string} key
         * @param {string} value
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity[]}
         */
        public searchTransactionWithMetadataKeyValuePair(xPvKey : string, xPubkey : string, key : string, value : string) : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> {
            return super.searchTransactionWithMetadataKeyValuePair(xPvKey, xPubkey, key, value);
        }

        public searchTransactionWithKeywordUsingGET$java_lang_String$java_lang_String$java_lang_String(xPvKey : string, xPubkey : string, keywords : string) : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> {
            return super.searchTransactionWithKeyword(xPvKey, xPubkey, keywords);
        }

        /**
         * 
         * @param {string} xPvKey
         * @param {string} xPubkey
         * @param {string} keywords
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity[]}
         */
        public searchTransactionWithKeywordUsingGET(xPvKey? : any, xPubkey? : any, keywords? : any) : any {
            if(((typeof xPvKey === 'string') || xPvKey === null) && ((typeof xPubkey === 'string') || xPubkey === null) && ((typeof keywords === 'string') || keywords === null)) {
                return <any>this.searchTransactionWithKeywordUsingGET$java_lang_String$java_lang_String$java_lang_String(xPvKey, xPubkey, keywords);
            } else if(((typeof xPvKey === 'string') || xPvKey === null) && ((typeof xPubkey === 'string') || xPubkey === null) && keywords === undefined) {
                return <any>this.searchTransactionWithKeywordUsingGET$java_lang_String$java_lang_String(xPvKey, xPubkey);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @param {string} xPvKey
         * @param {string} xPubkey
         * @param {string} name
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity[]}
         */
        public searchTransactionWithNameUsingGET(xPvKey : string, xPubkey : string, name : string) : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> {
            return super.searchTransactionWithKeyword(xPvKey, xPubkey, name);
        }
    }
    LocalSearchApi["__class"] = "io.nem.xpx.service.local.LocalSearchApi";
    LocalSearchApi["__interfaces"] = ["io.nem.xpx.service.intf.SearchApi"];


}

