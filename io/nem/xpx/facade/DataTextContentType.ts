/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade {
    /**
     * The Enum DataTextContentType.
     * @enum
     * @property {io.nem.xpx.facade.DataTextContentType} TEXT_PLAIN
     * The text plain.
     * @property {io.nem.xpx.facade.DataTextContentType} TEXT_XML
     * The text xml.
     * @property {io.nem.xpx.facade.DataTextContentType} TEXT_HTML
     * The text html.
     * @property {io.nem.xpx.facade.DataTextContentType} APPLICATION_JSON
     * The application json.
     * @property {io.nem.xpx.facade.DataTextContentType} APPLICATION_XML
     * The application xml.
     * @property {io.nem.xpx.facade.DataTextContentType} APPLICATION_ZIP
     * The application zip.
     * @property {io.nem.xpx.facade.DataTextContentType} APPLICATION_PDF
     * The application pdf.
     * @property {io.nem.xpx.facade.DataTextContentType} VIDEO_MP4
     * The video mp4.
     * @property {io.nem.xpx.facade.DataTextContentType} VIDEO_QUICKTIME
     * The video quicktime.
     * @property {io.nem.xpx.facade.DataTextContentType} IMAGE_PNG
     * @class
     */
    export enum DataTextContentType {
        
        /**
         * The text plain.
         */
        TEXT_PLAIN, 
        /**
         * The text xml.
         */
        TEXT_XML, 
        /**
         * The text html.
         */
        TEXT_HTML, 
        /**
         * The application json.
         */
        APPLICATION_JSON, 
        /**
         * The application xml.
         */
        APPLICATION_XML, 
        /**
         * The application zip.
         */
        APPLICATION_ZIP, 
        /**
         * The application pdf.
         */
        APPLICATION_PDF, 
        /**
         * The video mp4.
         */
        VIDEO_MP4, 
        /**
         * The video quicktime.
         */
        VIDEO_QUICKTIME, IMAGE_PNG
    }

    /** @ignore */
    export class DataTextContentType_$WRAPPER {
        /**
         * The value.
         */
        /*private*/ value;

        constructor(protected _$ordinal : number, protected _$name : string, value) {
            if(this.value===undefined) this.value = null;
            this.value = value;
        }

        /**
         * 
         * @return {string}
         */
        public toString() : string {
            return this.value;
        }
        public name() : string { return this._$name; }
        public ordinal() : number { return this._$ordinal; }
    }
    DataTextContentType["__class"] = "io.nem.xpx.facade.DataTextContentType";
    DataTextContentType["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];

    DataTextContentType["_$wrappers"] = [new DataTextContentType_$WRAPPER(0, "TEXT_PLAIN", "text/plain"), new DataTextContentType_$WRAPPER(1, "TEXT_XML", "text/xml"), new DataTextContentType_$WRAPPER(2, "TEXT_HTML", "text/html"), new DataTextContentType_$WRAPPER(3, "APPLICATION_JSON", "application/json"), new DataTextContentType_$WRAPPER(4, "APPLICATION_XML", "application/xml"), new DataTextContentType_$WRAPPER(5, "APPLICATION_ZIP", "application/zip"), new DataTextContentType_$WRAPPER(6, "APPLICATION_PDF", "application/pdf"), new DataTextContentType_$WRAPPER(7, "VIDEO_MP4", "video/mp4"), new DataTextContentType_$WRAPPER(8, "VIDEO_QUICKTIME", "video/quicktime"), new DataTextContentType_$WRAPPER(9, "IMAGE_PNG", "image/png")];

}

