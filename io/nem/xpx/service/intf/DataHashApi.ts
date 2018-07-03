/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.intf {
    /**
     * The Interface DataHashApiInterface.
     * @class
     */
    export interface DataHashApi {
        /**
         * Generate hash and expose data to network using POST.
         * 
         * @param {Array} data the data
         * @return {string} the binary transaction encrypted message
         * @throws ApiException the api exception
         * @throws IOException Signals that an I/O exception has occurred.
         * @throws NoSuchAlgorithmException the no such algorithm exception
         */
        generateHashForDataOnlyUsingPOST(data : number[]) : string;
    }
}

