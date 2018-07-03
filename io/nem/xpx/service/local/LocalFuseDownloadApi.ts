/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.local {
    /**
     * Instantiates a new local fuse download api.
     * 
     * @param {io.ipfs.api.IPFS} proximaxIfpsConnection the proximax ifps connection
     * @class
     */
    export class LocalFuseDownloadApi implements io.nem.xpx.service.intf.DownloadApi {
        /**
         * The proximax ifps connection.
         */
        /*private*/ proximaxIfpsConnection : io.ipfs.api.IPFS;

        public constructor(proximaxIfpsConnection : io.ipfs.api.IPFS) {
            if(this.proximaxIfpsConnection===undefined) this.proximaxIfpsConnection = null;
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
        public downloadBinaryUsingGET(nemHash : string, transferMode : string) : number[] {
            return null;
        }

        /**
         * 
         * @param {string} nemHash
         * @param {string} transferMode
         * @return {Array}
         */
        public downloadFileUsingGET(nemHash : string, transferMode : string) : number[] {
            return null;
        }

        /**
         * 
         * @param {string} nemHash
         * @param {string} transferMode
         * @return {Array}
         */
        public downloadTextUsingGET(nemHash : string, transferMode : string) : number[] {
            return null;
        }
    }
    LocalFuseDownloadApi["__class"] = "io.nem.xpx.service.local.LocalFuseDownloadApi";
    LocalFuseDownloadApi["__interfaces"] = ["io.nem.xpx.service.intf.DownloadApi"];


}

