/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.model {
    /**
     * UploadTextRequestParameter.
     * @class
     */
    export class UploadTextRequestParameter {
        /**
         * The content type.
         */
        /*private*/ __contentType : string = null;

        /**
         * The encoding.
         */
        /*private*/ __encoding : string = null;

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
         * The text.
         */
        /*private*/ __text : string = null;

        /**
         * Content type.
         * 
         * @param {string} contentType the content type
         * @return {io.nem.xpx.model.UploadTextRequestParameter} the upload text request parameter
         */
        public contentType(contentType : string) : UploadTextRequestParameter {
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
         * Encoding.
         * 
         * @param {string} encoding the encoding
         * @return {io.nem.xpx.model.UploadTextRequestParameter} the upload text request parameter
         */
        public encoding(encoding : string) : UploadTextRequestParameter {
            this.__encoding = encoding;
            return this;
        }

        /**
         * Get encoding.
         * 
         * @return {string} encoding
         */
        public getEncoding() : string {
            return this.__encoding;
        }

        /**
         * Sets the encoding.
         * 
         * @param {string} encoding the new encoding
         */
        public setEncoding(encoding : string) {
            this.__encoding = encoding;
        }

        /**
         * Keywords.
         * 
         * @param {string} keywords the keywords
         * @return {io.nem.xpx.model.UploadTextRequestParameter} the upload text request parameter
         */
        public keywords(keywords : string) : UploadTextRequestParameter {
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
         * @return {io.nem.xpx.model.UploadTextRequestParameter} the upload text request parameter
         */
        public metadata(metadata : string) : UploadTextRequestParameter {
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
         * @return {io.nem.xpx.model.UploadTextRequestParameter} the upload text request parameter
         */
        public name(name : string) : UploadTextRequestParameter {
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
         * Text.
         * 
         * @param {string} base64EncodedText the base 64 encoded text
         * @return {io.nem.xpx.model.UploadTextRequestParameter} the upload text request parameter
         */
        public text(base64EncodedText : string) : UploadTextRequestParameter {
            this.__text = base64EncodedText;
            return this;
        }

        /**
         * Get text.
         * 
         * @return {string} text
         */
        public getText() : string {
            return this.__text;
        }

        /**
         * Sets the text.
         * 
         * @param {string} text the new text
         */
        public setText(text : string) {
            this.__text = text;
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
            let uploadTextRequestParameter : UploadTextRequestParameter = <UploadTextRequestParameter>o;
            return java.util.Objects.equals(this.__contentType, uploadTextRequestParameter.__contentType) && java.util.Objects.equals(this.__encoding, uploadTextRequestParameter.__encoding) && java.util.Objects.equals(this.__keywords, uploadTextRequestParameter.__keywords) && java.util.Objects.equals(this.__metadata, uploadTextRequestParameter.__metadata) && java.util.Objects.equals(this.__name, uploadTextRequestParameter.__name) && java.util.Objects.equals(this.__text, uploadTextRequestParameter.__text);
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
            /* append */(sb => { sb.str = sb.str.concat(<any>"class UploadTextRequestParameter {\n"); return sb; })(sb);
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__contentType)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    contentType: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__encoding)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    encoding: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__keywords)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    keywords: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__metadata)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    metadata: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__name)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    name: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__text)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    text: "); return sb; })(sb)));
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
    UploadTextRequestParameter["__class"] = "io.nem.xpx.model.UploadTextRequestParameter";

}

