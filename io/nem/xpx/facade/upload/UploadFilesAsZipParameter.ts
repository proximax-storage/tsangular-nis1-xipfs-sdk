/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.upload {
    /**
     * The Class UploadFilesAsZipParameter.
     * @class
     * @extends io.nem.xpx.facade.upload.AbstractUploadParameter
     */
    export class UploadFilesAsZipParameter extends io.nem.xpx.facade.upload.AbstractUploadParameter {
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
        public static create() : io.nem.xpx.builder.steps.SenderPrivateKeyStep<io.nem.xpx.builder.steps.ReceiverPublicKeyStep<io.nem.xpx.builder.steps.ZipFileNameStep<UploadFilesAsZipParameter.FinalBuildSteps>>> {
            return new UploadFilesAsZipParameter.Builder();
        }

        constructor() {
            super();
        }
    }
    UploadFilesAsZipParameter["__class"] = "io.nem.xpx.facade.upload.UploadFilesAsZipParameter";
    UploadFilesAsZipParameter["__interfaces"] = ["java.io.Serializable"];



    export namespace UploadFilesAsZipParameter {

        /**
         * The Interface FinalBuildSteps.
         * @class
         */
        export interface FinalBuildSteps extends io.nem.xpx.builder.steps.FilesStep<UploadFilesAsZipParameter.FinalBuildSteps>, io.nem.xpx.builder.steps.CommonUploadBuildSteps<UploadFilesAsZipParameter.FinalBuildSteps> {
            /**
             * Builds the.
             * 
             * @return {io.nem.xpx.facade.upload.UploadFilesAsZipParameter} the upload files as zip parameter
             */
            build() : io.nem.xpx.facade.upload.UploadFilesAsZipParameter;
        }

        /**
         * The Class Builder.
         * @extends io.nem.xpx.facade.upload.AbstractUploadParameterBuilder
         * @class
         */
        export class Builder extends io.nem.xpx.facade.upload.AbstractUploadParameterBuilder<io.nem.xpx.builder.steps.ZipFileNameStep<any>, UploadFilesAsZipParameter.FinalBuildSteps> implements io.nem.xpx.builder.steps.ZipFileNameStep<any>, UploadFilesAsZipParameter.FinalBuildSteps {
            /**
             * The instance.
             */
            instance : io.nem.xpx.facade.upload.UploadFilesAsZipParameter;

            constructor() {
                super(new io.nem.xpx.facade.upload.UploadFilesAsZipParameter());
                if(this.instance===undefined) this.instance = null;
                this.instance = <io.nem.xpx.facade.upload.UploadFilesAsZipParameter>this.instance;
                this.instance.setContentType(io.nem.xpx.facade.DataTextContentType["_$wrappers"][io.nem.xpx.facade.DataTextContentType.APPLICATION_ZIP].toString());
            }

            /**
             * 
             * @param {string} name
             * @return {*}
             */
            public zipFileName(name : string) : UploadFilesAsZipParameter.FinalBuildSteps {
                this.instance.setName(name);
                return this;
            }

            public addFiles$java_io_File_A(...files : java.io.File[]) : UploadFilesAsZipParameter.FinalBuildSteps {
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

            public addFiles$java_util_List(files : Array<java.io.File>) : UploadFilesAsZipParameter.FinalBuildSteps {
                this.instance.addFiles$java_util_List(files);
                return this;
            }

            /**
             * 
             * @param {java.io.File} file
             * @return {*}
             */
            public addFile(file : java.io.File) : UploadFilesAsZipParameter.FinalBuildSteps {
                this.instance.addFile(file);
                return this;
            }

            /**
             * 
             * @return {io.nem.xpx.facade.upload.UploadFilesAsZipParameter}
             */
            public build() : io.nem.xpx.facade.upload.UploadFilesAsZipParameter {
                return this.instance;
            }
        }
        Builder["__class"] = "io.nem.xpx.facade.upload.UploadFilesAsZipParameter.Builder";
        Builder["__interfaces"] = ["io.nem.xpx.builder.steps.KeywordsStep","io.nem.xpx.builder.steps.PrivacyStrategyUploadStep","io.nem.xpx.builder.steps.MosaicsStep","io.nem.xpx.builder.steps.FilesStep","io.nem.xpx.builder.steps.ReceiverPublicKeyStep","io.nem.xpx.builder.steps.MetadataStep","io.nem.xpx.builder.steps.SenderPrivateKeyStep","io.nem.xpx.facade.upload.UploadFilesAsZipParameter.FinalBuildSteps","io.nem.xpx.builder.steps.CommonUploadBuildSteps","io.nem.xpx.builder.steps.ZipFileNameStep"];


    }

}

