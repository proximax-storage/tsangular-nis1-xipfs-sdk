/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.download {
    /**
     * Instantiates a new download.
     * 
     * @param {io.nem.xpx.facade.connection.PeerConnection} peerConnection            the peer connection
     * @throws PeerConnectionNotFoundException the peer connection not found exception
     * @class
     * @extends io.nem.xpx.facade.AbstractFacadeService
     */
    export class Download extends io.nem.xpx.facade.AbstractFacadeService {
        /**
         * The download api.
         */
        /*private*/ downloadApi : io.nem.xpx.service.intf.DownloadApi;

        /**
         * The nem transaction api.
         */
        /*private*/ nemTransactionApi : io.nem.xpx.service.NemTransactionApi;

        public constructor(peerConnection : io.nem.xpx.facade.connection.PeerConnection) {
            super();
            if(this.downloadApi===undefined) this.downloadApi = null;
            if(this.nemTransactionApi===undefined) this.nemTransactionApi = null;
            if(peerConnection == null) {
                throw new io.nem.xpx.exceptions.PeerConnectionNotFoundException("PeerConnection can\'t be null");
            }
            this.downloadApi = peerConnection.getDownloadApi();
            this.nemTransactionApi = peerConnection.getNemTransactionApi();
        }

        /**
         * Download binary.
         * 
         * @param {io.nem.xpx.facade.download.DownloadParameter} downloadParameter the download parameter
         * @return {io.nem.xpx.facade.download.DownloadBinaryResult} the download binary result
         * @throws DownloadException the download exception
         */
        public downloadBinary(downloadParameter : io.nem.xpx.facade.download.DownloadParameter) : io.nem.xpx.facade.download.DownloadBinaryResult {
            return io.nem.xpx.facade.download.DownloadBinaryResult.fromDownloadResult(this.download(downloadParameter));
        }

        /**
         * Download text data.
         * 
         * @param {io.nem.xpx.facade.download.DownloadParameter} downloadParameter the download parameter
         * @return {io.nem.xpx.facade.download.DownloadTextDataResult} the download text data result
         * @throws DownloadException the download exception
         */
        public downloadTextData(downloadParameter : io.nem.xpx.facade.download.DownloadParameter) : io.nem.xpx.facade.download.DownloadTextDataResult {
            return io.nem.xpx.facade.download.DownloadTextDataResult.fromDownloadResult(this.download(downloadParameter));
        }

        /**
         * Download file.
         * 
         * @param {io.nem.xpx.facade.download.DownloadParameter} downloadParameter the download parameter
         * @return {io.nem.xpx.facade.download.DownloadFileResult} the download file result
         * @throws DownloadException the download exception
         */
        public downloadFile(downloadParameter : io.nem.xpx.facade.download.DownloadParameter) : io.nem.xpx.facade.download.DownloadFileResult {
            return io.nem.xpx.facade.download.DownloadFileResult.fromDownloadResult(this.download(downloadParameter));
        }

        /**
         * Download.
         * 
         * @param {io.nem.xpx.facade.download.DownloadParameter} downloadParameter the download parameter
         * @return {io.nem.xpx.facade.download.DownloadResult} the download result
         * @throws DownloadException the download exception
         * @private
         */
        /*private*/ download(downloadParameter : io.nem.xpx.facade.download.DownloadParameter) : io.nem.xpx.facade.download.DownloadResult {
            if(downloadParameter.getNemHash() != null) {
                let transaction : org.nem.core.model.TransferTransaction = this.getNemTransaction(downloadParameter.getNemHash());
                let decodedDataFromNemMessage : number[] = downloadParameter.getPrivacyStrategy().decodeTransaction(transaction);
                let resourceMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage = this.deserializeResourceMessageHash(decodedDataFromNemMessage);
                let downloadedData : number[] = this.downloadUsingDataHash(resourceMessage.hash());
                let decryptedDownloadedData : number[] = downloadParameter.getPrivacyStrategy().decrypt(downloadedData, transaction, resourceMessage);
                return new io.nem.xpx.facade.download.DownloadResult(resourceMessage, decryptedDownloadedData, io.nem.xpx.model.NemMessageType_$WRAPPER.fromInt(transaction.getMessage().getType()));
            } else {
                let downloadedData : number[] = this.downloadUsingDataHash(downloadParameter.getIpfsHash());
                let decryptedDownloadedData : number[] = downloadParameter.getPrivacyStrategy().decrypt(downloadedData, null, null);
                return new io.nem.xpx.facade.download.DownloadResult(null, decryptedDownloadedData, null);
            }
        }

        /**
         * Gets the nem transaction.
         * 
         * @param {string} nemHash the nem hash
         * @return {org.nem.core.model.TransferTransaction} the nem transaction
         * @throws DownloadException the download exception
         * @private
         */
        /*private*/ getNemTransaction(nemHash : string) : org.nem.core.model.TransferTransaction {
            try {
                return <org.nem.core.model.TransferTransaction>this.nemTransactionApi.getTransaction(nemHash).getEntity();
            } catch(e) {
                throw new io.nem.xpx.facade.download.DownloadException(java.lang.String.format("Failed to retrieve a Nem Transaction for hash %s", nemHash), e);
            };
        }

        /**
         * Download using data hash.
         * 
         * @param {string} hash the hash
         * @return {Array} the byte[]
         * @throws DownloadException the download exception
         * @private
         */
        /*private*/ downloadUsingDataHash(hash : string) : number[] {
            try {
                return this.downloadApi.downloadUsingDataHashUsingGET(hash);
            } catch(e) {
                throw new io.nem.xpx.facade.download.DownloadException(java.lang.String.format("Failed to download using data hash %s", hash), e);
            };
        }
    }
    Download["__class"] = "io.nem.xpx.facade.download.Download";

}

