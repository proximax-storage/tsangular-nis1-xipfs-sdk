/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.model {
    /**
     * AccountInfo.
     * @class
     */
    export class AccountInfo {
        /**
         * The address.
         */
        /*private*/ __address : io.nem.xpx.model.Address = null;

        /**
         * The balance.
         */
        /*private*/ __balance : io.nem.xpx.model.Amount = null;

        /**
         * The importance.
         */
        /*private*/ __importance : number = null;

        /**
         * The key pair.
         */
        /*private*/ __keyPair : io.nem.xpx.model.KeyPair = null;

        /**
         * The label.
         */
        /*private*/ __label : string = null;

        /**
         * The multisig info.
         */
        /*private*/ __multisigInfo : io.nem.xpx.model.MultisigInfo = null;

        /**
         * The num harvested blocks.
         */
        /*private*/ __numHarvestedBlocks : io.nem.xpx.model.BlockAmount = null;

        /**
         * The vested balance.
         */
        /*private*/ __vestedBalance : io.nem.xpx.model.Amount = null;

        /**
         * Address.
         * 
         * @param {io.nem.xpx.model.Address} address the address
         * @return {io.nem.xpx.model.AccountInfo} the account info
         */
        public address(address : io.nem.xpx.model.Address) : AccountInfo {
            this.__address = address;
            return this;
        }

        /**
         * Get address.
         * 
         * @return {io.nem.xpx.model.Address} address
         */
        public getAddress() : io.nem.xpx.model.Address {
            return this.__address;
        }

        /**
         * Sets the address.
         * 
         * @param {io.nem.xpx.model.Address} address the new address
         */
        public setAddress(address : io.nem.xpx.model.Address) {
            this.__address = address;
        }

        /**
         * Balance.
         * 
         * @param {io.nem.xpx.model.Amount} balance the balance
         * @return {io.nem.xpx.model.AccountInfo} the account info
         */
        public balance(balance : io.nem.xpx.model.Amount) : AccountInfo {
            this.__balance = balance;
            return this;
        }

        /**
         * Get balance.
         * 
         * @return {io.nem.xpx.model.Amount} balance
         */
        public getBalance() : io.nem.xpx.model.Amount {
            return this.__balance;
        }

        /**
         * Sets the balance.
         * 
         * @param {io.nem.xpx.model.Amount} balance the new balance
         */
        public setBalance(balance : io.nem.xpx.model.Amount) {
            this.__balance = balance;
        }

        /**
         * Importance.
         * 
         * @param {number} importance the importance
         * @return {io.nem.xpx.model.AccountInfo} the account info
         */
        public importance(importance : number) : AccountInfo {
            this.__importance = importance;
            return this;
        }

        /**
         * Get importance.
         * 
         * @return {number} importance
         */
        public getImportance() : number {
            return this.__importance;
        }

        /**
         * Sets the importance.
         * 
         * @param {number} importance the new importance
         */
        public setImportance(importance : number) {
            this.__importance = importance;
        }

        /**
         * Key pair.
         * 
         * @param {io.nem.xpx.model.KeyPair} keyPair the key pair
         * @return {io.nem.xpx.model.AccountInfo} the account info
         */
        public keyPair(keyPair : io.nem.xpx.model.KeyPair) : AccountInfo {
            this.__keyPair = keyPair;
            return this;
        }

        /**
         * Get keyPair.
         * 
         * @return {io.nem.xpx.model.KeyPair} keyPair
         */
        public getKeyPair() : io.nem.xpx.model.KeyPair {
            return this.__keyPair;
        }

        /**
         * Sets the key pair.
         * 
         * @param {io.nem.xpx.model.KeyPair} keyPair the new key pair
         */
        public setKeyPair(keyPair : io.nem.xpx.model.KeyPair) {
            this.__keyPair = keyPair;
        }

        /**
         * Label.
         * 
         * @param {string} label the label
         * @return {io.nem.xpx.model.AccountInfo} the account info
         */
        public label(label : string) : AccountInfo {
            this.__label = label;
            return this;
        }

        /**
         * Get label.
         * 
         * @return {string} label
         */
        public getLabel() : string {
            return this.__label;
        }

        /**
         * Sets the label.
         * 
         * @param {string} label the new label
         */
        public setLabel(label : string) {
            this.__label = label;
        }

        /**
         * Multisig info.
         * 
         * @param {io.nem.xpx.model.MultisigInfo} multisigInfo the multisig info
         * @return {io.nem.xpx.model.AccountInfo} the account info
         */
        public multisigInfo(multisigInfo : io.nem.xpx.model.MultisigInfo) : AccountInfo {
            this.__multisigInfo = multisigInfo;
            return this;
        }

        /**
         * Get multisigInfo.
         * 
         * @return {io.nem.xpx.model.MultisigInfo} multisigInfo
         */
        public getMultisigInfo() : io.nem.xpx.model.MultisigInfo {
            return this.__multisigInfo;
        }

        /**
         * Sets the multisig info.
         * 
         * @param {io.nem.xpx.model.MultisigInfo} multisigInfo the new multisig info
         */
        public setMultisigInfo(multisigInfo : io.nem.xpx.model.MultisigInfo) {
            this.__multisigInfo = multisigInfo;
        }

        /**
         * Num harvested blocks.
         * 
         * @param {io.nem.xpx.model.BlockAmount} numHarvestedBlocks the num harvested blocks
         * @return {io.nem.xpx.model.AccountInfo} the account info
         */
        public numHarvestedBlocks(numHarvestedBlocks : io.nem.xpx.model.BlockAmount) : AccountInfo {
            this.__numHarvestedBlocks = numHarvestedBlocks;
            return this;
        }

        /**
         * Get numHarvestedBlocks.
         * 
         * @return {io.nem.xpx.model.BlockAmount} numHarvestedBlocks
         */
        public getNumHarvestedBlocks() : io.nem.xpx.model.BlockAmount {
            return this.__numHarvestedBlocks;
        }

        /**
         * Sets the num harvested blocks.
         * 
         * @param {io.nem.xpx.model.BlockAmount} numHarvestedBlocks the new num harvested blocks
         */
        public setNumHarvestedBlocks(numHarvestedBlocks : io.nem.xpx.model.BlockAmount) {
            this.__numHarvestedBlocks = numHarvestedBlocks;
        }

        /**
         * Vested balance.
         * 
         * @param {io.nem.xpx.model.Amount} vestedBalance the vested balance
         * @return {io.nem.xpx.model.AccountInfo} the account info
         */
        public vestedBalance(vestedBalance : io.nem.xpx.model.Amount) : AccountInfo {
            this.__vestedBalance = vestedBalance;
            return this;
        }

        /**
         * Get vestedBalance.
         * 
         * @return {io.nem.xpx.model.Amount} vestedBalance
         */
        public getVestedBalance() : io.nem.xpx.model.Amount {
            return this.__vestedBalance;
        }

        /**
         * Sets the vested balance.
         * 
         * @param {io.nem.xpx.model.Amount} vestedBalance the new vested balance
         */
        public setVestedBalance(vestedBalance : io.nem.xpx.model.Amount) {
            this.__vestedBalance = vestedBalance;
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
            let accountInfo : AccountInfo = <AccountInfo>o;
            return java.util.Objects.equals(this.__address, accountInfo.__address) && java.util.Objects.equals(this.__balance, accountInfo.__balance) && java.util.Objects.equals(this.__importance, accountInfo.__importance) && java.util.Objects.equals(this.__keyPair, accountInfo.__keyPair) && java.util.Objects.equals(this.__label, accountInfo.__label) && java.util.Objects.equals(this.__multisigInfo, accountInfo.__multisigInfo) && java.util.Objects.equals(this.__numHarvestedBlocks, accountInfo.__numHarvestedBlocks) && java.util.Objects.equals(this.__vestedBalance, accountInfo.__vestedBalance);
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
            /* append */(sb => { sb.str = sb.str.concat(<any>"class AccountInfo {\n"); return sb; })(sb);
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__address)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    address: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__balance)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    balance: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__importance)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    importance: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__keyPair)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    keyPair: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__label)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    label: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__multisigInfo)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    multisigInfo: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__numHarvestedBlocks)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    numHarvestedBlocks: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__vestedBalance)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    vestedBalance: "); return sb; })(sb)));
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
    AccountInfo["__class"] = "io.nem.xpx.model.AccountInfo";

}

