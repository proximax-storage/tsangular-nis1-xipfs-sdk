/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.model {
    /**
     * The Class DataHashByteArrayEntity.
     * @class
     */
    export class DataHashByteArrayEntity {
        /**
         * The file.
         */
        /*private*/ file : number[];

        /**
         * The name.
         */
        /*private*/ name : string;

        /**
         * The content type.
         */
        /*private*/ contentType : string;

        /**
         * The keywords.
         */
        /*private*/ keywords : string;

        /**
         * The size.
         */
        /*private*/ size : number;

        /**
         * Gets the size.
         * 
         * @return {number} the size
         */
        public getSize() : number {
            return this.size;
        }

        /**
         * Sets the size.
         * 
         * @param {number} size the new size
         */
        public setSize(size : number) {
            this.size = size;
        }

        /**
         * Gets the content type.
         * 
         * @return {string} the content type
         */
        public getContentType() : string {
            return this.contentType;
        }

        /**
         * Sets the content type.
         * 
         * @param {string} contentType the new content type
         */
        public setContentType(contentType : string) {
            this.contentType = contentType;
        }

        /**
         * The metadata.
         */
        /*private*/ metadata : any;

        /**
         * Gets the file.
         * 
         * @return {Array} the file
         */
        public getFile() : number[] {
            return this.file;
        }

        /**
         * Sets the file.
         * 
         * @param {Array} file the new file
         */
        public setFile(file : number[]) {
            this.file = file;
        }

        /**
         * Gets the keywords.
         * 
         * @return {string} the keywords
         */
        public getKeywords() : string {
            return this.keywords;
        }

        /**
         * Sets the keywords.
         * 
         * @param {string} keywords the new keywords
         */
        public setKeywords(keywords : string) {
            this.keywords = keywords;
        }

        /**
         * Gets the metadata.
         * 
         * @return {*} the metadata
         */
        public getMetadata() : any {
            return this.metadata;
        }

        /**
         * Sets the metadata.
         * 
         * @param {*} metadata the metadata
         */
        public setMetadata(metadata : any) {
            this.metadata = metadata;
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
         * Sets the name.
         * 
         * @param {string} name the new name
         */
        public setName(name : string) {
            this.name = name;
        }

        constructor() {
            if(this.file===undefined) this.file = null;
            if(this.name===undefined) this.name = null;
            if(this.contentType===undefined) this.contentType = null;
            if(this.keywords===undefined) this.keywords = null;
            if(this.size===undefined) this.size = 0;
            if(this.metadata===undefined) this.metadata = null;
        }
    }
    DataHashByteArrayEntity["__class"] = "io.nem.xpx.model.DataHashByteArrayEntity";

}

