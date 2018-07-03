/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.utils {
    /**
     * The Class ContentTypeUtils.
     * @class
     */
    export class ContentTypeUtils {
        /**
         * The Constant TIKA.
         */
        static TIKA : org.apache.tika.Tika; public static TIKA_$LI$() : org.apache.tika.Tika { if(ContentTypeUtils.TIKA == null) ContentTypeUtils.TIKA = new org.apache.tika.Tika(); return ContentTypeUtils.TIKA; };

        public static contentTypeLookup$java_lang_String$java_lang_String(contentType : string, content : string) : string {
            return io.nem.xpx.utils.StringUtils.isEmpty(contentType)?ContentTypeUtils.TIKA_$LI$().detect(content):contentType;
        }

        /**
         * Content type lookup.
         * 
         * @param {string} contentType the content type
         * @param {string} content the content
         * @return {string} the string
         */
        public static contentTypeLookup(contentType? : any, content? : any) : any {
            if(((typeof contentType === 'string') || contentType === null) && ((typeof content === 'string') || content === null)) {
                return <any>io.nem.xpx.utils.ContentTypeUtils.contentTypeLookup$java_lang_String$java_lang_String(contentType, content);
            } else if(((typeof contentType === 'string') || contentType === null) && ((content != null && content instanceof <any>Array && (content.length==0 || content[0] == null ||(typeof content[0] === 'number'))) || content === null)) {
                return <any>io.nem.xpx.utils.ContentTypeUtils.contentTypeLookup$java_lang_String$byte_A(contentType, content);
            } else throw new Error('invalid overload');
        }

        public static contentTypeLookup$java_lang_String$byte_A(contentType : string, content : number[]) : string {
            return io.nem.xpx.utils.StringUtils.isEmpty(contentType)?ContentTypeUtils.TIKA_$LI$().detect(content):contentType;
        }

        public static detectContentType$java_lang_String(content : string) : string {
            return io.nem.xpx.utils.StringUtils.isEmpty(content)?null:ContentTypeUtils.TIKA_$LI$().detect(content);
        }

        /**
         * Detect content type.
         * 
         * @param {string} content the content
         * @return {string} the string
         */
        public static detectContentType(content? : any) : any {
            if(((typeof content === 'string') || content === null)) {
                return <any>io.nem.xpx.utils.ContentTypeUtils.detectContentType$java_lang_String(content);
            } else if(((content != null && content instanceof <any>Array && (content.length==0 || content[0] == null ||(typeof content[0] === 'number'))) || content === null)) {
                return <any>io.nem.xpx.utils.ContentTypeUtils.detectContentType$byte_A(content);
            } else throw new Error('invalid overload');
        }

        public static detectContentType$byte_A(content : number[]) : string {
            return ContentTypeUtils.TIKA_$LI$().detect(content);
        }
    }
    ContentTypeUtils["__class"] = "io.nem.xpx.utils.ContentTypeUtils";

}


io.nem.xpx.utils.ContentTypeUtils.TIKA_$LI$();
