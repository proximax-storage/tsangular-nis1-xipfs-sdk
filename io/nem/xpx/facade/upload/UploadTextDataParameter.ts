/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.upload {
    /**
     * The Class UploadTextDataParameter.
     * @class
     * @extends io.nem.xpx.facade.upload.AbstractUploadParameter
     */
    export class UploadTextDataParameter extends io.nem.xpx.facade.upload.AbstractUploadParameter {
        /**
         * The Constant serialVersionUID.
         */
        static serialVersionUID : number = 1;

        /**
         * The data.
         */
        /*private*/ data : string;

        /**
         * The encoding.
         */
        /*private*/ encoding : string;

        /**
         * Gets the data.
         * 
         * @return {string} the data
         */
        public getData() : string {
            return this.data;
        }

        /**
         * Sets the data.
         * 
         * @param {string} data the new data
         */
        public setData(data : string) {
            this.data = data;
        }

        /**
         * Gets the encoding.
         * 
         * @return {string} the encoding
         */
        public getEncoding() : string {
            return this.encoding;
        }

        /**
         * Sets the encoding.
         * 
         * @param {string} encoding the new encoding
         */
        public setEncoding(encoding : string) {
            this.encoding = encoding;
        }

        /**
         * Creates the.
         * 
         * @return {*} the sender private key step
         */
        public static create() : io.nem.xpx.builder.steps.SenderPrivateKeyStep<io.nem.xpx.builder.steps.ReceiverPublicKeyStep<io.nem.xpx.builder.steps.TextDataStep<UploadTextDataParameter.FinalBuildSteps>>> {
            return new UploadTextDataParameter.Builder();
        }

        constructor() {
            super();
            if(this.data===undefined) this.data = null;
            if(this.encoding===undefined) this.encoding = null;
        }
    }
    UploadTextDataParameter["__class"] = "io.nem.xpx.facade.upload.UploadTextDataParameter";
    UploadTextDataParameter["__interfaces"] = ["java.io.Serializable"];



    export namespace UploadTextDataParameter {

        /**
         * The Interface FinalBuildSteps.
         * @class
         */
        export interface FinalBuildSteps extends io.nem.xpx.builder.steps.NameStep<UploadTextDataParameter.FinalBuildSteps>, io.nem.xpx.builder.steps.EncodingStep<UploadTextDataParameter.FinalBuildSteps>, io.nem.xpx.builder.steps.ContentTypeStep<UploadTextDataParameter.FinalBuildSteps>, io.nem.xpx.builder.steps.CommonUploadBuildSteps<UploadTextDataParameter.FinalBuildSteps> {
            /**
             * Builds the.
             * 
             * @return {io.nem.xpx.facade.upload.UploadTextDataParameter} the upload text data parameter
             */
            build() : io.nem.xpx.facade.upload.UploadTextDataParameter;
        }

        /**
         * The Class Builder.
         * @extends io.nem.xpx.facade.upload.AbstractUploadParameterBuilder
         * @class
         */
        export class Builder extends io.nem.xpx.facade.upload.AbstractUploadParameterBuilder<io.nem.xpx.builder.steps.TextDataStep<any>, UploadTextDataParameter.FinalBuildSteps> implements io.nem.xpx.builder.steps.TextDataStep<any>, UploadTextDataParameter.FinalBuildSteps {
            /**
             * The instance.
             */
            instance : io.nem.xpx.facade.upload.UploadTextDataParameter;

            public constructor(instance? : any) {
                if(((instance != null && instance instanceof <any>io.nem.xpx.facade.upload.UploadTextDataParameter) || instance === null)) {
                    let __args = Array.prototype.slice.call(arguments);
                    super(instance);
                    if(this.instance===undefined) this.instance = null;
                    if(this.instance===undefined) this.instance = null;
                    (() => {
                        this.instance = instance;
                    })();
                } else if(instance === undefined) {
                    let __args = Array.prototype.slice.call(arguments);
                    super(new io.nem.xpx.facade.upload.UploadTextDataParameter());
                    if(this.instance===undefined) this.instance = null;
                    if(this.instance===undefined) this.instance = null;
                    (() => {
                        this.instance = <io.nem.xpx.facade.upload.UploadTextDataParameter>this.instance;
                    })();
                } else throw new Error('invalid overload');
            }

            /**
             * 
             * @param {string} data
             * @return {*}
             */
            public data(data : string) : UploadTextDataParameter.FinalBuildSteps {
                this.instance.setData(data);
                return this;
            }

            /**
             * 
             * @param {string} contentType
             * @return {*}
             */
            public contentType(contentType : string) : UploadTextDataParameter.FinalBuildSteps {
                this.instance.setContentType(contentType);
                return this;
            }

            /**
             * 
             * @param {string} encoding
             * @return {*}
             */
            public encoding(encoding : string) : UploadTextDataParameter.FinalBuildSteps {
                this.instance.setEncoding(encoding);
                return this;
            }

            /**
             * 
             * @param {string} name
             * @return {*}
             */
            public name(name : string) : UploadTextDataParameter.FinalBuildSteps {
                this.instance.setName(name);
                return this;
            }

            /**
             * 
             * @return {io.nem.xpx.facade.upload.UploadTextDataParameter}
             */
            public build() : io.nem.xpx.facade.upload.UploadTextDataParameter {
                if(this.instance.getEncoding() == null) {
                    this.instance.setEncoding("UTF-8");
                }
                if(this.instance.getContentType() == null) {
                    this.instance.setContentType("text/plain");
                }
                return this.instance;
            }
        }
        Builder["__class"] = "io.nem.xpx.facade.upload.UploadTextDataParameter.Builder";
        Builder["__interfaces"] = ["io.nem.xpx.builder.steps.TextDataStep","io.nem.xpx.builder.steps.KeywordsStep","io.nem.xpx.builder.steps.ContentTypeStep","io.nem.xpx.builder.steps.PrivacyStrategyUploadStep","io.nem.xpx.builder.steps.MosaicsStep","io.nem.xpx.builder.steps.ReceiverPublicKeyStep","io.nem.xpx.builder.steps.NameStep","io.nem.xpx.builder.steps.EncodingStep","io.nem.xpx.builder.steps.MetadataStep","io.nem.xpx.builder.steps.SenderPrivateKeyStep","io.nem.xpx.builder.steps.CommonUploadBuildSteps","io.nem.xpx.facade.upload.UploadTextDataParameter.FinalBuildSteps"];


    }

}

