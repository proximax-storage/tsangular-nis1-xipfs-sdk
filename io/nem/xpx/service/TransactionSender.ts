/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service {
    /**
     * Instantiates a new transaction sender.
     * 
     * @param {io.nem.xpx.service.NemTransactionApi} nemTransactionApi the nem transaction api
     * @param {io.nem.xpx.service.NemAccountApi} nemAccountApi the nem account api
     * @class
     */
    export class TransactionSender {
        /**
         * The Constant LOGGER.
         */
        /*private*/ nemTransactionApi : io.nem.xpx.service.NemTransactionApi;

        /**
         * The nem account api.
         */
        /*private*/ nemAccountApi : io.nem.xpx.service.NemAccountApi;

        public constructor(nemTransactionApi : io.nem.xpx.service.NemTransactionApi, nemAccountApi : io.nem.xpx.service.NemAccountApi) {
            if(this.nemTransactionApi===undefined) this.nemTransactionApi = null;
            if(this.nemAccountApi===undefined) this.nemAccountApi = null;
            this.nemTransactionApi = nemTransactionApi;
            this.nemAccountApi = nemAccountApi;
        }

        /**
         * Send transaction.
         * 
         * @param {org.nem.core.model.Transaction} transaction
         * the transaction
         * @throws ApiException
         * the api exception
         */
        public sendTransaction(transaction : org.nem.core.model.Transaction) {
            let data : number[] = org.nem.core.serialization.BinarySerializer.serializeToBytes(transaction.asNonVerifiable());
            let request : org.nem.core.model.ncc.RequestAnnounce = new org.nem.core.model.ncc.RequestAnnounce(data, transaction.getSignature().getBytes());
            let future : java.util.concurrent.CompletableFuture<org.nem.core.serialization.Deserializer> = this.nemTransactionApi.announceTransaction(request);
            try {
                future.thenAcceptAsync((d) => {
                    let result : org.nem.core.model.ncc.NemAnnounceResult = new org.nem.core.model.ncc.NemAnnounceResult(d);
                    switch((result.getCode())) {
                    case 1:
                        org.pmw.tinylog.Logger.info(javaemul.internal.StringHelper.format("successfully send xem " + result.getMessage()));
                        break;
                    default:
                        org.pmw.tinylog.Logger.info(javaemul.internal.StringHelper.format("could not send xem " + result.getMessage()));
                    }
                }).exceptionally((e) => {
                    org.pmw.tinylog.Logger.error("Error on uploading file data: " + e.message);
                    return null;
                }).get();
            } catch(e) {
                org.pmw.tinylog.Logger.error("Sending/Announcing Transfer Transaction: " + e.message);
            };
        }

        public sendTransferTransaction$org_nem_core_model_TransferTransaction(transaction : org.nem.core.model.TransferTransaction) : org.nem.core.model.ncc.NemAnnounceResult {
            this.checkAddressBalanceAgainstAmount(transaction.getSigner().getAddress().toString(), transaction.getAmount());
            let data : number[] = org.nem.core.serialization.BinarySerializer.serializeToBytes(transaction.asNonVerifiable());
            let request : org.nem.core.model.ncc.RequestAnnounce = new org.nem.core.model.ncc.RequestAnnounce(data, transaction.getSignature().getBytes());
            let future : java.util.concurrent.CompletableFuture<org.nem.core.serialization.Deserializer> = this.nemTransactionApi.announceTransaction(request);
            try {
                let transDes : org.nem.core.serialization.Deserializer = future.get();
                return new org.nem.core.model.ncc.NemAnnounceResult(transDes);
            } catch(e) {
                org.pmw.tinylog.Logger.error("Sending/Announcing Transfer Transaction: " + e.message);
            };
            return null;
        }

        public sendTransferTransaction$byte_A$byte_A(data : number[], signature : number[]) : org.nem.core.model.ncc.NemAnnounceResult {
            let request : org.nem.core.model.ncc.RequestAnnounce = new org.nem.core.model.ncc.RequestAnnounce(data, signature);
            let future : java.util.concurrent.CompletableFuture<org.nem.core.serialization.Deserializer> = this.nemTransactionApi.announceTransaction(request);
            try {
                let transDes : org.nem.core.serialization.Deserializer = future.get();
                return new org.nem.core.model.ncc.NemAnnounceResult(transDes);
            } catch(e) {
                org.pmw.tinylog.Logger.error("Error Occured: " + e.message);
            };
            return null;
        }

        /**
         * Send transfer transaction.
         * 
         * @param {Array} data
         * the data
         * @param {Array} signature
         * the signature
         * @return {org.nem.core.model.ncc.NemAnnounceResult} the nem announce result
         * @throws ApiException
         * the api exception
         */
        public sendTransferTransaction(data? : any, signature? : any) : any {
            if(((data != null && data instanceof <any>Array && (data.length==0 || data[0] == null ||(typeof data[0] === 'number'))) || data === null) && ((signature != null && signature instanceof <any>Array && (signature.length==0 || signature[0] == null ||(typeof signature[0] === 'number'))) || signature === null)) {
                return <any>this.sendTransferTransaction$byte_A$byte_A(data, signature);
            } else if(((data != null && data instanceof <any>org.nem.core.model.TransferTransaction) || data === null) && signature === undefined) {
                return <any>this.sendTransferTransaction$org_nem_core_model_TransferTransaction(data);
            } else throw new Error('invalid overload');
        }

        /**
         * Send future transfer transaction.
         * 
         * @param {org.nem.core.model.TransferTransaction} transaction            the transaction
         * @return {java.util.concurrent.CompletableFuture} the completable future
         * @throws ApiException             the api exception
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         * @throws InsufficientAmountException the insufficient amount exception
         */
        public sendFutureTransferTransaction(transaction : org.nem.core.model.TransferTransaction) : java.util.concurrent.CompletableFuture<org.nem.core.serialization.Deserializer> {
            this.checkAddressBalanceAgainstAmount(transaction.getSigner().getAddress().toString(), transaction.getAmount());
            let data : number[] = org.nem.core.serialization.BinarySerializer.serializeToBytes(transaction.asNonVerifiable());
            let request : org.nem.core.model.ncc.RequestAnnounce = new org.nem.core.model.ncc.RequestAnnounce(data, transaction.getSignature().getBytes());
            return this.nemTransactionApi.announceTransaction(request);
        }

        /**
         * Send multi sig transaction.
         * 
         * @param {org.nem.core.model.MultisigTransaction} transaction
         * the transaction
         * @return {org.nem.core.model.ncc.NemAnnounceResult} the nem announce result
         * @throws ApiException
         * the api exception
         */
        public sendMultisigTransaction(transaction : org.nem.core.model.MultisigTransaction) : org.nem.core.model.ncc.NemAnnounceResult {
            let data : number[] = org.nem.core.serialization.BinarySerializer.serializeToBytes(transaction.asNonVerifiable());
            let request : org.nem.core.model.ncc.RequestAnnounce = new org.nem.core.model.ncc.RequestAnnounce(data, transaction.getSignature().getBytes());
            let future : java.util.concurrent.CompletableFuture<org.nem.core.serialization.Deserializer> = this.nemTransactionApi.announceTransaction(request);
            try {
                let transDes : org.nem.core.serialization.Deserializer = future.get();
                return new org.nem.core.model.ncc.NemAnnounceResult(transDes);
            } catch(e) {
                org.pmw.tinylog.Logger.error("Error Occured: " + e.message);
            };
            return null;
        }

        /**
         * Send future multi sig transaction.
         * 
         * @param {org.nem.core.model.MultisigTransaction} transaction
         * the transaction
         * @return {java.util.concurrent.CompletableFuture} the completable future
         * @throws ApiException
         * the api exception
         */
        public sendFutureMultiSigTransaction(transaction : org.nem.core.model.MultisigTransaction) : java.util.concurrent.CompletableFuture<org.nem.core.serialization.Deserializer> {
            let data : number[] = org.nem.core.serialization.BinarySerializer.serializeToBytes(transaction.asNonVerifiable());
            let request : org.nem.core.model.ncc.RequestAnnounce = new org.nem.core.model.ncc.RequestAnnounce(data, transaction.getSignature().getBytes());
            return this.nemTransactionApi.announceTransaction(request);
        }

        /**
         * Send multisig signature transaction.
         * 
         * @param {org.nem.core.model.MultisigSignatureTransaction} transaction
         * the transaction
         * @return {org.nem.core.model.ncc.NemAnnounceResult} the nem announce result
         * @throws ApiException
         * the api exception
         */
        public sendMultisigSignatureTransaction(transaction : org.nem.core.model.MultisigSignatureTransaction) : org.nem.core.model.ncc.NemAnnounceResult {
            let data : number[] = org.nem.core.serialization.BinarySerializer.serializeToBytes(transaction.asNonVerifiable());
            let request : org.nem.core.model.ncc.RequestAnnounce = new org.nem.core.model.ncc.RequestAnnounce(data, transaction.getSignature().getBytes());
            let future : java.util.concurrent.CompletableFuture<org.nem.core.serialization.Deserializer> = this.nemTransactionApi.announceTransaction(request);
            try {
                let transDes : org.nem.core.serialization.Deserializer = future.get();
                return new org.nem.core.model.ncc.NemAnnounceResult(transDes);
            } catch(e) {
                org.pmw.tinylog.Logger.error("Error Occured: " + e.message);
            };
            return null;
        }

        /**
         * Send future multisig signature transaction.
         * 
         * @param {org.nem.core.model.MultisigSignatureTransaction} transaction
         * the transaction
         * @return {java.util.concurrent.CompletableFuture} the completable future
         * @throws ApiException
         * the api exception
         */
        public sendFutureMultisigSignatureTransaction(transaction : org.nem.core.model.MultisigSignatureTransaction) : java.util.concurrent.CompletableFuture<org.nem.core.serialization.Deserializer> {
            let data : number[] = org.nem.core.serialization.BinarySerializer.serializeToBytes(transaction.asNonVerifiable());
            let request : org.nem.core.model.ncc.RequestAnnounce = new org.nem.core.model.ncc.RequestAnnounce(data, transaction.getSignature().getBytes());
            return this.nemTransactionApi.announceTransaction(request);
        }

        /**
         * Check address balance against amount.
         * 
         * @param {string} address the address
         * @param {org.nem.core.model.primitive.Amount} amount the amount
         * @throws InterruptedException the interrupted exception
         * @throws ExecutionException the execution exception
         * @throws ApiException the api exception
         * @throws InsufficientAmountException the insufficient amount exception
         * @private
         */
        /*private*/ checkAddressBalanceAgainstAmount(address : string, amount : org.nem.core.model.primitive.Amount) {
            let balance : number = this.nemAccountApi.getAccountByAddress(address).getEntity().getBalance().getNumNem();
            let transactionAmount : number = amount.getNumNem();
            if(balance < transactionAmount) {
                throw new io.nem.xpx.exceptions.InsufficientAmountException("Insufficient amount for Address: " + address + ". Balance: " + amount.getNumNem() + ". Transaction Amount: " + transactionAmount);
            }
        }
    }
    TransactionSender["__class"] = "io.nem.xpx.service.TransactionSender";

}

