/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.upload {
    /**
     * The Class UploadPathParameter.
     * @class
     * @extends io.nem.xpx.facade.upload.AbstractUploadParameter
     */
    export class UploadPathParameter extends io.nem.xpx.facade.upload.AbstractUploadParameter {
        /**
         * The path.
         */
        /*private*/ path : string;

        /**
         * Gets the path.
         * 
         * @return {string} the path
         */
        public getPath() : string {
            return this.path;
        }

        /**
         * Sets the path.
         * 
         * @param {string} path the new path
         */
        public setPath(path : string) {
            this.path = path;
        }

        /**
         * Creates the.
         * 
         * @return {*} the sender private key step
         */
        public static create() : io.nem.xpx.builder.steps.SenderPrivateKeyStep<io.nem.xpx.builder.steps.ReceiverPublicKeyStep<io.nem.xpx.builder.steps.PathStep<UploadPathParameter.FinalBuildSteps>>> {
            return new UploadPathParameter.Builder();
        }

        constructor() {
            super();
            if(this.path===undefined) this.path = null;
        }
    }
    UploadPathParameter["__class"] = "io.nem.xpx.facade.upload.UploadPathParameter";
    UploadPathParameter["__interfaces"] = ["java.io.Serializable"];



    export namespace UploadPathParameter {

        /**
         * The Interface FinalBuildSteps.
         * @class
         */
        export interface FinalBuildSteps extends io.nem.xpx.builder.steps.CommonUploadBuildSteps<UploadPathParameter.FinalBuildSteps> {
            /**
             * Builds the.
             * 
             * @return {io.nem.xpx.facade.upload.UploadPathParameter} the upload path parameter
             */
            build() : io.nem.xpx.facade.upload.UploadPathParameter;
        }

        /**
         * The Class Builder.
         * @extends io.nem.xpx.facade.upload.AbstractUploadParameterBuilder
         * @class
         */
        export class Builder extends io.nem.xpx.facade.upload.AbstractUploadParameterBuilder<io.nem.xpx.builder.steps.PathStep<any>, UploadPathParameter.FinalBuildSteps> implements io.nem.xpx.builder.steps.PathStep<any>, UploadPathParameter.FinalBuildSteps {
            /**
             * The instance.
             */
            instance : io.nem.xpx.facade.upload.UploadPathParameter;

            constructor() {
                super(new io.nem.xpx.facade.upload.UploadPathParameter());
                if(this.instance===undefined) this.instance = null;
                this.instance = <io.nem.xpx.facade.upload.UploadPathParameter>this.instance;
            }

            /**
             * 
             * @param {string} path
             * @return {*}
             */
            public path(path : string) : UploadPathParameter.FinalBuildSteps {
                this.instance.setPath(path);
                return this;
            }

            /**
             * 
             * @return {io.nem.xpx.facade.upload.UploadPathParameter}
             */
            public build() : io.nem.xpx.facade.upload.UploadPathParameter {
                return this.instance;
            }
        }
        Builder["__class"] = "io.nem.xpx.facade.upload.UploadPathParameter.Builder";
        Builder["__interfaces"] = ["io.nem.xpx.builder.steps.KeywordsStep","io.nem.xpx.builder.steps.PrivacyStrategyUploadStep","io.nem.xpx.builder.steps.MosaicsStep","io.nem.xpx.builder.steps.ReceiverPublicKeyStep","io.nem.xpx.builder.steps.MetadataStep","io.nem.xpx.builder.steps.SenderPrivateKeyStep","io.nem.xpx.builder.steps.CommonUploadBuildSteps","io.nem.xpx.builder.steps.PathStep","io.nem.xpx.facade.upload.UploadPathParameter.FinalBuildSteps"];


    }

}

