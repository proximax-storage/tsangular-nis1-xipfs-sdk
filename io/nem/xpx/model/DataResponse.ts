/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.model {
    /**
     * Instantiates a new data response.
     * 
     * @param {string} data the data
     * @class
     */
    export class DataResponse {
        /**
         * The data.
         */
        /*private*/ data : string;

        public constructor(data : string) {
            if(this.data===undefined) this.data = null;
            this.data = data;
        }

        /**
         * Gets the data.
         * 
         * @return {string} the data
         */
        public getData() : string {
            return this.data;
        }

        /**
         * Sets the data.
         * 
         * @param {string} data the new data
         */
        public setData(data : string) {
            this.data = data;
        }

        /**
         * To json.
         * 
         * @return {string} the string
         */
        public toJson() : string {
            return io.nem.xpx.utils.JsonUtils.toJson(this);
        }
    }
    DataResponse["__class"] = "io.nem.xpx.model.DataResponse";

}

