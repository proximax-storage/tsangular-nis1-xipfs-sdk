/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.local {
    /**
     * Instantiates a new local data hash api.
     * 
     * @param {io.ipfs.api.IPFS} proximaxIfpsConnection the proximax ifps connection
     * @class
     */
    export class LocalDataHashApi implements io.nem.xpx.service.intf.DataHashApi {
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
         * @param {Array} data
         * @return {string}
         */
        public generateHashForDataOnlyUsingPOST(data : number[]) : string {
            let dataHashByteArrayEntity : io.nem.xpx.model.DataHashByteArrayEntity = new io.nem.xpx.model.DataHashByteArrayEntity();
            dataHashByteArrayEntity.setFile(data);
            dataHashByteArrayEntity.setName(Math.abs(/* currentTimeMillis */Date.now()) + "");
            let spfsBlockResult : io.nem.xpx.model.PublishResult = this.getBinaryHashOnly(dataHashByteArrayEntity.getName(), dataHashByteArrayEntity.getFile());
            let multiHashString : string = /* get */spfsBlockResult.getMerkleNode()[0].hash.toBase58();
            return multiHashString;
        }

        /**
         * Gets the binary hash only.
         * 
         * @param {string} name the name
         * @param {Array} binary the binary
         * @return {io.nem.xpx.model.PublishResult} the binary hash only
         * @throws IOException Signals that an I/O exception has occurred.
         * @throws ApiException the api exception
         * @private
         */
        /*private*/ getBinaryHashOnly(name : string, binary : number[]) : io.nem.xpx.model.PublishResult {
            let result : io.nem.xpx.model.PublishResult = null;
            result = new io.nem.xpx.model.PublishResult();
            let byteArrayWrapper : io.ipfs.api.NamedStreamable.ByteArrayWrapper = new io.ipfs.api.NamedStreamable.ByteArrayWrapper(name, binary);
            let node : Array<io.ipfs.api.MerkleNode> = this.proximaxIfpsConnection.add(byteArrayWrapper, false, true);
            result.setMerkleNode(node);
            return result;
        }
    }
    LocalDataHashApi["__class"] = "io.nem.xpx.service.local.LocalDataHashApi";
    LocalDataHashApi["__interfaces"] = ["io.nem.xpx.service.intf.DataHashApi"];


}

