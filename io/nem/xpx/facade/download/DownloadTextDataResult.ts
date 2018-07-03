/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.download {
    /**
     * The Class DownloadTextDataResult.
     * @extends io.nem.xpx.facade.download.DownloadResult
     * @class
     */
    export class DownloadTextDataResult extends io.nem.xpx.facade.download.DownloadResult {
        constructor(dataMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage, data : number[], messageType : io.nem.xpx.model.NemMessageType) {
            super(dataMessage, data, messageType);
        }

        /**
         * From download result.
         * 
         * @param {io.nem.xpx.facade.download.DownloadResult} downloadResult the download result
         * @return {io.nem.xpx.facade.download.DownloadTextDataResult} the download text data result
         */
        public static fromDownloadResult(downloadResult : io.nem.xpx.facade.download.DownloadResult) : DownloadTextDataResult {
            return new DownloadTextDataResult(downloadResult.getDataMessage(), downloadResult.getData(), downloadResult.getMessageType());
        }

        public getString$java_lang_String(encoding : string) : string {
            return String.fromCharCode.apply(null, this.getData());
        }

        /**
         * Gets the string.
         * 
         * @param {string} encoding the encoding
         * @return {string} the string
         */
        public getString(encoding? : any) : any {
            if(((typeof encoding === 'string') || encoding === null)) {
                return <any>this.getString$java_lang_String(encoding);
            } else if(encoding === undefined) {
                return <any>this.getString$();
            } else throw new Error('invalid overload');
        }

        public getString$() : string {
            return String.fromCharCode.apply(null, this.getData());
        }
    }
    DownloadTextDataResult["__class"] = "io.nem.xpx.facade.download.DownloadTextDataResult";
    DownloadTextDataResult["__interfaces"] = ["java.io.Serializable"];


}

