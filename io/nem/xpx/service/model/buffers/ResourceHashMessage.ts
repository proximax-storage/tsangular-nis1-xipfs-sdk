/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.model.buffers {
    /**
     * The Class ResourceHashMessage.
     * @class
     * @extends com.google.flatbuffers.Table
     */
    export class ResourceHashMessage extends com.google.flatbuffers.Table {
        public static getRootAsResourceHashMessage$java_nio_ByteBuffer(_bb : java.nio.ByteBuffer) : ResourceHashMessage {
            return ResourceHashMessage.getRootAsResourceHashMessage$java_nio_ByteBuffer$io_nem_xpx_service_model_buffers_ResourceHashMessage(_bb, new ResourceHashMessage());
        }

        public static getRootAsResourceHashMessage$java_nio_ByteBuffer$io_nem_xpx_service_model_buffers_ResourceHashMessage(_bb : java.nio.ByteBuffer, obj : ResourceHashMessage) : ResourceHashMessage {
            _bb.order(java.nio.ByteOrder.LITTLE_ENDIAN);
            return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb));
        }

        /**
         * Gets the root as resource hash message.
         * 
         * @param {java.nio.ByteBuffer} _bb the bb
         * @param {io.nem.xpx.service.model.buffers.ResourceHashMessage} obj the obj
         * @return {io.nem.xpx.service.model.buffers.ResourceHashMessage} the root as resource hash message
         */
        public static getRootAsResourceHashMessage(_bb? : any, obj? : any) : any {
            if(((_bb != null && _bb instanceof <any>java.nio.ByteBuffer) || _bb === null) && ((obj != null && obj instanceof <any>io.nem.xpx.service.model.buffers.ResourceHashMessage) || obj === null)) {
                return <any>io.nem.xpx.service.model.buffers.ResourceHashMessage.getRootAsResourceHashMessage$java_nio_ByteBuffer$io_nem_xpx_service_model_buffers_ResourceHashMessage(_bb, obj);
            } else if(((_bb != null && _bb instanceof <any>java.nio.ByteBuffer) || _bb === null) && obj === undefined) {
                return <any>io.nem.xpx.service.model.buffers.ResourceHashMessage.getRootAsResourceHashMessage$java_nio_ByteBuffer(_bb);
            } else throw new Error('invalid overload');
        }

        /**
         * Inits the.
         * 
         * @param {number} _i the i
         * @param {java.nio.ByteBuffer} _bb the bb
         */
        public __init(_i : number, _bb : java.nio.ByteBuffer) {
            this.bb_pos = _i;
            this.bb = _bb;
        }

        /**
         * Assign.
         * 
         * @param {number} _i the i
         * @param {java.nio.ByteBuffer} _bb the bb
         * @return {io.nem.xpx.service.model.buffers.ResourceHashMessage} the resource hash message
         */
        public __assign(_i : number, _bb : java.nio.ByteBuffer) : ResourceHashMessage {
            this.__init(_i, _bb);
            return this;
        }

        /**
         * Digest.
         * 
         * @return {string} the string
         */
        public digest() : string {
            let o : number = this.__offset(4);
            return o !== 0?this.__string(o + this.bb_pos):null;
        }

        /**
         * Digest as byte buffer.
         * 
         * @return {java.nio.ByteBuffer} the byte buffer
         */
        public digestAsByteBuffer() : java.nio.ByteBuffer {
            return this.__vector_as_bytebuffer(4, 1);
        }

        /**
         * Hash.
         * 
         * @return {string} the string
         */
        public hash() : string {
            let o : number = this.__offset(6);
            return o !== 0?this.__string(o + this.bb_pos):null;
        }

        /**
         * Hash as byte buffer.
         * 
         * @return {java.nio.ByteBuffer} the byte buffer
         */
        public hashAsByteBuffer() : java.nio.ByteBuffer {
            return this.__vector_as_bytebuffer(6, 1);
        }

        /**
         * Keywords.
         * 
         * @return {string} the string
         */
        public keywords() : string {
            let o : number = this.__offset(8);
            return o !== 0?this.__string(o + this.bb_pos):null;
        }

        /**
         * Keywords as byte buffer.
         * 
         * @return {java.nio.ByteBuffer} the byte buffer
         */
        public keywordsAsByteBuffer() : java.nio.ByteBuffer {
            return this.__vector_as_bytebuffer(8, 1);
        }

        /**
         * Meta data.
         * 
         * @return {string} the string
         */
        public metaData() : string {
            let o : number = this.__offset(10);
            return o !== 0?this.__string(o + this.bb_pos):null;
        }

        /**
         * Meta data as byte buffer.
         * 
         * @return {java.nio.ByteBuffer} the byte buffer
         */
        public metaDataAsByteBuffer() : java.nio.ByteBuffer {
            return this.__vector_as_bytebuffer(10, 1);
        }

        /**
         * Name.
         * 
         * @return {string} the string
         */
        public name() : string {
            let o : number = this.__offset(12);
            return o !== 0?this.__string(o + this.bb_pos):null;
        }

        /**
         * Name as byte buffer.
         * 
         * @return {java.nio.ByteBuffer} the byte buffer
         */
        public nameAsByteBuffer() : java.nio.ByteBuffer {
            return this.__vector_as_bytebuffer(12, 1);
        }

        /**
         * Size.
         * 
         * @return {number} the int
         */
        public size() : number {
            let o : number = this.__offset(14);
            return o !== 0?this.bb.getInt(o + this.bb_pos):0;
        }

        /**
         * Timestamp.
         * 
         * @return {number} the long
         */
        public timestamp() : number {
            let o : number = this.__offset(16);
            return o !== 0?this.bb.getLong(o + this.bb_pos):0;
        }

        /**
         * Type.
         * 
         * @return {string} the string
         */
        public type() : string {
            let o : number = this.__offset(18);
            return o !== 0?this.__string(o + this.bb_pos):null;
        }

        /**
         * Type as byte buffer.
         * 
         * @return {java.nio.ByteBuffer} the byte buffer
         */
        public typeAsByteBuffer() : java.nio.ByteBuffer {
            return this.__vector_as_bytebuffer(18, 1);
        }

        /**
         * Creates the resource hash message.
         * 
         * @param {com.google.flatbuffers.FlatBufferBuilder} builder the builder
         * @param {number} digestOffset the digest offset
         * @param {number} hashOffset the hash offset
         * @param {number} keywordsOffset the keywords offset
         * @param {number} metaDataOffset the meta data offset
         * @param {number} nameOffset the name offset
         * @param {number} size the size
         * @param {number} timestamp the timestamp
         * @param {number} typeOffset the type offset
         * @return {number} the int
         */
        public static createResourceHashMessage(builder : com.google.flatbuffers.FlatBufferBuilder, digestOffset : number, hashOffset : number, keywordsOffset : number, metaDataOffset : number, nameOffset : number, size : number, timestamp : number, typeOffset : number) : number {
            builder.startObject(8);
            ResourceHashMessage.addTimestamp(builder, timestamp);
            ResourceHashMessage.addType(builder, typeOffset);
            ResourceHashMessage.addSize(builder, size);
            ResourceHashMessage.addName(builder, nameOffset);
            ResourceHashMessage.addMetaData(builder, metaDataOffset);
            ResourceHashMessage.addKeywords(builder, keywordsOffset);
            ResourceHashMessage.addHash(builder, hashOffset);
            ResourceHashMessage.addDigest(builder, digestOffset);
            return ResourceHashMessage.endResourceHashMessage(builder);
        }

        /**
         * Start resource hash message.
         * 
         * @param {com.google.flatbuffers.FlatBufferBuilder} builder the builder
         */
        public static startResourceHashMessage(builder : com.google.flatbuffers.FlatBufferBuilder) {
            builder.startObject(8);
        }

        /**
         * Adds the digest.
         * 
         * @param {com.google.flatbuffers.FlatBufferBuilder} builder the builder
         * @param {number} digestOffset the digest offset
         */
        public static addDigest(builder : com.google.flatbuffers.FlatBufferBuilder, digestOffset : number) {
            builder.addOffset(0, digestOffset, 0);
        }

        /**
         * Adds the hash.
         * 
         * @param {com.google.flatbuffers.FlatBufferBuilder} builder the builder
         * @param {number} hashOffset the hash offset
         */
        public static addHash(builder : com.google.flatbuffers.FlatBufferBuilder, hashOffset : number) {
            builder.addOffset(1, hashOffset, 0);
        }

        /**
         * Adds the keywords.
         * 
         * @param {com.google.flatbuffers.FlatBufferBuilder} builder the builder
         * @param {number} keywordsOffset the keywords offset
         */
        public static addKeywords(builder : com.google.flatbuffers.FlatBufferBuilder, keywordsOffset : number) {
            builder.addOffset(2, keywordsOffset, 0);
        }

        /**
         * Adds the meta data.
         * 
         * @param {com.google.flatbuffers.FlatBufferBuilder} builder the builder
         * @param {number} metaDataOffset the meta data offset
         */
        public static addMetaData(builder : com.google.flatbuffers.FlatBufferBuilder, metaDataOffset : number) {
            builder.addOffset(3, metaDataOffset, 0);
        }

        /**
         * Adds the name.
         * 
         * @param {com.google.flatbuffers.FlatBufferBuilder} builder the builder
         * @param {number} nameOffset the name offset
         */
        public static addName(builder : com.google.flatbuffers.FlatBufferBuilder, nameOffset : number) {
            builder.addOffset(4, nameOffset, 0);
        }

        /**
         * Adds the size.
         * 
         * @param {com.google.flatbuffers.FlatBufferBuilder} builder the builder
         * @param {number} size the size
         */
        public static addSize(builder : com.google.flatbuffers.FlatBufferBuilder, size : number) {
            builder.addInt(5, size, 0);
        }

        /**
         * Adds the timestamp.
         * 
         * @param {com.google.flatbuffers.FlatBufferBuilder} builder the builder
         * @param {number} timestamp the timestamp
         */
        public static addTimestamp(builder : com.google.flatbuffers.FlatBufferBuilder, timestamp : number) {
            builder.addLong(6, timestamp, 0);
        }

        /**
         * Adds the type.
         * 
         * @param {com.google.flatbuffers.FlatBufferBuilder} builder the builder
         * @param {number} typeOffset the type offset
         */
        public static addType(builder : com.google.flatbuffers.FlatBufferBuilder, typeOffset : number) {
            builder.addOffset(7, typeOffset, 0);
        }

        /**
         * End resource hash message.
         * 
         * @param {com.google.flatbuffers.FlatBufferBuilder} builder the builder
         * @return {number} the int
         */
        public static endResourceHashMessage(builder : com.google.flatbuffers.FlatBufferBuilder) : number {
            let o : number = builder.endObject();
            return o;
        }

        /**
         * Finish resource hash message buffer.
         * 
         * @param {com.google.flatbuffers.FlatBufferBuilder} builder the builder
         * @param {number} offset the offset
         */
        public static finishResourceHashMessageBuffer(builder : com.google.flatbuffers.FlatBufferBuilder, offset : number) {
            builder.finish(offset);
        }
    }
    ResourceHashMessage["__class"] = "io.nem.xpx.service.model.buffers.ResourceHashMessage";

}

