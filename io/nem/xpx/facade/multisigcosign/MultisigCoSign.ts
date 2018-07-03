/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.multisigcosign {
    /**
     * Instantiates a new multisig co sign.
     * 
     * @param {io.nem.xpx.facade.connection.PeerConnection} peerConnection the peer connection
     * @class
     * @extends io.nem.xpx.facade.AbstractFacadeService
     */
    export class MultisigCoSign extends io.nem.xpx.facade.AbstractFacadeService {
        /**
         * The peer connection.
         */
        peerConnection : io.nem.xpx.facade.connection.PeerConnection;

        public constructor(peerConnection : io.nem.xpx.facade.connection.PeerConnection) {
            super();
            if(this.peerConnection===undefined) this.peerConnection = null;
            this.peerConnection = peerConnection;
        }

        /**
         * Co sign.
         * 
         * @param {string} nemHash the nem hash
         * @param {string} multisigAccount the multisig account
         * @param {org.nem.core.model.Account[]} signers the signers
         * @return {org.nem.core.model.MultisigSignatureTransaction} the multisig signature transaction
         * @throws ApiException the api exception
         */
        public coSign(nemHash : string, multisigAccount : string, signers : Array<org.nem.core.model.Account>) : org.nem.core.model.MultisigSignatureTransaction {
            let multisigSignatureTransaction : org.nem.core.model.MultisigSignatureTransaction = io.nem.xpx.builder.MultisigSignatureTransactionBuilder.peerConnection(this.peerConnection).multisig(new org.nem.core.model.Account(new org.nem.core.crypto.KeyPair(org.nem.core.crypto.PublicKey.fromHexString(multisigAccount)))).addSigners(signers)['otherTransaction$org_nem_core_crypto_Hash'](org.nem.core.crypto.Hash.fromHexString(nemHash)).coSign();
            return multisigSignatureTransaction;
        }
    }
    MultisigCoSign["__class"] = "io.nem.xpx.facade.multisigcosign.MultisigCoSign";

}

