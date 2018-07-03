/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.upload {
    /**
     * Instantiates a new upload.
     * 
     * @param {io.nem.xpx.facade.connection.PeerConnection} peerConnection
     * the peer connection
     * @throws PeerConnectionNotFoundException
     * the peer connection not found exception
     * @class
     * @extends io.nem.xpx.facade.AbstractFacadeService
     */
    export class Upload extends io.nem.xpx.facade.AbstractFacadeService {
        /**
         * The peer connection.
         */
        /*private*/ peerConnection : io.nem.xpx.facade.connection.PeerConnection;

        /**
         * The upload api.
         */
        /*private*/ uploadApi : io.nem.xpx.service.intf.UploadApi;

        /**
         * The transaction announcer.
         */
        /*private*/ transactionAnnouncer : io.nem.xpx.service.TransactionAnnouncer;

        /*private*/ uploadDelegate : io.nem.xpx.service.UploadDelegate;

        /*private*/ ipfsGatewaySyncService : io.nem.xpx.service.IpfsGatewaySyncService;

        public constructor(peerConnection : io.nem.xpx.facade.connection.PeerConnection) {
            super();
            if(this.peerConnection===undefined) this.peerConnection = null;
            if(this.uploadApi===undefined) this.uploadApi = null;
            if(this.transactionAnnouncer===undefined) this.transactionAnnouncer = null;
            if(this.uploadDelegate===undefined) this.uploadDelegate = null;
            if(this.ipfsGatewaySyncService===undefined) this.ipfsGatewaySyncService = null;
            if(peerConnection == null) {
                throw new io.nem.xpx.exceptions.PeerConnectionNotFoundException("PeerConnection can\'t be null");
            }
            this.uploadApi = peerConnection.getUploadApi();
            this.transactionAnnouncer = peerConnection.getTransactionAnnouncer();
            this.peerConnection = peerConnection;
            this.uploadDelegate = new io.nem.xpx.service.UploadDelegate(peerConnection.getUploadApi());
            this.ipfsGatewaySyncService = new io.nem.xpx.service.IpfsGatewaySyncService(peerConnection.getSyncGateways());
        }

        /**
         * Upload file.
         * 
         * @param {io.nem.xpx.facade.upload.UploadFileParameter} param
         * the upload parameter
         * @return {io.nem.xpx.facade.upload.UploadResult} the upload data
         * @throws UploadException
         * the upload exception
         */
        public uploadFile(param : io.nem.xpx.facade.upload.UploadFileParameter) : io.nem.xpx.facade.upload.UploadResult {
            try {
                let binaryContent : number[] = org.apache.commons.io.FileUtils.readFileToByteArray(param.getFile());
                return this.handleBinaryUpload(param.getPrivacyStrategy(), param.getSenderPrivateKey(), param.getReceiverPublicKey(), param.getContentType(), param.getKeywords(), param.getMetaDataAsString(), param.getName(), param.getMosaics(), binaryContent);
            } catch(__e) {
                if(__e != null && __e instanceof <any>io.nem.xpx.facade.upload.UploadException) {
                    let e : io.nem.xpx.facade.upload.UploadException = <io.nem.xpx.facade.upload.UploadException>__e;
                    throw e;

                }
                if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.Exception") >= 0) || __e != null && __e instanceof <any>Error) {
                    let e : Error = <Error>__e;
                    throw new io.nem.xpx.facade.upload.UploadException(java.lang.String.format("Error on uploading file data: %s", param.getFile().getAbsolutePath()), e);

                }
            };
        }

        /**
         * Upload data.
         * 
         * @param {io.nem.xpx.facade.upload.UploadTextDataParameter} param
         * the upload parameter
         * @return {io.nem.xpx.facade.upload.UploadResult} the upload data
         * @throws UploadException
         * the upload exception
         */
        public uploadTextData(param : io.nem.xpx.facade.upload.UploadTextDataParameter) : io.nem.xpx.facade.upload.UploadResult {
            return this.handleTextDataUpload(param.getPrivacyStrategy(), param.getSenderPrivateKey(), param.getReceiverPublicKey(), param.getContentType(), param.getKeywords(), param.getMetaDataAsString(), param.getName(), param.getMosaics(), param.getData(), param.getEncoding());
        }

        /**
         * Upload a binary file.
         * 
         * @param {io.nem.xpx.facade.upload.UploadBinaryParameter} param the upload parameter
         * @return {io.nem.xpx.facade.upload.UploadResult} the upload data
         * @throws UploadException the upload exception
         */
        public uploadBinary(param : io.nem.xpx.facade.upload.UploadBinaryParameter) : io.nem.xpx.facade.upload.UploadResult {
            try {
                return this.handleBinaryUpload(param.getPrivacyStrategy(), param.getSenderPrivateKey(), param.getReceiverPublicKey(), param.getContentType(), param.getKeywords(), param.getMetaDataAsString(), param.getName(), param.getMosaics(), param.getData());
            } catch(__e) {
                if(__e != null && __e instanceof <any>io.nem.xpx.facade.upload.UploadException) {
                    let e : io.nem.xpx.facade.upload.UploadException = <io.nem.xpx.facade.upload.UploadException>__e;
                    throw e;

                }
                if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.Exception") >= 0) || __e != null && __e instanceof <any>Error) {
                    let e : Error = <Error>__e;
                    throw new io.nem.xpx.facade.upload.UploadException("Error on uploading binary data", e);

                }
            };
        }

        /**
         * Upload path.
         * 
         * @param {io.nem.xpx.facade.upload.UploadPathParameter} param            the upload parameter
         * @return {io.nem.xpx.facade.upload.UploadResult} the upload data
         * @throws UploadException             the upload exception
         */
        public uploadPath(param : io.nem.xpx.facade.upload.UploadPathParameter) : io.nem.xpx.facade.upload.UploadResult {
            try {
                let resourceHashMessageWrapper : io.nem.xpx.service.UploadDelegate.ResourceHashMessageWrapper = this.uploadDelegate.uploadPathToIpfs(param.getPath(), param.getName(), param.getKeywords(), param.getMetaDataAsString());
                return this.handlePostUpload(param.getPrivacyStrategy(), param.getSenderPrivateKey(), param.getReceiverPublicKey(), param.getMosaics(), resourceHashMessageWrapper);
            } catch(__e) {
                if(__e != null && __e instanceof <any>io.nem.xpx.facade.upload.UploadException) {
                    let e : io.nem.xpx.facade.upload.UploadException = <io.nem.xpx.facade.upload.UploadException>__e;
                    throw e;

                }
                if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.Exception") >= 0) || __e != null && __e instanceof <any>Error) {
                    let e : Error = <Error>__e;
                    throw new io.nem.xpx.facade.upload.UploadException(java.lang.String.format("Error on uploading path: %s", param.getPath()), e);

                }
            };
        }

        /**
         * Upload files as zip.
         * 
         * @param {io.nem.xpx.facade.upload.UploadFilesAsZipParameter} param the param
         * @return {io.nem.xpx.facade.upload.UploadResult} the upload result
         * @throws UploadException the upload exception
         */
        public uploadFilesAsZip(param : io.nem.xpx.facade.upload.UploadFilesAsZipParameter) : io.nem.xpx.facade.upload.UploadResult {
            try {
                let binaryContent : number[] = this.zipFiles(param.getFiles());
                return this.handleBinaryUpload(param.getPrivacyStrategy(), param.getSenderPrivateKey(), param.getReceiverPublicKey(), param.getContentType(), param.getKeywords(), param.getMetaDataAsString(), param.getName(), param.getMosaics(), binaryContent);
            } catch(__e) {
                if(__e != null && __e instanceof <any>io.nem.xpx.facade.upload.UploadException) {
                    let e : io.nem.xpx.facade.upload.UploadException = <io.nem.xpx.facade.upload.UploadException>__e;
                    throw e;

                }
                if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.Exception") >= 0) || __e != null && __e instanceof <any>Error) {
                    let e : Error = <Error>__e;
                    throw new io.nem.xpx.facade.upload.UploadException("Error on uploading files as zip", e);

                }
            };
        }

        /**
         * Upload multiple files.
         * 
         * @param {io.nem.xpx.facade.upload.UploadMultipleFilesParameter} param the param
         * @return {io.nem.xpx.facade.upload.MultiFileUploadResult} the multi file upload result
         * @throws UploadException the upload exception
         */
        public uploadMultipleFiles(param : io.nem.xpx.facade.upload.UploadMultipleFilesParameter) : io.nem.xpx.facade.upload.MultiFileUploadResult {
            if(/* size */(<number>param.getFiles().length) === 0) throw new io.nem.xpx.facade.upload.UploadException("No file to upload");
            let fileUploadResults : Array<io.nem.xpx.facade.upload.MultiFileUploadResult.FileUploadResult> = <any>(param.getFiles().parallelStream().map<any>((file) => {
                try {
                    let binaryContent : number[] = org.apache.commons.io.FileUtils.readFileToByteArray(file);
                    return new io.nem.xpx.facade.upload.MultiFileUploadResult.FileUploadResult(file, this.handleBinaryUpload(param.getPrivacyStrategy(), param.getSenderPrivateKey(), param.getReceiverPublicKey(), io.nem.xpx.utils.ContentTypeUtils.detectContentType$byte_A(binaryContent), param.getKeywords(), param.getMetaDataAsString(), file.getName(), param.getMosaics(), binaryContent));
                } catch(e) {
                    return new io.nem.xpx.facade.upload.MultiFileUploadResult.FileUploadResult(file, new io.nem.xpx.facade.upload.UploadException(java.lang.String.format("Error on uploading file data: %s", file.getAbsolutePath()), e));
                };
            }).collect<any, any>(java.util.stream.Collectors.toList<any>()));
            return new io.nem.xpx.facade.upload.MultiFileUploadResult(fileUploadResults);
        }

        /**
         * Upload from URL.
         * 
         * @param {io.nem.xpx.facade.upload.UploadFromUrlParameter} param
         * the upload parameter
         * @return {io.nem.xpx.facade.upload.UploadResult} the upload data
         * @throws UploadException
         * the upload exception
         */
        public uploadFromUrl(param : io.nem.xpx.facade.upload.UploadFromUrlParameter) : io.nem.xpx.facade.upload.UploadResult {
            try {
                let downloadedBinary : number[] = org.apache.commons.io.IOUtils.toByteArray(param.getUrl());
                let contentTypeOrDetected : string = param.getContentType() != null?param.getContentType():io.nem.xpx.utils.ContentTypeUtils.detectContentType$byte_A(downloadedBinary);
                return this.handleBinaryUpload(param.getPrivacyStrategy(), param.getSenderPrivateKey(), param.getReceiverPublicKey(), contentTypeOrDetected, param.getKeywords(), param.getMetaDataAsString(), param.getName(), param.getMosaics(), downloadedBinary);
            } catch(__e) {
                if(__e != null && __e instanceof <any>io.nem.xpx.facade.upload.UploadException) {
                    let e : io.nem.xpx.facade.upload.UploadException = <io.nem.xpx.facade.upload.UploadException>__e;
                    throw e;

                }
                if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.Exception") >= 0) || __e != null && __e instanceof <any>Error) {
                    let e : Error = <Error>__e;
                    throw new io.nem.xpx.facade.upload.UploadException(java.lang.String.format("Error on uploading from URL: %s", param.getUrl().toString()), e);

                }
            };
        }

        /**
         * Handle text data upload.
         * 
         * @param {io.nem.xpx.strategy.privacy.PrivacyStrategy} privacyStrategy the privacy strategy
         * @param {string} senderPrivateKey the sender private key
         * @param {string} receiverPublicKey the receiver public key
         * @param {string} contentType the content type
         * @param {string} keywords the keywords
         * @param {string} metadata the metadata
         * @param {string} name the name
         * @param {Array} mosaics the mosaics
         * @param {string} textData the text data
         * @param {string} encoding the encoding
         * @return {io.nem.xpx.facade.upload.UploadResult} the upload result
         * @throws UploadException the upload exception
         * @private
         */
        /*private*/ handleTextDataUpload(privacyStrategy : io.nem.xpx.strategy.privacy.PrivacyStrategy, senderPrivateKey : string, receiverPublicKey : string, contentType : string, keywords : string, metadata : string, name : string, mosaics : org.nem.core.model.mosaic.Mosaic[], textData : string, encoding : string) : io.nem.xpx.facade.upload.UploadResult {
            try {
                let textInBytes : number[] = /* getBytes */(textData).split('').map(s => s.charCodeAt(0));
                let encryptedTextInBytes : number[] = privacyStrategy.encrypt(textInBytes);
                let hashMessageWrapper : io.nem.xpx.service.UploadDelegate.ResourceHashMessageWrapper = this.uploadDelegate.uploadTextToIpfs(encryptedTextInBytes, name, contentType, encoding, keywords, metadata);
                return this.handlePostUpload(privacyStrategy, senderPrivateKey, receiverPublicKey, mosaics, hashMessageWrapper);
            } catch(__e) {
                if(__e != null && __e instanceof <any>io.nem.xpx.facade.upload.UploadException) {
                    let e : io.nem.xpx.facade.upload.UploadException = <io.nem.xpx.facade.upload.UploadException>__e;
                    throw e;

                }
                if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.Exception") >= 0) || __e != null && __e instanceof <any>Error) {
                    let e : Error = <Error>__e;
                    throw new io.nem.xpx.facade.upload.UploadException("Error on uploading text data", e);

                }
            };
        }

        /**
         * Handle binary upload.
         * 
         * @param {io.nem.xpx.strategy.privacy.PrivacyStrategy} privacyStrategy the privacy strategy
         * @param {string} senderPrivateKey the sender private key
         * @param {string} receiverPublicKey the receiver public key
         * @param {string} contentType the content type
         * @param {string} keywords the keywords
         * @param {string} metadata the metadata
         * @param {string} name the name
         * @param {Array} mosaics the mosaics
         * @param {Array} binaryContent the binary content
         * @return {io.nem.xpx.facade.upload.UploadResult} the upload result
         * @throws UploadException the upload exception
         * @private
         */
        /*private*/ handleBinaryUpload(privacyStrategy : io.nem.xpx.strategy.privacy.PrivacyStrategy, senderPrivateKey : string, receiverPublicKey : string, contentType : string, keywords : string, metadata : string, name : string, mosaics : org.nem.core.model.mosaic.Mosaic[], binaryContent : number[]) : io.nem.xpx.facade.upload.UploadResult {
            try {
                let encryptedContent : number[] = privacyStrategy.encrypt(binaryContent);
                let hashMessageWrapper : io.nem.xpx.service.UploadDelegate.ResourceHashMessageWrapper = this.uploadDelegate.uploadBinaryToIpfs(encryptedContent, name, contentType, keywords, metadata);
                return this.handlePostUpload(privacyStrategy, senderPrivateKey, receiverPublicKey, mosaics, hashMessageWrapper);
            } catch(__e) {
                if(__e != null && __e instanceof <any>io.nem.xpx.facade.upload.UploadException) {
                    let e : io.nem.xpx.facade.upload.UploadException = <io.nem.xpx.facade.upload.UploadException>__e;
                    throw e;

                }
                if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.Exception") >= 0) || __e != null && __e instanceof <any>Error) {
                    let e : Error = <Error>__e;
                    throw new io.nem.xpx.facade.upload.UploadException("Error on uploading binary data", e);

                }
            };
        }

        /**
         * Zip files.
         * 
         * @param {java.io.File[]} files the files
         * @return {Array} the byte[]
         * @throws UploadException the upload exception
         * @private
         */
        /*private*/ zipFiles(files : Array<java.io.File>) : number[] {
            this.validateZipFilesArguments(files);
            let baos : java.io.ByteArrayOutputStream = new java.io.ByteArrayOutputStream();
            let zos : java.util.zip.ZipOutputStream = new java.util.zip.ZipOutputStream(baos);
            try {
                for(let index160=0; index160 < files.length; index160++) {
                    let file = files[index160];
                    {
                        let entry : java.util.zip.ZipEntry = new java.util.zip.ZipEntry(file.getName());
                        zos.putNextEntry(entry);
                        zos.write(org.apache.commons.io.FileUtils.readFileToByteArray(file));
                        zos.closeEntry();
                    }
                }
            } catch(e) {
                throw new io.nem.xpx.facade.upload.UploadException(java.lang.String.format("Unable to zip files together: %s", javaemul.internal.StringHelper.join(",", files.stream().map<any>((file) => file.getAbsolutePath()).collect<any, any>(java.util.stream.Collectors.toList<any>()))), e);
            } finally {
                zos.close();
            };
            return baos.toByteArray();
        }

        /**
         * Validate zip files arguments.
         * 
         * @param {java.io.File[]} files the files
         * @throws UploadException the upload exception
         * @private
         */
        /*private*/ validateZipFilesArguments(files : Array<java.io.File>) {
            if(/* size */(<number>files.length) === 0) throw new io.nem.xpx.facade.upload.UploadException("No file to upload");
            let uniqueFileNameCount : number = files.stream().map<any>((file) => file.getName()).distinct().count();
            if(uniqueFileNameCount < /* size */(<number>files.length)) throw new io.nem.xpx.facade.upload.UploadException(java.lang.String.format("File names should be unique to zip files together: %s", javaemul.internal.StringHelper.join(",", files.stream().map<any>((file) => file.getName()).collect<any, any>(java.util.stream.Collectors.toList<any>()))));
        }

        /**
         * Handle post upload.
         * 
         * @param {io.nem.xpx.strategy.privacy.PrivacyStrategy} privacyStrategy the privacy strategy
         * @param {string} senderPrivateKey the sender private key
         * @param {string} receiverPublicKey the receiver public key
         * @param {Array} mosaics the mosaics
         * @return {io.nem.xpx.facade.upload.UploadResult} the upload result
         * @throws Exception the exception
         * @param {io.nem.xpx.service.UploadDelegate.ResourceHashMessageWrapper} hashMessageWrapper
         * @private
         */
        /*private*/ handlePostUpload(privacyStrategy : io.nem.xpx.strategy.privacy.PrivacyStrategy, senderPrivateKey : string, receiverPublicKey : string, mosaics : org.nem.core.model.mosaic.Mosaic[], hashMessageWrapper : io.nem.xpx.service.UploadDelegate.ResourceHashMessageWrapper) : io.nem.xpx.facade.upload.UploadResult {
            try {
                let nemHash : string = this.createNemTransaction(privacyStrategy, senderPrivateKey, receiverPublicKey, mosaics, hashMessageWrapper.getData());
                this.ipfsGatewaySyncService.syncToGatewaysAsynchronously(hashMessageWrapper.getResourceHashMessage().hash());
                return new io.nem.xpx.facade.upload.UploadResult(hashMessageWrapper.getResourceHashMessage(), nemHash);
            } catch(e) {
                java.util.concurrent.Executors.newSingleThreadExecutor().submit<any>(() => this.uploadDelegate.deletePinnedContent(hashMessageWrapper.getResourceHashMessage().hash()));
                throw e;
            };
        }

        /**
         * Creates the nem transaction.
         * 
         * @param {io.nem.xpx.strategy.privacy.PrivacyStrategy} privacyStrategy the privacy strategy
         * @param {string} senderPrivateKey the sender private key
         * @param {string} receiverPublicKey the receiver public key
         * @param {Array} mosaics the mosaics
         * @param {Array} response the response
         * @return {string} the string
         * @throws Exception the exception
         * @private
         */
        /*private*/ createNemTransaction(privacyStrategy : io.nem.xpx.strategy.privacy.PrivacyStrategy, senderPrivateKey : string, receiverPublicKey : string, mosaics : org.nem.core.model.mosaic.Mosaic[], response : number[]) : string {
            let nemMessage : org.nem.core.model.Message = privacyStrategy.encodeToMessage(response);
            return this.transactionAnnouncer.announceTransactionForUploadedContent(nemMessage, senderPrivateKey, receiverPublicKey, mosaics);
        }
    }
    Upload["__class"] = "io.nem.xpx.facade.upload.Upload";

}

