/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.model {
    /**
     * UploadBase64BinaryRequestParameter.
     * @class
     */
    export class UploadBase64BinaryRequestParameter {
        /**
         * The content type.
         */
        /*private*/ __contentType : string = null;

        /**
         * The data.
         */
        /*private*/ __data : string = null;

        /**
         * The keywords.
         */
        /*private*/ __keywords : string = null;

        /**
         * The metadata.
         */
        /*private*/ __metadata : string = null;

        /**
         * The name.
         */
        /*private*/ __name : string = null;

        /**
         * Content type.
         * 
         * @param {string} contentType the content type
         * @return {io.nem.xpx.model.UploadBase64BinaryRequestParameter} the upload base 64 binary request parameter
         */
        public contentType(contentType : string) : UploadBase64BinaryRequestParameter {
            this.__contentType = contentType;
            return this;
        }

        /**
         * Get contentType.
         * 
         * @return {string} contentType
         */
        public getContentType() : string {
            return this.__contentType;
        }

        /**
         * Sets the content type.
         * 
         * @param {string} contentType the new content type
         */
        public setContentType(contentType : string) {
            this.__contentType = contentType;
        }

        /**
         * Data.
         * 
         * @param {string} data the data
         * @return {io.nem.xpx.model.UploadBase64BinaryRequestParameter} the upload base 64 binary request parameter
         */
        public data(data : string) : UploadBase64BinaryRequestParameter {
            this.__data = data;
            return this;
        }

        /**
         * Get data.
         * 
         * @return {string} data
         */
        public getData() : string {
            return this.__data;
        }

        /**
         * Sets the data.
         * 
         * @param {string} data the new data
         */
        public setData(data : string) {
            this.__data = data;
        }

        /**
         * Keywords.
         * 
         * @param {string} keywords the keywords
         * @return {io.nem.xpx.model.UploadBase64BinaryRequestParameter} the upload base 64 binary request parameter
         */
        public keywords(keywords : string) : UploadBase64BinaryRequestParameter {
            this.__keywords = keywords;
            return this;
        }

        /**
         * Get keywords.
         * 
         * @return {string} keywords
         */
        public getKeywords() : string {
            return this.__keywords;
        }

        /**
         * Sets the keywords.
         * 
         * @param {string} keywords the new keywords
         */
        public setKeywords(keywords : string) {
            this.__keywords = keywords;
        }

        /**
         * Metadata.
         * 
         * @param {string} metadata the metadata
         * @return {io.nem.xpx.model.UploadBase64BinaryRequestParameter} the upload base 64 binary request parameter
         */
        public metadata(metadata : string) : UploadBase64BinaryRequestParameter {
            this.__metadata = metadata;
            return this;
        }

        /**
         * Get metadata.
         * 
         * @return {string} metadata
         */
        public getMetadata() : string {
            return this.__metadata;
        }

        /**
         * Sets the metadata.
         * 
         * @param {string} metadata the new metadata
         */
        public setMetadata(metadata : string) {
            this.__metadata = metadata;
        }

        /**
         * Name.
         * 
         * @param {string} name the name
         * @return {io.nem.xpx.model.UploadBase64BinaryRequestParameter} the upload base 64 binary request parameter
         */
        public name(name : string) : UploadBase64BinaryRequestParameter {
            this.__name = name;
            return this;
        }

        /**
         * Get name.
         * 
         * @return {string} name
         */
        public getName() : string {
            return this.__name;
        }

        /**
         * Sets the name.
         * 
         * @param {string} name the new name
         */
        public setName(name : string) {
            this.__name = name;
        }

        /**
         * 
         * @param {*} o
         * @return {boolean}
         */
        public equals(o : any) : boolean {
            if(this === o) {
                return true;
            }
            if(o == null || (<any>this.constructor) !== (<any>o.constructor)) {
                return false;
            }
            let uploadBase64BinaryRequestParameter : UploadBase64BinaryRequestParameter = <UploadBase64BinaryRequestParameter>o;
            return java.util.Objects.equals(this.__contentType, uploadBase64BinaryRequestParameter.__contentType) && java.util.Objects.equals(this.__data, uploadBase64BinaryRequestParameter.__data) && java.util.Objects.equals(this.__keywords, uploadBase64BinaryRequestParameter.__keywords) && java.util.Objects.equals(this.__metadata, uploadBase64BinaryRequestParameter.__metadata) && java.util.Objects.equals(this.__name, uploadBase64BinaryRequestParameter.__name);
        }

        /**
         * 
         * @return {number}
         */
        public hashCode() : number {
            return /* hash */0;
        }

        /**
         * 
         * @return {string}
         */
        public toString() : string {
            let sb : { str: string } = { str: "", toString: function() { return this.str; } };
            /* append */(sb => { sb.str = sb.str.concat(<any>"class UploadBase64BinaryRequestParameter {\n"); return sb; })(sb);
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__contentType)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    contentType: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__data)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    data: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__keywords)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    keywords: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__metadata)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    metadata: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__name)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    name: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"}"); return sb; })(sb);
            return /* toString */sb.str;
        }

        /**
         * Convert the given object to string with each line indented by 4 spaces
         * (except the first line).
         * 
         * @param {*} o the o
         * @return {string} the string
         * @private
         */
        /*private*/ toIndentedString(o : any) : string {
            if(o == null) {
                return "null";
            }
            return /* replace */o.toString().split("\n").join("\n    ");
        }
    }
    UploadBase64BinaryRequestParameter["__class"] = "io.nem.xpx.model.UploadBase64BinaryRequestParameter";

}

