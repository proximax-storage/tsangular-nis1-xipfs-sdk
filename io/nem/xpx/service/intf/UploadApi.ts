/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.intf {
    /**
     * The Interface UploadApi.
     * @class
     */
    export interface UploadApi {
        /**
         * Cleanup pinned content using POST.
         * 
         * @param {string} multihash the multihash
         * @return {string} the string
         * @throws ApiException the api exception
         * @throws IOException Signals that an I/O exception has occurred.
         */
        deletePinnedContent(multihash : string) : string;

        /**
         * Upload bytes binary.
         * 
         * @param {Array} binaryData the binary data
         * @param {string} name the name
         * @param {string} contentType the content type
         * @param {string} keywords the keywords
         * @param {string} metadata the metadata
         * @return {Array} the byte[]
         * @throws ApiException the api exception
         * @throws IOException Signals that an I/O exception has occurred.
         * @throws NoSuchAlgorithmException the no such algorithm exception
         */
        uploadBytesBinary(binaryData : number[], name : string, contentType : string, keywords : string, metadata : string) : number[];

        /**
         * Upload text.
         * 
         * @param {Array} textInBytes the text in bytes
         * @param {string} name the name
         * @param {string} contentType the content type
         * @param {string} encoding the encoding
         * @param {string} keywords the keywords
         * @param {string} metadata the metadata
         * @return {Array} the byte[]
         * @throws ApiException the api exception
         * @throws IOException Signals that an I/O exception has occurred.
         * @throws NoSuchAlgorithmException the no such algorithm exception
         */
        uploadText(textInBytes : number[], name : string, contentType : string, encoding : string, keywords : string, metadata : string) : number[];

        /**
         * Upload path.
         * 
         * @param {string} path the path
         * @param {string} name the name
         * @param {string} keywords the keywords
         * @param {string} metadata the metadata
         * @return {Array} the byte[]
         * @throws ApiException the api exception
         * @throws IOException Signals that an I/O exception has occurred.
         * @throws NoSuchAlgorithmException the no such algorithm exception
         */
        uploadPath(path : string, name : string, keywords : string, metadata : string) : number[];
    }
}

