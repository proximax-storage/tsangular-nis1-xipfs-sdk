/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.model {
    /**
     * MultisigInfo.
     * @class
     */
    export class MultisigInfo {
        /**
         * The cosignatories count.
         */
        /*private*/ __cosignatoriesCount : number = null;

        /**
         * The min cosignatories.
         */
        /*private*/ __minCosignatories : number = null;

        /**
         * Cosignatories count.
         * 
         * @param {number} cosignatoriesCount the cosignatories count
         * @return {io.nem.xpx.model.MultisigInfo} the multisig info
         */
        public cosignatoriesCount(cosignatoriesCount : number) : MultisigInfo {
            this.__cosignatoriesCount = cosignatoriesCount;
            return this;
        }

        /**
         * Get cosignatoriesCount.
         * 
         * @return {number} cosignatoriesCount
         */
        public getCosignatoriesCount() : number {
            return this.__cosignatoriesCount;
        }

        /**
         * Sets the cosignatories count.
         * 
         * @param {number} cosignatoriesCount the new cosignatories count
         */
        public setCosignatoriesCount(cosignatoriesCount : number) {
            this.__cosignatoriesCount = cosignatoriesCount;
        }

        /**
         * Min cosignatories.
         * 
         * @param {number} minCosignatories the min cosignatories
         * @return {io.nem.xpx.model.MultisigInfo} the multisig info
         */
        public minCosignatories(minCosignatories : number) : MultisigInfo {
            this.__minCosignatories = minCosignatories;
            return this;
        }

        /**
         * Get minCosignatories.
         * 
         * @return {number} minCosignatories
         */
        public getMinCosignatories() : number {
            return this.__minCosignatories;
        }

        /**
         * Sets the min cosignatories.
         * 
         * @param {number} minCosignatories the new min cosignatories
         */
        public setMinCosignatories(minCosignatories : number) {
            this.__minCosignatories = minCosignatories;
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
            let multisigInfo : MultisigInfo = <MultisigInfo>o;
            return java.util.Objects.equals(this.__cosignatoriesCount, multisigInfo.__cosignatoriesCount) && java.util.Objects.equals(this.__minCosignatories, multisigInfo.__minCosignatories);
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
            /* append */(sb => { sb.str = sb.str.concat(<any>"class MultisigInfo {\n"); return sb; })(sb);
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__cosignatoriesCount)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    cosignatoriesCount: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__minCosignatories)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    minCosignatories: "); return sb; })(sb)));
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
    MultisigInfo["__class"] = "io.nem.xpx.model.MultisigInfo";

}

