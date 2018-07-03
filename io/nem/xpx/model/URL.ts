/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.model {
    /**
     * URL.
     * @class
     */
    export class URL {
        /**
         * The authority.
         */
        /*private*/ __authority : string = null;

        /**
         * The content.
         */
        /*private*/ __content : any = null;

        /**
         * The default port.
         */
        /*private*/ __defaultPort : number = null;

        /**
         * The file.
         */
        /*private*/ __file : string = null;

        /**
         * The host.
         */
        /*private*/ __host : string = null;

        /**
         * The path.
         */
        /*private*/ __path : string = null;

        /**
         * The port.
         */
        /*private*/ __port : number = null;

        /**
         * The protocol.
         */
        /*private*/ __protocol : string = null;

        /**
         * The query.
         */
        /*private*/ __query : string = null;

        /**
         * The ref.
         */
        /*private*/ __ref : string = null;

        /**
         * The user info.
         */
        /*private*/ __userInfo : string = null;

        /**
         * Authority.
         * 
         * @param {string} authority the authority
         * @return {io.nem.xpx.model.URL} the url
         */
        public authority(authority : string) : URL {
            this.__authority = authority;
            return this;
        }

        /**
         * Get authority.
         * 
         * @return {string} authority
         */
        public getAuthority() : string {
            return this.__authority;
        }

        /**
         * Sets the authority.
         * 
         * @param {string} authority the new authority
         */
        public setAuthority(authority : string) {
            this.__authority = authority;
        }

        /**
         * Content.
         * 
         * @param {*} content the content
         * @return {io.nem.xpx.model.URL} the url
         */
        public content(content : any) : URL {
            this.__content = content;
            return this;
        }

        /**
         * Get content.
         * 
         * @return {*} content
         */
        public getContent() : any {
            return this.__content;
        }

        /**
         * Sets the content.
         * 
         * @param {*} content the new content
         */
        public setContent(content : any) {
            this.__content = content;
        }

        /**
         * Default port.
         * 
         * @param {number} defaultPort the default port
         * @return {io.nem.xpx.model.URL} the url
         */
        public defaultPort(defaultPort : number) : URL {
            this.__defaultPort = defaultPort;
            return this;
        }

        /**
         * Get defaultPort.
         * 
         * @return {number} defaultPort
         */
        public getDefaultPort() : number {
            return this.__defaultPort;
        }

        /**
         * Sets the default port.
         * 
         * @param {number} defaultPort the new default port
         */
        public setDefaultPort(defaultPort : number) {
            this.__defaultPort = defaultPort;
        }

        /**
         * File.
         * 
         * @param {string} file the file
         * @return {io.nem.xpx.model.URL} the url
         */
        public file(file : string) : URL {
            this.__file = file;
            return this;
        }

        /**
         * Get file.
         * 
         * @return {string} file
         */
        public getFile() : string {
            return this.__file;
        }

        /**
         * Sets the file.
         * 
         * @param {string} file the new file
         */
        public setFile(file : string) {
            this.__file = file;
        }

        /**
         * Host.
         * 
         * @param {string} host the host
         * @return {io.nem.xpx.model.URL} the url
         */
        public host(host : string) : URL {
            this.__host = host;
            return this;
        }

        /**
         * Get host.
         * 
         * @return {string} host
         */
        public getHost() : string {
            return this.__host;
        }

        /**
         * Sets the host.
         * 
         * @param {string} host the new host
         */
        public setHost(host : string) {
            this.__host = host;
        }

        /**
         * Path.
         * 
         * @param {string} path the path
         * @return {io.nem.xpx.model.URL} the url
         */
        public path(path : string) : URL {
            this.__path = path;
            return this;
        }

        /**
         * Get path.
         * 
         * @return {string} path
         */
        public getPath() : string {
            return this.__path;
        }

        /**
         * Sets the path.
         * 
         * @param {string} path the new path
         */
        public setPath(path : string) {
            this.__path = path;
        }

        /**
         * Port.
         * 
         * @param {number} port the port
         * @return {io.nem.xpx.model.URL} the url
         */
        public port(port : number) : URL {
            this.__port = port;
            return this;
        }

        /**
         * Get port.
         * 
         * @return {number} port
         */
        public getPort() : number {
            return this.__port;
        }

        /**
         * Sets the port.
         * 
         * @param {number} port the new port
         */
        public setPort(port : number) {
            this.__port = port;
        }

        /**
         * Protocol.
         * 
         * @param {string} protocol the protocol
         * @return {io.nem.xpx.model.URL} the url
         */
        public protocol(protocol : string) : URL {
            this.__protocol = protocol;
            return this;
        }

        /**
         * Get protocol.
         * 
         * @return {string} protocol
         */
        public getProtocol() : string {
            return this.__protocol;
        }

        /**
         * Sets the protocol.
         * 
         * @param {string} protocol the new protocol
         */
        public setProtocol(protocol : string) {
            this.__protocol = protocol;
        }

        /**
         * Query.
         * 
         * @param {string} query the query
         * @return {io.nem.xpx.model.URL} the url
         */
        public query(query : string) : URL {
            this.__query = query;
            return this;
        }

        /**
         * Get query.
         * 
         * @return {string} query
         */
        public getQuery() : string {
            return this.__query;
        }

        /**
         * Sets the query.
         * 
         * @param {string} query the new query
         */
        public setQuery(query : string) {
            this.__query = query;
        }

        /**
         * Ref.
         * 
         * @param {string} ref the ref
         * @return {io.nem.xpx.model.URL} the url
         */
        public ref(ref : string) : URL {
            this.__ref = ref;
            return this;
        }

        /**
         * Get ref.
         * 
         * @return {string} ref
         */
        public getRef() : string {
            return this.__ref;
        }

        /**
         * Sets the ref.
         * 
         * @param {string} ref the new ref
         */
        public setRef(ref : string) {
            this.__ref = ref;
        }

        /**
         * User info.
         * 
         * @param {string} userInfo the user info
         * @return {io.nem.xpx.model.URL} the url
         */
        public userInfo(userInfo : string) : URL {
            this.__userInfo = userInfo;
            return this;
        }

        /**
         * Get userInfo.
         * 
         * @return {string} userInfo
         */
        public getUserInfo() : string {
            return this.__userInfo;
        }

        /**
         * Sets the user info.
         * 
         * @param {string} userInfo the new user info
         */
        public setUserInfo(userInfo : string) {
            this.__userInfo = userInfo;
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
            let URL : URL = <URL>o;
            return java.util.Objects.equals(this.__authority, URL.__authority) && java.util.Objects.equals(this.__content, URL.__content) && java.util.Objects.equals(this.__defaultPort, URL.__defaultPort) && java.util.Objects.equals(this.__file, URL.__file) && java.util.Objects.equals(this.__host, URL.__host) && java.util.Objects.equals(this.__path, URL.__path) && java.util.Objects.equals(this.__port, URL.__port) && java.util.Objects.equals(this.__protocol, URL.__protocol) && java.util.Objects.equals(this.__query, URL.__query) && java.util.Objects.equals(this.__ref, URL.__ref) && java.util.Objects.equals(this.__userInfo, URL.__userInfo);
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
            /* append */(sb => { sb.str = sb.str.concat(<any>"class URL {\n"); return sb; })(sb);
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__authority)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    authority: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__content)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    content: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__defaultPort)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    defaultPort: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__file)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    file: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__host)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    host: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__path)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    path: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__port)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    port: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__protocol)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    protocol: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__query)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    query: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__ref)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    ref: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__userInfo)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    userInfo: "); return sb; })(sb)));
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
    URL["__class"] = "io.nem.xpx.model.URL";

}

