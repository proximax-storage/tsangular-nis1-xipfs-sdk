/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.model {
    /**
     * RequestAnnounceDataSignature.
     * @class
     */
    export class RequestAnnounceDataSignature {
        /**
         * The data.
         */
        /*private*/ __data : string = null;

        /**
         * The signature.
         */
        /*private*/ __signature : string = null;

        /**
         * Data.
         * 
         * @param {string} data the data
         * @return {io.nem.xpx.model.RequestAnnounceDataSignature} the request announce data signature
         */
        public data(data : string) : RequestAnnounceDataSignature {
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
         * Signature.
         * 
         * @param {string} signature the signature
         * @return {io.nem.xpx.model.RequestAnnounceDataSignature} the request announce data signature
         */
        public signature(signature : string) : RequestAnnounceDataSignature {
            this.__signature = signature;
            return this;
        }

        /**
         * Get signature.
         * 
         * @return {string} signature
         */
        public getSignature() : string {
            return this.__signature;
        }

        /**
         * Sets the signature.
         * 
         * @param {string} signature the new signature
         */
        public setSignature(signature : string) {
            this.__signature = signature;
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
            let requestAnnounceDataSignature : RequestAnnounceDataSignature = <RequestAnnounceDataSignature>o;
            return java.util.Objects.equals(this.__data, requestAnnounceDataSignature.__data) && java.util.Objects.equals(this.__signature, requestAnnounceDataSignature.__signature);
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
            /* append */(sb => { sb.str = sb.str.concat(<any>"class RequestAnnounceDataSignature {\n"); return sb; })(sb);
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__data)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    data: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__signature)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    signature: "); return sb; })(sb)));
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
    RequestAnnounceDataSignature["__class"] = "io.nem.xpx.model.RequestAnnounceDataSignature";

}

