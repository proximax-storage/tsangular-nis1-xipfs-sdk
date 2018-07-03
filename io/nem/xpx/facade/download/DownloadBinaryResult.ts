/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.download {
    /**
     * The Class DownloadBinaryResult.
     * @extends io.nem.xpx.facade.download.DownloadResult
     * @class
     */
    export class DownloadBinaryResult extends io.nem.xpx.facade.download.DownloadResult {
        constructor(dataMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage, data : number[], messageType : io.nem.xpx.model.NemMessageType) {
            super(dataMessage, data, messageType);
        }

        /**
         * From download result.
         * 
         * @param {io.nem.xpx.facade.download.DownloadResult} downloadResult the download result
         * @return {io.nem.xpx.facade.download.DownloadBinaryResult} the download binary result
         */
        public static fromDownloadResult(downloadResult : io.nem.xpx.facade.download.DownloadResult) : DownloadBinaryResult {
            return new DownloadBinaryResult(downloadResult.getDataMessage(), downloadResult.getData(), downloadResult.getMessageType());
        }
    }
    DownloadBinaryResult["__class"] = "io.nem.xpx.facade.download.DownloadBinaryResult";
    DownloadBinaryResult["__interfaces"] = ["java.io.Serializable"];


}

