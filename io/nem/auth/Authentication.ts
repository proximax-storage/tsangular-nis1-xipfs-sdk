/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.auth {
    /**
     * The Interface Authentication.
     * @class
     */
    export interface Authentication {
        /**
         * Apply authentication settings to header and query params.
         * 
         * @param {io.nem.Pair[]} queryParams List of query parameters
         * @param {*} headerParams Map of header parameters
         */
        applyToParams(queryParams : Array<io.nem.Pair>, headerParams : any);
    }
}

