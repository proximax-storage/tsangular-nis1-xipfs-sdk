/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.model {
    /**
     * ResourceHashMessageJsonEntity.
     * @class
     * @extends io.nem.xpx.model.NemTransactionInfo
     */
    export class ResourceHashMessageJsonEntity extends io.nem.xpx.model.NemTransactionInfo {
        /**
         * The digest.
         */
        /*private*/ __digest : string = null;

        /**
         * The hash.
         */
        /*private*/ __hash : string = null;

        /**
         * The keywords.
         */
        /*private*/ __keywords : string = null;

        /**
         * The meta data.
         */
        /*private*/ __metaData : string = null;

        /**
         * The name.
         */
        /*private*/ __name : string = null;

        /**
         * The size.
         */
        /*private*/ __size : number = null;

        /**
         * The timestamp.
         */
        /*private*/ __timestamp : number = null;

        /**
         * The type.
         */
        /*private*/ __type : string = null;

        /**
         * Digest.
         * 
         * @param {string} digest the digest
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity} the resource hash message json entity
         */
        public digest(digest : string) : ResourceHashMessageJsonEntity {
            this.__digest = digest;
            return this;
        }

        /**
         * Get digest.
         * 
         * @return {string} digest
         */
        public getDigest() : string {
            return this.__digest;
        }

        /**
         * Sets the digest.
         * 
         * @param {string} digest the new digest
         */
        public setDigest(digest : string) {
            this.__digest = digest;
        }

        /**
         * Hash.
         * 
         * @param {string} hash the hash
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity} the resource hash message json entity
         */
        public hash(hash : string) : ResourceHashMessageJsonEntity {
            this.__hash = hash;
            return this;
        }

        /**
         * Get hash.
         * 
         * @return {string} hash
         */
        public getHash() : string {
            return this.__hash;
        }

        /**
         * Sets the hash.
         * 
         * @param {string} hash the new hash
         */
        public setHash(hash : string) {
            this.__hash = hash;
        }

        /**
         * Keywords.
         * 
         * @param {string} keywords the keywords
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity} the resource hash message json entity
         */
        public keywords(keywords : string) : ResourceHashMessageJsonEntity {
            this.__keywords = keywords;
            return this;
        }

        /**
         * Get keywords.
         * 
         * @return {string} keywords
         */
        public getKeywords() : string {
            return this.__keywords;
        }

        /**
         * Sets the keywords.
         * 
         * @param {string} keywords the new keywords
         */
        public setKeywords(keywords : string) {
            this.__keywords = keywords;
        }

        /**
         * Meta data.
         * 
         * @param {string} metaData the meta data
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity} the resource hash message json entity
         */
        public metaData(metaData : string) : ResourceHashMessageJsonEntity {
            this.__metaData = metaData;
            return this;
        }

        /**
         * Get metaData.
         * 
         * @return {string} metaData
         */
        public getMetaData() : string {
            return this.__metaData;
        }

        /**
         * Sets the meta data.
         * 
         * @param {string} metaData the new meta data
         */
        public setMetaData(metaData : string) {
            this.__metaData = metaData;
        }

        /**
         * Name.
         * 
         * @param {string} name the name
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity} the resource hash message json entity
         */
        public name(name : string) : ResourceHashMessageJsonEntity {
            this.__name = name;
            return this;
        }

        /**
         * Get name.
         * 
         * @return {string} name
         */
        public getName() : string {
            return this.__name;
        }

        /**
         * Sets the name.
         * 
         * @param {string} name the new name
         */
        public setName(name : string) {
            this.__name = name;
        }

        /**
         * Size.
         * 
         * @param {number} size the size
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity} the resource hash message json entity
         */
        public size(size : number) : ResourceHashMessageJsonEntity {
            this.__size = size;
            return this;
        }

        /**
         * Get size.
         * 
         * @return {number} size
         */
        public getSize() : number {
            return this.__size;
        }

        /**
         * Sets the size.
         * 
         * @param {number} size the new size
         */
        public setSize(size : number) {
            this.__size = size;
        }

        /**
         * Timestamp.
         * 
         * @param {number} timestamp the timestamp
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity} the resource hash message json entity
         */
        public timestamp(timestamp : number) : ResourceHashMessageJsonEntity {
            this.__timestamp = timestamp;
            return this;
        }

        /**
         * Get timestamp.
         * 
         * @return {number} timestamp
         */
        public getTimestamp() : number {
            return this.__timestamp;
        }

        /**
         * Sets the timestamp.
         * 
         * @param {number} timestamp the new timestamp
         */
        public setTimestamp(timestamp : number) {
            this.__timestamp = timestamp;
        }

        /**
         * Type.
         * 
         * @param {string} type the type
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity} the resource hash message json entity
         */
        public type(type : string) : ResourceHashMessageJsonEntity {
            this.__type = type;
            return this;
        }

        /**
         * Get type.
         * 
         * @return {string} type
         */
        public getType() : string {
            return this.__type;
        }

        /**
         * Sets the type.
         * 
         * @param {string} type the new type
         */
        public setType(type : string) {
            this.__type = type;
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
            let resourceHashMessageJsonEntity : ResourceHashMessageJsonEntity = <ResourceHashMessageJsonEntity>o;
            return java.util.Objects.equals(this.__digest, resourceHashMessageJsonEntity.__digest) && java.util.Objects.equals(this.__hash, resourceHashMessageJsonEntity.__hash) && java.util.Objects.equals(this.__keywords, resourceHashMessageJsonEntity.__keywords) && java.util.Objects.equals(this.__metaData, resourceHashMessageJsonEntity.__metaData) && java.util.Objects.equals(this.__name, resourceHashMessageJsonEntity.__name) && java.util.Objects.equals(this.__size, resourceHashMessageJsonEntity.__size) && java.util.Objects.equals(this.__timestamp, resourceHashMessageJsonEntity.__timestamp) && java.util.Objects.equals(this.__type, resourceHashMessageJsonEntity.__type);
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
            /* append */(sb => { sb.str = sb.str.concat(<any>"class ResourceHashMessageJsonEntity {\n"); return sb; })(sb);
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__digest)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    digest: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__hash)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    hash: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__keywords)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    keywords: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__metaData)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    metaData: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__name)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    name: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__size)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    size: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__timestamp)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    timestamp: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__type)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    type: "); return sb; })(sb)));
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

        constructor() {
            super();
        }
    }
    ResourceHashMessageJsonEntity["__class"] = "io.nem.xpx.model.ResourceHashMessageJsonEntity";
    ResourceHashMessageJsonEntity["__interfaces"] = ["java.io.Serializable"];


}

