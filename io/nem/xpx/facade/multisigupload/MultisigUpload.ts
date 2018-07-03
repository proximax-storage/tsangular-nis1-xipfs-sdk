/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.multisigupload {
    /**
     * Instantiates a new upload.
     * 
     * @param {io.nem.xpx.facade.connection.PeerConnection} peerConnection            the peer connection
     * @class
     * @extends io.nem.xpx.facade.AbstractFacadeService
     */
    export class MultisigUpload extends io.nem.xpx.facade.AbstractFacadeService {
        /**
         * The peer connection.
         */
        /*private*/ peerConnection : io.nem.xpx.facade.connection.PeerConnection;

        /**
         * The engine.
         */
        /*private*/ engine : org.nem.core.crypto.CryptoEngine;

        /*private*/ uploadDelegate : io.nem.xpx.service.UploadDelegate;

        /**
         * The publish and announce api.
         */
        /*private*/ transactionAndAnnounceApi : io.nem.xpx.service.intf.TransactionAndAnnounceApi;

        /**
         * The is local peer connection.
         */
        /*private*/ isLocalPeerConnection : boolean;

        /*private*/ ipfsGatewaySyncService : io.nem.xpx.service.IpfsGatewaySyncService;

        public constructor(peerConnection : io.nem.xpx.facade.connection.PeerConnection) {
            super();
            if(this.peerConnection===undefined) this.peerConnection = null;
            if(this.engine===undefined) this.engine = null;
            if(this.uploadDelegate===undefined) this.uploadDelegate = null;
            if(this.transactionAndAnnounceApi===undefined) this.transactionAndAnnounceApi = null;
            if(this.isLocalPeerConnection===undefined) this.isLocalPeerConnection = false;
            if(this.ipfsGatewaySyncService===undefined) this.ipfsGatewaySyncService = null;
            if(peerConnection == null) {
                throw new io.nem.xpx.exceptions.PeerConnectionNotFoundException("PeerConnection can\'t be null");
            }
            this.peerConnection = peerConnection;
            this.transactionAndAnnounceApi = peerConnection.getTransactionAndAnnounceApi();
            this.isLocalPeerConnection = peerConnection.isLocal();
            this.engine = org.nem.core.crypto.CryptoEngines.ed25519Engine();
            this.ipfsGatewaySyncService = new io.nem.xpx.service.IpfsGatewaySyncService(peerConnection.getSyncGateways());
            this.uploadDelegate = new io.nem.xpx.service.UploadDelegate(peerConnection.getUploadApi());
        }

        /**
         * Upload data on multisig transaction.
         * 
         * @param {io.nem.xpx.facade.multisigupload.MultisigUploadTextDataParameter} parameters the parameters
         * @return {io.nem.xpx.facade.multisigupload.MultisigUploadResult} the multisig upload data
         * @throws ApiException the api exception
         * @throws NoSuchAlgorithmException the no such algorithm exception
         * @throws InvalidKeyException the invalid key exception
         * @throws InvalidKeySpecException the invalid key spec exception
         * @throws NoSuchPaddingException the no such padding exception
         * @throws InvalidAlgorithmParameterException the invalid algorithm parameter exception
         * @throws IllegalBlockSizeException the illegal block size exception
         * @throws BadPaddingException the bad padding exception
         * @throws IOException Signals that an I/O exception has occurred.
         * @throws UploadException the upload exception
         */
        public uploadDataOnMultisigTransaction(parameters : io.nem.xpx.facade.multisigupload.MultisigUploadTextDataParameter) : io.nem.xpx.facade.multisigupload.MultisigUploadResult {
            let multisigUploadData : io.nem.xpx.facade.multisigupload.MultisigUploadResult = this.handleMultisigDataUpload(parameters);
            return multisigUploadData;
        }

        /**
         * Upload file on multisig transaction.
         * 
         * @param {io.nem.xpx.facade.multisigupload.MultisigUploadFileParameter} uploadParameter the upload parameter
         * @return {io.nem.xpx.facade.multisigupload.MultisigUploadResult} the multisig upload data
         * @throws IOException Signals that an I/O exception has occurred.
         * @throws ApiException the api exception
         * @throws InvalidKeyException the invalid key exception
         * @throws InvalidKeySpecException the invalid key spec exception
         * @throws NoSuchAlgorithmException the no such algorithm exception
         * @throws NoSuchPaddingException the no such padding exception
         * @throws InvalidAlgorithmParameterException the invalid algorithm parameter exception
         * @throws IllegalBlockSizeException the illegal block size exception
         * @throws BadPaddingException the bad padding exception
         * @throws UploadException the upload exception
         */
        public uploadFileOnMultisigTransaction(uploadParameter : io.nem.xpx.facade.multisigupload.MultisigUploadFileParameter) : io.nem.xpx.facade.multisigupload.MultisigUploadResult {
            let multisigUploadData : io.nem.xpx.facade.multisigupload.MultisigUploadResult = this.handleMultisigFileUpload(uploadParameter);
            return multisigUploadData;
        }

        /**
         * Upload binary on multisig transaction.
         * 
         * @param {io.nem.xpx.facade.multisigupload.MultisigUploadBinaryParameter} uploadParameter the upload parameter
         * @return {io.nem.xpx.facade.multisigupload.MultisigUploadResult} the multisig upload data
         * @throws IOException Signals that an I/O exception has occurred.
         * @throws ApiException the api exception
         * @throws InvalidKeyException the invalid key exception
         * @throws InvalidKeySpecException the invalid key spec exception
         * @throws NoSuchAlgorithmException the no such algorithm exception
         * @throws NoSuchPaddingException the no such padding exception
         * @throws InvalidAlgorithmParameterException the invalid algorithm parameter exception
         * @throws IllegalBlockSizeException the illegal block size exception
         * @throws BadPaddingException the bad padding exception
         * @throws UploadException the upload exception
         */
        public uploadBinaryOnMultisigTransaction(uploadParameter : io.nem.xpx.facade.multisigupload.MultisigUploadBinaryParameter) : io.nem.xpx.facade.multisigupload.MultisigUploadResult {
            let multisigUploadData : io.nem.xpx.facade.multisigupload.MultisigUploadResult = this.handleMultisigBinaryUpload(uploadParameter);
            return multisigUploadData;
        }

        /**
         * Handle multisig data upload.
         * 
         * @param {io.nem.xpx.facade.multisigupload.MultisigUploadTextDataParameter} param the upload parameter
         * @return {io.nem.xpx.facade.multisigupload.MultisigUploadResult} the multisig upload data
         * @throws IOException Signals that an I/O exception has occurred.
         * @throws ApiException the api exception
         * @throws UploadException the upload exception
         */
        public handleMultisigDataUpload(param : io.nem.xpx.facade.multisigupload.MultisigUploadTextDataParameter) : io.nem.xpx.facade.multisigupload.MultisigUploadResult {
            let encrypted : number[] = null;
            let response : number[] = null;
            let hashMessageWrapper : io.nem.xpx.service.UploadDelegate.ResourceHashMessageWrapper = null;
            let publishedData : string = "";
            let secretKey : string = null;
            try {
                if(param.getPrivacyStrategy().getNemMessageType() === io.nem.xpx.model.NemMessageType.SECURE) {
                    let keyGen : javax.crypto.KeyGenerator = javax.crypto.KeyGenerator.getInstance("AES");
                    keyGen.init(128);
                    let keyRandom : string = org.apache.commons.codec.binary.Base64.encodeBase64String(keyGen.generateKey().getEncoded());
                    encrypted = io.nem.xpx.utils.CryptoUtils.encrypt(/* getBytes */(param.getData()).split('').map(s => s.charCodeAt(0)), /* toCharArray */(keyRandom).split(''));
                    hashMessageWrapper = this.uploadDelegate.uploadTextToIpfs(encrypted, param.getName(), param.getContentType(), param.getEncoding(), param.getKeywords(), param.getMetaDataAsString());
                    secretKey = keyRandom;
                } else {
                    hashMessageWrapper = this.uploadDelegate.uploadTextToIpfs(/* getBytes */(param.getData()).split('').map(s => s.charCodeAt(0)), param.getName(), param.getContentType(), param.getEncoding(), param.getKeywords(), param.getMetaDataAsString());
                }
                let nemMessage : org.nem.core.model.Message = param.getPrivacyStrategy().encodeToMessage(hashMessageWrapper.getData());
                if(this.isLocalPeerConnection) {
                    let transaction : org.nem.core.model.TransferTransaction = new io.nem.xpx.builder.TransferTransactionBuilder(this.peerConnection.getTransactionFeeCalculators()).sender(new org.nem.core.model.Account(new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PublicKey.fromHexString(param.getMultisigPublicKey())))).recipient(new org.nem.core.model.Account(org.nem.core.model.Address.fromPublicKey(org.nem.core.crypto.PublicKey.fromHexString(param.getReceiverPublicKey())))).amount(org.nem.core.model.primitive.Amount.fromNem(1)).version(2).message(nemMessage).buildTransaction();
                    let announceResult : org.nem.core.model.ncc.NemAnnounceResult = io.nem.xpx.builder.MultisigTransactionBuilder.peerConnection(this.peerConnection).sender(new org.nem.core.model.Account(new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PrivateKey.fromHexString(param.getSenderPrivateKey())))).otherTransaction(transaction).buildAndSendMultisigTransaction();
                    publishedData = announceResult.getTransactionHash().toString();
                } else {
                    let transaction : org.nem.core.model.TransferTransaction = (o => o.addMosaics.apply(o, param.getMosaics()))(new io.nem.xpx.builder.TransferTransactionBuilder(this.peerConnection.getTransactionFeeCalculators()).sender(new org.nem.core.model.Account(new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PublicKey.fromHexString(param.getMultisigPublicKey())))).recipient(new org.nem.core.model.Account(org.nem.core.model.Address.fromPublicKey(org.nem.core.crypto.PublicKey.fromHexString(param.getReceiverPublicKey()))))).amount(org.nem.core.model.primitive.Amount.fromNem(1)).message(nemMessage).buildTransaction();
                    let requestAnnounceDataSignature : io.nem.xpx.model.RequestAnnounceDataSignature = io.nem.xpx.builder.MultisigTransactionBuilder.peerConnection(this.peerConnection).sender(new org.nem.core.model.Account(new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PrivateKey.fromHexString(param.getSenderPrivateKey())))).otherTransaction(transaction).buildAndSignMultisigTransaction();
                    publishedData = this.transactionAndAnnounceApi.announceRequestPublishDataSignatureUsingPOST(requestAnnounceDataSignature);
                }
            } catch(e) {
                this.uploadDelegate.deletePinnedContent(hashMessageWrapper.getResourceHashMessage().hash());
                throw new io.nem.xpx.facade.upload.UploadException(e);
            } finally {
                this.ipfsGatewaySyncService.syncToGatewaysAsynchronously(hashMessageWrapper.getResourceHashMessage().hash());
            };
            return new io.nem.xpx.facade.multisigupload.MultisigUploadResult(new io.nem.xpx.facade.upload.UploadResult(hashMessageWrapper.getResourceHashMessage(), publishedData), secretKey);
        }

        /**
         * Handle multisig file upload.
         * 
         * @param {io.nem.xpx.facade.multisigupload.MultisigUploadFileParameter} param the upload parameter
         * @return {io.nem.xpx.facade.multisigupload.MultisigUploadResult} the multisig upload data
         * @throws IOException Signals that an I/O exception has occurred.
         * @throws ApiException the api exception
         * @throws UploadException the upload exception
         */
        public handleMultisigFileUpload(param : io.nem.xpx.facade.multisigupload.MultisigUploadFileParameter) : io.nem.xpx.facade.multisigupload.MultisigUploadResult {
            let encrypted : number[] = null;
            let response : number[] = null;
            let hashMessageWrapper : io.nem.xpx.service.UploadDelegate.ResourceHashMessageWrapper = null;
            let publishedData : string = "";
            let secretKey : string = null;
            try {
                if(param.getPrivacyStrategy().getNemMessageType() === io.nem.xpx.model.NemMessageType.SECURE) {
                    let keyGen : javax.crypto.KeyGenerator = javax.crypto.KeyGenerator.getInstance("AES");
                    keyGen.init(128);
                    let keyRandom : string = org.apache.commons.codec.binary.Base64.encodeBase64String(keyGen.generateKey().getEncoded());
                    encrypted = io.nem.xpx.utils.CryptoUtils.encrypt(org.apache.commons.io.FileUtils.readFileToByteArray(param.getFile()), /* toCharArray */(keyRandom).split(''));
                    hashMessageWrapper = this.uploadDelegate.uploadBinaryToIpfs(encrypted, param.getName(), param.getContentType(), param.getKeywords(), param.getMetaDataAsString());
                    secretKey = keyRandom;
                } else {
                    hashMessageWrapper = this.uploadDelegate.uploadBinaryToIpfs(org.apache.commons.io.FileUtils.readFileToByteArray(param.getFile()), param.getName(), param.getContentType(), param.getKeywords(), param.getMetaDataAsString());
                }
                let nemMessage : org.nem.core.model.Message = param.getPrivacyStrategy().encodeToMessage(response);
                if(this.isLocalPeerConnection) {
                    let transaction : org.nem.core.model.TransferTransaction = new io.nem.xpx.builder.TransferTransactionBuilder(this.peerConnection.getTransactionFeeCalculators()).sender(new org.nem.core.model.Account(new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PublicKey.fromHexString(param.getMultisigPublicKey())))).recipient(new org.nem.core.model.Account(org.nem.core.model.Address.fromPublicKey(org.nem.core.crypto.PublicKey.fromHexString(param.getReceiverPublicKey())))).amount(org.nem.core.model.primitive.Amount.fromNem(1)).message(nemMessage).buildTransaction();
                    let announceResult : org.nem.core.model.ncc.NemAnnounceResult = io.nem.xpx.builder.MultisigTransactionBuilder.peerConnection(this.peerConnection).sender(new org.nem.core.model.Account(new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PrivateKey.fromHexString(param.getSenderPrivateKey())))).otherTransaction(transaction).buildAndSendMultisigTransaction();
                    publishedData = announceResult.getTransactionHash().toString();
                } else {
                    let transaction : org.nem.core.model.TransferTransaction = (o => o.addMosaics.apply(o, param.getMosaics()))(new io.nem.xpx.builder.TransferTransactionBuilder(this.peerConnection.getTransactionFeeCalculators()).sender(new org.nem.core.model.Account(new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PublicKey.fromHexString(param.getMultisigPublicKey())))).recipient(new org.nem.core.model.Account(org.nem.core.model.Address.fromPublicKey(org.nem.core.crypto.PublicKey.fromHexString(param.getReceiverPublicKey()))))).amount(org.nem.core.model.primitive.Amount.fromNem(1)).message(nemMessage).buildTransaction();
                    let requestAnnounceDataSignature : io.nem.xpx.model.RequestAnnounceDataSignature = io.nem.xpx.builder.MultisigTransactionBuilder.peerConnection(this.peerConnection).sender(new org.nem.core.model.Account(new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PrivateKey.fromHexString(param.getSenderPrivateKey())))).otherTransaction(transaction).buildAndSignMultisigTransaction();
                    publishedData = this.transactionAndAnnounceApi.announceRequestPublishDataSignatureUsingPOST(requestAnnounceDataSignature);
                }
            } catch(e) {
                this.uploadDelegate.deletePinnedContent(hashMessageWrapper.getResourceHashMessage().hash());
                throw new io.nem.xpx.facade.upload.UploadException(e);
            };
            return new io.nem.xpx.facade.multisigupload.MultisigUploadResult(new io.nem.xpx.facade.upload.UploadResult(hashMessageWrapper.getResourceHashMessage(), publishedData), secretKey);
        }

        /**
         * Handle multisig binary upload.
         * 
         * @param {io.nem.xpx.facade.multisigupload.MultisigUploadBinaryParameter} param the upload parameter
         * @return {io.nem.xpx.facade.multisigupload.MultisigUploadResult} the multisig upload data
         * @throws IOException Signals that an I/O exception has occurred.
         * @throws ApiException the api exception
         * @throws UploadException the upload exception
         */
        public handleMultisigBinaryUpload(param : io.nem.xpx.facade.multisigupload.MultisigUploadBinaryParameter) : io.nem.xpx.facade.multisigupload.MultisigUploadResult {
            let encrypted : number[] = null;
            let response : number[] = null;
            let hashMessageWrapper : io.nem.xpx.service.UploadDelegate.ResourceHashMessageWrapper = null;
            let publishedData : string = "";
            let secretKey : string = null;
            try {
                if(param.getPrivacyStrategy().getNemMessageType() === io.nem.xpx.model.NemMessageType.SECURE) {
                    let keyGen : javax.crypto.KeyGenerator = javax.crypto.KeyGenerator.getInstance("AES");
                    keyGen.init(128);
                    let keyRandom : string = org.apache.commons.codec.binary.Base64.encodeBase64String(keyGen.generateKey().getEncoded());
                    encrypted = io.nem.xpx.utils.CryptoUtils.encrypt(param.getData(), /* toCharArray */(keyRandom).split(''));
                    hashMessageWrapper = this.uploadDelegate.uploadBinaryToIpfs(encrypted, param.getName(), param.getContentType(), param.getKeywords(), param.getMetaDataAsString());
                    secretKey = keyRandom;
                } else {
                    hashMessageWrapper = this.uploadDelegate.uploadBinaryToIpfs(param.getData(), param.getName(), param.getContentType(), param.getKeywords(), param.getMetaDataAsString());
                }
                let nemMessage : org.nem.core.model.Message = param.getPrivacyStrategy().encodeToMessage(response);
                if(this.isLocalPeerConnection) {
                    let transaction : org.nem.core.model.TransferTransaction = new io.nem.xpx.builder.TransferTransactionBuilder(this.peerConnection.getTransactionFeeCalculators()).sender(new org.nem.core.model.Account(new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PublicKey.fromHexString(param.getMultisigPublicKey())))).recipient(new org.nem.core.model.Account(org.nem.core.model.Address.fromPublicKey(org.nem.core.crypto.PublicKey.fromHexString(param.getReceiverPublicKey())))).amount(org.nem.core.model.primitive.Amount.fromNem(1)).message(nemMessage).buildTransaction();
                    let announceResult : org.nem.core.model.ncc.NemAnnounceResult = io.nem.xpx.builder.MultisigTransactionBuilder.peerConnection(this.peerConnection).sender(new org.nem.core.model.Account(new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PrivateKey.fromHexString(param.getSenderPrivateKey())))).otherTransaction(transaction).buildAndSendMultisigTransaction();
                    publishedData = announceResult.getTransactionHash().toString();
                } else {
                    let transaction : org.nem.core.model.TransferTransaction = (o => o.addMosaics.apply(o, param.getMosaics()))(new io.nem.xpx.builder.TransferTransactionBuilder(this.peerConnection.getTransactionFeeCalculators()).sender(new org.nem.core.model.Account(new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PublicKey.fromHexString(param.getMultisigPublicKey())))).recipient(new org.nem.core.model.Account(org.nem.core.model.Address.fromPublicKey(org.nem.core.crypto.PublicKey.fromHexString(param.getReceiverPublicKey()))))).amount(org.nem.core.model.primitive.Amount.fromNem(1)).message(nemMessage).buildTransaction();
                    let requestAnnounceDataSignature : io.nem.xpx.model.RequestAnnounceDataSignature = io.nem.xpx.builder.MultisigTransactionBuilder.peerConnection(this.peerConnection).sender(new org.nem.core.model.Account(new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PrivateKey.fromHexString(param.getSenderPrivateKey())))).otherTransaction(transaction).buildAndSignMultisigTransaction();
                    publishedData = this.transactionAndAnnounceApi.announceRequestPublishDataSignatureUsingPOST(requestAnnounceDataSignature);
                }
            } catch(e) {
                this.uploadDelegate.deletePinnedContent(hashMessageWrapper.getResourceHashMessage().hash());
                throw new io.nem.xpx.facade.upload.UploadException(e);
            };
            return new io.nem.xpx.facade.multisigupload.MultisigUploadResult(new io.nem.xpx.facade.upload.UploadResult(hashMessageWrapper.getResourceHashMessage(), publishedData), secretKey);
        }
    }
    MultisigUpload["__class"] = "io.nem.xpx.facade.multisigupload.MultisigUpload";

}

