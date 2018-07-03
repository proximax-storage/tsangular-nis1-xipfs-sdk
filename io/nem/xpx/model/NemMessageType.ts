/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.model {
    /**
     * The Enum NemMessageType.
     * @enum
     * @property {io.nem.xpx.model.NemMessageType} PLAIN
     * The plain.
     * @property {io.nem.xpx.model.NemMessageType} SECURE
     * The secure.
     * @class
     */
    export enum NemMessageType {
        
        /**
         * The plain.
         */
        PLAIN, 
        /**
         * The secure.
         */
        SECURE
    }

    /** @ignore */
    export class NemMessageType_$WRAPPER {
        /**
         * The value.
         */
        /*private*/ value;

        constructor(protected _$ordinal : number, protected _$name : string, value) {
            if(this.value===undefined) this.value = 0;
            this.value = value;
        }

        /**
         * Gets the value.
         * 
         * @return {number} the value
         */
        public getValue() : number {
            return this.value;
        }

        /**
         * From int.
         * 
         * @param {number} type the type
         * @return {io.nem.xpx.model.NemMessageType} the nem message type
         */
        public static fromInt(type) : NemMessageType {
            return java.util.stream.Stream.of<any>(NemMessageType_$WRAPPER.values()).filter((messageType) => io.nem.xpx.model.NemMessageType["_$wrappers"][messageType].getValue() === type).findFirst().orElse(null);
        }
        public name() : string { return this._$name; }
        public ordinal() : number { return this._$ordinal; }
    }
    NemMessageType["__class"] = "io.nem.xpx.model.NemMessageType";
    NemMessageType["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];

    NemMessageType["_$wrappers"] = [new NemMessageType_$WRAPPER(0, "PLAIN", org.nem.core.model.MessageTypes.PLAIN), new NemMessageType_$WRAPPER(1, "SECURE", org.nem.core.model.MessageTypes.SECURE)];

}

