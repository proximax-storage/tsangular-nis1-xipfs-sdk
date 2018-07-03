/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade {
    /**
     * The Class AbstractFacadeService.
     * @class
     */
    export abstract class AbstractFacadeService {
        /**
         * Byte to serial object.
         * 
         * @param {Array} object
         * the object
         * @return {io.nem.xpx.service.model.buffers.ResourceHashMessage} the resource hash message
         */
        deserializeResourceMessageHash(object : number[]) : io.nem.xpx.service.model.buffers.ResourceHashMessage {
            let resourceMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage = io.nem.xpx.service.model.buffers.ResourceHashMessage.getRootAsResourceHashMessage$java_nio_ByteBuffer(java.nio.ByteBuffer.wrap(org.apache.commons.codec.binary.Base64.decodeBase64(object)));
            return resourceMessage;
        }

        /**
         * Check if txn have XPX mosaic.
         * 
         * @param {org.nem.core.model.Transaction} transaction the transaction
         * @return {boolean} true, if successful
         */
        checkIfTxnHaveXPXMosaic(transaction : org.nem.core.model.Transaction) : boolean {
            if(transaction != null && transaction instanceof <any>org.nem.core.model.TransferTransaction) {
                let mosaicIter : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})((<org.nem.core.model.TransferTransaction>transaction).getMosaics());
                while((mosaicIter.hasNext())) {
                    let mosaic : org.nem.core.model.mosaic.Mosaic = mosaicIter.next();
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(mosaic.getMosaicId().getNamespaceId().getRoot().toString(),"prx")) && /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(mosaic.getMosaicId().getName(),"xpx"))) {
                        return true;
                    }
                };
            }
            return false;
        }
    }
    AbstractFacadeService["__class"] = "io.nem.xpx.facade.AbstractFacadeService";

}

