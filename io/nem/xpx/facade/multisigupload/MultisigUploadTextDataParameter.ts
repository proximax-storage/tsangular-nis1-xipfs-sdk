/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.multisigupload {
    /**
     * The Class MultisigUploadTextDataParameter.
     * @class
     * @extends io.nem.xpx.facade.upload.UploadTextDataParameter
     */
    export class MultisigUploadTextDataParameter extends io.nem.xpx.facade.upload.UploadTextDataParameter {
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
        public static createMultisigParam() : io.nem.xpx.builder.steps.MultisigPublicKeyStep<io.nem.xpx.builder.steps.SenderPrivateKeyStep<io.nem.xpx.builder.steps.ReceiverPublicKeyStep<io.nem.xpx.builder.steps.TextDataStep<UploadTextDataParameter.FinalBuildSteps>>>> {
            return new MultisigUploadTextDataParameter.__io_nem_xpx_facade_multisigupload_MultisigUploadTextDataParameter_Builder();
        }

        constructor() {
            super();
            if(this.multisigPublicKey===undefined) this.multisigPublicKey = null;
        }
    }
    MultisigUploadTextDataParameter["__class"] = "io.nem.xpx.facade.multisigupload.MultisigUploadTextDataParameter";
    MultisigUploadTextDataParameter["__interfaces"] = ["java.io.Serializable"];



    export namespace MultisigUploadTextDataParameter {

        /**
         * The Class Builder.
         * @extends io.nem.xpx.facade.upload.UploadTextDataParameter.Builder
         * @class
         */
        export class __io_nem_xpx_facade_multisigupload_MultisigUploadTextDataParameter_Builder extends io.nem.xpx.facade.upload.UploadTextDataParameter.Builder implements io.nem.xpx.builder.steps.MultisigPublicKeyStep<any> {
            /**
             * The instance.
             */
            instance : io.nem.xpx.facade.multisigupload.MultisigUploadTextDataParameter;

            constructor() {
                super(new io.nem.xpx.facade.multisigupload.MultisigUploadTextDataParameter());
                if(this.instance===undefined) this.instance = null;
                this.instance = <io.nem.xpx.facade.multisigupload.MultisigUploadTextDataParameter>this.instance;
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
             * @return {io.nem.xpx.facade.multisigupload.MultisigUploadTextDataParameter}
             */
            public build() : io.nem.xpx.facade.multisigupload.MultisigUploadTextDataParameter {
                if(io.nem.xpx.utils.StringUtils.isEmpty(this.instance.getContentType())) this.instance.setContentType(io.nem.xpx.utils.ContentTypeUtils.detectContentType$java_lang_String(this.instance.getData()));
                return this.instance;
            }
        }
        __io_nem_xpx_facade_multisigupload_MultisigUploadTextDataParameter_Builder["__class"] = "io.nem.xpx.facade.multisigupload.MultisigUploadTextDataParameter.Builder";
        __io_nem_xpx_facade_multisigupload_MultisigUploadTextDataParameter_Builder["__interfaces"] = ["io.nem.xpx.builder.steps.TextDataStep","io.nem.xpx.builder.steps.ContentTypeStep","io.nem.xpx.builder.steps.PrivacyStrategyUploadStep","io.nem.xpx.builder.steps.MosaicsStep","io.nem.xpx.builder.steps.ReceiverPublicKeyStep","io.nem.xpx.builder.steps.CommonUploadBuildSteps","io.nem.xpx.builder.steps.KeywordsStep","io.nem.xpx.builder.steps.NameStep","io.nem.xpx.builder.steps.EncodingStep","io.nem.xpx.builder.steps.MetadataStep","io.nem.xpx.builder.steps.SenderPrivateKeyStep","io.nem.xpx.builder.steps.MultisigPublicKeyStep","io.nem.xpx.facade.upload.UploadTextDataParameter.FinalBuildSteps"];


    }

}

