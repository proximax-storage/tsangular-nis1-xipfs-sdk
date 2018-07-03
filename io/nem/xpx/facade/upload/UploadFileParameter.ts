/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.upload {
    /**
     * The Class UploadFileParameter.
     * @class
     * @extends io.nem.xpx.facade.upload.AbstractUploadParameter
     */
    export class UploadFileParameter extends io.nem.xpx.facade.upload.AbstractUploadParameter {
        /**
         * The file.
         */
        /*private*/ file : java.io.File;

        /**
         * Gets the file.
         * 
         * @return {java.io.File} the file
         */
        public getFile() : java.io.File {
            return this.file;
        }

        /**
         * Sets the file.
         * 
         * @param {java.io.File} file the new file
         */
        public setFile(file : java.io.File) {
            this.file = file;
        }

        /**
         * Creates the.
         * 
         * @return {*} the sender private key step
         */
        public static create() : io.nem.xpx.builder.steps.SenderPrivateKeyStep<io.nem.xpx.builder.steps.ReceiverPublicKeyStep<io.nem.xpx.builder.steps.FileStep<UploadFileParameter.FinalBuildSteps>>> {
            return new UploadFileParameter.Builder();
        }

        constructor() {
            super();
            if(this.file===undefined) this.file = null;
        }
    }
    UploadFileParameter["__class"] = "io.nem.xpx.facade.upload.UploadFileParameter";
    UploadFileParameter["__interfaces"] = ["java.io.Serializable"];



    export namespace UploadFileParameter {

        /**
         * The Interface FinalBuildSteps.
         * @class
         */
        export interface FinalBuildSteps extends io.nem.xpx.builder.steps.FileNameStep<UploadFileParameter.FinalBuildSteps>, io.nem.xpx.builder.steps.ContentTypeStep<UploadFileParameter.FinalBuildSteps>, io.nem.xpx.builder.steps.CommonUploadBuildSteps<UploadFileParameter.FinalBuildSteps> {
            /**
             * Builds the.
             * 
             * @return {io.nem.xpx.facade.upload.UploadFileParameter} the upload file parameter
             * @throws IOException Signals that an I/O exception has occurred.
             */
            build() : io.nem.xpx.facade.upload.UploadFileParameter;
        }

        /**
         * The Class Builder.
         * @extends io.nem.xpx.facade.upload.AbstractUploadParameterBuilder
         * @class
         */
        export class Builder extends io.nem.xpx.facade.upload.AbstractUploadParameterBuilder<io.nem.xpx.builder.steps.FileStep<any>, UploadFileParameter.FinalBuildSteps> implements io.nem.xpx.builder.steps.FileStep<any>, UploadFileParameter.FinalBuildSteps {
            /**
             * The instance.
             */
            instance : io.nem.xpx.facade.upload.UploadFileParameter;

            public constructor(instance? : any) {
                if(((instance != null && instance instanceof <any>io.nem.xpx.facade.upload.UploadFileParameter) || instance === null)) {
                    let __args = Array.prototype.slice.call(arguments);
                    super(instance);
                    if(this.instance===undefined) this.instance = null;
                    if(this.instance===undefined) this.instance = null;
                    (() => {
                        this.instance = instance;
                    })();
                } else if(instance === undefined) {
                    let __args = Array.prototype.slice.call(arguments);
                    super(new io.nem.xpx.facade.upload.UploadFileParameter());
                    if(this.instance===undefined) this.instance = null;
                    if(this.instance===undefined) this.instance = null;
                    (() => {
                        this.instance = <io.nem.xpx.facade.upload.UploadFileParameter>this.instance;
                    })();
                } else throw new Error('invalid overload');
            }

            /**
             * 
             * @param {java.io.File} file
             * @return {*}
             */
            public file(file : java.io.File) : UploadFileParameter.FinalBuildSteps {
                this.instance.setFile(file);
                return this;
            }

            /**
             * 
             * @param {string} fileName
             * @return {*}
             */
            public fileName(fileName : string) : UploadFileParameter.FinalBuildSteps {
                this.instance.setName(fileName);
                return this;
            }

            /**
             * 
             * @param {string} contentType
             * @return {*}
             */
            public contentType(contentType : string) : UploadFileParameter.FinalBuildSteps {
                this.instance.setContentType(contentType);
                return this;
            }

            /**
             * 
             * @return {io.nem.xpx.facade.upload.UploadFileParameter}
             */
            public build() : io.nem.xpx.facade.upload.UploadFileParameter {
                if(io.nem.xpx.utils.StringUtils.isEmpty(this.instance.getName())) this.instance.setName(this.instance.getFile().getName());
                if(io.nem.xpx.utils.StringUtils.isEmpty(this.instance.getContentType())) this.instance.setContentType(io.nem.xpx.utils.ContentTypeUtils.detectContentType$byte_A(org.apache.commons.io.FileUtils.readFileToByteArray(this.instance.getFile())));
                return this.instance;
            }
        }
        Builder["__class"] = "io.nem.xpx.facade.upload.UploadFileParameter.Builder";
        Builder["__interfaces"] = ["io.nem.xpx.facade.upload.UploadFileParameter.FinalBuildSteps","io.nem.xpx.builder.steps.KeywordsStep","io.nem.xpx.builder.steps.ContentTypeStep","io.nem.xpx.builder.steps.PrivacyStrategyUploadStep","io.nem.xpx.builder.steps.MosaicsStep","io.nem.xpx.builder.steps.FileNameStep","io.nem.xpx.builder.steps.ReceiverPublicKeyStep","io.nem.xpx.builder.steps.FileStep","io.nem.xpx.builder.steps.MetadataStep","io.nem.xpx.builder.steps.SenderPrivateKeyStep","io.nem.xpx.builder.steps.CommonUploadBuildSteps"];


    }

}

