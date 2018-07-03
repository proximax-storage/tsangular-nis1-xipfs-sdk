/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.factory {
    /**
     * A factory for creating Attachment objects.
     * @class
     */
    export class AttachmentFactory {
        /**
         * Creates a new Attachment object.
         * 
         * @return {org.nem.core.model.TransferTransactionAttachment} the transfer transaction attachment
         */
        public static createTransferTransactionAttachment() : org.nem.core.model.TransferTransactionAttachment {
            return new org.nem.core.model.TransferTransactionAttachment();
        }

        /**
         * Creates a new Attachment object.
         * 
         * @param {org.nem.core.model.Message} message
         * the message
         * @return {org.nem.core.model.TransferTransactionAttachment} the transfer transaction attachment
         */
        public static createTransferTransactionAttachmentMessage(message : org.nem.core.model.Message) : org.nem.core.model.TransferTransactionAttachment {
            return new org.nem.core.model.TransferTransactionAttachment(message);
        }

        /**
         * Creates a new Attachment object.
         * 
         * @param {org.nem.core.model.mosaic.Mosaic} mosaic the mosaic
         * @return {org.nem.core.model.TransferTransactionAttachment} the transfer transaction attachment
         */
        public static createTransferTransactionAttachmentMosaic(mosaic : org.nem.core.model.mosaic.Mosaic) : org.nem.core.model.TransferTransactionAttachment {
            let attachment : org.nem.core.model.TransferTransactionAttachment = new org.nem.core.model.TransferTransactionAttachment();
            attachment.addMosaic(mosaic);
            return attachment;
        }
    }
    AttachmentFactory["__class"] = "io.nem.xpx.factory.AttachmentFactory";

}

