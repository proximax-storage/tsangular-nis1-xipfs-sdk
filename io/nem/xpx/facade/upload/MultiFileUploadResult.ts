/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.upload {
    /**
     * Instantiates a new multi file upload result.
     * 
     * @param {io.nem.xpx.facade.upload.MultiFileUploadResult.FileUploadResult[]} fileUploadResults the file upload results
     * @class
     */
    export class MultiFileUploadResult {
        /**
         * The file upload results.
         */
        /*private*/ fileUploadResults : Array<MultiFileUploadResult.FileUploadResult>;

        public constructor(fileUploadResults : Array<MultiFileUploadResult.FileUploadResult>) {
            if(this.fileUploadResults===undefined) this.fileUploadResults = null;
            this.fileUploadResults = fileUploadResults == null?/* emptyList */[]:/* unmodifiableList */fileUploadResults.slice(0);
        }

        /**
         * Gets the file upload results.
         * 
         * @return {io.nem.xpx.facade.upload.MultiFileUploadResult.FileUploadResult[]} the file upload results
         */
        public getFileUploadResults() : Array<MultiFileUploadResult.FileUploadResult> {
            return this.fileUploadResults;
        }

        /**
         * Checks for failure.
         * 
         * @return {boolean} true, if successful
         */
        public hasFailure() : boolean {
            return this.fileUploadResults.stream().anyMatch((result) => result.uploadException != null);
        }
    }
    MultiFileUploadResult["__class"] = "io.nem.xpx.facade.upload.MultiFileUploadResult";


    export namespace MultiFileUploadResult {

        /**
         * Instantiates a new file upload result.
         * 
         * @param {java.io.File} file the file
         * @param {io.nem.xpx.facade.upload.UploadResult} uploadResult the upload result
         * @class
         */
        export class FileUploadResult {
            /**
             * The file.
             */
            file : java.io.File;

            /**
             * The upload result.
             */
            uploadResult : io.nem.xpx.facade.upload.UploadResult;

            /**
             * The upload exception.
             */
            uploadException : io.nem.xpx.facade.upload.UploadException;

            public constructor(file? : any, uploadResult? : any) {
                if(((file != null && file instanceof <any>java.io.File) || file === null) && ((uploadResult != null && uploadResult instanceof <any>io.nem.xpx.facade.upload.UploadResult) || uploadResult === null)) {
                    let __args = Array.prototype.slice.call(arguments);
                    if(this.file===undefined) this.file = null;
                    if(this.uploadResult===undefined) this.uploadResult = null;
                    if(this.uploadException===undefined) this.uploadException = null;
                    if(this.file===undefined) this.file = null;
                    if(this.uploadResult===undefined) this.uploadResult = null;
                    if(this.uploadException===undefined) this.uploadException = null;
                    (() => {
                        this.file = file;
                        this.uploadResult = uploadResult;
                    })();
                } else if(((file != null && file instanceof <any>java.io.File) || file === null) && ((uploadResult != null && uploadResult instanceof <any>io.nem.xpx.facade.upload.UploadException) || uploadResult === null)) {
                    let __args = Array.prototype.slice.call(arguments);
                    let uploadException : any = __args[1];
                    if(this.file===undefined) this.file = null;
                    if(this.uploadResult===undefined) this.uploadResult = null;
                    if(this.uploadException===undefined) this.uploadException = null;
                    if(this.file===undefined) this.file = null;
                    if(this.uploadResult===undefined) this.uploadResult = null;
                    if(this.uploadException===undefined) this.uploadException = null;
                    (() => {
                        this.file = file;
                        this.uploadException = uploadException;
                    })();
                } else throw new Error('invalid overload');
            }

            /**
             * Gets the file.
             * 
             * @return {java.io.File} the file
             */
            public getFile() : java.io.File {
                return this.file;
            }

            /**
             * Gets the upload result.
             * 
             * @return {io.nem.xpx.facade.upload.UploadResult} the upload result
             */
            public getUploadResult() : io.nem.xpx.facade.upload.UploadResult {
                return this.uploadResult;
            }

            /**
             * Gets the upload exception.
             * 
             * @return {io.nem.xpx.facade.upload.UploadException} the upload exception
             */
            public getUploadException() : io.nem.xpx.facade.upload.UploadException {
                return this.uploadException;
            }
        }
        FileUploadResult["__class"] = "io.nem.xpx.facade.upload.MultiFileUploadResult.FileUploadResult";

    }

}

