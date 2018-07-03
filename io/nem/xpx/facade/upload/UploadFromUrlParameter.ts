/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.upload {
    /**
     * The Class UploadFromUrlParameter.
     * @class
     * @extends io.nem.xpx.facade.upload.AbstractUploadParameter
     */
    export class UploadFromUrlParameter extends io.nem.xpx.facade.upload.AbstractUploadParameter {
        /**
         * The Constant serialVersionUID.
         */
        static serialVersionUID : number = 1;

        /**
         * The data.
         */
        /*private*/ url : java.net.URL;

        public getUrl() : java.net.URL {
            return this.url;
        }

        public setUrl(url : java.net.URL) {
            this.url = url;
        }

        /**
         * Creates the.
         * 
         * @return {*} the sender private key step
         */
        public static create() : io.nem.xpx.builder.steps.SenderPrivateKeyStep<io.nem.xpx.builder.steps.ReceiverPublicKeyStep<io.nem.xpx.builder.steps.UrlStep<UploadFromUrlParameter.FinalBuildSteps>>> {
            return new UploadFromUrlParameter.Builder();
        }

        constructor() {
            super();
            if(this.url===undefined) this.url = null;
        }
    }
    UploadFromUrlParameter["__class"] = "io.nem.xpx.facade.upload.UploadFromUrlParameter";
    UploadFromUrlParameter["__interfaces"] = ["java.io.Serializable"];



    export namespace UploadFromUrlParameter {

        /**
         * The Interface FinalBuildSteps.
         * @class
         */
        export interface FinalBuildSteps extends io.nem.xpx.builder.steps.NameStep<UploadFromUrlParameter.FinalBuildSteps>, io.nem.xpx.builder.steps.ContentTypeStep<UploadFromUrlParameter.FinalBuildSteps>, io.nem.xpx.builder.steps.CommonUploadBuildSteps<UploadFromUrlParameter.FinalBuildSteps> {
            /**
             * Builds the.
             * 
             * @return {io.nem.xpx.facade.upload.UploadFromUrlParameter} the upload from url parameter
             */
            build() : io.nem.xpx.facade.upload.UploadFromUrlParameter;
        }

        /**
         * The Class Builder.
         * @extends io.nem.xpx.facade.upload.AbstractUploadParameterBuilder
         * @class
         */
        export class Builder extends io.nem.xpx.facade.upload.AbstractUploadParameterBuilder<io.nem.xpx.builder.steps.UrlStep<any>, UploadFromUrlParameter.FinalBuildSteps> implements io.nem.xpx.builder.steps.UrlStep<any>, UploadFromUrlParameter.FinalBuildSteps {
            /**
             * The instance.
             */
            instance : io.nem.xpx.facade.upload.UploadFromUrlParameter;

            public constructor(instance? : any) {
                if(((instance != null && instance instanceof <any>io.nem.xpx.facade.upload.UploadFromUrlParameter) || instance === null)) {
                    let __args = Array.prototype.slice.call(arguments);
                    super(instance);
                    if(this.instance===undefined) this.instance = null;
                    if(this.instance===undefined) this.instance = null;
                    (() => {
                        this.instance = instance;
                    })();
                } else if(instance === undefined) {
                    let __args = Array.prototype.slice.call(arguments);
                    super(new io.nem.xpx.facade.upload.UploadFromUrlParameter());
                    if(this.instance===undefined) this.instance = null;
                    if(this.instance===undefined) this.instance = null;
                    (() => {
                        this.instance = <io.nem.xpx.facade.upload.UploadFromUrlParameter>this.instance;
                    })();
                } else throw new Error('invalid overload');
            }

            /**
             * 
             * @param {java.net.URL} url
             * @return {*}
             */
            public url(url : java.net.URL) : UploadFromUrlParameter.FinalBuildSteps {
                this.instance.setUrl(url);
                return this;
            }

            /**
             * 
             * @param {string} contentType
             * @return {*}
             */
            public contentType(contentType : string) : UploadFromUrlParameter.FinalBuildSteps {
                this.instance.setContentType(contentType);
                return this;
            }

            /**
             * 
             * @param {string} name
             * @return {*}
             */
            public name(name : string) : UploadFromUrlParameter.FinalBuildSteps {
                this.instance.setName(name);
                return this;
            }

            /**
             * 
             * @return {io.nem.xpx.facade.upload.UploadFromUrlParameter}
             */
            public build() : io.nem.xpx.facade.upload.UploadFromUrlParameter {
                return this.instance;
            }
        }
        Builder["__class"] = "io.nem.xpx.facade.upload.UploadFromUrlParameter.Builder";
        Builder["__interfaces"] = ["io.nem.xpx.builder.steps.KeywordsStep","io.nem.xpx.builder.steps.ContentTypeStep","io.nem.xpx.builder.steps.PrivacyStrategyUploadStep","io.nem.xpx.builder.steps.MosaicsStep","io.nem.xpx.builder.steps.ReceiverPublicKeyStep","io.nem.xpx.builder.steps.NameStep","io.nem.xpx.builder.steps.MetadataStep","io.nem.xpx.builder.steps.SenderPrivateKeyStep","io.nem.xpx.facade.upload.UploadFromUrlParameter.FinalBuildSteps","io.nem.xpx.builder.steps.CommonUploadBuildSteps","io.nem.xpx.builder.steps.UrlStep"];


    }

}

