/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.strategy.privacy {
    /**
     * Instantiates a new abstract secure message privacy strategy.
     * 
     * @param {string} privateKey the private key
     * @param {string} publicKey the public key
     * @class
     * @extends io.nem.xpx.strategy.privacy.PrivacyStrategy
     */
    export abstract class AbstractSecureMessagePrivacyStrategy extends io.nem.xpx.strategy.privacy.PrivacyStrategy {
        /**
         * The key pair of private key.
         */
        public keyPairOfPrivateKey : org.nem.core.crypto.KeyPair;

        /**
         * The key pair of public key.
         */
        public keyPairOfPublicKey : org.nem.core.crypto.KeyPair;

        /**
         * The account with private key.
         */
        public accountWithPrivateKey : org.nem.core.model.Account;

        /**
         * The account with public key.
         */
        public accountWithPublicKey : org.nem.core.model.Account;

        public constructor(privateKey : string, publicKey : string) {
            super();
            if(this.keyPairOfPrivateKey===undefined) this.keyPairOfPrivateKey = null;
            if(this.keyPairOfPublicKey===undefined) this.keyPairOfPublicKey = null;
            if(this.accountWithPrivateKey===undefined) this.accountWithPrivateKey = null;
            if(this.accountWithPublicKey===undefined) this.accountWithPublicKey = null;
            io.nem.xpx.utils.ParameterValidationUtils.checkParameter(privateKey != null, "private key is required");
            io.nem.xpx.utils.ParameterValidationUtils.checkParameter(publicKey != null, "public key is required");
            this.keyPairOfPrivateKey = new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PrivateKey.fromHexString(privateKey));
            this.keyPairOfPublicKey = new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PublicKey.fromHexString(publicKey));
            this.accountWithPrivateKey = new org.nem.core.model.Account(this.keyPairOfPrivateKey);
            this.accountWithPublicKey = new org.nem.core.model.Account(this.keyPairOfPublicKey);
        }

        /**
         * 
         * @return {io.nem.xpx.model.NemMessageType}
         */
        public getNemMessageType() : io.nem.xpx.model.NemMessageType {
            return io.nem.xpx.model.NemMessageType.SECURE;
        }

        /**
         * 
         * @param {Array} data
         * @return {org.nem.core.model.Message}
         */
        public encodeToMessage(data : number[]) : org.nem.core.model.Message {
            return org.nem.core.messages.SecureMessage.fromDecodedPayload(this.accountWithPrivateKey, this.accountWithPublicKey, data);
        }

        /**
         * 
         * @param {org.nem.core.model.TransferTransaction} transaction
         * @return {Array}
         */
        public decodeTransaction(transaction : org.nem.core.model.TransferTransaction) : number[] {
            if(transaction.getMessage().getType() === org.nem.core.model.MessageTypes.PLAIN) return transaction.getMessage().getDecodedPayload();
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(transaction.getSigner().getAddress().getEncoded(),this.accountWithPrivateKey.getAddress().getEncoded()))) {
                return org.nem.core.messages.SecureMessage.fromEncodedPayload(this.accountWithPrivateKey, this.accountWithPublicKey, transaction.getMessage().getEncodedPayload()).getDecodedPayload();
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(transaction.getRecipient().getAddress().getEncoded(),this.accountWithPrivateKey.getAddress().getEncoded()))) {
                return org.nem.core.messages.SecureMessage.fromEncodedPayload(this.accountWithPublicKey, this.accountWithPrivateKey, transaction.getMessage().getEncodedPayload()).getDecodedPayload();
            } else {
                throw new io.nem.xpx.exceptions.DecodeNemMessageFailureException("Private key cannot be used to decode the Nem secured message.");
            }
        }
    }
    AbstractSecureMessagePrivacyStrategy["__class"] = "io.nem.xpx.strategy.privacy.AbstractSecureMessagePrivacyStrategy";

}

