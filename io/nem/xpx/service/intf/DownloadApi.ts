/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.intf {
    /**
     * The Interface DownloadApi.
     * @class
     */
    export interface DownloadApi {
        /**
         * Download stream using hash using POST.
         * 
         * @param {string} hash the hash
         * @return {Array} the byte[]
         * @throws ApiException the api exception
         * @throws IOException Signals that an I/O exception has occurred.
         */
        downloadUsingDataHashUsingGET(hash : string) : number[];

        /**
         * Download binary using GET.
         * 
         * @param {string} nemHash the nem hash
         * @param {string} transferMode the transfer mode
         * @return {Array} the byte[]
         * @throws ApiException the api exception
         * @throws IOException Signals that an I/O exception has occurred.
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         */
        downloadBinaryUsingGET(nemHash : string, transferMode : string) : number[];

        /**
         * Download file using GET.
         * 
         * @param {string} nemHash the nem hash
         * @param {string} transferMode the transfer mode
         * @return {Array} the byte[]
         * @throws ApiException the api exception
         * @throws IOException Signals that an I/O exception has occurred.
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         */
        downloadFileUsingGET(nemHash : string, transferMode : string) : number[];

        /**
         * Download text using GET.
         * 
         * @param {string} nemHash the nem hash
         * @param {string} transferMode the transfer mode
         * @return {Array} the byte[]
         * @throws ApiException the api exception
         * @throws IOException Signals that an I/O exception has occurred.
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         */
        downloadTextUsingGET(nemHash : string, transferMode : string) : number[];
    }
}

