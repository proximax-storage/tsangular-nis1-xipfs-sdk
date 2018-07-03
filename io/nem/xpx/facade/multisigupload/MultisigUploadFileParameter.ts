/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.multisigupload {
    /**
     * The Class MultisigUploadFileParameter.
     * @class
     * @extends io.nem.xpx.facade.upload.UploadFileParameter
     */
    export class MultisigUploadFileParameter extends io.nem.xpx.facade.upload.UploadFileParameter {
        /**
         * The multisig public key.
         */
        /*private*/ multisigPublicKey : string;

        /**
         * Gets the multisig public key.
         * 
         * @return {string} the multisig public key
         */
        public getMultisigPublicKey() : string {
            return this.multisigPublicKey;
        }

        /**
         * Sets the multisig public key.
         * 
         * @param {string} multisigPublicKey the new multisig public key
         */
        public setMultisigPublicKey(multisigPublicKey : string) {
            this.multisigPublicKey = multisigPublicKey;
        }

        /**
         * Creates the multisig param.
         * 
         * @return {*} the multisig public key step
         */
        public static createMultisigParam() : io.nem.xpx.builder.steps.MultisigPublicKeyStep<io.nem.xpx.builder.steps.SenderPrivateKeyStep<io.nem.xpx.builder.steps.ReceiverPublicKeyStep<io.nem.xpx.builder.steps.FileStep<UploadFileParameter.FinalBuildSteps>>>> {
            return new MultisigUploadFileParameter.__io_nem_xpx_facade_multisigupload_MultisigUploadFileParameter_Builder();
        }

        constructor() {
            super();
            if(this.multisigPublicKey===undefined) this.multisigPublicKey = null;
        }
    }
    MultisigUploadFileParameter["__class"] = "io.nem.xpx.facade.multisigupload.MultisigUploadFileParameter";
    MultisigUploadFileParameter["__interfaces"] = ["java.io.Serializable"];



    export namespace MultisigUploadFileParameter {

        /**
         * The Class Builder.
         * @extends io.nem.xpx.facade.upload.UploadFileParameter.Builder
         * @class
         */
        export class __io_nem_xpx_facade_multisigupload_MultisigUploadFileParameter_Builder extends io.nem.xpx.facade.upload.UploadFileParameter.Builder implements io.nem.xpx.builder.steps.MultisigPublicKeyStep<any> {
            /**
             * The instance.
             */
            instance : io.nem.xpx.facade.multisigupload.MultisigUploadFileParameter;

            constructor() {
                super(new io.nem.xpx.facade.multisigupload.MultisigUploadFileParameter());
                if(this.instance===undefined) this.instance = null;
                this.instance = <io.nem.xpx.facade.multisigupload.MultisigUploadFileParameter>this.instance;
            }

            /**
             * 
             * @param {string} multisigPublicKeyStep
             * @return {*}
             */
            public multisigPublicKeyStep(multisigPublicKeyStep : string) : io.nem.xpx.builder.steps.SenderPrivateKeyStep<any> {
                this.instance.setMultisigPublicKey(multisigPublicKeyStep);
                return this;
            }

            /**
             * 
             * @return {io.nem.xpx.facade.multisigupload.MultisigUploadFileParameter}
             */
            public build() : io.nem.xpx.facade.multisigupload.MultisigUploadFileParameter {
                if(io.nem.xpx.utils.StringUtils.isEmpty(this.instance.getName())) this.instance.setName(this.instance.getFile().getName());
                if(io.nem.xpx.utils.StringUtils.isEmpty(this.instance.getContentType())) this.instance.setContentType(io.nem.xpx.utils.ContentTypeUtils.detectContentType$byte_A(org.apache.commons.io.FileUtils.readFileToByteArray(this.instance.getFile())));
                return this.instance;
            }
        }
        __io_nem_xpx_facade_multisigupload_MultisigUploadFileParameter_Builder["__class"] = "io.nem.xpx.facade.multisigupload.MultisigUploadFileParameter.Builder";
        __io_nem_xpx_facade_multisigupload_MultisigUploadFileParameter_Builder["__interfaces"] = ["io.nem.xpx.facade.upload.UploadFileParameter.FinalBuildSteps","io.nem.xpx.builder.steps.KeywordsStep","io.nem.xpx.builder.steps.ContentTypeStep","io.nem.xpx.builder.steps.PrivacyStrategyUploadStep","io.nem.xpx.builder.steps.MosaicsStep","io.nem.xpx.builder.steps.FileNameStep","io.nem.xpx.builder.steps.ReceiverPublicKeyStep","io.nem.xpx.builder.steps.FileStep","io.nem.xpx.builder.steps.MetadataStep","io.nem.xpx.builder.steps.SenderPrivateKeyStep","io.nem.xpx.builder.steps.CommonUploadBuildSteps","io.nem.xpx.builder.steps.MultisigPublicKeyStep"];


    }

}

