/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service {
    /**
     * Instantiates a new transaction fee calculators.
     * 
     * @param {io.nem.xpx.service.NemAccountApi} accountApi the account api
     * @param {io.nem.xpx.service.NemNamespaceAndMosaicsApi} namespaceMosaicApi the namespace mosaic api
     * @class
     */
    export class TransactionFeeCalculators {
        /**
         * The account api.
         */
        /*private*/ accountApi : io.nem.xpx.service.NemAccountApi;

        /**
         * The namespace mosaic api.
         */
        /*private*/ namespaceMosaicApi : io.nem.xpx.service.NemNamespaceAndMosaicsApi;

        public constructor(accountApi : io.nem.xpx.service.NemAccountApi, namespaceMosaicApi : io.nem.xpx.service.NemNamespaceAndMosaicsApi) {
            if(this.accountApi===undefined) this.accountApi = null;
            if(this.namespaceMosaicApi===undefined) this.namespaceMosaicApi = null;
            if(this.feeCalculator===undefined) this.feeCalculator = null;
            if(this.feeCalculatorMultiSig===undefined) this.feeCalculatorMultiSig = null;
            this.accountApi = accountApi;
            this.namespaceMosaicApi = namespaceMosaicApi;
        }

        /**
         * The fee calculator.
         */
        /*private*/ feeCalculator : org.nem.core.model.TransactionFeeCalculator;

        /**
         * The fee calculator multi sig.
         */
        /*private*/ feeCalculatorMultiSig : org.nem.core.model.TransactionFeeCalculator;

        public getFeeCalculator$() : org.nem.core.model.TransactionFeeCalculator {
            if(this.feeCalculator == null) this.feeCalculator = new org.nem.core.model.FeeUnitAwareTransactionFeeCalculator(org.nem.core.model.primitive.Amount.fromMicroNem(50000), <any>(this.mosaicInfoLookup()));
            return this.feeCalculator;
        }

        public getFeeCalculatorMultiSig$() : org.nem.core.model.TransactionFeeCalculator {
            if(this.feeCalculatorMultiSig == null) this.feeCalculatorMultiSig = new org.nem.core.model.FeeUnitAwareTransactionFeeCalculator(org.nem.core.model.primitive.Amount.fromMicroNem(50000), <any>(this.mosaicInfoLookup()));
            return this.feeCalculatorMultiSig;
        }

        public getFeeCalculator$java_lang_String(senderAddress : string) : org.nem.core.model.TransactionFeeCalculator {
            return new org.nem.core.model.FeeUnitAwareTransactionFeeCalculator(org.nem.core.model.primitive.Amount.fromMicroNem(50000), <any>(this.mosaicInfoLookupForSender(senderAddress)));
        }

        /**
         * Gets the fee calculator.
         * 
         * @param {string} senderAddress the sender address
         * @return {*} the fee calculator
         */
        public getFeeCalculator(senderAddress? : any) : any {
            if(((typeof senderAddress === 'string') || senderAddress === null)) {
                return <any>this.getFeeCalculator$java_lang_String(senderAddress);
            } else if(senderAddress === undefined) {
                return <any>this.getFeeCalculator$();
            } else throw new Error('invalid overload');
        }

        public getFeeCalculatorMultiSig$java_lang_String(senderAddress : string) : org.nem.core.model.TransactionFeeCalculator {
            return new org.nem.core.model.FeeUnitAwareTransactionFeeCalculator(org.nem.core.model.primitive.Amount.fromMicroNem(50000), <any>(this.mosaicInfoLookupForSender(senderAddress)));
        }

        /**
         * Gets the fee calculator multi sig.
         * 
         * @param {string} senderAddress the sender address
         * @return {*} the fee calculator multi sig
         */
        public getFeeCalculatorMultiSig(senderAddress? : any) : any {
            if(((typeof senderAddress === 'string') || senderAddress === null)) {
                return <any>this.getFeeCalculatorMultiSig$java_lang_String(senderAddress);
            } else if(senderAddress === undefined) {
                return <any>this.getFeeCalculatorMultiSig$();
            } else throw new Error('invalid overload');
        }

        /**
         * Mosaic info lookup.
         * 
         * @return {*} the mosaic fee information lookup
         * @private
         */
        /*private*/ mosaicInfoLookup() : org.nem.core.model.mosaic.MosaicFeeInformationLookup {
            return (id) => {
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(id.getName(),"xpx"))) {
                    return new org.nem.core.model.mosaic.MosaicFeeInformation(org.nem.core.model.primitive.Supply.fromValue(8999999999), 4);
                }
                let multiplier : number = /* parseInt */parseInt(id.getName().substring(4));
                let divisibilityChange : number = multiplier - 1;
                return new org.nem.core.model.mosaic.MosaicFeeInformation(org.nem.core.model.primitive.Supply.fromValue(100000000 * multiplier), 3 + divisibilityChange);
            };
        }

        /**
         * Mosaic info lookup for sender.
         * 
         * @param {string} sender the sender
         * @return {*} the mosaic fee information lookup
         * @private
         */
        /*private*/ mosaicInfoLookupForSender(sender : string) : org.nem.core.model.mosaic.MosaicFeeInformationLookup {
            return (id) => {
                let namespaceToLookup : string = id.getNamespaceId().getRoot().toString();
                let mosaicNameToLookup : string = id.getName();
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(namespaceToLookup,"nem")) && /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(mosaicNameToLookup,"xem"))) return null;
                try {
                    {
                        let array186 = this.accountApi.getAccountOwnedMosaic(sender);
                        for(let index185=0; index185 < array186.length; index185++) {
                            let mosaic = array186[index185];
                            {
                                let namespace : string = mosaic.getMosaicId().getNamespaceId().getRoot().toString();
                                let mosaicName : string = mosaic.getMosaicId().getName();
                                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(namespace,namespaceToLookup)) && /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(mosaicName,mosaicNameToLookup))) {
                                    let mosaicDefinition : org.nem.core.model.mosaic.MosaicDefinition = this.namespaceMosaicApi.getMosaicInformation(namespace, mosaicName);
                                    return new org.nem.core.model.mosaic.MosaicFeeInformation(org.nem.core.model.primitive.Supply.fromValue(mosaicDefinition.getProperties().getInitialSupply()), mosaicDefinition.getProperties().getDivisibility());
                                }
                            }
                        }
                    }
                    throw new io.nem.xpx.exceptions.MosaicInformationNotFoundException("Mosaic not found on Sender");
                } catch(e) {
                    throw new io.nem.xpx.exceptions.MosaicInformationNotFoundException("Exception occured while getting Mosaic Information." + e.message);
                };
            };
        }
    }
    TransactionFeeCalculators["__class"] = "io.nem.xpx.service.TransactionFeeCalculators";

}

