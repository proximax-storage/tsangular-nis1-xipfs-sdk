/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.download {
    /**
     * The Class DownloadFileResult.
     * @extends io.nem.xpx.facade.download.DownloadResult
     * @class
     */
    export class DownloadFileResult extends io.nem.xpx.facade.download.DownloadResult {
        constructor(dataMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage, data : number[], messageType : io.nem.xpx.model.NemMessageType) {
            super(dataMessage, data, messageType);
        }

        /**
         * From download result.
         * 
         * @param {io.nem.xpx.facade.download.DownloadResult} downloadResult the download result
         * @return {io.nem.xpx.facade.download.DownloadFileResult} the download file result
         */
        public static fromDownloadResult(downloadResult : io.nem.xpx.facade.download.DownloadResult) : DownloadFileResult {
            return new DownloadFileResult(downloadResult.getDataMessage(), downloadResult.getData(), downloadResult.getMessageType());
        }

        /**
         * Save to file.
         * 
         * @param {java.io.File} file the file
         * @throws IOException Signals that an I/O exception has occurred.
         */
        public saveToFile(file : java.io.File) {
            let outputStream : java.io.FileOutputStream = new java.io.FileOutputStream(file);
            try {
                outputStream.write(this.getData());
            } finally {
                outputStream.close();
            };
        }

        /**
         * Gets the file name.
         * 
         * @return {string} the file name
         */
        public getFileName() : string {
            return this.getDataMessage() != null?this.getDataMessage().name():null;
        }

        /**
         * Gets the content type.
         * 
         * @return {string} the content type
         */
        public getContentType() : string {
            return this.getDataMessage() != null?this.getDataMessage().type():null;
        }
    }
    DownloadFileResult["__class"] = "io.nem.xpx.facade.download.DownloadFileResult";
    DownloadFileResult["__interfaces"] = ["java.io.Serializable"];


}

