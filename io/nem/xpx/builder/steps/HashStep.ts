/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.builder.steps {
    /**
     * The Interface NemHashStep.
     * 
     * @param <T> the generic type
     * @class
     */
    export interface HashStep<T> {
        /**
         * Nem hash.
         * 
         * @param {string} nemHash the nem hash
         * @return {*} the t
         */
        nemHash(nemHash : string) : T;

        ipfsHash(ipfsHash : string) : T;
    }
}

