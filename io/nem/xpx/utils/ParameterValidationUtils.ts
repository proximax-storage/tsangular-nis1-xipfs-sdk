/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.utils {
    /**
     * The Class ParameterValidationUtils.
     * @class
     */
    export class ParameterValidationUtils {
        constructor() {
        }

        /**
         * Check parameter.
         * 
         * @param {boolean} isValid the is valid
         * @param {string} invalidMessage the invalid message
         */
        public static checkParameter(isValid : boolean, invalidMessage : string) {
            if(!isValid) throw Object.defineProperty(new Error(invalidMessage), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
    }
    ParameterValidationUtils["__class"] = "io.nem.xpx.utils.ParameterValidationUtils";

}

