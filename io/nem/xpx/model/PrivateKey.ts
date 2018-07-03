/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.model {
    /**
     * PrivateKey.
     * @class
     */
    export class PrivateKey {
        /**
         * The raw.
         */
        /*private*/ __raw : number = null;

        /**
         * Raw.
         * 
         * @param {number} raw the raw
         * @return {io.nem.xpx.model.PrivateKey} the private key
         */
        public raw(raw : number) : PrivateKey {
            this.__raw = raw;
            return this;
        }

        /**
         * Get raw.
         * 
         * @return {number} raw
         */
        public getRaw() : number {
            return this.__raw;
        }

        /**
         * Sets the raw.
         * 
         * @param {number} raw the new raw
         */
        public setRaw(raw : number) {
            this.__raw = raw;
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
            let privateKey : PrivateKey = <PrivateKey>o;
            return java.util.Objects.equals(this.__raw, privateKey.__raw);
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
            /* append */(sb => { sb.str = sb.str.concat(<any>"class PrivateKey {\n"); return sb; })(sb);
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__raw)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    raw: "); return sb; })(sb)));
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
    PrivateKey["__class"] = "io.nem.xpx.model.PrivateKey";

}

