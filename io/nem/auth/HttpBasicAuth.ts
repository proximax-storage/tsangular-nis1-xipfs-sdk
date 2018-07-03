/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.auth {
    /**
     * The Class HttpBasicAuth.
     * @class
     */
    export class HttpBasicAuth implements io.nem.auth.Authentication {
        /**
         * The username.
         */
        /*private*/ username : string;

        /**
         * The password.
         */
        /*private*/ password : string;

        /**
         * Gets the username.
         * 
         * @return {string} the username
         */
        public getUsername() : string {
            return this.username;
        }

        /**
         * Sets the username.
         * 
         * @param {string} username the new username
         */
        public setUsername(username : string) {
            this.username = username;
        }

        /**
         * Gets the password.
         * 
         * @return {string} the password
         */
        public getPassword() : string {
            return this.password;
        }

        /**
         * Sets the password.
         * 
         * @param {string} password the new password
         */
        public setPassword(password : string) {
            this.password = password;
        }

        /**
         * 
         * @param {io.nem.Pair[]} queryParams
         * @param {*} headerParams
         */
        public applyToParams(queryParams : Array<io.nem.Pair>, headerParams : any) {
            if(this.username == null && this.password == null) {
                return;
            }
            /* put */(headerParams["Authorization"] = com.squareup.okhttp.Credentials.basic(this.username == null?"":this.username, this.password == null?"":this.password));
        }

        constructor() {
            if(this.username===undefined) this.username = null;
            if(this.password===undefined) this.password = null;
        }
    }
    HttpBasicAuth["__class"] = "io.nem.auth.HttpBasicAuth";
    HttpBasicAuth["__interfaces"] = ["io.nem.auth.Authentication"];


}

