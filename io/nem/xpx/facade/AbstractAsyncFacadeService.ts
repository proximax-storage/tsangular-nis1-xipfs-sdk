/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade {
    /**
     * The Class AbstractAsyncFacadeService.
     * @class
     */
    export abstract class AbstractAsyncFacadeService {
        /**
         * Run async.
         * 
         * @param <T> the generic type
         * @param {*} facadeMethod the facade method
         * @param {*} callback the callback
         * @return {java.util.concurrent.CompletableFuture} the completable future
         */
        runAsync<T>(facadeMethod : () => T, callback : io.nem.xpx.callback.ServiceAsyncCallback<T>) : java.util.concurrent.CompletableFuture<T> {
            return java.util.concurrent.CompletableFuture.supplyAsync<any>(() => (target => (typeof target === 'function')?target():(<any>target).get())(facadeMethod)).thenApply<any>((result) => {
                callback(result);
                return result;
            });
        }
    }
    AbstractAsyncFacadeService["__class"] = "io.nem.xpx.facade.AbstractAsyncFacadeService";

}

