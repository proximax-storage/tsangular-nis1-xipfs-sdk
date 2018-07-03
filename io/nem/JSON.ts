/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem {
    /**
     * JSON constructor.
     * 
     * @param {io.nem.ApiClient} apiClient An instance of ApiClient
     * @class
     */
    export class JSON {
        /**
         * The api client.
         */
        /*private*/ apiClient : io.nem.ApiClient;

        /**
         * The gson.
         */
        /*private*/ gson : com.google.gson.Gson;

        public constructor(apiClient : io.nem.ApiClient) {
            if(this.apiClient===undefined) this.apiClient = null;
            if(this.gson===undefined) this.gson = null;
            this.apiClient = apiClient;
            this.gson = new com.google.gson.GsonBuilder().registerTypeAdapter(Date, new io.nem.DateAdapter(apiClient)).registerTypeAdapter(org.joda.time.DateTime, new io.nem.DateTimeTypeAdapter()).registerTypeAdapter(org.joda.time.LocalDate, new io.nem.LocalDateTypeAdapter()).create();
        }

        /**
         * Get Gson.
         * 
         * @return {com.google.gson.Gson} Gson
         */
        public getGson() : com.google.gson.Gson {
            return this.gson;
        }

        /**
         * Set Gson.
         * 
         * @param {com.google.gson.Gson} gson Gson
         */
        public setGson(gson : com.google.gson.Gson) {
            this.gson = gson;
        }

        /**
         * Serialize the given Java object into JSON string.
         * 
         * @param {*} obj Object
         * @return {string} String representation of the JSON
         */
        public serialize(obj : any) : string {
            return this.gson.toJson(obj);
        }

        /**
         * Deserialize the given JSON string to Java object.
         * 
         * @param <T> Type
         * @param {string} body The JSON string
         * @param {*} returnType The type to deserialize into
         * @return {*} The deserialized Java object
         */
        public deserialize<T>(body : string, returnType : java.lang.reflect.Type) : T {
            try {
                if(this.apiClient.isLenientOnJson()) {
                    let jsonReader : com.google.gson.stream.JsonReader = new com.google.gson.stream.JsonReader({ str: body, cursor: 0 });
                    jsonReader.setLenient(true);
                    return <any>(this.gson.fromJson<any>(jsonReader, returnType));
                } else {
                    return <any>(this.gson.fromJson<any>(body, returnType));
                }
            } catch(e) {
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(returnType,String))) return <T><any>body; else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(returnType,Date))) return <T><any>this.apiClient.parseDateOrDatetime(body); else throw (e);
            };
        }
    }
    JSON["__class"] = "io.nem.JSON";


    /**
     * Constructor for DateAdapter
     * 
     * @param {io.nem.ApiClient} apiClient Api client
     * @class
     */
    export class DateAdapter implements com.google.gson.JsonSerializer<Date>, com.google.gson.JsonDeserializer<Date> {
        /*private*/ apiClient : io.nem.ApiClient;

        public constructor(apiClient : io.nem.ApiClient) {
            if(this.apiClient===undefined) this.apiClient = null;
            this.apiClient = apiClient;
        }

        /**
         * Serialize
         * 
         * @param {java.util.Date} src Date
         * @param {*} typeOfSrc Type
         * @param {*} context Json Serialization Context
         * @return {com.google.gson.JsonElement} Json Element
         */
        public serialize(src : Date, typeOfSrc : java.lang.reflect.Type, context : com.google.gson.JsonSerializationContext) : com.google.gson.JsonElement {
            if(src == null) {
                return com.google.gson.JsonNull.INSTANCE;
            } else {
                return new com.google.gson.JsonPrimitive(this.apiClient.formatDatetime(src));
            }
        }

        /**
         * Deserialize
         * 
         * @param {com.google.gson.JsonElement} json Json element
         * @param {*} date Type
         * @param {*} context Json Serialization Context
         * @return {java.util.Date} Date
         * @throws JsonParseException if fail to parse
         */
        public deserialize(json : com.google.gson.JsonElement, date : java.lang.reflect.Type, context : com.google.gson.JsonDeserializationContext) : Date {
            let str : string = json.getAsJsonPrimitive().getAsString();
            try {
                return this.apiClient.parseDateOrDatetime(str);
            } catch(e) {
                throw new com.google.gson.JsonParseException(e);
            };
        }
    }
    DateAdapter["__class"] = "io.nem.DateAdapter";
    DateAdapter["__interfaces"] = ["com.google.gson.JsonDeserializer","com.google.gson.JsonSerializer"];



    /**
     * Gson TypeAdapter for Joda DateTime type
     * @extends com.google.gson.TypeAdapter
     * @class
     */
    export class DateTimeTypeAdapter extends com.google.gson.TypeAdapter<org.joda.time.DateTime> {
        /*private*/ parseFormatter : org.joda.time.format.DateTimeFormatter = org.joda.time.format.ISODateTimeFormat.dateOptionalTimeParser();

        /*private*/ printFormatter : org.joda.time.format.DateTimeFormatter = org.joda.time.format.ISODateTimeFormat.dateTime();

        /**
         * 
         * @param {com.google.gson.stream.JsonWriter} out
         * @param {org.joda.time.DateTime} date
         */
        public write(out : com.google.gson.stream.JsonWriter, date : org.joda.time.DateTime) {
            if(date == null) {
                out.nullValue();
            } else {
                out.value(this.printFormatter.print(date));
            }
        }

        /**
         * 
         * @param {com.google.gson.stream.JsonReader} in
         * @return {org.joda.time.DateTime}
         */
        public read(__in : com.google.gson.stream.JsonReader) : org.joda.time.DateTime {
            switch((__in.peek())) {
            case com.google.gson.stream.JsonToken.NULL:
                __in.nextNull();
                return null;
            default:
                let date : string = __in.nextString();
                return this.parseFormatter.parseDateTime(date);
            }
        }
    }
    DateTimeTypeAdapter["__class"] = "io.nem.DateTimeTypeAdapter";


    /**
     * Gson TypeAdapter for Joda LocalDate type
     * @extends com.google.gson.TypeAdapter
     * @class
     */
    export class LocalDateTypeAdapter extends com.google.gson.TypeAdapter<org.joda.time.LocalDate> {
        /*private*/ formatter : org.joda.time.format.DateTimeFormatter = org.joda.time.format.ISODateTimeFormat.date();

        /**
         * 
         * @param {com.google.gson.stream.JsonWriter} out
         * @param {org.joda.time.LocalDate} date
         */
        public write(out : com.google.gson.stream.JsonWriter, date : org.joda.time.LocalDate) {
            if(date == null) {
                out.nullValue();
            } else {
                out.value(this.formatter.print(date));
            }
        }

        /**
         * 
         * @param {com.google.gson.stream.JsonReader} in
         * @return {org.joda.time.LocalDate}
         */
        public read(__in : com.google.gson.stream.JsonReader) : org.joda.time.LocalDate {
            switch((__in.peek())) {
            case com.google.gson.stream.JsonToken.NULL:
                __in.nextNull();
                return null;
            default:
                let date : string = __in.nextString();
                return this.formatter.parseLocalDate(date);
            }
        }
    }
    LocalDateTypeAdapter["__class"] = "io.nem.LocalDateTypeAdapter";

}

