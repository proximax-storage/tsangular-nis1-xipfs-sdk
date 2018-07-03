/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.builder {
    /**
     * Instantiates a new transfer transaction builder.
     * 
     * @param {io.nem.xpx.service.TransactionFeeCalculators} transactionFeeCalculators the transaction fee calculators
     * @class
     */
    export class TransferTransactionBuilder {
        /**
         * The transaction fee calculators.
         */
        /*private*/ transactionFeeCalculators : io.nem.xpx.service.TransactionFeeCalculators;

        /**
         * The version.
         */
        /*private*/ __version : number;

        /**
         * The time stamp.
         */
        /*private*/ __timeStamp : org.nem.core.time.TimeInstant;

        /**
         * The sender.
         */
        /*private*/ __sender : org.nem.core.model.Account;

        /**
         * The recipient.
         */
        /*private*/ __recipient : org.nem.core.model.Account;

        /**
         * The amount.
         */
        /*private*/ __amount : org.nem.core.model.primitive.Amount;

        /**
         * The attachment.
         */
        /*private*/ __attachment : org.nem.core.model.TransferTransactionAttachment;

        /**
         * The signature.
         */
        /*private*/ __signature : org.nem.core.crypto.Signature;

        /**
         * The deadline.
         */
        /*private*/ __deadline : org.nem.core.time.TimeInstant;

        /**
         * The fee.
         */
        /*private*/ __fee : org.nem.core.model.primitive.Amount;

        /**
         * The fee calculator.
         */
        /*private*/ __feeCalculator : org.nem.core.model.TransactionFeeCalculator;

        /**
         * The sign by.
         */
        /*private*/ __signBy : org.nem.core.model.Account;

        public constructor(transactionFeeCalculators : io.nem.xpx.service.TransactionFeeCalculators) {
            if(this.transactionFeeCalculators===undefined) this.transactionFeeCalculators = null;
            if(this.__version===undefined) this.__version = 0;
            if(this.__timeStamp===undefined) this.__timeStamp = null;
            if(this.__sender===undefined) this.__sender = null;
            if(this.__recipient===undefined) this.__recipient = null;
            if(this.__amount===undefined) this.__amount = null;
            if(this.__attachment===undefined) this.__attachment = null;
            if(this.__signature===undefined) this.__signature = null;
            if(this.__deadline===undefined) this.__deadline = null;
            if(this.__fee===undefined) this.__fee = null;
            if(this.__feeCalculator===undefined) this.__feeCalculator = null;
            if(this.__signBy===undefined) this.__signBy = null;
            this.transactionFeeCalculators = transactionFeeCalculators;
        }

        /**
         * Sender.
         * 
         * @param {org.nem.core.model.Account} sender the sender
         * @return {io.nem.xpx.builder.TransferTransactionBuilder} the transfer transaction builder
         */
        public sender(sender : org.nem.core.model.Account) : TransferTransactionBuilder {
            this.__sender = sender;
            return this;
        }

        /**
         * Recipient.
         * 
         * @param {org.nem.core.model.Account} recipient the recipient
         * @return {io.nem.xpx.builder.TransferTransactionBuilder} the transfer transaction builder
         */
        public recipient(recipient : org.nem.core.model.Account) : TransferTransactionBuilder {
            this.__recipient = recipient;
            return this;
        }

        /**
         * Amount.
         * 
         * @param {org.nem.core.model.primitive.Amount} amount the amount
         * @return {io.nem.xpx.builder.TransferTransactionBuilder} the transfer transaction builder
         */
        public amount(amount : org.nem.core.model.primitive.Amount) : TransferTransactionBuilder {
            this.__amount = amount;
            return this;
        }

        /**
         * Attachment.
         * 
         * @param {org.nem.core.model.TransferTransactionAttachment} attachment the attachment
         * @return {io.nem.xpx.builder.TransferTransactionBuilder} the transfer transaction builder
         */
        public attachment(attachment : org.nem.core.model.TransferTransactionAttachment) : TransferTransactionBuilder {
            this.__attachment = attachment;
            return this;
        }

        public buildTransaction$() : org.nem.core.model.TransferTransaction {
            return this.buildTransaction$boolean(false);
        }

        /**
         * Fee.
         * 
         * @param {org.nem.core.model.primitive.Amount} amount the amount
         * @return {io.nem.xpx.builder.TransferTransactionBuilder} the transfer transaction builder
         */
        public fee(amount : org.nem.core.model.primitive.Amount) : TransferTransactionBuilder {
            this.__fee = amount;
            return this;
        }

        /**
         * Deadline.
         * 
         * @param {org.nem.core.time.TimeInstant} deadline the deadline
         * @return {io.nem.xpx.builder.TransferTransactionBuilder} the transfer transaction builder
         */
        public deadline(deadline : org.nem.core.time.TimeInstant) : TransferTransactionBuilder {
            this.__deadline = deadline;
            return this;
        }

        /**
         * Signature.
         * 
         * @param {org.nem.core.crypto.Signature} signature the signature
         * @return {io.nem.xpx.builder.TransferTransactionBuilder} the transfer transaction builder
         */
        public signature(signature : org.nem.core.crypto.Signature) : TransferTransactionBuilder {
            this.__signature = signature;
            return this;
        }

        /**
         * Message.
         * 
         * @param {org.nem.core.model.Message} message the message
         * @return {io.nem.xpx.builder.TransferTransactionBuilder} the transfer transaction builder
         */
        public message(message : org.nem.core.model.Message) : TransferTransactionBuilder {
            if(this.__attachment == null) {
                this.__attachment = (io.nem.xpx.factory.AttachmentFactory.createTransferTransactionAttachmentMessage(message));
            } else {
                this.__attachment.setMessage(message);
            }
            return this;
        }

        /**
         * Fee calculator.
         * 
         * @param {*} feeCalculator the fee calculator
         * @return {io.nem.xpx.builder.TransferTransactionBuilder} the transfer transaction builder
         */
        public feeCalculator(feeCalculator : org.nem.core.model.TransactionFeeCalculator) : TransferTransactionBuilder {
            this.__feeCalculator = feeCalculator;
            return this;
        }

        /**
         * Version.
         * 
         * @param {number} version the version
         * @return {io.nem.xpx.builder.TransferTransactionBuilder} the transfer transaction builder
         */
        public version(version : number) : TransferTransactionBuilder {
            this.__version = version;
            return this;
        }

        /**
         * Time stamp.
         * 
         * @param {org.nem.core.time.TimeInstant} timeInstance the time instance
         * @return {io.nem.xpx.builder.TransferTransactionBuilder} the transfer transaction builder
         */
        public timeStamp(timeInstance : org.nem.core.time.TimeInstant) : TransferTransactionBuilder {
            this.__timeStamp = timeInstance;
            return this;
        }

        /**
         * Sign by.
         * 
         * @param {org.nem.core.model.Account} account the account
         * @return {io.nem.xpx.builder.TransferTransactionBuilder} the transfer transaction builder
         */
        public signBy(account : org.nem.core.model.Account) : TransferTransactionBuilder {
            this.__signBy = account;
            return this;
        }

        public addMosaic$org_nem_core_model_mosaic_Mosaic(mosaic : org.nem.core.model.mosaic.Mosaic) : TransferTransactionBuilder {
            if(this.__attachment == null) {
                this.__attachment = io.nem.xpx.factory.AttachmentFactory.createTransferTransactionAttachmentMosaic(mosaic);
            } else {
                this.__attachment.addMosaic(mosaic);
            }
            return this;
        }

        public addMosaic$org_nem_core_model_mosaic_MosaicId$org_nem_core_model_primitive_Quantity(mosaic : org.nem.core.model.mosaic.MosaicId, quantity : org.nem.core.model.primitive.Quantity) : TransferTransactionBuilder {
            this.__attachment.addMosaic(mosaic, quantity);
            return this;
        }

        /**
         * Adds the mosaic.
         * 
         * @param {org.nem.core.model.mosaic.MosaicId} mosaic the mosaic
         * @param {org.nem.core.model.primitive.Quantity} quantity the quantity
         * @return {io.nem.xpx.builder.TransferTransactionBuilder} the transfer transaction builder
         */
        public addMosaic(mosaic? : any, quantity? : any) : any {
            if(((mosaic != null && mosaic instanceof <any>org.nem.core.model.mosaic.MosaicId) || mosaic === null) && ((quantity != null && quantity instanceof <any>org.nem.core.model.primitive.Quantity) || quantity === null)) {
                return <any>this.addMosaic$org_nem_core_model_mosaic_MosaicId$org_nem_core_model_primitive_Quantity(mosaic, quantity);
            } else if(((mosaic != null && mosaic instanceof <any>org.nem.core.model.mosaic.Mosaic) || mosaic === null) && quantity === undefined) {
                return <any>this.addMosaic$org_nem_core_model_mosaic_Mosaic(mosaic);
            } else throw new Error('invalid overload');
        }

        /**
         * Adds the mosaics.
         * 
         * @param {Array} mosaics the mosaics
         * @return {io.nem.xpx.builder.TransferTransactionBuilder} the transfer transaction builder
         */
        public addMosaics(...mosaics : org.nem.core.model.mosaic.Mosaic[]) : TransferTransactionBuilder {
            for(let index151=0; index151 < mosaics.length; index151++) {
                let mosaic = mosaics[index151];
                {
                    this.__attachment.addMosaic(mosaic);
                }
            }
            return this;
        }

        public buildTransaction$boolean(isForMultisig : boolean) : org.nem.core.model.TransferTransaction {
            let instance : org.nem.core.model.TransferTransaction;
            let xpxMosaic : org.nem.core.model.mosaic.Mosaic = new org.nem.core.model.mosaic.Mosaic(new org.nem.core.model.mosaic.MosaicId(new org.nem.core.model.namespace.NamespaceId("prx"), "xpx"), org.nem.core.model.primitive.Quantity.fromValue(1));
            this.__attachment.addMosaic(xpxMosaic);
            if(this.__timeStamp == null) {
                this.__timeStamp = io.nem.xpx.model.XpxSdkGlobalConstants.TIME_PROVIDER_$LI$().getCurrentTime();
            }
            if(this.__amount == null) {
                this.amount(org.nem.core.model.primitive.Amount.fromNem(0));
            }
            if(this.__version === 0) {
                instance = new org.nem.core.model.TransferTransaction(this.__timeStamp, this.__sender, this.__recipient, this.__amount, this.__attachment);
            } else {
                instance = new org.nem.core.model.TransferTransaction(this.__version, this.__timeStamp, this.__sender, this.__recipient, this.__amount, this.__attachment);
            }
            let amountFee : org.nem.core.model.primitive.Amount;
            if(this.__fee != null) {
                amountFee = this.__fee;
            } else if(this.__feeCalculator != null) {
                amountFee = this.__feeCalculator.calculateMinimumFee(instance);
            } else {
                let globalFeeCalculator : org.nem.core.model.TransactionFeeCalculator = isForMultisig?this.transactionFeeCalculators.getFeeCalculatorMultiSig$java_lang_String(this.__sender.getAddress().getEncoded()):this.transactionFeeCalculators.getFeeCalculator$java_lang_String(this.__sender.getAddress().getEncoded());
                amountFee = globalFeeCalculator.calculateMinimumFee(instance);
            }
            instance.setFee(amountFee);
            if(this.__deadline != null) {
                instance.setDeadline(this.__deadline);
            } else {
                instance.setDeadline(this.__timeStamp.addHours(23));
            }
            if(this.__signature != null) {
                instance.setSignature(this.__signature);
            }
            if(this.__signBy != null) {
                instance.signBy(this.__signBy);
            }
            return instance;
        }

        /**
         * Builds the transaction.
         * 
         * @param {boolean} isForMultisig the is for multisig
         * @return {org.nem.core.model.TransferTransaction} the transfer transaction
         */
        public buildTransaction(isForMultisig? : any) : any {
            if(((typeof isForMultisig === 'boolean') || isForMultisig === null)) {
                return <any>this.buildTransaction$boolean(isForMultisig);
            } else if(isForMultisig === undefined) {
                return <any>this.buildTransaction$();
            } else throw new Error('invalid overload');
        }

        /**
         * Builds the and sign transaction.
         * 
         * @return {org.nem.core.model.TransferTransaction} the transfer transaction
         */
        public buildAndSignTransaction() : org.nem.core.model.TransferTransaction {
            let transferTransaction : org.nem.core.model.TransferTransaction = this.buildTransaction();
            transferTransaction.sign();
            return transferTransaction;
        }
    }
    TransferTransactionBuilder["__class"] = "io.nem.xpx.builder.TransferTransactionBuilder";

}

