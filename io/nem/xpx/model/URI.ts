/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.model {
    /**
     * URI.
     * @class
     */
    export class URI {
        /**
         * The absolute.
         */
        /*private*/ __absolute : boolean = null;

        /**
         * The authority.
         */
        /*private*/ __authority : string = null;

        /**
         * The fragment.
         */
        /*private*/ __fragment : string = null;

        /**
         * The host.
         */
        /*private*/ __host : string = null;

        /**
         * The opaque.
         */
        /*private*/ __opaque : boolean = null;

        /**
         * The path.
         */
        /*private*/ __path : string = null;

        /**
         * The port.
         */
        /*private*/ __port : number = null;

        /**
         * The query.
         */
        /*private*/ __query : string = null;

        /**
         * The raw authority.
         */
        /*private*/ __rawAuthority : string = null;

        /**
         * The raw fragment.
         */
        /*private*/ __rawFragment : string = null;

        /**
         * The raw path.
         */
        /*private*/ __rawPath : string = null;

        /**
         * The raw query.
         */
        /*private*/ __rawQuery : string = null;

        /**
         * The raw scheme specific part.
         */
        /*private*/ __rawSchemeSpecificPart : string = null;

        /**
         * The raw user info.
         */
        /*private*/ __rawUserInfo : string = null;

        /**
         * The scheme.
         */
        /*private*/ __scheme : string = null;

        /**
         * The scheme specific part.
         */
        /*private*/ __schemeSpecificPart : string = null;

        /**
         * The user info.
         */
        /*private*/ __userInfo : string = null;

        /**
         * Absolute.
         * 
         * @param {boolean} absolute the absolute
         * @return {io.nem.xpx.model.URI} the uri
         */
        public absolute(absolute : boolean) : URI {
            this.__absolute = absolute;
            return this;
        }

        /**
         * Get absolute.
         * 
         * @return {boolean} absolute
         */
        public getAbsolute() : boolean {
            return this.__absolute;
        }

        /**
         * Sets the absolute.
         * 
         * @param {boolean} absolute the new absolute
         */
        public setAbsolute(absolute : boolean) {
            this.__absolute = absolute;
        }

        /**
         * Authority.
         * 
         * @param {string} authority the authority
         * @return {io.nem.xpx.model.URI} the uri
         */
        public authority(authority : string) : URI {
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
         * Fragment.
         * 
         * @param {string} fragment the fragment
         * @return {io.nem.xpx.model.URI} the uri
         */
        public fragment(fragment : string) : URI {
            this.__fragment = fragment;
            return this;
        }

        /**
         * Get fragment.
         * 
         * @return {string} fragment
         */
        public getFragment() : string {
            return this.__fragment;
        }

        /**
         * Sets the fragment.
         * 
         * @param {string} fragment the new fragment
         */
        public setFragment(fragment : string) {
            this.__fragment = fragment;
        }

        /**
         * Host.
         * 
         * @param {string} host the host
         * @return {io.nem.xpx.model.URI} the uri
         */
        public host(host : string) : URI {
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
         * Opaque.
         * 
         * @param {boolean} opaque the opaque
         * @return {io.nem.xpx.model.URI} the uri
         */
        public opaque(opaque : boolean) : URI {
            this.__opaque = opaque;
            return this;
        }

        /**
         * Get opaque.
         * 
         * @return {boolean} opaque
         */
        public getOpaque() : boolean {
            return this.__opaque;
        }

        /**
         * Sets the opaque.
         * 
         * @param {boolean} opaque the new opaque
         */
        public setOpaque(opaque : boolean) {
            this.__opaque = opaque;
        }

        /**
         * Path.
         * 
         * @param {string} path the path
         * @return {io.nem.xpx.model.URI} the uri
         */
        public path(path : string) : URI {
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
         * @return {io.nem.xpx.model.URI} the uri
         */
        public port(port : number) : URI {
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
         * Query.
         * 
         * @param {string} query the query
         * @return {io.nem.xpx.model.URI} the uri
         */
        public query(query : string) : URI {
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
         * Raw authority.
         * 
         * @param {string} rawAuthority the raw authority
         * @return {io.nem.xpx.model.URI} the uri
         */
        public rawAuthority(rawAuthority : string) : URI {
            this.__rawAuthority = rawAuthority;
            return this;
        }

        /**
         * Get rawAuthority.
         * 
         * @return {string} rawAuthority
         */
        public getRawAuthority() : string {
            return this.__rawAuthority;
        }

        /**
         * Sets the raw authority.
         * 
         * @param {string} rawAuthority the new raw authority
         */
        public setRawAuthority(rawAuthority : string) {
            this.__rawAuthority = rawAuthority;
        }

        /**
         * Raw fragment.
         * 
         * @param {string} rawFragment the raw fragment
         * @return {io.nem.xpx.model.URI} the uri
         */
        public rawFragment(rawFragment : string) : URI {
            this.__rawFragment = rawFragment;
            return this;
        }

        /**
         * Get rawFragment.
         * 
         * @return {string} rawFragment
         */
        public getRawFragment() : string {
            return this.__rawFragment;
        }

        /**
         * Sets the raw fragment.
         * 
         * @param {string} rawFragment the new raw fragment
         */
        public setRawFragment(rawFragment : string) {
            this.__rawFragment = rawFragment;
        }

        /**
         * Raw path.
         * 
         * @param {string} rawPath the raw path
         * @return {io.nem.xpx.model.URI} the uri
         */
        public rawPath(rawPath : string) : URI {
            this.__rawPath = rawPath;
            return this;
        }

        /**
         * Get rawPath.
         * 
         * @return {string} rawPath
         */
        public getRawPath() : string {
            return this.__rawPath;
        }

        /**
         * Sets the raw path.
         * 
         * @param {string} rawPath the new raw path
         */
        public setRawPath(rawPath : string) {
            this.__rawPath = rawPath;
        }

        /**
         * Raw query.
         * 
         * @param {string} rawQuery the raw query
         * @return {io.nem.xpx.model.URI} the uri
         */
        public rawQuery(rawQuery : string) : URI {
            this.__rawQuery = rawQuery;
            return this;
        }

        /**
         * Get rawQuery.
         * 
         * @return {string} rawQuery
         */
        public getRawQuery() : string {
            return this.__rawQuery;
        }

        /**
         * Sets the raw query.
         * 
         * @param {string} rawQuery the new raw query
         */
        public setRawQuery(rawQuery : string) {
            this.__rawQuery = rawQuery;
        }

        /**
         * Raw scheme specific part.
         * 
         * @param {string} rawSchemeSpecificPart the raw scheme specific part
         * @return {io.nem.xpx.model.URI} the uri
         */
        public rawSchemeSpecificPart(rawSchemeSpecificPart : string) : URI {
            this.__rawSchemeSpecificPart = rawSchemeSpecificPart;
            return this;
        }

        /**
         * Get rawSchemeSpecificPart.
         * 
         * @return {string} rawSchemeSpecificPart
         */
        public getRawSchemeSpecificPart() : string {
            return this.__rawSchemeSpecificPart;
        }

        /**
         * Sets the raw scheme specific part.
         * 
         * @param {string} rawSchemeSpecificPart the new raw scheme specific part
         */
        public setRawSchemeSpecificPart(rawSchemeSpecificPart : string) {
            this.__rawSchemeSpecificPart = rawSchemeSpecificPart;
        }

        /**
         * Raw user info.
         * 
         * @param {string} rawUserInfo the raw user info
         * @return {io.nem.xpx.model.URI} the uri
         */
        public rawUserInfo(rawUserInfo : string) : URI {
            this.__rawUserInfo = rawUserInfo;
            return this;
        }

        /**
         * Get rawUserInfo.
         * 
         * @return {string} rawUserInfo
         */
        public getRawUserInfo() : string {
            return this.__rawUserInfo;
        }

        /**
         * Sets the raw user info.
         * 
         * @param {string} rawUserInfo the new raw user info
         */
        public setRawUserInfo(rawUserInfo : string) {
            this.__rawUserInfo = rawUserInfo;
        }

        /**
         * Scheme.
         * 
         * @param {string} scheme the scheme
         * @return {io.nem.xpx.model.URI} the uri
         */
        public scheme(scheme : string) : URI {
            this.__scheme = scheme;
            return this;
        }

        /**
         * Get scheme.
         * 
         * @return {string} scheme
         */
        public getScheme() : string {
            return this.__scheme;
        }

        /**
         * Sets the scheme.
         * 
         * @param {string} scheme the new scheme
         */
        public setScheme(scheme : string) {
            this.__scheme = scheme;
        }

        /**
         * Scheme specific part.
         * 
         * @param {string} schemeSpecificPart the scheme specific part
         * @return {io.nem.xpx.model.URI} the uri
         */
        public schemeSpecificPart(schemeSpecificPart : string) : URI {
            this.__schemeSpecificPart = schemeSpecificPart;
            return this;
        }

        /**
         * Get schemeSpecificPart.
         * 
         * @return {string} schemeSpecificPart
         */
        public getSchemeSpecificPart() : string {
            return this.__schemeSpecificPart;
        }

        /**
         * Sets the scheme specific part.
         * 
         * @param {string} schemeSpecificPart the new scheme specific part
         */
        public setSchemeSpecificPart(schemeSpecificPart : string) {
            this.__schemeSpecificPart = schemeSpecificPart;
        }

        /**
         * User info.
         * 
         * @param {string} userInfo the user info
         * @return {io.nem.xpx.model.URI} the uri
         */
        public userInfo(userInfo : string) : URI {
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
            let URI : URI = <URI>o;
            return java.util.Objects.equals(this.__absolute, URI.__absolute) && java.util.Objects.equals(this.__authority, URI.__authority) && java.util.Objects.equals(this.__fragment, URI.__fragment) && java.util.Objects.equals(this.__host, URI.__host) && java.util.Objects.equals(this.__opaque, URI.__opaque) && java.util.Objects.equals(this.__path, URI.__path) && java.util.Objects.equals(this.__port, URI.__port) && java.util.Objects.equals(this.__query, URI.__query) && java.util.Objects.equals(this.__rawAuthority, URI.__rawAuthority) && java.util.Objects.equals(this.__rawFragment, URI.__rawFragment) && java.util.Objects.equals(this.__rawPath, URI.__rawPath) && java.util.Objects.equals(this.__rawQuery, URI.__rawQuery) && java.util.Objects.equals(this.__rawSchemeSpecificPart, URI.__rawSchemeSpecificPart) && java.util.Objects.equals(this.__rawUserInfo, URI.__rawUserInfo) && java.util.Objects.equals(this.__scheme, URI.__scheme) && java.util.Objects.equals(this.__schemeSpecificPart, URI.__schemeSpecificPart) && java.util.Objects.equals(this.__userInfo, URI.__userInfo);
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
            /* append */(sb => { sb.str = sb.str.concat(<any>"class URI {\n"); return sb; })(sb);
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__absolute)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    absolute: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__authority)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    authority: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__fragment)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    fragment: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__host)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    host: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__opaque)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    opaque: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__path)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    path: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__port)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    port: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__query)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    query: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__rawAuthority)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    rawAuthority: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__rawFragment)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    rawFragment: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__rawPath)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    rawPath: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__rawQuery)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    rawQuery: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__rawSchemeSpecificPart)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    rawSchemeSpecificPart: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__rawUserInfo)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    rawUserInfo: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__scheme)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    scheme: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__schemeSpecificPart)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    schemeSpecificPart: "); return sb; })(sb)));
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
    URI["__class"] = "io.nem.xpx.model.URI";

}

