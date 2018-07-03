/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.model {
    /**
     * Amount.
     * @class
     */
    export class Amount {
        /**
         * The num micro nem.
         */
        /*private*/ __numMicroNem : number = null;

        /**
         * The num nem.
         */
        /*private*/ __numNem : number = null;

        /**
         * Num micro nem.
         * 
         * @param {number} numMicroNem the num micro nem
         * @return {io.nem.xpx.model.Amount} the amount
         */
        public numMicroNem(numMicroNem : number) : Amount {
            this.__numMicroNem = numMicroNem;
            return this;
        }

        /**
         * Get numMicroNem.
         * 
         * @return {number} numMicroNem
         */
        public getNumMicroNem() : number {
            return this.__numMicroNem;
        }

        /**
         * Sets the num micro nem.
         * 
         * @param {number} numMicroNem the new num micro nem
         */
        public setNumMicroNem(numMicroNem : number) {
            this.__numMicroNem = numMicroNem;
        }

        /**
         * Num nem.
         * 
         * @param {number} numNem the num nem
         * @return {io.nem.xpx.model.Amount} the amount
         */
        public numNem(numNem : number) : Amount {
            this.__numNem = numNem;
            return this;
        }

        /**
         * Get numNem.
         * 
         * @return {number} numNem
         */
        public getNumNem() : number {
            return this.__numNem;
        }

        /**
         * Sets the num nem.
         * 
         * @param {number} numNem the new num nem
         */
        public setNumNem(numNem : number) {
            this.__numNem = numNem;
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
            let amount : Amount = <Amount>o;
            return java.util.Objects.equals(this.__numMicroNem, amount.__numMicroNem) && java.util.Objects.equals(this.__numNem, amount.__numNem);
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
            /* append */(sb => { sb.str = sb.str.concat(<any>"class Amount {\n"); return sb; })(sb);
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__numMicroNem)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    numMicroNem: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__numNem)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    numNem: "); return sb; })(sb)));
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
    Amount["__class"] = "io.nem.xpx.model.Amount";

}

