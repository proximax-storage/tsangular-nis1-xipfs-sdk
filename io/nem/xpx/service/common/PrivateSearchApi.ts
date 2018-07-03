/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.common {
    /**
     * Instantiates a new local search api.
     * 
     * @param {io.nem.xpx.service.NemTransactionApi} nemTransactionApi
     * 
     * the nem transaction api
     * @class
     */
    export abstract class PrivateSearchApi {
        /**
         * The nem transaction api.
         */
        /*private*/ nemTransactionApi : io.nem.xpx.service.NemTransactionApi;

        public constructor(nemTransactionApi : io.nem.xpx.service.NemTransactionApi) {
            if(this.nemTransactionApi===undefined) this.nemTransactionApi = null;
            this.nemTransactionApi = nemTransactionApi;
        }

        /**
         * Search transaction with name.
         * 
         * @param {string} xPvKey the x pv key
         * @param {string} xPubkey the x pubkey
         * @param {string} name the name
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity[]} the list
         * @throws ApiException the api exception
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         */
        public searchTransactionWithName(xPvKey : string, xPubkey : string, name : string) : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> {
            let encryptedMessage : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> = <any>([]);
            /* addAll */((l1, l2) => l1.push.apply(l1, l2))(encryptedMessage, this.getNextForNameSearch(xPvKey, xPubkey, name, ""));
            return encryptedMessage;
        }

        /**
         * Search transaction with metadata key value pair.
         * 
         * @param {string} xPvKey the x pv key
         * @param {string} xPubkey the x pubkey
         * @param {string} key the key
         * @param {string} value the value
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity[]} the list
         * @throws ApiException the api exception
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         */
        public searchTransactionWithMetadataKeyValuePair(xPvKey : string, xPubkey : string, key : string, value : string) : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> {
            let encryptedMessage : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> = <any>([]);
            /* addAll */((l1, l2) => l1.push.apply(l1, l2))(encryptedMessage, this.getNextForMetadataSearch(xPvKey, xPubkey, key, value, ""));
            return encryptedMessage;
        }

        /**
         * Search transaction with keyword.
         * 
         * @param {string} xPvKey the x pv key
         * @param {string} xPubkey the x pubkey
         * @param {string} keywords the keywords
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity[]} the list
         * @throws ApiException the api exception
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         */
        public searchTransactionWithKeyword(xPvKey : string, xPubkey : string, keywords : string) : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> {
            let encryptedMessage : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> = <any>([]);
            /* addAll */((l1, l2) => l1.push.apply(l1, l2))(encryptedMessage, this.getNextForKeywordSearch(xPvKey, xPubkey, keywords, ""));
            return encryptedMessage;
        }

        /**
         * Gets the next for name search.
         * 
         * @param {string} xPvKey the x pv key
         * @param {string} xPubkey the x pubkey
         * @param {string} name the name
         * @param {string} hash the hash
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity[]} the next for name search
         * @throws ApiException the api exception
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         * @private
         */
        /*private*/ getNextForNameSearch(xPvKey : string, xPubkey : string, name : string, hash : string) : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> {
            let pvKey : org.nem.core.crypto.PrivateKey = org.nem.core.crypto.PrivateKey.fromHexString(xPvKey);
            let keyPair : org.nem.core.crypto.KeyPair = new org.nem.core.crypto.KeyPair(pvKey);
            let privateKeyAddress : string = org.nem.core.model.Address.fromPublicKey(keyPair.getPublicKey()).toString();
            let listOfTransactionMetadataPair : Array<org.nem.core.model.ncc.TransactionMetaDataPair> = null;
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(hash,""))) {
                listOfTransactionMetadataPair = this.nemTransactionApi.getAllTransactions$java_lang_String(privateKeyAddress);
            } else {
                listOfTransactionMetadataPair = this.nemTransactionApi.getAllTransactions$java_lang_String$java_lang_String(privateKeyAddress, hash);
            }
            let encryptedMessage : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> = <any>([]);
            let currentHash : string = "";
            for(let index169=0; index169 < listOfTransactionMetadataPair.length; index169++) {
                let tmp = listOfTransactionMetadataPair[index169];
                {
                    if(tmp.getEntity() != null && tmp.getEntity() instanceof <any>org.nem.core.model.TransferTransaction) {
                        currentHash = tmp.getMetaData().getHash().toString();
                        let transferTransaction : org.nem.core.model.TransferTransaction = <org.nem.core.model.TransferTransaction>tmp.getEntity();
                        if(this.checkIfTxnHaveXPXMosaic(transferTransaction)) {
                            let found : boolean = false;
                            try {
                                if(transferTransaction.getMessage().getType() === 1) {
                                    let resourceMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage = io.nem.xpx.service.model.buffers.ResourceHashMessage.getRootAsResourceHashMessage$java_nio_ByteBuffer(java.nio.ByteBuffer.wrap(org.apache.commons.codec.binary.Base64.decodeBase64(transferTransaction.getMessage().getDecodedPayload())));
                                    if(/* contains */(resourceMessage.name().toLowerCase().indexOf(name.toLowerCase()) != -1)) {
                                        /* add */(encryptedMessage.push(this.toEntity(currentHash, resourceMessage))>0);
                                    }
                                } else if(transferTransaction.getMessage().getType() === 2) {
                                    let secureMessage : org.nem.core.messages.SecureMessage = null;
                                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(transferTransaction.getSigner().getAddress().getEncoded(),privateKeyAddress))) {
                                        secureMessage = org.nem.core.messages.SecureMessage.fromEncodedPayload(new org.nem.core.model.Account(new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PrivateKey.fromHexString(xPvKey))), new org.nem.core.model.Account(new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PublicKey.fromHexString(xPubkey))), transferTransaction.getMessage().getEncodedPayload());
                                    } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(transferTransaction.getRecipient().getAddress().getEncoded(),privateKeyAddress))) {
                                        secureMessage = org.nem.core.messages.SecureMessage.fromEncodedPayload(new org.nem.core.model.Account(new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PublicKey.fromHexString(xPubkey))), new org.nem.core.model.Account(new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PrivateKey.fromHexString(xPvKey))), transferTransaction.getMessage().getEncodedPayload());
                                    }
                                    let resourceMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage = io.nem.xpx.service.model.buffers.ResourceHashMessage.getRootAsResourceHashMessage$java_nio_ByteBuffer(java.nio.ByteBuffer.wrap(org.apache.commons.codec.binary.Base64.decodeBase64(secureMessage.getDecodedPayload())));
                                    if(/* contains */(resourceMessage.name().toLowerCase().indexOf(name.toLowerCase()) != -1)) {
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
            if(!/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(currentHash,""))) {
                /* addAll */((l1, l2) => l1.push.apply(l1, l2))(encryptedMessage, this.getNextForNameSearch(xPvKey, xPubkey, name, currentHash));
            }
            return encryptedMessage;
        }

        /**
         * Gets the next for keyword search.
         * 
         * @param {string} xPvKey the x pv key
         * @param {string} xPubkey the x pubkey
         * @param {string} keywords the keywords
         * @param {string} hash the hash
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity[]} the next for keyword search
         * @throws ApiException the api exception
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         * @private
         */
        /*private*/ getNextForKeywordSearch(xPvKey : string, xPubkey : string, keywords : string, hash : string) : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> {
            let pvKey : org.nem.core.crypto.PrivateKey = org.nem.core.crypto.PrivateKey.fromHexString(xPvKey);
            let keyPair : org.nem.core.crypto.KeyPair = new org.nem.core.crypto.KeyPair(pvKey);
            let privateKeyAddress : string = org.nem.core.model.Address.fromPublicKey(keyPair.getPublicKey()).toString();
            let listOfTransactionMetadataPair : Array<org.nem.core.model.ncc.TransactionMetaDataPair> = null;
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(hash,""))) {
                listOfTransactionMetadataPair = this.nemTransactionApi.getAllTransactions$java_lang_String(privateKeyAddress);
            } else {
                listOfTransactionMetadataPair = this.nemTransactionApi.getAllTransactions$java_lang_String$java_lang_String(privateKeyAddress, hash);
            }
            let encryptedMessage : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> = <any>([]);
            let currentHash : string = "";
            for(let index170=0; index170 < listOfTransactionMetadataPair.length; index170++) {
                let tmp = listOfTransactionMetadataPair[index170];
                {
                    if(tmp.getEntity() != null && tmp.getEntity() instanceof <any>org.nem.core.model.TransferTransaction) {
                        currentHash = tmp.getMetaData().getHash().toString();
                        let transferTransaction : org.nem.core.model.TransferTransaction = <org.nem.core.model.TransferTransaction>tmp.getEntity();
                        if(this.checkIfTxnHaveXPXMosaic(transferTransaction)) {
                            let found : boolean = false;
                            try {
                                if(transferTransaction.getMessage().getType() === 1) {
                                    let resourceMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage = io.nem.xpx.service.model.buffers.ResourceHashMessage.getRootAsResourceHashMessage$java_nio_ByteBuffer(java.nio.ByteBuffer.wrap(org.apache.commons.codec.binary.Base64.decodeBase64(transferTransaction.getMessage().getDecodedPayload())));
                                    let commaSeparatedkeywordsSplit : string[] = keywords.split(",");
                                    for(let index171=0; index171 < commaSeparatedkeywordsSplit.length; index171++) {
                                        let keyword = commaSeparatedkeywordsSplit[index171];
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
                                } else if(transferTransaction.getMessage().getType() === 2) {
                                    let secureMessage : org.nem.core.messages.SecureMessage = null;
                                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(transferTransaction.getSigner().getAddress().getEncoded(),privateKeyAddress))) {
                                        secureMessage = org.nem.core.messages.SecureMessage.fromEncodedPayload(new org.nem.core.model.Account(new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PrivateKey.fromHexString(xPvKey))), new org.nem.core.model.Account(new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PublicKey.fromHexString(xPubkey))), transferTransaction.getMessage().getEncodedPayload());
                                    } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(transferTransaction.getRecipient().getAddress().getEncoded(),privateKeyAddress))) {
                                        secureMessage = org.nem.core.messages.SecureMessage.fromEncodedPayload(new org.nem.core.model.Account(new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PublicKey.fromHexString(xPubkey))), new org.nem.core.model.Account(new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PrivateKey.fromHexString(xPvKey))), transferTransaction.getMessage().getEncodedPayload());
                                    }
                                    let resourceMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage = io.nem.xpx.service.model.buffers.ResourceHashMessage.getRootAsResourceHashMessage$java_nio_ByteBuffer(java.nio.ByteBuffer.wrap(org.apache.commons.codec.binary.Base64.decodeBase64(secureMessage.getDecodedPayload())));
                                    let commaSeparatedkeywordsSplit : string[] = keywords.split(",");
                                    for(let index172=0; index172 < commaSeparatedkeywordsSplit.length; index172++) {
                                        let keyword = commaSeparatedkeywordsSplit[index172];
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
            if(!/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(currentHash,""))) {
                /* addAll */((l1, l2) => l1.push.apply(l1, l2))(encryptedMessage, this.getNextForKeywordSearch(xPvKey, xPubkey, keywords, currentHash));
            }
            return encryptedMessage;
        }

        /**
         * Gets the next for metadata search.
         * 
         * @param {string} xPvKey the x pv key
         * @param {string} xPubkey the x pubkey
         * @param {string} key the key
         * @param {string} value the value
         * @param {string} hash the hash
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity[]} the next for metadata search
         * @throws ApiException the api exception
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         * @private
         */
        /*private*/ getNextForMetadataSearch(xPvKey : string, xPubkey : string, key : string, value : string, hash : string) : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> {
            let pvKey : org.nem.core.crypto.PrivateKey = org.nem.core.crypto.PrivateKey.fromHexString(xPvKey);
            let keyPair : org.nem.core.crypto.KeyPair = new org.nem.core.crypto.KeyPair(pvKey);
            let privateKeyAddress : string = org.nem.core.model.Address.fromPublicKey(keyPair.getPublicKey()).toString();
            let listOfTransactionMetadataPair : Array<org.nem.core.model.ncc.TransactionMetaDataPair> = null;
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(hash,""))) {
                listOfTransactionMetadataPair = this.nemTransactionApi.getAllTransactions$java_lang_String(privateKeyAddress);
            } else {
                listOfTransactionMetadataPair = this.nemTransactionApi.getAllTransactions$java_lang_String$java_lang_String(privateKeyAddress, hash);
            }
            let encryptedMessage : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> = <any>([]);
            let currentHash : string = "";
            for(let index173=0; index173 < listOfTransactionMetadataPair.length; index173++) {
                let tmp = listOfTransactionMetadataPair[index173];
                {
                    if(tmp.getEntity() != null && tmp.getEntity() instanceof <any>org.nem.core.model.TransferTransaction) {
                        currentHash = tmp.getMetaData().getHash().toString();
                        let transferTransaction : org.nem.core.model.TransferTransaction = <org.nem.core.model.TransferTransaction>tmp.getEntity();
                        if(this.checkIfTxnHaveXPXMosaic(transferTransaction)) {
                            let found : boolean = false;
                            try {
                                if(transferTransaction.getMessage().getType() === 1) {
                                    let resourceMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage = io.nem.xpx.service.model.buffers.ResourceHashMessage.getRootAsResourceHashMessage$java_nio_ByteBuffer(java.nio.ByteBuffer.wrap(org.apache.commons.codec.binary.Base64.decodeBase64(transferTransaction.getMessage().getDecodedPayload())));
                                    if(resourceMessage.metaData() != null) {
                                        let jsonToMap : any = <any>(io.nem.xpx.utils.JsonUtils.fromJson<any>(resourceMessage.metaData(), "java.util.Map"));
                                        if(/* containsKey */jsonToMap.hasOwnProperty(key) && /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(/* get */((m,k) => m[k]===undefined?null:m[k])(jsonToMap, key),value))) {
                                            /* add */(encryptedMessage.push(this.toEntity(currentHash, resourceMessage))>0);
                                        }
                                    }
                                } else if(transferTransaction.getMessage().getType() === 2) {
                                    let secureMessage : org.nem.core.messages.SecureMessage = null;
                                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(transferTransaction.getSigner().getAddress().getEncoded(),privateKeyAddress))) {
                                        secureMessage = org.nem.core.messages.SecureMessage.fromEncodedPayload(new org.nem.core.model.Account(new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PrivateKey.fromHexString(xPvKey))), new org.nem.core.model.Account(new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PublicKey.fromHexString(xPubkey))), transferTransaction.getMessage().getEncodedPayload());
                                    } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(transferTransaction.getRecipient().getAddress().getEncoded(),privateKeyAddress))) {
                                        secureMessage = org.nem.core.messages.SecureMessage.fromEncodedPayload(new org.nem.core.model.Account(new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PublicKey.fromHexString(xPubkey))), new org.nem.core.model.Account(new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PrivateKey.fromHexString(xPvKey))), transferTransaction.getMessage().getEncodedPayload());
                                    }
                                    let resourceMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage = io.nem.xpx.service.model.buffers.ResourceHashMessage.getRootAsResourceHashMessage$java_nio_ByteBuffer(java.nio.ByteBuffer.wrap(org.apache.commons.codec.binary.Base64.decodeBase64(secureMessage.getDecodedPayload())));
                                    if(resourceMessage.metaData() != null) {
                                        let jsonToMap : any = <any>(io.nem.xpx.utils.JsonUtils.fromJson<any>(resourceMessage.metaData(), "java.util.Map"));
                                        if(/* containsKey */jsonToMap.hasOwnProperty(key) && /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(/* get */((m,k) => m[k]===undefined?null:m[k])(jsonToMap, key),value))) {
                                            /* add */(encryptedMessage.push(this.toEntity(currentHash, resourceMessage))>0);
                                        }
                                    }
                                }
                            } catch(e) {
                                continue;
                            };
                        }
                    }
                }
            }
            if(!/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(currentHash,""))) {
                /* addAll */((l1, l2) => l1.push.apply(l1, l2))(encryptedMessage, this.getNextForMetadataSearch(xPvKey, xPubkey, key, value, currentHash));
            }
            return encryptedMessage;
        }

        /**
         * To entity.
         * 
         * @param {string} nemHash the nem hash
         * @param {io.nem.xpx.service.model.buffers.ResourceHashMessage} resourceMessage            the resource message
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity} the resource hash message json entity
         */
        toEntity(nemHash : string, resourceMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage) : io.nem.xpx.model.ResourceHashMessageJsonEntity {
            let resourceHashMessageJsonEntity : io.nem.xpx.model.ResourceHashMessageJsonEntity = new io.nem.xpx.model.ResourceHashMessageJsonEntity();
            resourceHashMessageJsonEntity.setDigest(resourceMessage.digest());
            resourceHashMessageJsonEntity.setHash(resourceMessage.hash());
            resourceHashMessageJsonEntity.setKeywords(resourceMessage.keywords());
            resourceHashMessageJsonEntity.setMetaData(resourceMessage.metaData());
            resourceHashMessageJsonEntity.setName(resourceMessage.name());
            resourceHashMessageJsonEntity.setTimestamp(resourceMessage.timestamp());
            resourceHashMessageJsonEntity.setType(resourceMessage.type());
            resourceHashMessageJsonEntity.setNemHash(nemHash);
            return resourceHashMessageJsonEntity;
        }

        /**
         * Check if txn have XPX mosaic.
         * 
         * @param {org.nem.core.model.Transaction} transaction
         * the transaction
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
    PrivateSearchApi["__class"] = "io.nem.xpx.service.common.PrivateSearchApi";

}

