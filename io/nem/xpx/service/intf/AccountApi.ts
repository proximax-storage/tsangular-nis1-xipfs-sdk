/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.intf {
    /**
     * The Interface AccountApi.
     * @class
     */
    export interface AccountApi {
        /**
         * Gets the all incoming nem address transactions using GET.
         * 
         * @param {string} publicKey the public key
         * @return {string} the all incoming nem address transactions using GET
         * @throws ApiException the api exception
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         */
        getAllIncomingNemAddressTransactionsUsingGET(publicKey : string) : string;

        /**
         * Gets the all nem address transactions using GET.
         * 
         * @param {string} publicKey the public key
         * @return {string} the all nem address transactions using GET
         * @throws ApiException the api exception
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         */
        getAllNemAddressTransactionsUsingGET(publicKey : string) : string;

        /**
         * Gets the all nem address transactions with page size using GET.
         * 
         * @param {string} publicKey the public key
         * @param {string} pageSize the page size
         * @return {string} the all nem address transactions with page size using GET
         * @throws ApiException the api exception
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         */
        getAllNemAddressTransactionsWithPageSizeUsingGET(publicKey : string, pageSize : string) : string;

        /**
         * Gets the all outgoing nem address transactions using GET.
         * 
         * @param {string} publicKey the public key
         * @return {string} the all outgoing nem address transactions using GET
         * @throws ApiException the api exception
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         */
        getAllOutgoingNemAddressTransactionsUsingGET(publicKey : string) : string;

        /**
         * Gets the all unconfirmed nem address transactions using GET.
         * 
         * @param {string} publicKey the public key
         * @return {string} the all unconfirmed nem address transactions using GET
         * @throws ApiException the api exception
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         */
        getAllUnconfirmedNemAddressTransactionsUsingGET(publicKey : string) : string;

        /**
         * Gets the nem address details using GET.
         * 
         * @param {string} publicKey the public key
         * @return {io.nem.xpx.model.AccountMetaDataPair} the nem address details using GET
         * @throws ApiException the api exception
         */
        getNemAddressDetailsUsingGET(publicKey : string) : io.nem.xpx.model.AccountMetaDataPair;
    }
}

