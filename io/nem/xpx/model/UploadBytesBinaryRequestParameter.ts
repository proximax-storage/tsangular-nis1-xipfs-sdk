/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.model {
    /**
     * UploadBytesBinaryRequestParameter.
     * @class
     */
    export class UploadBytesBinaryRequestParameter {
        /**
         * The content type.
         */
        /*private*/ __contentType : string = null;

        /**
         * The data.
         */
        /*private*/ __data : number[] = null;

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
         * @return {io.nem.xpx.model.UploadBytesBinaryRequestParameter} the upload bytes binary request parameter
         */
        public contentType(contentType : string) : UploadBytesBinaryRequestParameter {
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
         * @param {Array} data the data
         * @return {io.nem.xpx.model.UploadBytesBinaryRequestParameter} the upload bytes binary request parameter
         */
        public data(data : number[]) : UploadBytesBinaryRequestParameter {
            this.__data = org.apache.commons.codec.binary.Base64.encodeBase64(data);
            return this;
        }

        /**
         * Get data.
         * 
         * @return {Array} data
         */
        public getData() : number[] {
            return this.__data;
        }

        /**
         * Sets the data.
         * 
         * @param {Array} data the new data
         */
        public setData(data : number[]) {
            this.__data = data;
        }

        /**
         * Keywords.
         * 
         * @param {string} keywords the keywords
         * @return {io.nem.xpx.model.UploadBytesBinaryRequestParameter} the upload bytes binary request parameter
         */
        public keywords(keywords : string) : UploadBytesBinaryRequestParameter {
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
         * @return {io.nem.xpx.model.UploadBytesBinaryRequestParameter} the upload bytes binary request parameter
         */
        public metadata(metadata : string) : UploadBytesBinaryRequestParameter {
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
         * @return {io.nem.xpx.model.UploadBytesBinaryRequestParameter} the upload bytes binary request parameter
         */
        public name(name : string) : UploadBytesBinaryRequestParameter {
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
            let uploadBytesBinaryRequestParameter : UploadBytesBinaryRequestParameter = <UploadBytesBinaryRequestParameter>o;
            return java.util.Objects.equals(this.__contentType, uploadBytesBinaryRequestParameter.__contentType) && java.util.Objects.equals(this.__data, uploadBytesBinaryRequestParameter.__data) && java.util.Objects.equals(this.__keywords, uploadBytesBinaryRequestParameter.__keywords) && java.util.Objects.equals(this.__metadata, uploadBytesBinaryRequestParameter.__metadata) && java.util.Objects.equals(this.__name, uploadBytesBinaryRequestParameter.__name);
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
            /* append */(sb => { sb.str = sb.str.concat(<any>"class UploadBytesBinaryRequestParameter {\n"); return sb; })(sb);
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
    UploadBytesBinaryRequestParameter["__class"] = "io.nem.xpx.model.UploadBytesBinaryRequestParameter";

}

