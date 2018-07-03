/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.strategy.privacy {
    /**
     * Instantiates a new secured with nem keys privacy strategy.
     * 
     * @param {string} privateKey the private key
     * @param {string} publicKey the public key
     * @class
     * @extends io.nem.xpx.strategy.privacy.AbstractSecureMessagePrivacyStrategy
     */
    export class SecuredWithNemKeysPrivacyStrategy extends io.nem.xpx.strategy.privacy.AbstractSecureMessagePrivacyStrategy {
        public constructor(privateKey : string, publicKey : string) {
            super(privateKey, publicKey);
        }

        /**
         * 
         * @param {Array} data
         * @return {Array}
         */
        public encrypt(data : number[]) : number[] {
            return org.nem.core.crypto.CryptoEngines.defaultEngine().createBlockCipher(this.keyPairOfPrivateKey, this.keyPairOfPublicKey).encrypt(data);
        }

        /**
         * 
         * @param {Array} data
         * @param {org.nem.core.model.TransferTransaction} transaction
         * @param {io.nem.xpx.service.model.buffers.ResourceHashMessage} hashMessage
         * @return {Array}
         */
        public decrypt(data : number[], transaction : org.nem.core.model.TransferTransaction, hashMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage) : number[] {
            if(transaction != null && !/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(transaction.getSigner().getAddress().getEncoded(),this.accountWithPrivateKey.getAddress().getEncoded())) && !/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(transaction.getRecipient().getAddress().getEncoded(),this.accountWithPrivateKey.getAddress().getEncoded()))) {
                throw new io.nem.xpx.exceptions.DecryptionFailureException("Decrypt of data is unsuccessful");
            }
            return org.nem.core.crypto.CryptoEngines.defaultEngine().createBlockCipher(this.keyPairOfPublicKey, this.keyPairOfPrivateKey).decrypt(data);
        }
    }
    SecuredWithNemKeysPrivacyStrategy["__class"] = "io.nem.xpx.strategy.privacy.SecuredWithNemKeysPrivacyStrategy";

}

