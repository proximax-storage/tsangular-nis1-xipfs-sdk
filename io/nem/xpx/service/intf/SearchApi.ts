/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.intf {
    /**
     * The Interface SearchApi.
     * @class
     */
    export interface SearchApi {
        /**
         * Search transaction with keyword using GET.
         * 
         * @param {string} xPvKey the x pv key
         * @param {string} xPubkey the x pubkey
         * @param {string} keywords the keywords
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity[]} the list
         * @throws ApiException the api exception
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         */
        searchTransactionWithKeywordUsingGET(xPvKey? : any, xPubkey? : any, keywords? : any) : any;

        /**
         * Search transaction with name using GET.
         * 
         * @param {string} xPvKey the x pv key
         * @param {string} xPubkey the x pubkey
         * @param {string} name the name
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity[]} the list
         * @throws ApiException the api exception
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         */
        searchTransactionWithNameUsingGET(xPvKey : string, xPubkey : string, name : string) : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity>;

        /**
         * Search all public transaction with metadata key value pair.
         * 
         * @param {string} xPubkey the x pubkey
         * @param {string} key the key
         * @param {string} value the value
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity[]} the list
         * @throws ApiException the api exception
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         */
        searchTransactionWithMetadataUsingGET(xPubkey : string, key : string, value : string) : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity>;

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
        searchTransactionWithMetadataKeyValuePair(xPvKey : string, xPubkey : string, key : string, value : string) : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity>;
    }
}

