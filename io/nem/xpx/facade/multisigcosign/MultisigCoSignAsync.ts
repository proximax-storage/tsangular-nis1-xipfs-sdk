/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.multisigcosign {
    /**
     * Instantiates a new multisig co sign.
     * 
     * @param {io.nem.xpx.facade.connection.PeerConnection} peerConnection
     * the peer connection
     * @class
     * @extends io.nem.xpx.facade.AbstractAsyncFacadeService
     */
    export class MultisigCoSignAsync extends io.nem.xpx.facade.AbstractAsyncFacadeService {
        /**
         * The multisig co sign.
         */
        /*private*/ multisigCoSign : io.nem.xpx.facade.multisigcosign.MultisigCoSign;

        public constructor(peerConnection : io.nem.xpx.facade.connection.PeerConnection) {
            super();
            if(this.multisigCoSign===undefined) this.multisigCoSign = null;
            this.multisigCoSign = new io.nem.xpx.facade.multisigcosign.MultisigCoSign(peerConnection);
        }

        /**
         * Co sign.
         * 
         * @param {string} nemHash            the nem hash
         * @param {string} multisigAccount            the multisig account
         * @param {org.nem.core.model.Account[]} signers            the signers
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the multisig signature transaction
         */
        public coSign(nemHash : string, multisigAccount : string, signers : Array<org.nem.core.model.Account>, callback : io.nem.xpx.callback.ServiceAsyncCallback<org.nem.core.model.MultisigSignatureTransaction>) : java.util.concurrent.CompletableFuture<org.nem.core.model.MultisigSignatureTransaction> {
            return this.runAsync<any>(() => {
                try {
                    return this.multisigCoSign.coSign(nemHash, multisigAccount, signers);
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.util.concurrent.CompletionException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            }, <any>(callback));
        }
    }
    MultisigCoSignAsync["__class"] = "io.nem.xpx.facade.multisigcosign.MultisigCoSignAsync";

}

