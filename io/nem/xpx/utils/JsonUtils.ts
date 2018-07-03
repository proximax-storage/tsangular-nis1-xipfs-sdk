/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.utils {
    /**
     * Utility class for handling JSON serialization and deserialization.
     * 
     * @class
     */
    export class JsonUtils {
        /**
         * Gson which handles the JSON conversion.
         */
        static gson : com.google.gson.Gson = null;

        constructor() {
        }

        /**
         * Initializes the current Gson object if null and returns it. The Gson
         * object has custom adapters to manage datatypes according to Facebook
         * formats.
         * 
         * @return {com.google.gson.Gson} the current instance of Gson.
         * @private
         */
        /*private*/ static getGson() : com.google.gson.Gson {
            if(JsonUtils.gson == null) {
                let builder : com.google.gson.GsonBuilder = new com.google.gson.GsonBuilder();
                JsonUtils.gson = builder.create();
            }
            return JsonUtils.gson;
        }

        /**
         * From json.
         * 
         * @param <T>
         * the generic type
         * @param {string} json
         * the string from which the object is to be deserialized.
         * @param {*} T
         * the type of the desired object.
         * @return {*} an object of type T from the string. Returns null if json is
         * null.
         * @see Gson#fromJson(String, Class)
         */
        public static fromJson<T>(json : string, T : any) : T {
            return <any>(JsonUtils.getGson().fromJson<any>(json, T));
        }

        /**
         * To json.
         * 
         * @param {*} src
         * the object for which Json representation is to be created
         * setting for Gson .
         * @return {string} Json representation of src.
         * @see Gson#toJson(Object)
         */
        public static toJson(src : any) : string {
            return JsonUtils.getGson().toJson(src);
        }

        /**
         * 
         * @return {string}
         */
        public toString() : string {
            return "JsonUtils []";
        }
    }
    JsonUtils["__class"] = "io.nem.xpx.utils.JsonUtils";

}

