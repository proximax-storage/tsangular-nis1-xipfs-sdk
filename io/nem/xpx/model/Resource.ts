/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.model {
    /**
     * Resource.
     * @class
     */
    export class Resource {
        /**
         * The description.
         */
        /*private*/ __description : string = null;

        /**
         * The file.
         */
        /*private*/ __file : java.io.File = null;

        /**
         * The filename.
         */
        /*private*/ __filename : string = null;

        /**
         * The input stream.
         */
        /*private*/ __inputStream : io.nem.xpx.model.InputStream = null;

        /**
         * The open.
         */
        /*private*/ __open : boolean = null;

        /**
         * The readable.
         */
        /*private*/ __readable : boolean = null;

        /**
         * The uri.
         */
        /*private*/ __uri : io.nem.xpx.model.URI = null;

        /**
         * The url.
         */
        /*private*/ __url : io.nem.xpx.model.URL = null;

        /**
         * Description.
         * 
         * @param {string} description the description
         * @return {io.nem.xpx.model.Resource} the resource
         */
        public description(description : string) : Resource {
            this.__description = description;
            return this;
        }

        /**
         * Get description.
         * 
         * @return {string} description
         */
        public getDescription() : string {
            return this.__description;
        }

        /**
         * Sets the description.
         * 
         * @param {string} description the new description
         */
        public setDescription(description : string) {
            this.__description = description;
        }

        /**
         * File.
         * 
         * @param {java.io.File} file the file
         * @return {io.nem.xpx.model.Resource} the resource
         */
        public file(file : java.io.File) : Resource {
            this.__file = file;
            return this;
        }

        /**
         * Get file.
         * 
         * @return {java.io.File} file
         */
        public getFile() : java.io.File {
            return this.__file;
        }

        /**
         * Sets the file.
         * 
         * @param {java.io.File} file the new file
         */
        public setFile(file : java.io.File) {
            this.__file = file;
        }

        /**
         * Filename.
         * 
         * @param {string} filename the filename
         * @return {io.nem.xpx.model.Resource} the resource
         */
        public filename(filename : string) : Resource {
            this.__filename = filename;
            return this;
        }

        /**
         * Get filename.
         * 
         * @return {string} filename
         */
        public getFilename() : string {
            return this.__filename;
        }

        /**
         * Sets the filename.
         * 
         * @param {string} filename the new filename
         */
        public setFilename(filename : string) {
            this.__filename = filename;
        }

        /**
         * Input stream.
         * 
         * @param {io.nem.xpx.model.InputStream} inputStream the input stream
         * @return {io.nem.xpx.model.Resource} the resource
         */
        public inputStream(inputStream : io.nem.xpx.model.InputStream) : Resource {
            this.__inputStream = inputStream;
            return this;
        }

        /**
         * Get inputStream.
         * 
         * @return {io.nem.xpx.model.InputStream} inputStream
         */
        public getInputStream() : io.nem.xpx.model.InputStream {
            return this.__inputStream;
        }

        /**
         * Sets the input stream.
         * 
         * @param {io.nem.xpx.model.InputStream} inputStream the new input stream
         */
        public setInputStream(inputStream : io.nem.xpx.model.InputStream) {
            this.__inputStream = inputStream;
        }

        /**
         * Open.
         * 
         * @param {boolean} open the open
         * @return {io.nem.xpx.model.Resource} the resource
         */
        public open(open : boolean) : Resource {
            this.__open = open;
            return this;
        }

        /**
         * Get open.
         * 
         * @return {boolean} open
         */
        public getOpen() : boolean {
            return this.__open;
        }

        /**
         * Sets the open.
         * 
         * @param {boolean} open the new open
         */
        public setOpen(open : boolean) {
            this.__open = open;
        }

        /**
         * Readable.
         * 
         * @param {boolean} readable the readable
         * @return {io.nem.xpx.model.Resource} the resource
         */
        public readable(readable : boolean) : Resource {
            this.__readable = readable;
            return this;
        }

        /**
         * Get readable.
         * 
         * @return {boolean} readable
         */
        public getReadable() : boolean {
            return this.__readable;
        }

        /**
         * Sets the readable.
         * 
         * @param {boolean} readable the new readable
         */
        public setReadable(readable : boolean) {
            this.__readable = readable;
        }

        /**
         * Uri.
         * 
         * @param {io.nem.xpx.model.URI} uri the uri
         * @return {io.nem.xpx.model.Resource} the resource
         */
        public uri(uri : io.nem.xpx.model.URI) : Resource {
            this.__uri = uri;
            return this;
        }

        /**
         * Get uri.
         * 
         * @return {io.nem.xpx.model.URI} uri
         */
        public getUri() : io.nem.xpx.model.URI {
            return this.__uri;
        }

        /**
         * Sets the uri.
         * 
         * @param {io.nem.xpx.model.URI} uri the new uri
         */
        public setUri(uri : io.nem.xpx.model.URI) {
            this.__uri = uri;
        }

        /**
         * Url.
         * 
         * @param {io.nem.xpx.model.URL} url the url
         * @return {io.nem.xpx.model.Resource} the resource
         */
        public url(url : io.nem.xpx.model.URL) : Resource {
            this.__url = url;
            return this;
        }

        /**
         * Get url.
         * 
         * @return {io.nem.xpx.model.URL} url
         */
        public getUrl() : io.nem.xpx.model.URL {
            return this.__url;
        }

        /**
         * Sets the url.
         * 
         * @param {io.nem.xpx.model.URL} url the new url
         */
        public setUrl(url : io.nem.xpx.model.URL) {
            this.__url = url;
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
            let resource : Resource = <Resource>o;
            return java.util.Objects.equals(this.__description, resource.__description) && java.util.Objects.equals(this.__file, resource.__file) && java.util.Objects.equals(this.__filename, resource.__filename) && java.util.Objects.equals(this.__inputStream, resource.__inputStream) && java.util.Objects.equals(this.__open, resource.__open) && java.util.Objects.equals(this.__readable, resource.__readable) && java.util.Objects.equals(this.__uri, resource.__uri) && java.util.Objects.equals(this.__url, resource.__url);
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
            /* append */(sb => { sb.str = sb.str.concat(<any>"class Resource {\n"); return sb; })(sb);
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__description)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    description: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__file)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    file: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__filename)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    filename: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__inputStream)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    inputStream: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__open)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    open: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__readable)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    readable: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__uri)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    uri: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__url)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    url: "); return sb; })(sb)));
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
    Resource["__class"] = "io.nem.xpx.model.Resource";

}

