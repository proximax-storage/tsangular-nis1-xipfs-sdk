/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem {
    /**
     * Instantiates a new pair.
     * 
     * @param {string} name the name
     * @param {string} value the value
     * @class
     */
    export class Pair {
        /**
         * The name.
         */
        /*private*/ name : string = "";

        /**
         * The value.
         */
        /*private*/ value : string = "";

        public constructor(name : string, value : string) {
            this.setName(name);
            this.setValue(value);
        }

        /**
         * Sets the name.
         * 
         * @param {string} name the new name
         * @private
         */
        /*private*/ setName(name : string) {
            if(!this.isValidString(name)) return;
            this.name = name;
        }

        /**
         * Sets the value.
         * 
         * @param {string} value the new value
         * @private
         */
        /*private*/ setValue(value : string) {
            if(!this.isValidString(value)) return;
            this.value = value;
        }

        /**
         * Gets the name.
         * 
         * @return {string} the name
         */
        public getName() : string {
            return this.name;
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
         * Checks if is valid string.
         * 
         * @param {string} arg the arg
         * @return {boolean} true, if is valid string
         * @private
         */
        /*private*/ isValidString(arg : string) : boolean {
            if(arg == null) return false;
            if(/* isEmpty */(arg.trim().length === 0)) return false;
            return true;
        }
    }
    Pair["__class"] = "io.nem.Pair";

}

