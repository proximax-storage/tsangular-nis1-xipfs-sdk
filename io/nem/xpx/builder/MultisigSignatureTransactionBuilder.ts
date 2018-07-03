/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.builder {
    /**
     * The Class MultisigTransactionBuilder.
     * @class
     */
    export class MultisigSignatureTransactionBuilder {
        constructor() {
        }

        /**
         * PeerConnection.
         * 
         * @param {io.nem.xpx.facade.connection.PeerConnection} peerConnection
         * the peer connection
         * @return {*} the i peer connection
         */
        public static peerConnection(peerConnection : io.nem.xpx.facade.connection.PeerConnection) : MultisigSignatureTransactionBuilder.IPeerConnection {
            return new MultisigSignatureTransactionBuilder.Builder(peerConnection);
        }
    }
    MultisigSignatureTransactionBuilder["__class"] = "io.nem.xpx.builder.MultisigSignatureTransactionBuilder";


    export namespace MultisigSignatureTransactionBuilder {

        /**
         * The Interface ISender.
         * @class
         */
        export interface IPeerConnection {
            /**
             * Sender.
             * 
             * @param {org.nem.core.model.Account} multisig
             * the sender
             * @return {*} the i sender
             */
            multisig(multisig : org.nem.core.model.Account) : MultisigSignatureTransactionBuilder.ISigner;
        }

        /**
         * The Interface ISigner.
         * @class
         */
        export interface ISigner {
            /**
             * Signer.
             * 
             * @param {org.nem.core.model.Account} signer
             * the signer
             * @return {*} the i transaction
             */
            signer(signer : org.nem.core.model.Account) : MultisigSignatureTransactionBuilder.ITransaction;

            /**
             * Start assign signers.
             * 
             * @return {*} the i signer
             */
            startAssignSigners() : MultisigSignatureTransactionBuilder.ISigner;

            /**
             * Adds the signer.
             * 
             * @param {org.nem.core.model.Account} signer
             * the signer
             * @return {*} the i signer
             */
            addSigner(signer : org.nem.core.model.Account) : MultisigSignatureTransactionBuilder.ISigner;

            /**
             * Adds the signers.
             * 
             * @param {org.nem.core.model.Account[]} signers
             * the signers
             * @return {*} the i signer
             */
            addSigners(signers : Array<org.nem.core.model.Account>) : MultisigSignatureTransactionBuilder.ITransaction;

            /**
             * End assign signers.
             * 
             * @return {*} the i transaction
             */
            endAssignSigners() : MultisigSignatureTransactionBuilder.ITransaction;
        }

        /**
         * The Interface ITransaction.
         * @class
         */
        export interface ITransaction {
            /**
             * Other transaction.
             * 
             * @param {org.nem.core.model.Transaction} transaction
             * the transaction
             * @return {*} the i build
             */
            otherTransaction(transaction? : any) : any;
        }

        /**
         * The Interface IBuild.
         * @class
         */
        export interface IBuild {
            /**
             * Time stamp.
             * 
             * @param {org.nem.core.time.TimeInstant} timeInstance
             * the time instance
             * @return {*} the i build
             */
            timeStamp(timeInstance : org.nem.core.time.TimeInstant) : MultisigSignatureTransactionBuilder.IBuild;

            /**
             * Sign by.
             * 
             * @param {org.nem.core.model.Account} account
             * the account
             * @return {*} the i build
             */
            signBy(account : org.nem.core.model.Account) : MultisigSignatureTransactionBuilder.IBuild;

            /**
             * Fee.
             * 
             * @param {org.nem.core.model.primitive.Amount} amount
             * the amount
             * @return {*} the i build
             */
            fee(amount : org.nem.core.model.primitive.Amount) : MultisigSignatureTransactionBuilder.IBuild;

            /**
             * Fee calculator.
             * 
             * @param {*} feeCalculator
             * the fee calculator
             * @return {*} the i build
             */
            feeCalculator(feeCalculator : org.nem.core.model.TransactionFeeCalculator) : MultisigSignatureTransactionBuilder.IBuild;

            /**
             * Deadline.
             * 
             * @param {org.nem.core.time.TimeInstant} timeInstant
             * the time instant
             * @return {*} the i build
             */
            deadline(timeInstant : org.nem.core.time.TimeInstant) : MultisigSignatureTransactionBuilder.IBuild;

            /**
             * Signature.
             * 
             * @param {org.nem.core.crypto.Signature} signature
             * the signature
             * @return {*} the i build
             */
            signature(signature : org.nem.core.crypto.Signature) : MultisigSignatureTransactionBuilder.IBuild;

            /**
             * Co sign.
             * 
             * @return {org.nem.core.model.MultisigSignatureTransaction} the multisig signature transaction
             * @throws ApiException the api exception
             */
            coSign() : org.nem.core.model.MultisigSignatureTransaction;

            /**
             * Co sign future.
             * 
             * @return {java.util.concurrent.CompletableFuture} the completable future
             * @throws ApiException the api exception
             */
            coSignFuture() : java.util.concurrent.CompletableFuture<org.nem.core.serialization.Deserializer>;
        }

        /**
         * Instantiates a new builder.
         * 
         * @param {io.nem.xpx.facade.connection.PeerConnection} peerConnection
         * the peerConnection
         * @class
         */
        export class Builder implements MultisigSignatureTransactionBuilder.IPeerConnection, MultisigSignatureTransactionBuilder.ISigner, MultisigSignatureTransactionBuilder.ITransaction, MultisigSignatureTransactionBuilder.IBuild {
            /**
             * 
             * @return {*}
             */
            public startAssignSigners() : MultisigSignatureTransactionBuilder.ISigner {
                return this;
            }

            /**
             * 
             * @return {*}
             */
            public endAssignSigners() : MultisigSignatureTransactionBuilder.ITransaction {
                return this;
            }

            /**
             * The instance.
             */
            instance : org.nem.core.model.MultisigSignatureTransaction;

            /**
             * The peer connection.
             */
            peerConnection : io.nem.xpx.facade.connection.PeerConnection;

            /**
             * The time stamp.
             */
            __timeStamp : org.nem.core.time.TimeInstant;

            /**
             * The multisig.
             */
            __multisig : org.nem.core.model.Account;

            /**
             * The other transaction.
             */
            __otherTransaction : org.nem.core.model.Transaction;

            /**
             * The hash transaction.
             */
            hashTransaction : org.nem.core.crypto.Hash;

            /**
             * The signature.
             */
            __signature : org.nem.core.crypto.Signature;

            /**
             * The fee.
             */
            __fee : org.nem.core.model.primitive.Amount;

            /**
             * The fee calculator.
             */
            __feeCalculator : org.nem.core.model.TransactionFeeCalculator;

            /**
             * The sign by.
             */
            __signBy : org.nem.core.model.Account;

            /**
             * The deadline.
             */
            __deadline : org.nem.core.time.TimeInstant;

            /**
             * The signers.
             */
            signers : Array<org.nem.core.model.Account> = <any>([]);

            public constructor(peerConnection : io.nem.xpx.facade.connection.PeerConnection) {
                if(this.instance===undefined) this.instance = null;
                if(this.peerConnection===undefined) this.peerConnection = null;
                if(this.__timeStamp===undefined) this.__timeStamp = null;
                if(this.__multisig===undefined) this.__multisig = null;
                if(this.__otherTransaction===undefined) this.__otherTransaction = null;
                if(this.hashTransaction===undefined) this.hashTransaction = null;
                if(this.__signature===undefined) this.__signature = null;
                if(this.__fee===undefined) this.__fee = null;
                if(this.__feeCalculator===undefined) this.__feeCalculator = null;
                if(this.__signBy===undefined) this.__signBy = null;
                if(this.__deadline===undefined) this.__deadline = null;
                this.peerConnection = peerConnection;
            }

            public multisig(multisig : org.nem.core.model.Account) : MultisigSignatureTransactionBuilder.ISigner {
                this.__multisig = multisig;
                return this;
            }

            /**
             * Builds the multisig signature transaction.
             * 
             * @return {org.nem.core.model.MultisigSignatureTransaction} the multisig signature transaction
             * @private
             */
            buildMultisigSignatureTransaction() : org.nem.core.model.MultisigSignatureTransaction {
                if(this.__timeStamp == null) {
                    this.__timeStamp = io.nem.xpx.model.XpxSdkGlobalConstants.TIME_PROVIDER_$LI$().getCurrentTime();
                }
                for(let index149=0; index149 < this.signers.length; index149++) {
                    let signer = this.signers[index149];
                    {
                        if(this.__otherTransaction != null) {
                            this.instance = new org.nem.core.model.MultisigSignatureTransaction(this.__timeStamp, signer, this.__multisig, this.__otherTransaction);
                        }
                        if(this.hashTransaction != null) {
                            this.instance = new org.nem.core.model.MultisigSignatureTransaction(this.__timeStamp, signer, this.__multisig, this.hashTransaction);
                        }
                        if(this.__fee == null && this.__feeCalculator == null) {
                            this.instance.setFee(this.peerConnection.getTransactionFeeCalculators().getFeeCalculator().calculateMinimumFee(this.instance));
                        } else {
                            if(this.__fee != null) {
                                this.instance.setFee(this.__fee);
                            } else if(this.__feeCalculator != null) {
                                let feeCalculator : org.nem.core.model.TransactionFeeCalculator;
                                if(this.__feeCalculator != null) {
                                    feeCalculator = this.__feeCalculator;
                                } else {
                                    feeCalculator = this.peerConnection.getTransactionFeeCalculators().getFeeCalculator();
                                }
                                this.instance.setFee(feeCalculator.calculateMinimumFee(this.instance));
                            }
                        }
                        if(this.__deadline != null) {
                            this.instance.setDeadline(this.__deadline);
                        } else {
                            this.instance.setDeadline(this.__timeStamp.addHours(23));
                        }
                        if(this.__signature != null) {
                            this.instance.setSignature(this.__signature);
                        }
                        if(this.__signBy != null) {
                            this.instance.signBy(this.__signBy);
                        }
                        this.instance.sign();
                    }
                }
                return this.instance;
            }

            /**
             * 
             * @return {org.nem.core.model.MultisigSignatureTransaction}
             */
            public coSign() : org.nem.core.model.MultisigSignatureTransaction {
                this.peerConnection.getTransactionSender().sendMultisigSignatureTransaction(this.buildMultisigSignatureTransaction());
                return this.instance;
            }

            /**
             * 
             * @param {org.nem.core.model.primitive.Amount} amount
             * @return {*}
             */
            public fee(amount : org.nem.core.model.primitive.Amount) : MultisigSignatureTransactionBuilder.IBuild {
                this.__fee = amount;
                return this;
            }

            /**
             * 
             * @param {org.nem.core.time.TimeInstant} deadline
             * @return {*}
             */
            public deadline(deadline : org.nem.core.time.TimeInstant) : MultisigSignatureTransactionBuilder.IBuild {
                this.__deadline = deadline;
                return this;
            }

            /**
             * 
             * @param {org.nem.core.crypto.Signature} signature
             * @return {*}
             */
            public signature(signature : org.nem.core.crypto.Signature) : MultisigSignatureTransactionBuilder.IBuild {
                this.__signature = signature;
                return this;
            }

            /**
             * 
             * @param {org.nem.core.time.TimeInstant} timeInstance
             * @return {*}
             */
            public timeStamp(timeInstance : org.nem.core.time.TimeInstant) : MultisigSignatureTransactionBuilder.IBuild {
                this.__timeStamp = timeInstance;
                return this;
            }

            /**
             * 
             * @param {org.nem.core.model.Account} account
             * @return {*}
             */
            public signBy(account : org.nem.core.model.Account) : MultisigSignatureTransactionBuilder.IBuild {
                this.__signBy = account;
                return this;
            }

            /**
             * 
             * @param {*} feeCalculator
             * @return {*}
             */
            public feeCalculator(feeCalculator : org.nem.core.model.TransactionFeeCalculator) : MultisigSignatureTransactionBuilder.IBuild {
                this.__feeCalculator = feeCalculator;
                return this;
            }

            public otherTransaction$org_nem_core_model_Transaction(transaction : org.nem.core.model.Transaction) : MultisigSignatureTransactionBuilder.IBuild {
                this.__otherTransaction = transaction;
                return this;
            }

            /**
             * 
             * @param {org.nem.core.model.Transaction} transaction
             * @return {*}
             */
            public otherTransaction(transaction? : any) : any {
                if(((transaction != null && transaction instanceof <any>org.nem.core.model.Transaction) || transaction === null)) {
                    return <any>this.otherTransaction$org_nem_core_model_Transaction(transaction);
                } else if(((transaction != null && transaction instanceof <any>org.nem.core.crypto.Hash) || transaction === null)) {
                    return <any>this.otherTransaction$org_nem_core_crypto_Hash(transaction);
                } else throw new Error('invalid overload');
            }

            public otherTransaction$org_nem_core_crypto_Hash(hashTransaction : org.nem.core.crypto.Hash) : MultisigSignatureTransactionBuilder.IBuild {
                this.hashTransaction = hashTransaction;
                return this;
            }

            /**
             * 
             * @param {org.nem.core.model.Account} signer
             * @return {*}
             */
            public addSigner(signer : org.nem.core.model.Account) : MultisigSignatureTransactionBuilder.ISigner {
                /* add */(this.signers.push(signer)>0);
                return this;
            }

            /**
             * 
             * @param {org.nem.core.model.Account[]} signers
             * @return {*}
             */
            public addSigners(signers : Array<org.nem.core.model.Account>) : MultisigSignatureTransactionBuilder.ITransaction {
                /* addAll */((l1, l2) => l1.push.apply(l1, l2))(this.signers, signers);
                return this;
            }

            /**
             * 
             * @param {org.nem.core.model.Account} signer
             * @return {*}
             */
            public signer(signer : org.nem.core.model.Account) : MultisigSignatureTransactionBuilder.ITransaction {
                /* add */(this.signers.push(signer)>0);
                return this;
            }

            /**
             * 
             * @return {java.util.concurrent.CompletableFuture}
             */
            public coSignFuture() : java.util.concurrent.CompletableFuture<org.nem.core.serialization.Deserializer> {
                return this.peerConnection.getTransactionSender().sendFutureMultisigSignatureTransaction(this.buildMultisigSignatureTransaction());
            }
        }
        Builder["__class"] = "io.nem.xpx.builder.MultisigSignatureTransactionBuilder.Builder";
        Builder["__interfaces"] = ["io.nem.xpx.builder.MultisigSignatureTransactionBuilder.IPeerConnection","io.nem.xpx.builder.MultisigSignatureTransactionBuilder.IBuild","io.nem.xpx.builder.MultisigSignatureTransactionBuilder.ITransaction","io.nem.xpx.builder.MultisigSignatureTransactionBuilder.ISigner"];


    }

}

