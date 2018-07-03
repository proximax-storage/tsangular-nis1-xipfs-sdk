/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service {
    /**
     * Instantiates a new transaction announcer.
     * 
     * @param {io.nem.xpx.service.TransactionFeeCalculators} transactionFeeCalculators the transaction fee calculators
     * @param {io.nem.xpx.service.TransactionSender} transactionSender the transaction sender
     * @class
     */
    export class TransactionAnnouncer {
        /**
         * The transaction fee calculators.
         */
        /*private*/ transactionFeeCalculators : io.nem.xpx.service.TransactionFeeCalculators;

        /**
         * The transaction sender.
         */
        /*private*/ transactionSender : io.nem.xpx.service.TransactionSender;

        public constructor(transactionFeeCalculators : io.nem.xpx.service.TransactionFeeCalculators, transactionSender : io.nem.xpx.service.TransactionSender) {
            if(this.transactionFeeCalculators===undefined) this.transactionFeeCalculators = null;
            if(this.transactionSender===undefined) this.transactionSender = null;
            this.transactionFeeCalculators = transactionFeeCalculators;
            this.transactionSender = transactionSender;
        }

        /**
         * Announce transaction for uploaded content.
         * 
         * @param {org.nem.core.model.Message} nemMessage the nem message
         * @param {string} senderPrivateKey the sender private key
         * @param {string} receiverPublicKey the receiver public key
         * @param {Array} mosaics the mosaics
         * @return {string} the string
         * @throws Exception the exception
         */
        public announceTransactionForUploadedContent(nemMessage : org.nem.core.model.Message, senderPrivateKey : string, receiverPublicKey : string, mosaics : org.nem.core.model.mosaic.Mosaic[]) : string {
            let transferTransaction : org.nem.core.model.TransferTransaction = (o => o.addMosaics.apply(o, mosaics))(new io.nem.xpx.builder.TransferTransactionBuilder(this.transactionFeeCalculators).sender(new org.nem.core.model.Account(new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PrivateKey.fromHexString(senderPrivateKey)))).recipient(new org.nem.core.model.Account(org.nem.core.model.Address.fromPublicKey(org.nem.core.crypto.PublicKey.fromHexString(receiverPublicKey)))).version(2).amount(org.nem.core.model.primitive.Amount.fromNem(1)).message(nemMessage)).buildAndSignTransaction();
            let announceResult : org.nem.core.model.ncc.NemAnnounceResult = this.transactionSender.sendTransferTransaction$org_nem_core_model_TransferTransaction(transferTransaction);
            if(announceResult.getCode() === org.nem.core.model.ncc.NemAnnounceResult.CODE_SUCCESS) return announceResult.getTransactionHash().toString(); else throw new io.nem.xpx.exceptions.AnnounceTransactionFailureException(java.lang.String.format("Announcement of Nem transaction failed: %s", announceResult.getMessage()));
        }
    }
    TransactionAnnouncer["__class"] = "io.nem.xpx.service.TransactionAnnouncer";

}

