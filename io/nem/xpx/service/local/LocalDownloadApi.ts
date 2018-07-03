/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.local {
    /**
     * Instantiates a new local download api.
     * 
     * @param {io.nem.xpx.service.NemTransactionApi} nemTransactionApi the nem transaction api
     * @param {io.ipfs.api.IPFS} proximaxIfpsConnection the proximax ifps connection
     * @class
     */
    export class LocalDownloadApi implements io.nem.xpx.service.intf.DownloadApi {
        /**
         * The nem transaction api.
         */
        /*private*/ nemTransactionApi : io.nem.xpx.service.NemTransactionApi;

        /**
         * The proximax ifps connection.
         */
        /*private*/ proximaxIfpsConnection : io.ipfs.api.IPFS;

        public constructor(nemTransactionApi : io.nem.xpx.service.NemTransactionApi, proximaxIfpsConnection : io.ipfs.api.IPFS) {
            if(this.nemTransactionApi===undefined) this.nemTransactionApi = null;
            if(this.proximaxIfpsConnection===undefined) this.proximaxIfpsConnection = null;
            this.nemTransactionApi = nemTransactionApi;
            this.proximaxIfpsConnection = proximaxIfpsConnection;
        }

        /**
         * 
         * @param {string} hash
         * @return {Array}
         */
        public downloadUsingDataHashUsingGET(hash : string) : number[] {
            return this.proximaxIfpsConnection.cat(io.ipfs.multihash.Multihash.fromBase58(hash));
        }

        /**
         * 
         * @param {string} nemHash
         * @param {string} transferMode
         * @return {Array}
         */
        public downloadTextUsingGET(nemHash : string, transferMode : string) : number[] {
            let transactionMetaDataPair : org.nem.core.model.ncc.TransactionMetaDataPair = this.nemTransactionApi.getTransaction(nemHash);
            let transfer : org.nem.core.model.TransferTransaction = (<org.nem.core.model.TransferTransaction>transactionMetaDataPair.getEntity());
            let resourceMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage = io.nem.xpx.service.model.buffers.ResourceHashMessage.getRootAsResourceHashMessage$java_nio_ByteBuffer(java.nio.ByteBuffer.wrap(org.apache.commons.codec.binary.Base64.decodeBase64(transfer.getMessage().getEncodedPayload())));
            return this.proximaxIfpsConnection.cat(io.ipfs.multihash.Multihash.fromBase58(resourceMessage.hash()));
        }

        /**
         * 
         * @param {string} nemHash
         * @param {string} transferMode
         * @return {Array}
         */
        public downloadBinaryUsingGET(nemHash : string, transferMode : string) : number[] {
            let transactionMetaDataPair : org.nem.core.model.ncc.TransactionMetaDataPair = this.nemTransactionApi.getTransaction(nemHash);
            let transfer : org.nem.core.model.TransferTransaction = (<org.nem.core.model.TransferTransaction>transactionMetaDataPair.getEntity());
            let resourceMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage = io.nem.xpx.service.model.buffers.ResourceHashMessage.getRootAsResourceHashMessage$java_nio_ByteBuffer(java.nio.ByteBuffer.wrap(org.apache.commons.codec.binary.Base64.decodeBase64(transfer.getMessage().getEncodedPayload())));
            return this.proximaxIfpsConnection.cat(io.ipfs.multihash.Multihash.fromBase58(resourceMessage.hash()));
        }

        /**
         * 
         * @param {string} nemHash
         * @param {string} transferMode
         * @return {Array}
         */
        public downloadFileUsingGET(nemHash : string, transferMode : string) : number[] {
            let transactionMetaDataPair : org.nem.core.model.ncc.TransactionMetaDataPair = this.nemTransactionApi.getTransaction(nemHash);
            let transfer : org.nem.core.model.TransferTransaction = (<org.nem.core.model.TransferTransaction>transactionMetaDataPair.getEntity());
            let resourceMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage = io.nem.xpx.service.model.buffers.ResourceHashMessage.getRootAsResourceHashMessage$java_nio_ByteBuffer(java.nio.ByteBuffer.wrap(org.apache.commons.codec.binary.Base64.decodeBase64(transfer.getMessage().getEncodedPayload())));
            return this.proximaxIfpsConnection.cat(io.ipfs.multihash.Multihash.fromBase58(resourceMessage.hash()));
        }

        /**
         * Load resource.
         * 
         * @param {io.nem.xpx.service.model.buffers.ResourceHashMessage} resourceMessage the resource message
         * @return {Array} the byte[]
         * @throws IOException Signals that an I/O exception has occurred.
         * @throws ApiException the api exception
         */
        public loadResource(resourceMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage) : number[] {
            return this.proximaxIfpsConnection.cat(io.ipfs.multihash.Multihash.fromBase58(resourceMessage.hash()));
        }

        /**
         * Validate digest.
         * 
         * @param {Array} binaryData the binary data
         * @param {string} digest the digest
         * @throws NoSuchAlgorithmException the no such algorithm exception
         * @throws MessageDigestNotMatchException the message digest not match exception
         * @private
         */
        /*private*/ validateDigest(binaryData : number[], digest : string) {
            let messageDigest : java.security.MessageDigest = java.security.MessageDigest.getInstance("SHA-256");
            let binaryDigest : string = String.fromCharCode.apply(null, org.bouncycastle.util.encoders.Hex.encode(messageDigest.digest(binaryData)));
            if(!/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(binaryDigest,digest))) {
                throw new io.nem.xpx.exceptions.MessageDigestNotMatchException("Message Digest Validation Failed. Resource requested seems to be corrupted.");
            }
        }
    }
    LocalDownloadApi["__class"] = "io.nem.xpx.service.local.LocalDownloadApi";
    LocalDownloadApi["__interfaces"] = ["io.nem.xpx.service.intf.DownloadApi"];


}

