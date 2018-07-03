/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.auth {
    /**
     * Instantiates a new api key auth.
     * 
     * @param {string} location the location
     * @param {string} paramName the param name
     * @class
     */
    export class ApiKeyAuth implements io.nem.auth.Authentication {
        /**
         * The location.
         */
        /*private*/ location : string;

        /**
         * The param name.
         */
        /*private*/ paramName : string;

        /**
         * The api key.
         */
        /*private*/ apiKey : string;

        /**
         * The api key prefix.
         */
        /*private*/ apiKeyPrefix : string;

        public constructor(location : string, paramName : string) {
            if(this.location===undefined) this.location = null;
            if(this.paramName===undefined) this.paramName = null;
            if(this.apiKey===undefined) this.apiKey = null;
            if(this.apiKeyPrefix===undefined) this.apiKeyPrefix = null;
            this.location = location;
            this.paramName = paramName;
        }

        /**
         * Gets the location.
         * 
         * @return {string} the location
         */
        public getLocation() : string {
            return this.location;
        }

        /**
         * Gets the param name.
         * 
         * @return {string} the param name
         */
        public getParamName() : string {
            return this.paramName;
        }

        /**
         * Gets the api key.
         * 
         * @return {string} the api key
         */
        public getApiKey() : string {
            return this.apiKey;
        }

        /**
         * Sets the api key.
         * 
         * @param {string} apiKey the new api key
         */
        public setApiKey(apiKey : string) {
            this.apiKey = apiKey;
        }

        /**
         * Gets the api key prefix.
         * 
         * @return {string} the api key prefix
         */
        public getApiKeyPrefix() : string {
            return this.apiKeyPrefix;
        }

        /**
         * Sets the api key prefix.
         * 
         * @param {string} apiKeyPrefix the new api key prefix
         */
        public setApiKeyPrefix(apiKeyPrefix : string) {
            this.apiKeyPrefix = apiKeyPrefix;
        }

        /**
         * 
         * @param {io.nem.Pair[]} queryParams
         * @param {*} headerParams
         */
        public applyToParams(queryParams : Array<io.nem.Pair>, headerParams : any) {
            if(this.apiKey == null) {
                return;
            }
            let value : string;
            if(this.apiKeyPrefix != null) {
                value = this.apiKeyPrefix + " " + this.apiKey;
            } else {
                value = this.apiKey;
            }
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("query",this.location))) {
                /* add */(queryParams.push(new io.nem.Pair(this.paramName, value))>0);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("header",this.location))) {
                /* put */(headerParams[this.paramName] = value);
            }
        }
    }
    ApiKeyAuth["__class"] = "io.nem.auth.ApiKeyAuth";
    ApiKeyAuth["__interfaces"] = ["io.nem.auth.Authentication"];


}

