/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.builder {
    /**
     * The Class MultisigTransactionBuilder.
     * @class
     */
    export class MultisigTransactionBuilder {
        constructor() {
        }

        /**
         * PeerConnection.
         * 
         * @param {io.nem.xpx.facade.connection.PeerConnection} peerConnection
         * the peer connection
         * @return {*} the i peer connection
         */
        public static peerConnection(peerConnection : io.nem.xpx.facade.connection.PeerConnection) : MultisigTransactionBuilder.IPeerConnection {
            return new MultisigTransactionBuilder.Builder(peerConnection);
        }
    }
    MultisigTransactionBuilder["__class"] = "io.nem.xpx.builder.MultisigTransactionBuilder";


    export namespace MultisigTransactionBuilder {

        /**
         * The Interface ISender.
         * @class
         */
        export interface IPeerConnection {
            /**
             * Sender.
             * 
             * @param {org.nem.core.model.Account} sender
             * the sender
             * @return {*} the i sender
             */
            sender(sender : org.nem.core.model.Account) : MultisigTransactionBuilder.ITransaction;
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
            otherTransaction(transaction : org.nem.core.model.Transaction) : MultisigTransactionBuilder.IBuild;
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
            timeStamp(timeInstance : org.nem.core.time.TimeInstant) : MultisigTransactionBuilder.IBuild;

            /**
             * Sign by.
             * 
             * @param {org.nem.core.model.Account} account
             * the account
             * @return {*} the i build
             */
            signBy(account : org.nem.core.model.Account) : MultisigTransactionBuilder.IBuild;

            /**
             * Fee.
             * 
             * @param {org.nem.core.model.primitive.Amount} amount
             * the amount
             * @return {*} the i build
             */
            fee(amount : org.nem.core.model.primitive.Amount) : MultisigTransactionBuilder.IBuild;

            /**
             * Fee calculator.
             * 
             * @param {*} feeCalculator
             * the fee calculator
             * @return {*} the i build
             */
            feeCalculator(feeCalculator : org.nem.core.model.TransactionFeeCalculator) : MultisigTransactionBuilder.IBuild;

            /**
             * Deadline.
             * 
             * @param {org.nem.core.time.TimeInstant} timeInstant
             * the time instant
             * @return {*} the i build
             */
            deadline(timeInstant : org.nem.core.time.TimeInstant) : MultisigTransactionBuilder.IBuild;

            /**
             * Signature.
             * 
             * @param {org.nem.core.crypto.Signature} signature
             * the signature
             * @return {*} the i build
             */
            signature(signature : org.nem.core.crypto.Signature) : MultisigTransactionBuilder.IBuild;

            /**
             * Adds the signature.
             * 
             * @param {org.nem.core.model.MultisigSignatureTransaction} signature
             * the signature
             * @return {*} the i build
             */
            addSignature(signature : org.nem.core.model.MultisigSignatureTransaction) : MultisigTransactionBuilder.IBuild;

            /**
             * Builds the multisig transaction.
             * 
             * @return {org.nem.core.model.MultisigTransaction} the multisig transaction
             */
            buildMultisigTransaction() : org.nem.core.model.MultisigTransaction;

            /**
             * Builds the and send multisig transaction.
             * 
             * @return {org.nem.core.model.ncc.NemAnnounceResult} the nem announce result
             * @throws ApiException the api exception
             */
            buildAndSendMultisigTransaction() : org.nem.core.model.ncc.NemAnnounceResult;

            /**
             * Builds the and sign multisig transaction.
             * 
             * @return {io.nem.xpx.model.RequestAnnounceDataSignature} the request announce data signature
             * @throws ApiException the api exception
             */
            buildAndSignMultisigTransaction() : io.nem.xpx.model.RequestAnnounceDataSignature;

            /**
             * Builds the and send future multisig transaction.
             * 
             * @return {java.util.concurrent.CompletableFuture} the completable future
             * @throws ApiException the api exception
             */
            buildAndSendFutureMultisigTransaction() : java.util.concurrent.CompletableFuture<org.nem.core.serialization.Deserializer>;
        }

        /**
         * Instantiates a new builder.
         * 
         * @param {io.nem.xpx.facade.connection.PeerConnection} peerConnection
         * the sender
         * @class
         */
        export class Builder implements MultisigTransactionBuilder.IPeerConnection, MultisigTransactionBuilder.ITransaction, MultisigTransactionBuilder.IBuild {
            /**
             * The instance.
             */
            instance : org.nem.core.model.MultisigTransaction;

            /**
             * The peer connection.
             */
            peerConnection : io.nem.xpx.facade.connection.PeerConnection;

            /**
             * The time stamp.
             */
            __timeStamp : org.nem.core.time.TimeInstant;

            /**
             * The sender.
             */
            __sender : org.nem.core.model.Account;

            /**
             * The other transaction.
             */
            __otherTransaction : org.nem.core.model.Transaction;

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
             * The multisig signature.
             */
            multisigSignature : Array<org.nem.core.model.MultisigSignatureTransaction> = <any>([]);

            public constructor(peerConnection : io.nem.xpx.facade.connection.PeerConnection) {
                if(this.instance===undefined) this.instance = null;
                if(this.peerConnection===undefined) this.peerConnection = null;
                if(this.__timeStamp===undefined) this.__timeStamp = null;
                if(this.__sender===undefined) this.__sender = null;
                if(this.__otherTransaction===undefined) this.__otherTransaction = null;
                if(this.__signature===undefined) this.__signature = null;
                if(this.__fee===undefined) this.__fee = null;
                if(this.__feeCalculator===undefined) this.__feeCalculator = null;
                if(this.__signBy===undefined) this.__signBy = null;
                if(this.__deadline===undefined) this.__deadline = null;
                this.peerConnection = peerConnection;
            }

            /**
             * 
             * @param {org.nem.core.model.Account} sender
             * @return {*}
             */
            public sender(sender : org.nem.core.model.Account) : MultisigTransactionBuilder.ITransaction {
                this.__sender = sender;
                return this;
            }

            /**
             * 
             * @return {org.nem.core.model.MultisigTransaction}
             */
            public buildMultisigTransaction() : org.nem.core.model.MultisigTransaction {
                let xpxMosaic : org.nem.core.model.mosaic.Mosaic = new org.nem.core.model.mosaic.Mosaic(new org.nem.core.model.mosaic.MosaicId(new org.nem.core.model.namespace.NamespaceId("prx"), "xpx"), org.nem.core.model.primitive.Quantity.fromValue(1));
                (<org.nem.core.model.TransferTransaction>this.instance.getOtherTransaction()).getAttachment().addMosaic(xpxMosaic);
                if(this.__timeStamp == null) {
                    this.__timeStamp = io.nem.xpx.model.XpxSdkGlobalConstants.TIME_PROVIDER_$LI$().getCurrentTime();
                }
                this.instance = new org.nem.core.model.MultisigTransaction(this.__timeStamp, this.__sender, this.__otherTransaction);
                if(this.__fee == null && this.__feeCalculator == null) {
                    this.instance.setFee(this.peerConnection.getTransactionFeeCalculators().getFeeCalculatorMultiSig().calculateMinimumFee(this.instance));
                } else {
                    if(this.__fee != null) {
                        this.instance.setFee(this.__fee);
                    } else if(this.__feeCalculator != null) {
                        let feeCalculator : org.nem.core.model.TransactionFeeCalculator;
                        if(this.__feeCalculator != null) {
                            feeCalculator = this.__feeCalculator;
                        } else {
                            feeCalculator = this.peerConnection.getTransactionFeeCalculators().getFeeCalculatorMultiSig();
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
                if(/* size */(<number>this.multisigSignature.length) > 0) {
                    for(let index150=0; index150 < this.multisigSignature.length; index150++) {
                        let multiSigSignatureTransaction = this.multisigSignature[index150];
                        {
                            this.instance.addSignature(multiSigSignatureTransaction);
                        }
                    }
                }
                this.instance.sign();
                return this.instance;
            }

            /**
             * 
             * @return {org.nem.core.model.ncc.NemAnnounceResult}
             */
            public buildAndSendMultisigTransaction() : org.nem.core.model.ncc.NemAnnounceResult {
                this.buildMultisigTransaction().sign();
                let data : number[] = org.nem.core.serialization.BinarySerializer.serializeToBytes(this.instance.asNonVerifiable());
                let request : org.nem.core.model.ncc.RequestAnnounce = new org.nem.core.model.ncc.RequestAnnounce(data, this.instance.getSignature().getBytes());
                let requestAnnounceDataSignature : io.nem.xpx.model.RequestAnnounceDataSignature = new io.nem.xpx.model.RequestAnnounceDataSignature();
                requestAnnounceDataSignature.setData(new org.nem.core.serialization.JsonDeserializer(org.nem.core.serialization.JsonSerializer.serializeToJson(request), null).readString("data", 5000));
                requestAnnounceDataSignature.setSignature(new org.nem.core.serialization.JsonDeserializer(org.nem.core.serialization.JsonSerializer.serializeToJson(request), null).readString("signature", 5000));
                return this.peerConnection.getTransactionSender().sendMultisigTransaction(this.instance);
            }

            /**
             * 
             * @param {org.nem.core.model.primitive.Amount} amount
             * @return {*}
             */
            public fee(amount : org.nem.core.model.primitive.Amount) : MultisigTransactionBuilder.IBuild {
                this.__fee = amount;
                return this;
            }

            /**
             * 
             * @param {org.nem.core.time.TimeInstant} timeInstant
             * @return {*}
             */
            public deadline(timeInstant : org.nem.core.time.TimeInstant) : MultisigTransactionBuilder.IBuild {
                this.__deadline = timeInstant;
                return this;
            }

            /**
             * 
             * @param {org.nem.core.crypto.Signature} signature
             * @return {*}
             */
            public signature(signature : org.nem.core.crypto.Signature) : MultisigTransactionBuilder.IBuild {
                this.__signature = signature;
                return this;
            }

            /**
             * 
             * @param {org.nem.core.time.TimeInstant} timeInstance
             * @return {*}
             */
            public timeStamp(timeInstance : org.nem.core.time.TimeInstant) : MultisigTransactionBuilder.IBuild {
                return this;
            }

            /**
             * 
             * @param {org.nem.core.model.Account} account
             * @return {*}
             */
            public signBy(account : org.nem.core.model.Account) : MultisigTransactionBuilder.IBuild {
                this.__signBy = account;
                return this;
            }

            /**
             * 
             * @param {*} feeCalculator
             * @return {*}
             */
            public feeCalculator(feeCalculator : org.nem.core.model.TransactionFeeCalculator) : MultisigTransactionBuilder.IBuild {
                this.__feeCalculator = feeCalculator;
                return this;
            }

            /**
             * 
             * @param {org.nem.core.model.MultisigSignatureTransaction} signature
             * @return {*}
             */
            public addSignature(signature : org.nem.core.model.MultisigSignatureTransaction) : MultisigTransactionBuilder.IBuild {
                /* add */(this.multisigSignature.push(signature)>0);
                return this;
            }

            /**
             * 
             * @param {org.nem.core.model.Transaction} transaction
             * @return {*}
             */
            public otherTransaction(transaction : org.nem.core.model.Transaction) : MultisigTransactionBuilder.IBuild {
                this.__otherTransaction = transaction;
                return this;
            }

            /**
             * 
             * @return {java.util.concurrent.CompletableFuture}
             */
            public buildAndSendFutureMultisigTransaction() : java.util.concurrent.CompletableFuture<org.nem.core.serialization.Deserializer> {
                return this.peerConnection.getTransactionSender().sendFutureMultiSigTransaction(this.buildMultisigTransaction());
            }

            /**
             * 
             * @return {io.nem.xpx.model.RequestAnnounceDataSignature}
             */
            public buildAndSignMultisigTransaction() : io.nem.xpx.model.RequestAnnounceDataSignature {
                this.buildMultisigTransaction().sign();
                let data : number[] = org.nem.core.serialization.BinarySerializer.serializeToBytes(this.instance.asNonVerifiable());
                let request : org.nem.core.model.ncc.RequestAnnounce = new org.nem.core.model.ncc.RequestAnnounce(data, this.instance.getSignature().getBytes());
                let requestAnnounceDataSignature : io.nem.xpx.model.RequestAnnounceDataSignature = new io.nem.xpx.model.RequestAnnounceDataSignature();
                requestAnnounceDataSignature.setData(new org.nem.core.serialization.JsonDeserializer(org.nem.core.serialization.JsonSerializer.serializeToJson(request), null).readString("data", 5000));
                requestAnnounceDataSignature.setSignature(new org.nem.core.serialization.JsonDeserializer(org.nem.core.serialization.JsonSerializer.serializeToJson(request), null).readString("signature", 5000));
                return requestAnnounceDataSignature;
            }
        }
        Builder["__class"] = "io.nem.xpx.builder.MultisigTransactionBuilder.Builder";
        Builder["__interfaces"] = ["io.nem.xpx.builder.MultisigTransactionBuilder.IBuild","io.nem.xpx.builder.MultisigTransactionBuilder.IPeerConnection","io.nem.xpx.builder.MultisigTransactionBuilder.ITransaction"];


    }

}

