/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.builder.steps {
    /**
     * The Interface FilesStep.
     * 
     * @param <T> the generic type
     * @class
     */
    export interface FilesStep<T> {
        /**
         * Adds the files.
         * 
         * @param {Array} files the files
         * @return {*} the t
         */
        addFiles(...files : any[]) : any;

        /**
         * Adds the file.
         * 
         * @param {java.io.File} file the file
         * @return {*} the t
         */
        addFile(file : java.io.File) : T;
    }
}

