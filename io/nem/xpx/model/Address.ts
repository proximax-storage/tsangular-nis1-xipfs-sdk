/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.model {
    /**
     * Address.
     * @class
     */
    export class Address {
        /**
         * The encoded.
         */
        /*private*/ __encoded : string = null;

        /**
         * The public key.
         */
        /*private*/ __publicKey : io.nem.xpx.model.PublicKey = null;

        /**
         * The valid.
         */
        /*private*/ __valid : boolean = null;

        /**
         * The version.
         */
        /*private*/ __version : number[] = null;

        /**
         * Encoded.
         * 
         * @param {string} encoded the encoded
         * @return {io.nem.xpx.model.Address} the address
         */
        public encoded(encoded : string) : Address {
            this.__encoded = encoded;
            return this;
        }

        /**
         * Get encoded.
         * 
         * @return {string} encoded
         */
        public getEncoded() : string {
            return this.__encoded;
        }

        /**
         * Sets the encoded.
         * 
         * @param {string} encoded the new encoded
         */
        public setEncoded(encoded : string) {
            this.__encoded = encoded;
        }

        /**
         * Public key.
         * 
         * @param {io.nem.xpx.model.PublicKey} publicKey the public key
         * @return {io.nem.xpx.model.Address} the address
         */
        public publicKey(publicKey : io.nem.xpx.model.PublicKey) : Address {
            this.__publicKey = publicKey;
            return this;
        }

        /**
         * Get publicKey.
         * 
         * @return {io.nem.xpx.model.PublicKey} publicKey
         */
        public getPublicKey() : io.nem.xpx.model.PublicKey {
            return this.__publicKey;
        }

        /**
         * Sets the public key.
         * 
         * @param {io.nem.xpx.model.PublicKey} publicKey the new public key
         */
        public setPublicKey(publicKey : io.nem.xpx.model.PublicKey) {
            this.__publicKey = publicKey;
        }

        /**
         * Valid.
         * 
         * @param {boolean} valid the valid
         * @return {io.nem.xpx.model.Address} the address
         */
        public valid(valid : boolean) : Address {
            this.__valid = valid;
            return this;
        }

        /**
         * Get valid.
         * 
         * @return {boolean} valid
         */
        public getValid() : boolean {
            return this.__valid;
        }

        /**
         * Sets the valid.
         * 
         * @param {boolean} valid the new valid
         */
        public setValid(valid : boolean) {
            this.__valid = valid;
        }

        /**
         * Version.
         * 
         * @param {Array} version the version
         * @return {io.nem.xpx.model.Address} the address
         */
        public version(version : number[]) : Address {
            this.__version = version;
            return this;
        }

        /**
         * Get version.
         * 
         * @return {Array} version
         */
        public getVersion() : number[] {
            return this.__version;
        }

        /**
         * Sets the version.
         * 
         * @param {Array} version the new version
         */
        public setVersion(version : number[]) {
            this.__version = version;
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
            let address : Address = <Address>o;
            return java.util.Objects.equals(this.__encoded, address.__encoded) && java.util.Objects.equals(this.__publicKey, address.__publicKey) && java.util.Objects.equals(this.__valid, address.__valid) && java.util.Objects.equals(this.__version, address.__version);
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
            /* append */(sb => { sb.str = sb.str.concat(<any>"class Address {\n"); return sb; })(sb);
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__encoded)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    encoded: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__publicKey)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    publicKey: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__valid)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    valid: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__version)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    version: "); return sb; })(sb)));
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
    Address["__class"] = "io.nem.xpx.model.Address";

}

