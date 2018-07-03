/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.model {
    /**
     * AccountMetaData.
     * @class
     */
    export class AccountMetaData {
        /**
         * The cosignatories.
         */
        /*private*/ __cosignatories : Array<io.nem.xpx.model.AccountInfo> = null;

        /**
         * The cosignatory of.
         */
        /*private*/ __cosignatoryOf : Array<io.nem.xpx.model.AccountInfo> = null;

        /**
         * The remote status.
         */
        /*private*/ __remoteStatus : AccountMetaData.RemoteStatusEnum = null;

        /**
         * The status.
         */
        /*private*/ __status : AccountMetaData.StatusEnum = null;

        /**
         * Cosignatories.
         * 
         * @param {io.nem.xpx.model.AccountInfo[]} cosignatories the cosignatories
         * @return {io.nem.xpx.model.AccountMetaData} the account meta data
         */
        public cosignatories(cosignatories : Array<io.nem.xpx.model.AccountInfo>) : AccountMetaData {
            this.__cosignatories = cosignatories;
            return this;
        }

        /**
         * Adds the cosignatories item.
         * 
         * @param {io.nem.xpx.model.AccountInfo} cosignatoriesItem the cosignatories item
         * @return {io.nem.xpx.model.AccountMetaData} the account meta data
         */
        public addCosignatoriesItem(cosignatoriesItem : io.nem.xpx.model.AccountInfo) : AccountMetaData {
            if(this.__cosignatories == null) {
                this.__cosignatories = <any>([]);
            }
            /* add */(this.__cosignatories.push(cosignatoriesItem)>0);
            return this;
        }

        /**
         * Get cosignatories.
         * 
         * @return {io.nem.xpx.model.AccountInfo[]} cosignatories
         */
        public getCosignatories() : Array<io.nem.xpx.model.AccountInfo> {
            return this.__cosignatories;
        }

        /**
         * Sets the cosignatories.
         * 
         * @param {io.nem.xpx.model.AccountInfo[]} cosignatories the new cosignatories
         */
        public setCosignatories(cosignatories : Array<io.nem.xpx.model.AccountInfo>) {
            this.__cosignatories = cosignatories;
        }

        /**
         * Cosignatory of.
         * 
         * @param {io.nem.xpx.model.AccountInfo[]} cosignatoryOf the cosignatory of
         * @return {io.nem.xpx.model.AccountMetaData} the account meta data
         */
        public cosignatoryOf(cosignatoryOf : Array<io.nem.xpx.model.AccountInfo>) : AccountMetaData {
            this.__cosignatoryOf = cosignatoryOf;
            return this;
        }

        /**
         * Adds the cosignatory of item.
         * 
         * @param {io.nem.xpx.model.AccountInfo} cosignatoryOfItem the cosignatory of item
         * @return {io.nem.xpx.model.AccountMetaData} the account meta data
         */
        public addCosignatoryOfItem(cosignatoryOfItem : io.nem.xpx.model.AccountInfo) : AccountMetaData {
            if(this.__cosignatoryOf == null) {
                this.__cosignatoryOf = <any>([]);
            }
            /* add */(this.__cosignatoryOf.push(cosignatoryOfItem)>0);
            return this;
        }

        /**
         * Get cosignatoryOf.
         * 
         * @return {io.nem.xpx.model.AccountInfo[]} cosignatoryOf
         */
        public getCosignatoryOf() : Array<io.nem.xpx.model.AccountInfo> {
            return this.__cosignatoryOf;
        }

        /**
         * Sets the cosignatory of.
         * 
         * @param {io.nem.xpx.model.AccountInfo[]} cosignatoryOf the new cosignatory of
         */
        public setCosignatoryOf(cosignatoryOf : Array<io.nem.xpx.model.AccountInfo>) {
            this.__cosignatoryOf = cosignatoryOf;
        }

        /**
         * Remote status.
         * 
         * @param {io.nem.xpx.model.AccountMetaData.RemoteStatusEnum} remoteStatus the remote status
         * @return {io.nem.xpx.model.AccountMetaData} the account meta data
         */
        public remoteStatus(remoteStatus : AccountMetaData.RemoteStatusEnum) : AccountMetaData {
            this.__remoteStatus = remoteStatus;
            return this;
        }

        /**
         * Get remoteStatus.
         * 
         * @return {io.nem.xpx.model.AccountMetaData.RemoteStatusEnum} remoteStatus
         */
        public getRemoteStatus() : AccountMetaData.RemoteStatusEnum {
            return this.__remoteStatus;
        }

        /**
         * Sets the remote status.
         * 
         * @param {io.nem.xpx.model.AccountMetaData.RemoteStatusEnum} remoteStatus the new remote status
         */
        public setRemoteStatus(remoteStatus : AccountMetaData.RemoteStatusEnum) {
            this.__remoteStatus = remoteStatus;
        }

        /**
         * Status.
         * 
         * @param {io.nem.xpx.model.AccountMetaData.StatusEnum} status the status
         * @return {io.nem.xpx.model.AccountMetaData} the account meta data
         */
        public status(status : AccountMetaData.StatusEnum) : AccountMetaData {
            this.__status = status;
            return this;
        }

        /**
         * Get status.
         * 
         * @return {io.nem.xpx.model.AccountMetaData.StatusEnum} status
         */
        public getStatus() : AccountMetaData.StatusEnum {
            return this.__status;
        }

        /**
         * Sets the status.
         * 
         * @param {io.nem.xpx.model.AccountMetaData.StatusEnum} status the new status
         */
        public setStatus(status : AccountMetaData.StatusEnum) {
            this.__status = status;
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
            let accountMetaData : AccountMetaData = <AccountMetaData>o;
            return java.util.Objects.equals(this.__cosignatories, accountMetaData.__cosignatories) && java.util.Objects.equals(this.__cosignatoryOf, accountMetaData.__cosignatoryOf) && java.util.Objects.equals(this.__remoteStatus, accountMetaData.__remoteStatus) && java.util.Objects.equals(this.__status, accountMetaData.__status);
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
            /* append */(sb => { sb.str = sb.str.concat(<any>"class AccountMetaData {\n"); return sb; })(sb);
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__cosignatories)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    cosignatories: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__cosignatoryOf)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    cosignatoryOf: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__remoteStatus)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    remoteStatus: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__status)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    status: "); return sb; })(sb)));
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
        toIndentedString(o : any) : string {
            if(o == null) {
                return "null";
            }
            return /* replace */o.toString().split("\n").join("\n    ");
        }
    }
    AccountMetaData["__class"] = "io.nem.xpx.model.AccountMetaData";


    export namespace AccountMetaData {

        /**
         * Gets or Sets remoteStatus.
         * @enum
         * @property {io.nem.xpx.model.AccountMetaData.RemoteStatusEnum} REMOTE
         * The remote.
         * @property {io.nem.xpx.model.AccountMetaData.RemoteStatusEnum} ACTIVATING
         * The activating.
         * @property {io.nem.xpx.model.AccountMetaData.RemoteStatusEnum} ACTIVE
         * The active.
         * @property {io.nem.xpx.model.AccountMetaData.RemoteStatusEnum} DEACTIVATING
         * The deactivating.
         * @property {io.nem.xpx.model.AccountMetaData.RemoteStatusEnum} INACTIVE
         * The inactive.
         * @class
         */
        export enum RemoteStatusEnum {
            
            /**
             * The remote.
             */
            REMOTE, 
            /**
             * The activating.
             */
            ACTIVATING, 
            /**
             * The active.
             */
            ACTIVE, 
            /**
             * The deactivating.
             */
            DEACTIVATING, 
            /**
             * The inactive.
             */
            INACTIVE
        }

        /** @ignore */
        export class RemoteStatusEnum_$WRAPPER {
            /**
             * The value.
             */
            value;

            constructor(protected _$ordinal : number, protected _$name : string, value) {
                if(this.value===undefined) this.value = null;
                this.value = value;
            }

            /**
             * Gets the value.
             * 
             * @return {string} the value
             */
            public getValue() : string {
                return this.value;
            }

            /**
             * 
             * @return {string}
             */
            public toString() : string {
                return /* valueOf */new String(this.value).toString();
            }

            /**
             * From value.
             * 
             * @param {string} text the text
             * @return {io.nem.xpx.model.AccountMetaData.RemoteStatusEnum} the remote status enum
             */
            public static fromValue(text) : AccountMetaData.RemoteStatusEnum {
                {
                    let array162 = /* Enum.values */function() { let result: number[] = []; for(let val in io.nem.xpx.model.AccountMetaData.RemoteStatusEnum) { if(!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                    for(let index161=0; index161 < array162.length; index161++) {
                        let b = array162[index161];
                        {
                            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(/* valueOf */new String(io.nem.xpx.model.AccountMetaData.RemoteStatusEnum["_$wrappers"][b].value).toString(),text))) {
                                return b;
                            }
                        }
                    }
                }
                return null;
            }
            public name() : string { return this._$name; }
            public ordinal() : number { return this._$ordinal; }
        }
        RemoteStatusEnum["__class"] = "io.nem.xpx.model.AccountMetaData.RemoteStatusEnum";
        RemoteStatusEnum["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];


        export namespace RemoteStatusEnum {

            /**
             * The Class Adapter.
             * @class
             * @extends com.google.gson.TypeAdapter
             */
            export class Adapter extends com.google.gson.TypeAdapter<AccountMetaData.RemoteStatusEnum> {
                /**
                 * 
                 * @param {com.google.gson.stream.JsonWriter} jsonWriter
                 * @param {io.nem.xpx.model.AccountMetaData.RemoteStatusEnum} enumeration
                 */
                public write(jsonWriter : com.google.gson.stream.JsonWriter, enumeration : AccountMetaData.RemoteStatusEnum) {
                    jsonWriter.value(io.nem.xpx.model.AccountMetaData.RemoteStatusEnum["_$wrappers"][enumeration].getValue());
                }

                /**
                 * 
                 * @param {com.google.gson.stream.JsonReader} jsonReader
                 * @return {io.nem.xpx.model.AccountMetaData.RemoteStatusEnum}
                 */
                public read(jsonReader : com.google.gson.stream.JsonReader) : AccountMetaData.RemoteStatusEnum {
                    let value : string = jsonReader.nextString();
                    return AccountMetaData.RemoteStatusEnum_$WRAPPER.fromValue(/* valueOf */new String(value).toString());
                }

                constructor() {
                    super();
                }
            }
            Adapter["__class"] = "io.nem.xpx.model.AccountMetaData.RemoteStatusEnum.Adapter";

        }


        export namespace RemoteStatusEnum {

            /**
             * The Class Adapter.
             * @class
             * @extends com.google.gson.TypeAdapter
             */
            export class Adapter extends com.google.gson.TypeAdapter<AccountMetaData.RemoteStatusEnum> {
                /**
                 * 
                 * @param {com.google.gson.stream.JsonWriter} jsonWriter
                 * @param {io.nem.xpx.model.AccountMetaData.RemoteStatusEnum} enumeration
                 */
                public write(jsonWriter : com.google.gson.stream.JsonWriter, enumeration : AccountMetaData.RemoteStatusEnum) {
                    jsonWriter.value(io.nem.xpx.model.AccountMetaData.RemoteStatusEnum["_$wrappers"][enumeration].getValue());
                }

                /**
                 * 
                 * @param {com.google.gson.stream.JsonReader} jsonReader
                 * @return {io.nem.xpx.model.AccountMetaData.RemoteStatusEnum}
                 */
                public read(jsonReader : com.google.gson.stream.JsonReader) : AccountMetaData.RemoteStatusEnum {
                    let value : string = jsonReader.nextString();
                    return AccountMetaData.RemoteStatusEnum_$WRAPPER.fromValue(/* valueOf */new String(value).toString());
                }

                constructor() {
                    super();
                }
            }
            Adapter["__class"] = "io.nem.xpx.model.AccountMetaData.RemoteStatusEnum.Adapter";

        }

        RemoteStatusEnum["_$wrappers"] = [new RemoteStatusEnum_$WRAPPER(0, "REMOTE", "REMOTE"), new RemoteStatusEnum_$WRAPPER(1, "ACTIVATING", "ACTIVATING"), new RemoteStatusEnum_$WRAPPER(2, "ACTIVE", "ACTIVE"), new RemoteStatusEnum_$WRAPPER(3, "DEACTIVATING", "DEACTIVATING"), new RemoteStatusEnum_$WRAPPER(4, "INACTIVE", "INACTIVE")];


        /**
         * Gets or Sets status.
         * @enum
         * @property {io.nem.xpx.model.AccountMetaData.StatusEnum} UNKNOWN
         * The unknown.
         * @property {io.nem.xpx.model.AccountMetaData.StatusEnum} LOCKED
         * The locked.
         * @property {io.nem.xpx.model.AccountMetaData.StatusEnum} UNLOCKED
         * The unlocked.
         * @class
         */
        export enum StatusEnum {
            
            /**
             * The unknown.
             */
            UNKNOWN, 
            /**
             * The locked.
             */
            LOCKED, 
            /**
             * The unlocked.
             */
            UNLOCKED
        }

        /** @ignore */
        export class StatusEnum_$WRAPPER {
            /**
             * The value.
             */
            value;

            constructor(protected _$ordinal : number, protected _$name : string, value) {
                if(this.value===undefined) this.value = null;
                this.value = value;
            }

            /**
             * Gets the value.
             * 
             * @return {string} the value
             */
            public getValue() : string {
                return this.value;
            }

            /**
             * 
             * @return {string}
             */
            public toString() : string {
                return /* valueOf */new String(this.value).toString();
            }

            /**
             * From value.
             * 
             * @param {string} text the text
             * @return {io.nem.xpx.model.AccountMetaData.StatusEnum} the status enum
             */
            public static fromValue(text) : AccountMetaData.StatusEnum {
                {
                    let array164 = /* Enum.values */function() { let result: number[] = []; for(let val in io.nem.xpx.model.AccountMetaData.StatusEnum) { if(!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                    for(let index163=0; index163 < array164.length; index163++) {
                        let b = array164[index163];
                        {
                            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(/* valueOf */new String(io.nem.xpx.model.AccountMetaData.StatusEnum["_$wrappers"][b].value).toString(),text))) {
                                return b;
                            }
                        }
                    }
                }
                return null;
            }
            public name() : string { return this._$name; }
            public ordinal() : number { return this._$ordinal; }
        }
        StatusEnum["__class"] = "io.nem.xpx.model.AccountMetaData.StatusEnum";
        StatusEnum["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];


        export namespace StatusEnum {

            /**
             * The Class Adapter.
             * @class
             * @extends com.google.gson.TypeAdapter
             */
            export class Adapter extends com.google.gson.TypeAdapter<AccountMetaData.StatusEnum> {
                /**
                 * 
                 * @param {com.google.gson.stream.JsonWriter} jsonWriter
                 * @param {io.nem.xpx.model.AccountMetaData.StatusEnum} enumeration
                 */
                public write(jsonWriter : com.google.gson.stream.JsonWriter, enumeration : AccountMetaData.StatusEnum) {
                    jsonWriter.value(io.nem.xpx.model.AccountMetaData.StatusEnum["_$wrappers"][enumeration].getValue());
                }

                /**
                 * 
                 * @param {com.google.gson.stream.JsonReader} jsonReader
                 * @return {io.nem.xpx.model.AccountMetaData.StatusEnum}
                 */
                public read(jsonReader : com.google.gson.stream.JsonReader) : AccountMetaData.StatusEnum {
                    let value : string = jsonReader.nextString();
                    return AccountMetaData.StatusEnum_$WRAPPER.fromValue(/* valueOf */new String(value).toString());
                }

                constructor() {
                    super();
                }
            }
            Adapter["__class"] = "io.nem.xpx.model.AccountMetaData.StatusEnum.Adapter";

        }


        export namespace StatusEnum {

            /**
             * The Class Adapter.
             * @class
             * @extends com.google.gson.TypeAdapter
             */
            export class Adapter extends com.google.gson.TypeAdapter<AccountMetaData.StatusEnum> {
                /**
                 * 
                 * @param {com.google.gson.stream.JsonWriter} jsonWriter
                 * @param {io.nem.xpx.model.AccountMetaData.StatusEnum} enumeration
                 */
                public write(jsonWriter : com.google.gson.stream.JsonWriter, enumeration : AccountMetaData.StatusEnum) {
                    jsonWriter.value(io.nem.xpx.model.AccountMetaData.StatusEnum["_$wrappers"][enumeration].getValue());
                }

                /**
                 * 
                 * @param {com.google.gson.stream.JsonReader} jsonReader
                 * @return {io.nem.xpx.model.AccountMetaData.StatusEnum}
                 */
                public read(jsonReader : com.google.gson.stream.JsonReader) : AccountMetaData.StatusEnum {
                    let value : string = jsonReader.nextString();
                    return AccountMetaData.StatusEnum_$WRAPPER.fromValue(/* valueOf */new String(value).toString());
                }

                constructor() {
                    super();
                }
            }
            Adapter["__class"] = "io.nem.xpx.model.AccountMetaData.StatusEnum.Adapter";

        }

        StatusEnum["_$wrappers"] = [new StatusEnum_$WRAPPER(0, "UNKNOWN", "UNKNOWN"), new StatusEnum_$WRAPPER(1, "LOCKED", "LOCKED"), new StatusEnum_$WRAPPER(2, "UNLOCKED", "UNLOCKED")];

    }

}

