/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.upload {
    /**
     * The Class UploadMultipleFilesParameter.
     * @class
     * @extends io.nem.xpx.facade.upload.AbstractUploadParameter
     */
    export class UploadMultipleFilesParameter extends io.nem.xpx.facade.upload.AbstractUploadParameter {
        /**
         * The files.
         */
        /*private*/ files : Array<java.io.File> = <any>([]);

        /**
         * Gets the files.
         * 
         * @return {java.io.File[]} the files
         */
        public getFiles() : Array<java.io.File> {
            return this.files;
        }

        public addFiles$java_util_List(files : Array<java.io.File>) {
            /* addAll */((l1, l2) => l1.push.apply(l1, l2))(this.files, files);
        }

        /**
         * Adds the files.
         * 
         * @param {java.io.File[]} files the files
         */
        public addFiles(files? : any) : any {
            if(((files != null && (files instanceof Array)) || files === null)) {
                return <any>this.addFiles$java_util_List(files);
            } else if(((files != null && files instanceof <any>Array && (files.length==0 || files[0] == null ||(files[0] != null && files[0] instanceof <any>java.io.File))) || files === null)) {
                return <any>this.addFiles$java_io_File_A(files);
            } else throw new Error('invalid overload');
        }

        public addFiles$java_io_File_A(...files : java.io.File[]) {
            /* addAll */((l1, l2) => l1.push.apply(l1, l2))(this.files, /* asList */files.slice(0));
        }

        /**
         * Adds the file.
         * 
         * @param {java.io.File} file the file
         */
        public addFile(file : java.io.File) {
            /* add */(this.files.push(file)>0);
        }

        /**
         * Creates the.
         * 
         * @return {*} the sender private key step
         */
        public static create() : io.nem.xpx.builder.steps.SenderPrivateKeyStep<io.nem.xpx.builder.steps.ReceiverPublicKeyStep<UploadMultipleFilesParameter.FinalBuildSteps>> {
            return new UploadMultipleFilesParameter.Builder();
        }

        constructor() {
            super();
        }
    }
    UploadMultipleFilesParameter["__class"] = "io.nem.xpx.facade.upload.UploadMultipleFilesParameter";
    UploadMultipleFilesParameter["__interfaces"] = ["java.io.Serializable"];



    export namespace UploadMultipleFilesParameter {

        /**
         * The Interface FinalBuildSteps.
         * @class
         */
        export interface FinalBuildSteps extends io.nem.xpx.builder.steps.FilesStep<UploadMultipleFilesParameter.FinalBuildSteps>, io.nem.xpx.builder.steps.CommonUploadBuildSteps<UploadMultipleFilesParameter.FinalBuildSteps> {
            /**
             * Builds the.
             * 
             * @return {io.nem.xpx.facade.upload.UploadMultipleFilesParameter} the upload multiple files parameter
             */
            build() : io.nem.xpx.facade.upload.UploadMultipleFilesParameter;
        }

        /**
         * The Class Builder.
         * @extends io.nem.xpx.facade.upload.AbstractUploadParameterBuilder
         * @class
         */
        export class Builder extends io.nem.xpx.facade.upload.AbstractUploadParameterBuilder<UploadMultipleFilesParameter.FinalBuildSteps, UploadMultipleFilesParameter.FinalBuildSteps> implements UploadMultipleFilesParameter.FinalBuildSteps {
            /**
             * The instance.
             */
            instance : io.nem.xpx.facade.upload.UploadMultipleFilesParameter;

            constructor() {
                super(new io.nem.xpx.facade.upload.UploadMultipleFilesParameter());
                if(this.instance===undefined) this.instance = null;
                this.instance = <io.nem.xpx.facade.upload.UploadMultipleFilesParameter>this.instance;
            }

            public addFiles$java_io_File_A(...files : java.io.File[]) : UploadMultipleFilesParameter.FinalBuildSteps {
                (o => o.addFiles.apply(o, files))(this.instance);
                return this;
            }

            /**
             * 
             * @param {Array} files
             * @return {*}
             */
            public addFiles(...files : any[]) : any {
                if(((files != null && files instanceof <any>Array && (files.length==0 || files[0] == null ||(files[0] != null && files[0] instanceof <any>java.io.File))) || files === null)) {
                    return <any>this.addFiles$java_io_File_A(files);
                } else if(((files != null && (files instanceof Array)) || files === null)) {
                    return <any>this.addFiles$java_util_List(files);
                } else throw new Error('invalid overload');
            }

            public addFiles$java_util_List(files : Array<java.io.File>) : UploadMultipleFilesParameter.FinalBuildSteps {
                this.instance.addFiles$java_util_List(files);
                return this;
            }

            /**
             * 
             * @param {java.io.File} file
             * @return {*}
             */
            public addFile(file : java.io.File) : UploadMultipleFilesParameter.FinalBuildSteps {
                this.instance.addFile(file);
                return this;
            }

            /**
             * 
             * @return {io.nem.xpx.facade.upload.UploadMultipleFilesParameter}
             */
            public build() : io.nem.xpx.facade.upload.UploadMultipleFilesParameter {
                return this.instance;
            }
        }
        Builder["__class"] = "io.nem.xpx.facade.upload.UploadMultipleFilesParameter.Builder";
        Builder["__interfaces"] = ["io.nem.xpx.builder.steps.KeywordsStep","io.nem.xpx.builder.steps.PrivacyStrategyUploadStep","io.nem.xpx.builder.steps.MosaicsStep","io.nem.xpx.builder.steps.FilesStep","io.nem.xpx.builder.steps.ReceiverPublicKeyStep","io.nem.xpx.builder.steps.MetadataStep","io.nem.xpx.builder.steps.SenderPrivateKeyStep","io.nem.xpx.builder.steps.CommonUploadBuildSteps","io.nem.xpx.facade.upload.UploadMultipleFilesParameter.FinalBuildSteps"];


    }

}

