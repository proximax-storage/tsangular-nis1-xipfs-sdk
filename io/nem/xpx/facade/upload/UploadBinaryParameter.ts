/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.upload {
    /**
     * The Class UploadBinaryParameter.
     * @class
     * @extends io.nem.xpx.facade.upload.AbstractUploadParameter
     */
    export class UploadBinaryParameter extends io.nem.xpx.facade.upload.AbstractUploadParameter {
        /**
         * The data.
         */
        /*private*/ data : number[];

        /**
         * Gets the data.
         * 
         * @return {Array} the data
         */
        public getData() : number[] {
            return this.data;
        }

        /**
         * Sets the data.
         * 
         * @param {Array} data the new data
         */
        public setData(data : number[]) {
            this.data = data;
        }

        /**
         * Creates the.
         * 
         * @return {*} the sender private key step
         */
        public static create() : io.nem.xpx.builder.steps.SenderPrivateKeyStep<io.nem.xpx.builder.steps.ReceiverPublicKeyStep<io.nem.xpx.builder.steps.BinaryDataStep<UploadBinaryParameter.FinalBuildSteps>>> {
            return new UploadBinaryParameter.Builder();
        }

        constructor() {
            super();
            if(this.data===undefined) this.data = null;
        }
    }
    UploadBinaryParameter["__class"] = "io.nem.xpx.facade.upload.UploadBinaryParameter";
    UploadBinaryParameter["__interfaces"] = ["java.io.Serializable"];



    export namespace UploadBinaryParameter {

        /**
         * The Interface FinalBuildSteps.
         * @class
         */
        export interface FinalBuildSteps extends io.nem.xpx.builder.steps.ContentTypeStep<UploadBinaryParameter.FinalBuildSteps>, io.nem.xpx.builder.steps.NameStep<UploadBinaryParameter.FinalBuildSteps>, io.nem.xpx.builder.steps.CommonUploadBuildSteps<UploadBinaryParameter.FinalBuildSteps> {
            /**
             * Builds the.
             * 
             * @return {io.nem.xpx.facade.upload.UploadBinaryParameter} the upload binary parameter
             */
            build() : io.nem.xpx.facade.upload.UploadBinaryParameter;
        }

        /**
         * The Class Builder.
         * @extends io.nem.xpx.facade.upload.AbstractUploadParameterBuilder
         * @class
         */
        export class Builder extends io.nem.xpx.facade.upload.AbstractUploadParameterBuilder<io.nem.xpx.builder.steps.BinaryDataStep<any>, UploadBinaryParameter.FinalBuildSteps> implements io.nem.xpx.builder.steps.BinaryDataStep<any>, UploadBinaryParameter.FinalBuildSteps {
            /**
             * The instance.
             */
            instance : io.nem.xpx.facade.upload.UploadBinaryParameter;

            public constructor(instance? : any) {
                if(((instance != null && instance instanceof <any>io.nem.xpx.facade.upload.UploadBinaryParameter) || instance === null)) {
                    let __args = Array.prototype.slice.call(arguments);
                    super(instance);
                    if(this.instance===undefined) this.instance = null;
                    if(this.instance===undefined) this.instance = null;
                    (() => {
                        this.instance = instance;
                    })();
                } else if(instance === undefined) {
                    let __args = Array.prototype.slice.call(arguments);
                    super(new io.nem.xpx.facade.upload.UploadBinaryParameter());
                    if(this.instance===undefined) this.instance = null;
                    if(this.instance===undefined) this.instance = null;
                    (() => {
                        this.instance = <io.nem.xpx.facade.upload.UploadBinaryParameter>this.instance;
                    })();
                } else throw new Error('invalid overload');
            }

            /**
             * 
             * @param {Array} data
             * @return {*}
             */
            public data(data : number[]) : UploadBinaryParameter.FinalBuildSteps {
                this.instance.setData(data);
                return this;
            }

            /**
             * 
             * @param {string} contentType
             * @return {*}
             */
            public contentType(contentType : string) : UploadBinaryParameter.FinalBuildSteps {
                this.instance.setContentType(contentType);
                return this;
            }

            /**
             * 
             * @param {string} name
             * @return {*}
             */
            public name(name : string) : UploadBinaryParameter.FinalBuildSteps {
                this.instance.setName(name);
                return this;
            }

            /**
             * 
             * @return {io.nem.xpx.facade.upload.UploadBinaryParameter}
             */
            public build() : io.nem.xpx.facade.upload.UploadBinaryParameter {
                if(io.nem.xpx.utils.StringUtils.isEmpty(this.instance.getContentType())) this.instance.setContentType(io.nem.xpx.utils.ContentTypeUtils.detectContentType$byte_A(this.instance.data));
                return this.instance;
            }
        }
        Builder["__class"] = "io.nem.xpx.facade.upload.UploadBinaryParameter.Builder";
        Builder["__interfaces"] = ["io.nem.xpx.builder.steps.KeywordsStep","io.nem.xpx.builder.steps.ContentTypeStep","io.nem.xpx.builder.steps.PrivacyStrategyUploadStep","io.nem.xpx.builder.steps.MosaicsStep","io.nem.xpx.builder.steps.ReceiverPublicKeyStep","io.nem.xpx.builder.steps.NameStep","io.nem.xpx.builder.steps.MetadataStep","io.nem.xpx.builder.steps.SenderPrivateKeyStep","io.nem.xpx.builder.steps.CommonUploadBuildSteps","io.nem.xpx.facade.upload.UploadBinaryParameter.FinalBuildSteps","io.nem.xpx.builder.steps.BinaryDataStep"];


    }

}

