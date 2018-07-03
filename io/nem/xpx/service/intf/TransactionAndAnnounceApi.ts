/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.intf {
    /**
     * The Interface TransactionAndAnnounceApi.
     * @class
     */
    export interface TransactionAndAnnounceApi {
        /**
         * Announce request publish data signature using POST.
         * 
         * @param {io.nem.xpx.model.RequestAnnounceDataSignature} requestAnnounceDataSignature the request announce data signature
         * @return {string} the string
         * @throws ApiException the api exception
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         */
        announceRequestPublishDataSignatureUsingPOST(requestAnnounceDataSignature : io.nem.xpx.model.RequestAnnounceDataSignature) : string;

        /**
         * Gets the XPX transaction using GET.
         * 
         * @param {string} nemHash the nem hash
         * @return {string} the XPX transaction using GET
         * @throws ApiException the api exception
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         */
        getXPXTransactionUsingGET(nemHash : string) : string;
    }
}

