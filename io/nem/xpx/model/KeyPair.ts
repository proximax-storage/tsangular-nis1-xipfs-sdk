/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.model {
    /**
     * KeyPair.
     * @class
     */
    export class KeyPair {
        /**
         * The private key.
         */
        /*private*/ __privateKey : io.nem.xpx.model.PrivateKey = null;

        /**
         * The public key.
         */
        /*private*/ __publicKey : io.nem.xpx.model.PublicKey = null;

        /**
         * Private key.
         * 
         * @param {io.nem.xpx.model.PrivateKey} privateKey the private key
         * @return {io.nem.xpx.model.KeyPair} the key pair
         */
        public privateKey(privateKey : io.nem.xpx.model.PrivateKey) : KeyPair {
            this.__privateKey = privateKey;
            return this;
        }

        /**
         * Get privateKey.
         * 
         * @return {io.nem.xpx.model.PrivateKey} privateKey
         */
        public getPrivateKey() : io.nem.xpx.model.PrivateKey {
            return this.__privateKey;
        }

        /**
         * Sets the private key.
         * 
         * @param {io.nem.xpx.model.PrivateKey} privateKey the new private key
         */
        public setPrivateKey(privateKey : io.nem.xpx.model.PrivateKey) {
            this.__privateKey = privateKey;
        }

        /**
         * Public key.
         * 
         * @param {io.nem.xpx.model.PublicKey} publicKey the public key
         * @return {io.nem.xpx.model.KeyPair} the key pair
         */
        public publicKey(publicKey : io.nem.xpx.model.PublicKey) : KeyPair {
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
            let keyPair : KeyPair = <KeyPair>o;
            return java.util.Objects.equals(this.__privateKey, keyPair.__privateKey) && java.util.Objects.equals(this.__publicKey, keyPair.__publicKey);
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
            /* append */(sb => { sb.str = sb.str.concat(<any>"class KeyPair {\n"); return sb; })(sb);
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__privateKey)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    privateKey: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__publicKey)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    publicKey: "); return sb; })(sb)));
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
    KeyPair["__class"] = "io.nem.xpx.model.KeyPair";

}

