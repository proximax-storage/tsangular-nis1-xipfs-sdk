/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.model {
    /**
     * ResponseEntity.
     * @class
     */
    export class ResponseEntity {
        /**
         * The body.
         */
        /*private*/ __body : any = null;

        /**
         * The status code.
         */
        /*private*/ __statusCode : ResponseEntity.StatusCodeEnum = null;

        /**
         * The status code value.
         */
        /*private*/ __statusCodeValue : number = null;

        /**
         * Body.
         * 
         * @param {*} body the body
         * @return {io.nem.xpx.model.ResponseEntity} the response entity
         */
        public body(body : any) : ResponseEntity {
            this.__body = body;
            return this;
        }

        /**
         * Get body.
         * 
         * @return {*} body
         */
        public getBody() : any {
            return this.__body;
        }

        /**
         * Sets the body.
         * 
         * @param {*} body the new body
         */
        public setBody(body : any) {
            this.__body = body;
        }

        /**
         * Status code.
         * 
         * @param {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} statusCode the status code
         * @return {io.nem.xpx.model.ResponseEntity} the response entity
         */
        public statusCode(statusCode : ResponseEntity.StatusCodeEnum) : ResponseEntity {
            this.__statusCode = statusCode;
            return this;
        }

        /**
         * Get statusCode.
         * 
         * @return {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} statusCode
         */
        public getStatusCode() : ResponseEntity.StatusCodeEnum {
            return this.__statusCode;
        }

        /**
         * Sets the status code.
         * 
         * @param {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} statusCode the new status code
         */
        public setStatusCode(statusCode : ResponseEntity.StatusCodeEnum) {
            this.__statusCode = statusCode;
        }

        /**
         * Status code value.
         * 
         * @param {number} statusCodeValue the status code value
         * @return {io.nem.xpx.model.ResponseEntity} the response entity
         */
        public statusCodeValue(statusCodeValue : number) : ResponseEntity {
            this.__statusCodeValue = statusCodeValue;
            return this;
        }

        /**
         * Get statusCodeValue.
         * 
         * @return {number} statusCodeValue
         */
        public getStatusCodeValue() : number {
            return this.__statusCodeValue;
        }

        /**
         * Sets the status code value.
         * 
         * @param {number} statusCodeValue the new status code value
         */
        public setStatusCodeValue(statusCodeValue : number) {
            this.__statusCodeValue = statusCodeValue;
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
            let responseEntity : ResponseEntity = <ResponseEntity>o;
            return java.util.Objects.equals(this.__body, responseEntity.__body) && java.util.Objects.equals(this.__statusCode, responseEntity.__statusCode) && java.util.Objects.equals(this.__statusCodeValue, responseEntity.__statusCodeValue);
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
            /* append */(sb => { sb.str = sb.str.concat(<any>"class ResponseEntity {\n"); return sb; })(sb);
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__body)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    body: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__statusCode)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    statusCode: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__statusCodeValue)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    statusCodeValue: "); return sb; })(sb)));
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
    ResponseEntity["__class"] = "io.nem.xpx.model.ResponseEntity";


    export namespace ResponseEntity {

        /**
         * Gets or Sets statusCode.
         * @enum
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _100
         * The  100.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _101
         * The  101.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _102
         * The  102.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _103
         * The  103.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _200
         * The  200.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _201
         * The  201.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _202
         * The  202.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _203
         * The  203.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _204
         * The  204.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _205
         * The  205.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _206
         * The  206.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _207
         * The  207.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _208
         * The  208.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _226
         * The  226.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _300
         * The  300.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _301
         * The  301.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _302
         * The  302.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _303
         * The  303.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _304
         * The  304.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _305
         * The  305.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _307
         * The  307.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _308
         * The  308.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _400
         * The  400.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _401
         * The  401.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _402
         * The  402.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _403
         * The  403.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _404
         * The  404.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _405
         * The  405.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _406
         * The  406.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _407
         * The  407.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _408
         * The  408.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _409
         * The  409.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _410
         * The  410.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _411
         * The  411.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _412
         * The  412.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _413
         * The  413.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _414
         * The  414.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _415
         * The  415.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _416
         * The  416.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _417
         * The  417.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _418
         * The  418.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _419
         * The  419.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _420
         * The  420.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _421
         * The  421.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _422
         * The  422.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _423
         * The  423.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _424
         * The  424.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _426
         * The  426.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _428
         * The  428.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _429
         * The  429.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _431
         * The  431.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _451
         * The  451.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _500
         * The  500.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _501
         * The  501.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _502
         * The  502.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _503
         * The  503.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _504
         * The  504.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _505
         * The  505.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _506
         * The  506.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _507
         * The  507.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _508
         * The  508.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _509
         * The  509.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _510
         * The  510.
         * @property {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} _511
         * The  511.
         * @class
         */
        export enum StatusCodeEnum {
            
            /**
             * The  100.
             */
            _100, 
            /**
             * The  101.
             */
            _101, 
            /**
             * The  102.
             */
            _102, 
            /**
             * The  103.
             */
            _103, 
            /**
             * The  200.
             */
            _200, 
            /**
             * The  201.
             */
            _201, 
            /**
             * The  202.
             */
            _202, 
            /**
             * The  203.
             */
            _203, 
            /**
             * The  204.
             */
            _204, 
            /**
             * The  205.
             */
            _205, 
            /**
             * The  206.
             */
            _206, 
            /**
             * The  207.
             */
            _207, 
            /**
             * The  208.
             */
            _208, 
            /**
             * The  226.
             */
            _226, 
            /**
             * The  300.
             */
            _300, 
            /**
             * The  301.
             */
            _301, 
            /**
             * The  302.
             */
            _302, 
            /**
             * The  303.
             */
            _303, 
            /**
             * The  304.
             */
            _304, 
            /**
             * The  305.
             */
            _305, 
            /**
             * The  307.
             */
            _307, 
            /**
             * The  308.
             */
            _308, 
            /**
             * The  400.
             */
            _400, 
            /**
             * The  401.
             */
            _401, 
            /**
             * The  402.
             */
            _402, 
            /**
             * The  403.
             */
            _403, 
            /**
             * The  404.
             */
            _404, 
            /**
             * The  405.
             */
            _405, 
            /**
             * The  406.
             */
            _406, 
            /**
             * The  407.
             */
            _407, 
            /**
             * The  408.
             */
            _408, 
            /**
             * The  409.
             */
            _409, 
            /**
             * The  410.
             */
            _410, 
            /**
             * The  411.
             */
            _411, 
            /**
             * The  412.
             */
            _412, 
            /**
             * The  413.
             */
            _413, 
            /**
             * The  414.
             */
            _414, 
            /**
             * The  415.
             */
            _415, 
            /**
             * The  416.
             */
            _416, 
            /**
             * The  417.
             */
            _417, 
            /**
             * The  418.
             */
            _418, 
            /**
             * The  419.
             */
            _419, 
            /**
             * The  420.
             */
            _420, 
            /**
             * The  421.
             */
            _421, 
            /**
             * The  422.
             */
            _422, 
            /**
             * The  423.
             */
            _423, 
            /**
             * The  424.
             */
            _424, 
            /**
             * The  426.
             */
            _426, 
            /**
             * The  428.
             */
            _428, 
            /**
             * The  429.
             */
            _429, 
            /**
             * The  431.
             */
            _431, 
            /**
             * The  451.
             */
            _451, 
            /**
             * The  500.
             */
            _500, 
            /**
             * The  501.
             */
            _501, 
            /**
             * The  502.
             */
            _502, 
            /**
             * The  503.
             */
            _503, 
            /**
             * The  504.
             */
            _504, 
            /**
             * The  505.
             */
            _505, 
            /**
             * The  506.
             */
            _506, 
            /**
             * The  507.
             */
            _507, 
            /**
             * The  508.
             */
            _508, 
            /**
             * The  509.
             */
            _509, 
            /**
             * The  510.
             */
            _510, 
            /**
             * The  511.
             */
            _511
        }

        /** @ignore */
        export class StatusCodeEnum_$WRAPPER {
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
             * @return {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} the status code enum
             */
            public static fromValue(text) : ResponseEntity.StatusCodeEnum {
                {
                    let array168 = /* Enum.values */function() { let result: number[] = []; for(let val in io.nem.xpx.model.ResponseEntity.StatusCodeEnum) { if(!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                    for(let index167=0; index167 < array168.length; index167++) {
                        let b = array168[index167];
                        {
                            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(/* valueOf */new String(io.nem.xpx.model.ResponseEntity.StatusCodeEnum["_$wrappers"][b].value).toString(),text))) {
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
        StatusCodeEnum["__class"] = "io.nem.xpx.model.ResponseEntity.StatusCodeEnum";
        StatusCodeEnum["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];


        export namespace StatusCodeEnum {

            /**
             * The Class Adapter.
             * @class
             * @extends com.google.gson.TypeAdapter
             */
            export class Adapter extends com.google.gson.TypeAdapter<ResponseEntity.StatusCodeEnum> {
                /**
                 * 
                 * @param {com.google.gson.stream.JsonWriter} jsonWriter
                 * @param {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} enumeration
                 */
                public write(jsonWriter : com.google.gson.stream.JsonWriter, enumeration : ResponseEntity.StatusCodeEnum) {
                    jsonWriter.value(io.nem.xpx.model.ResponseEntity.StatusCodeEnum["_$wrappers"][enumeration].getValue());
                }

                /**
                 * 
                 * @param {com.google.gson.stream.JsonReader} jsonReader
                 * @return {io.nem.xpx.model.ResponseEntity.StatusCodeEnum}
                 */
                public read(jsonReader : com.google.gson.stream.JsonReader) : ResponseEntity.StatusCodeEnum {
                    let value : string = jsonReader.nextString();
                    return ResponseEntity.StatusCodeEnum_$WRAPPER.fromValue(/* valueOf */new String(value).toString());
                }

                constructor() {
                    super();
                }
            }
            Adapter["__class"] = "io.nem.xpx.model.ResponseEntity.StatusCodeEnum.Adapter";

        }


        export namespace StatusCodeEnum {

            /**
             * The Class Adapter.
             * @class
             * @extends com.google.gson.TypeAdapter
             */
            export class Adapter extends com.google.gson.TypeAdapter<ResponseEntity.StatusCodeEnum> {
                /**
                 * 
                 * @param {com.google.gson.stream.JsonWriter} jsonWriter
                 * @param {io.nem.xpx.model.ResponseEntity.StatusCodeEnum} enumeration
                 */
                public write(jsonWriter : com.google.gson.stream.JsonWriter, enumeration : ResponseEntity.StatusCodeEnum) {
                    jsonWriter.value(io.nem.xpx.model.ResponseEntity.StatusCodeEnum["_$wrappers"][enumeration].getValue());
                }

                /**
                 * 
                 * @param {com.google.gson.stream.JsonReader} jsonReader
                 * @return {io.nem.xpx.model.ResponseEntity.StatusCodeEnum}
                 */
                public read(jsonReader : com.google.gson.stream.JsonReader) : ResponseEntity.StatusCodeEnum {
                    let value : string = jsonReader.nextString();
                    return ResponseEntity.StatusCodeEnum_$WRAPPER.fromValue(/* valueOf */new String(value).toString());
                }

                constructor() {
                    super();
                }
            }
            Adapter["__class"] = "io.nem.xpx.model.ResponseEntity.StatusCodeEnum.Adapter";

        }

        StatusCodeEnum["_$wrappers"] = [new StatusCodeEnum_$WRAPPER(0, "_100", "100"), new StatusCodeEnum_$WRAPPER(1, "_101", "101"), new StatusCodeEnum_$WRAPPER(2, "_102", "102"), new StatusCodeEnum_$WRAPPER(3, "_103", "103"), new StatusCodeEnum_$WRAPPER(4, "_200", "200"), new StatusCodeEnum_$WRAPPER(5, "_201", "201"), new StatusCodeEnum_$WRAPPER(6, "_202", "202"), new StatusCodeEnum_$WRAPPER(7, "_203", "203"), new StatusCodeEnum_$WRAPPER(8, "_204", "204"), new StatusCodeEnum_$WRAPPER(9, "_205", "205"), new StatusCodeEnum_$WRAPPER(10, "_206", "206"), new StatusCodeEnum_$WRAPPER(11, "_207", "207"), new StatusCodeEnum_$WRAPPER(12, "_208", "208"), new StatusCodeEnum_$WRAPPER(13, "_226", "226"), new StatusCodeEnum_$WRAPPER(14, "_300", "300"), new StatusCodeEnum_$WRAPPER(15, "_301", "301"), new StatusCodeEnum_$WRAPPER(16, "_302", "302"), new StatusCodeEnum_$WRAPPER(17, "_303", "303"), new StatusCodeEnum_$WRAPPER(18, "_304", "304"), new StatusCodeEnum_$WRAPPER(19, "_305", "305"), new StatusCodeEnum_$WRAPPER(20, "_307", "307"), new StatusCodeEnum_$WRAPPER(21, "_308", "308"), new StatusCodeEnum_$WRAPPER(22, "_400", "400"), new StatusCodeEnum_$WRAPPER(23, "_401", "401"), new StatusCodeEnum_$WRAPPER(24, "_402", "402"), new StatusCodeEnum_$WRAPPER(25, "_403", "403"), new StatusCodeEnum_$WRAPPER(26, "_404", "404"), new StatusCodeEnum_$WRAPPER(27, "_405", "405"), new StatusCodeEnum_$WRAPPER(28, "_406", "406"), new StatusCodeEnum_$WRAPPER(29, "_407", "407"), new StatusCodeEnum_$WRAPPER(30, "_408", "408"), new StatusCodeEnum_$WRAPPER(31, "_409", "409"), new StatusCodeEnum_$WRAPPER(32, "_410", "410"), new StatusCodeEnum_$WRAPPER(33, "_411", "411"), new StatusCodeEnum_$WRAPPER(34, "_412", "412"), new StatusCodeEnum_$WRAPPER(35, "_413", "413"), new StatusCodeEnum_$WRAPPER(36, "_414", "414"), new StatusCodeEnum_$WRAPPER(37, "_415", "415"), new StatusCodeEnum_$WRAPPER(38, "_416", "416"), new StatusCodeEnum_$WRAPPER(39, "_417", "417"), new StatusCodeEnum_$WRAPPER(40, "_418", "418"), new StatusCodeEnum_$WRAPPER(41, "_419", "419"), new StatusCodeEnum_$WRAPPER(42, "_420", "420"), new StatusCodeEnum_$WRAPPER(43, "_421", "421"), new StatusCodeEnum_$WRAPPER(44, "_422", "422"), new StatusCodeEnum_$WRAPPER(45, "_423", "423"), new StatusCodeEnum_$WRAPPER(46, "_424", "424"), new StatusCodeEnum_$WRAPPER(47, "_426", "426"), new StatusCodeEnum_$WRAPPER(48, "_428", "428"), new StatusCodeEnum_$WRAPPER(49, "_429", "429"), new StatusCodeEnum_$WRAPPER(50, "_431", "431"), new StatusCodeEnum_$WRAPPER(51, "_451", "451"), new StatusCodeEnum_$WRAPPER(52, "_500", "500"), new StatusCodeEnum_$WRAPPER(53, "_501", "501"), new StatusCodeEnum_$WRAPPER(54, "_502", "502"), new StatusCodeEnum_$WRAPPER(55, "_503", "503"), new StatusCodeEnum_$WRAPPER(56, "_504", "504"), new StatusCodeEnum_$WRAPPER(57, "_505", "505"), new StatusCodeEnum_$WRAPPER(58, "_506", "506"), new StatusCodeEnum_$WRAPPER(59, "_507", "507"), new StatusCodeEnum_$WRAPPER(60, "_508", "508"), new StatusCodeEnum_$WRAPPER(61, "_509", "509"), new StatusCodeEnum_$WRAPPER(62, "_510", "510"), new StatusCodeEnum_$WRAPPER(63, "_511", "511")];

    }

}

