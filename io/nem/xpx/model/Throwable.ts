/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.model {
    /**
     * Throwable.
     * @class
     */
    export class Throwable {
        /**
         * The cause.
         */
        /*private*/ __cause : Throwable = null;

        /**
         * The localized message.
         */
        /*private*/ __localizedMessage : string = null;

        /**
         * The message.
         */
        /*private*/ __message : string = null;

        /**
         * The stack trace.
         */
        /*private*/ __stackTrace : Array<io.nem.xpx.model.StackTraceElement> = null;

        /**
         * The suppressed.
         */
        /*private*/ __suppressed : Array<Throwable> = null;

        /**
         * Cause.
         * 
         * @param {io.nem.xpx.model.Throwable} cause the cause
         * @return {io.nem.xpx.model.Throwable} the throwable
         */
        public cause(cause : Throwable) : Throwable {
            this.__cause = cause;
            return this;
        }

        /**
         * Get cause.
         * 
         * @return {io.nem.xpx.model.Throwable} cause
         */
        public getCause() : Throwable {
            return this.__cause;
        }

        /**
         * Sets the cause.
         * 
         * @param {io.nem.xpx.model.Throwable} cause the new cause
         */
        public setCause(cause : Throwable) {
            this.__cause = cause;
        }

        /**
         * Localized message.
         * 
         * @param {string} localizedMessage the localized message
         * @return {io.nem.xpx.model.Throwable} the throwable
         */
        public localizedMessage(localizedMessage : string) : Throwable {
            this.__localizedMessage = localizedMessage;
            return this;
        }

        /**
         * Get localizedMessage.
         * 
         * @return {string} localizedMessage
         */
        public getLocalizedMessage() : string {
            return this.__localizedMessage;
        }

        /**
         * Sets the localized message.
         * 
         * @param {string} localizedMessage the new localized message
         */
        public setLocalizedMessage(localizedMessage : string) {
            this.__localizedMessage = localizedMessage;
        }

        /**
         * Message.
         * 
         * @param {string} message the message
         * @return {io.nem.xpx.model.Throwable} the throwable
         */
        public message(message : string) : Throwable {
            this.__message = message;
            return this;
        }

        /**
         * Get message.
         * 
         * @return {string} message
         */
        public getMessage() : string {
            return this.__message;
        }

        /**
         * Sets the message.
         * 
         * @param {string} message the new message
         */
        public setMessage(message : string) {
            this.__message = message;
        }

        /**
         * Stack trace.
         * 
         * @param {io.nem.xpx.model.StackTraceElement[]} stackTrace the stack trace
         * @return {io.nem.xpx.model.Throwable} the throwable
         */
        public stackTrace(stackTrace : Array<io.nem.xpx.model.StackTraceElement>) : Throwable {
            this.__stackTrace = stackTrace;
            return this;
        }

        /**
         * Adds the stack trace item.
         * 
         * @param {io.nem.xpx.model.StackTraceElement} stackTraceItem the stack trace item
         * @return {io.nem.xpx.model.Throwable} the throwable
         */
        public addStackTraceItem(stackTraceItem : io.nem.xpx.model.StackTraceElement) : Throwable {
            if(this.__stackTrace == null) {
                this.__stackTrace = <any>([]);
            }
            /* add */(this.__stackTrace.push(stackTraceItem)>0);
            return this;
        }

        /**
         * Get stackTrace.
         * 
         * @return {io.nem.xpx.model.StackTraceElement[]} stackTrace
         */
        public getStackTrace() : Array<io.nem.xpx.model.StackTraceElement> {
            return this.__stackTrace;
        }

        /**
         * Sets the stack trace.
         * 
         * @param {io.nem.xpx.model.StackTraceElement[]} stackTrace the new stack trace
         */
        public setStackTrace(stackTrace : Array<io.nem.xpx.model.StackTraceElement>) {
            this.__stackTrace = stackTrace;
        }

        /**
         * Suppressed.
         * 
         * @param {io.nem.xpx.model.Throwable[]} suppressed the suppressed
         * @return {io.nem.xpx.model.Throwable} the throwable
         */
        public suppressed(suppressed : Array<Throwable>) : Throwable {
            this.__suppressed = suppressed;
            return this;
        }

        /**
         * Adds the suppressed item.
         * 
         * @param {io.nem.xpx.model.Throwable} suppressedItem the suppressed item
         * @return {io.nem.xpx.model.Throwable} the throwable
         */
        public addSuppressedItem(suppressedItem : Throwable) : Throwable {
            if(this.__suppressed == null) {
                this.__suppressed = <any>([]);
            }
            /* add */(this.__suppressed.push(suppressedItem)>0);
            return this;
        }

        /**
         * Get suppressed.
         * 
         * @return {io.nem.xpx.model.Throwable[]} suppressed
         */
        public getSuppressed() : Array<Throwable> {
            return this.__suppressed;
        }

        /**
         * Sets the suppressed.
         * 
         * @param {io.nem.xpx.model.Throwable[]} suppressed the new suppressed
         */
        public setSuppressed(suppressed : Array<Throwable>) {
            this.__suppressed = suppressed;
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
            let throwable : Throwable = <Throwable>o;
            return java.util.Objects.equals(this.__cause, throwable.__cause) && java.util.Objects.equals(this.__localizedMessage, throwable.__localizedMessage) && java.util.Objects.equals(this.__message, throwable.__message) && java.util.Objects.equals(this.__stackTrace, throwable.__stackTrace) && java.util.Objects.equals(this.__suppressed, throwable.__suppressed);
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
            /* append */(sb => { sb.str = sb.str.concat(<any>"class Throwable {\n"); return sb; })(sb);
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__cause)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    cause: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__localizedMessage)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    localizedMessage: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__message)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    message: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__stackTrace)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    stackTrace: "); return sb; })(sb)));
            /* append */(sb => { sb.str = sb.str.concat(<any>"\n"); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.toIndentedString(this.__suppressed)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"    suppressed: "); return sb; })(sb)));
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
    Throwable["__class"] = "io.nem.xpx.model.Throwable";

}

