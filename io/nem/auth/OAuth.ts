/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.auth {
    /**
     * The Class OAuth.
     * @class
     */
    export class OAuth implements io.nem.auth.Authentication {
        /**
         * The access token.
         */
        /*private*/ accessToken : string;

        /**
         * Gets the access token.
         * 
         * @return {string} the access token
         */
        public getAccessToken() : string {
            return this.accessToken;
        }

        /**
         * Sets the access token.
         * 
         * @param {string} accessToken the new access token
         */
        public setAccessToken(accessToken : string) {
            this.accessToken = accessToken;
        }

        /**
         * 
         * @param {io.nem.Pair[]} queryParams
         * @param {*} headerParams
         */
        public applyToParams(queryParams : Array<io.nem.Pair>, headerParams : any) {
            if(this.accessToken != null) {
                /* put */(headerParams["Authorization"] = "Bearer " + this.accessToken);
            }
        }

        constructor() {
            if(this.accessToken===undefined) this.accessToken = null;
        }
    }
    OAuth["__class"] = "io.nem.auth.OAuth";
    OAuth["__interfaces"] = ["io.nem.auth.Authentication"];


}

