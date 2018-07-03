/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.model {
    /**
     * StackTraceElement.
     * @class
     */
    export class StackTraceElement {
        /**
         * The class name.
         */
        /*private*/ __className : string = null;

        /**
         * The file name.
         */
        /*private*/ __fileName : string = null;

        /**
         * The line number.
         */
        /*private*/ __lineNumber : number = null;

        /**
         * The method name.
         */
        /*private*/ __methodName : string = null;

        /**
         * The native method.
         */
        /*private*/ __nativeMethod : boolean = null;

        /**
         * Class name.
         * 
         * @param {string} className the class name
         * @return {io.nem.xpx.model.StackTraceElement} the stack trace element
         */
        public className(className : string) : StackTraceElement {
            this.__className = className;
            return this;
        }

        /**
         * Get className.
         * 
         * @return {string} className
         */
        public getClassName() : string {
            return this.__className;
        }

        /**
         * Sets the class name.
         * 
         * @param {string} className the new class name
         */
        public setClassName(className : string) {
            this.__className = className;
        }

        /**
         * File name.
         * 
         * @param {string} fileName the file name
         * @return {io.nem.xpx.model.StackTraceElement} the stack trace element
         */
        public fileName(fileName : string) : StackTraceElement {
            this.__fileName = fileName;
            return this;
        }

        /**
         * Get fileName.
         * 
         * @return {string} fileName
         */
        public getFileName() : string {
            return this.__fileName;
        }

        /**
         * Sets the file name.
         * 
         * @param {string} fileName the new file name
         */
        public setFileName(fileName : string) {
            this.__fileName = fileName;
        }

        /**
         * Line number.
         * 
         * @param {number} lineNumber the line number
         * @return {io.nem.xpx.model.StackTraceElement} the stack trace element
         */
        public lineNumber(lineNumber : number) : StackTraceElement {
            this.__lineNumber = lineNumber;
            return this;
        }

        /**
         * Get lineNumber.
         * 
         * @return {number} lineNumber
         */
        public getLineNumber() : number {
            return this.__lineNumber;
        }

        /**
         * Sets the line number.
         * 
         * @param {number} lineNumber the new line number
         */
        public setLineNumber(lineNumber : number) {
            this.__lineNumber = lineNumber;
        }

        /**
         * Method name.
         * 
         * @param {string} methodName the method name
         * @return {io.nem.xpx.model.StackTraceElement} the stack trace element
         */
        public methodName(methodName : string) : StackTraceElement {
            this.__methodName = methodName;
            return this;
        }

        /**
         * Get methodName.
         * 
         * @return {string} methodName
         */
        public getMethodName() : string {
            return this.__methodName;
        }

        /**
         * Sets the method name.
         * 
         * @param {string} methodName the new method name
         */
        public setMethodName(methodName : string) {
            this.__methodName = methodName;
        }

        /**
         * Native method.
         * 
         * @param {boolean} nativeMethod the native method
         * @return {io.nem.xpx.model.StackTraceElement} the stack trace element
         */
        public nativeMethod(nativeMethod : boolean) : StackTraceElement {
            this.__nativeMethod = nativeMethod;
            return this;
        }

        /**
         * Get nativeMethod.
         * 
         * @return {boolean} nativeMethod
         */
        public getNativeMethod() : boolean {
            return this.__nativeMethod;
        }

        /**
         * Sets the native method.
         * 
         * @param {boolean} nativeMethod the new native method
         */
        public setNativeMethod(nativeMethod : boolean) {
            this.__nativeMethod = nativeMethod;
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
            let stackTraceElement : StackTraceElement = <StackTraceElement>o;
            return java.util.Objects.equals(this.__className, stackTraceElement.__className) && java.util.Objects.equals(this.__fileName, stackTraceElement.__fileName) && java.util.Objects.equals(this.__lineNumber, stackTraceElement.__lineNumber) && java.util.Objects.equals(this.__methodName, stackTraceElement.__methodName) && java.util.Objects.equals(this.__nativeMethod, stackTraceElement.__nativeMethod);
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
            /* append */(sb => { sb.str = sb.str.concat(<any>"class StackTraceElement {\n"); return sb; })(sb);
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__className)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    className: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__fileName)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    fileName: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__lineNumber)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    lineNumber: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__methodName)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    methodName: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__nativeMethod)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    nativeMethod: "); return sb; })(sb)));
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
        /*private*/ toIndentedString(o : any) : string {
            if(o == null) {
                return "null";
            }
            return /* replace */o.toString().split("\n").join("\n    ");
        }
    }
    StackTraceElement["__class"] = "io.nem.xpx.model.StackTraceElement";

}

