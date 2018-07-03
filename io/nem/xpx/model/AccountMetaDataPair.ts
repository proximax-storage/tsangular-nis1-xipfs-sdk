/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.model {
    /**
     * AccountMetaDataPair.
     * @class
     */
    export class AccountMetaDataPair {
        /**
         * The entity.
         */
        /*private*/ __entity : io.nem.xpx.model.AccountInfo = null;

        /**
         * The meta data.
         */
        /*private*/ __metaData : io.nem.xpx.model.AccountMetaData = null;

        /**
         * Entity.
         * 
         * @param {io.nem.xpx.model.AccountInfo} entity the entity
         * @return {io.nem.xpx.model.AccountMetaDataPair} the account meta data pair
         */
        public entity(entity : io.nem.xpx.model.AccountInfo) : AccountMetaDataPair {
            this.__entity = entity;
            return this;
        }

        /**
         * Get entity.
         * 
         * @return {io.nem.xpx.model.AccountInfo} entity
         */
        public getEntity() : io.nem.xpx.model.AccountInfo {
            return this.__entity;
        }

        /**
         * Sets the entity.
         * 
         * @param {io.nem.xpx.model.AccountInfo} entity the new entity
         */
        public setEntity(entity : io.nem.xpx.model.AccountInfo) {
            this.__entity = entity;
        }

        /**
         * Meta data.
         * 
         * @param {io.nem.xpx.model.AccountMetaData} metaData the meta data
         * @return {io.nem.xpx.model.AccountMetaDataPair} the account meta data pair
         */
        public metaData(metaData : io.nem.xpx.model.AccountMetaData) : AccountMetaDataPair {
            this.__metaData = metaData;
            return this;
        }

        /**
         * Get metaData.
         * 
         * @return {io.nem.xpx.model.AccountMetaData} metaData
         */
        public getMetaData() : io.nem.xpx.model.AccountMetaData {
            return this.__metaData;
        }

        /**
         * Sets the meta data.
         * 
         * @param {io.nem.xpx.model.AccountMetaData} metaData the new meta data
         */
        public setMetaData(metaData : io.nem.xpx.model.AccountMetaData) {
            this.__metaData = metaData;
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
            let accountMetaDataPair : AccountMetaDataPair = <AccountMetaDataPair>o;
            return java.util.Objects.equals(this.__entity, accountMetaDataPair.__entity) && java.util.Objects.equals(this.__metaData, accountMetaDataPair.__metaData);
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
            /* append */(sb => { sb.str = sb.str.concat(<any>"class AccountMetaDataPair {\n"); return sb; })(sb);
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__entity)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    entity: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__metaData)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    metaData: "); return sb; })(sb)));
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
    AccountMetaDataPair["__class"] = "io.nem.xpx.model.AccountMetaDataPair";

}

