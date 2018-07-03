/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.local {
    /**
     * Instantiates a new local transaction and announce api.
     * 
     * @param {io.nem.xpx.service.NemTransactionApi} nemTransactionApi the nem transaction api
     * @class
     */
    export class LocalTransactionAndAnnounceApi implements io.nem.xpx.service.intf.TransactionAndAnnounceApi {
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
         * @param {io.nem.xpx.model.RequestAnnounceDataSignature} requestAnnounceDataSignature
         * @return {string}
         */
        public announceRequestPublishDataSignatureUsingPOST(requestAnnounceDataSignature : io.nem.xpx.model.RequestAnnounceDataSignature) : string {
            let announceResult : org.nem.core.model.ncc.NemAnnounceResult = this.nemTransactionApi.sendTransferTransaction(org.nem.core.utils.HexEncoder.getBytes(requestAnnounceDataSignature.getData()), org.nem.core.utils.HexEncoder.getBytes(requestAnnounceDataSignature.getSignature()));
            let transactionMpair : org.nem.core.model.ncc.TransactionMetaDataPair = this.nemTransactionApi.getTransaction(announceResult.getTransactionHash().toString());
            let transferTransaction : org.nem.core.model.TransferTransaction = (<org.nem.core.model.TransferTransaction>transactionMpair.getEntity());
            return org.nem.core.serialization.JsonSerializer.serializeToJson(transferTransaction).toJSONString();
        }

        /**
         * 
         * @param {string} nemHash
         * @return {string}
         */
        public getXPXTransactionUsingGET(nemHash : string) : string {
            return org.nem.core.serialization.JsonSerializer.serializeToJson(this.nemTransactionApi.getTransaction(nemHash)).toJSONString();
        }
    }
    LocalTransactionAndAnnounceApi["__class"] = "io.nem.xpx.service.local.LocalTransactionAndAnnounceApi";
    LocalTransactionAndAnnounceApi["__interfaces"] = ["io.nem.xpx.service.intf.TransactionAndAnnounceApi"];


}

