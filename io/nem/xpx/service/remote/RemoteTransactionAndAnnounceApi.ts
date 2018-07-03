/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.remote {
    /**
     * Instantiates a new remote transaction and announce api.
     * 
     * @param {io.nem.ApiClient} apiClient the api client
     * @class
     */
    export class RemoteTransactionAndAnnounceApi implements io.nem.xpx.service.intf.TransactionAndAnnounceApi {
        /**
         * The api client.
         */
        /*private*/ apiClient : io.nem.ApiClient;

        public constructor(apiClient : io.nem.ApiClient) {
            if(this.apiClient===undefined) this.apiClient = null;
            this.apiClient = apiClient;
        }

        /**
         * Gets the api client.
         * 
         * @return {io.nem.ApiClient} the api client
         */
        public getApiClient() : io.nem.ApiClient {
            return this.apiClient;
        }

        /**
         * Build call for announceRequestPublishDataSignatureUsingPOST.
         * 
         * @param {io.nem.xpx.model.RequestAnnounceDataSignature} requestAnnounceDataSignature The Request Announce Data Signature Json Format (optional)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public announceRequestPublishDataSignatureUsingPOSTCall(requestAnnounceDataSignature : io.nem.xpx.model.RequestAnnounceDataSignature, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = requestAnnounceDataSignature;
            let localVarPath : string = "/transaction/announce";
            let localVarQueryParams : Array<io.nem.Pair> = <any>([]);
            let localVarHeaderParams : any = <any>({});
            let localVarFormParams : any = <any>({});
            let localVarAccepts : string[] = ["application/json"];
            let localVarAccept : string = this.apiClient.selectHeaderAccept(localVarAccepts);
            if(localVarAccept != null) /* put */(localVarHeaderParams["Accept"] = localVarAccept);
            let localVarContentTypes : string[] = ["application/json"];
            let localVarContentType : string = this.apiClient.selectHeaderContentType(localVarContentTypes);
            /* put */(localVarHeaderParams["Content-Type"] = localVarContentType);
            if(progressListener != null) {
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new RemoteTransactionAndAnnounceApi.RemoteTransactionAndAnnounceApi$0(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /**
         * Announce request publish data signature using POST validate before call.
         * 
         * @param {io.nem.xpx.model.RequestAnnounceDataSignature} requestAnnounceDataSignature the request announce data signature
         * @param {*} progressListener the progress listener
         * @param {*} progressRequestListener the progress request listener
         * @return {com.squareup.okhttp.Call} the com.squareup.okhttp. call
         * @throws ApiException the api exception
         * @private
         */
        /*private*/ announceRequestPublishDataSignatureUsingPOSTValidateBeforeCall(requestAnnounceDataSignature : io.nem.xpx.model.RequestAnnounceDataSignature, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let call : com.squareup.okhttp.Call = this.announceRequestPublishDataSignatureUsingPOSTCall(requestAnnounceDataSignature, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Announce the DataHash to NEM/P2P Storage and P2P Database
         * Endpoint that can be use to announce the data hash transaction. This will grab the signed BinaryTransaferTransaction and create the P2P Database Entry for the specific data hash / transaction.
         * @param {io.nem.xpx.model.RequestAnnounceDataSignature} requestAnnounceDataSignature The Request Announce Data Signature Json Format (optional)
         * @return {string} String
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public announceRequestPublishDataSignatureUsingPOST(requestAnnounceDataSignature : io.nem.xpx.model.RequestAnnounceDataSignature) : string {
            let resp : io.nem.ApiResponse<string> = this.announceRequestPublishDataSignatureUsingPOSTWithHttpInfo(requestAnnounceDataSignature);
            return resp.getData();
        }

        /**
         * Announce the DataHash to NEM/P2P Storage and P2P Database
         * Endpoint that can be use to announce the data hash transaction. This will grab the signed BinaryTransaferTransaction and create the P2P Database Entry for the specific data hash / transaction.
         * @param {io.nem.xpx.model.RequestAnnounceDataSignature} requestAnnounceDataSignature The Request Announce Data Signature Json Format (optional)
         * @return {io.nem.ApiResponse} ApiResponse&lt;String&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public announceRequestPublishDataSignatureUsingPOSTWithHttpInfo(requestAnnounceDataSignature : io.nem.xpx.model.RequestAnnounceDataSignature) : io.nem.ApiResponse<string> {
            let call : com.squareup.okhttp.Call = this.announceRequestPublishDataSignatureUsingPOSTValidateBeforeCall(requestAnnounceDataSignature, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<string>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<string>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Announce the DataHash to NEM/P2P Storage and P2P Database (asynchronously)
         * Endpoint that can be use to announce the data hash transaction. This will grab the signed BinaryTransaferTransaction and create the P2P Database Entry for the specific data hash / transaction.
         * @param {io.nem.xpx.model.RequestAnnounceDataSignature} requestAnnounceDataSignature The Request Announce Data Signature Json Format (optional)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public announceRequestPublishDataSignatureUsingPOSTAsync(requestAnnounceDataSignature : io.nem.xpx.model.RequestAnnounceDataSignature, callback : io.nem.ApiCallback<string>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new RemoteTransactionAndAnnounceApi.RemoteTransactionAndAnnounceApi$1(this, callback);
                progressRequestListener = new RemoteTransactionAndAnnounceApi.RemoteTransactionAndAnnounceApi$2(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.announceRequestPublishDataSignatureUsingPOSTValidateBeforeCall(requestAnnounceDataSignature, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<string>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<string>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for getXPXTransactionUsingGET.
         * 
         * @param {string} nemHash XPX Transaction Hash (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public getXPXTransactionUsingGETCall(nemHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = /* replaceAll */"/transaction/get/{nemHash}".replace(new RegExp("\\{nemHash\\}", 'g'),this.apiClient.escapeString(nemHash.toString()));
            let localVarQueryParams : Array<io.nem.Pair> = <any>([]);
            let localVarHeaderParams : any = <any>({});
            let localVarFormParams : any = <any>({});
            let localVarAccepts : string[] = ["application/json"];
            let localVarAccept : string = this.apiClient.selectHeaderAccept(localVarAccepts);
            if(localVarAccept != null) /* put */(localVarHeaderParams["Accept"] = localVarAccept);
            let localVarContentTypes : string[] = ["application/json"];
            let localVarContentType : string = this.apiClient.selectHeaderContentType(localVarContentTypes);
            /* put */(localVarHeaderParams["Content-Type"] = localVarContentType);
            if(progressListener != null) {
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new RemoteTransactionAndAnnounceApi.RemoteTransactionAndAnnounceApi$3(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /**
         * Gets the XPX transaction using GET validate before call.
         * 
         * @param {string} nemHash the nem hash
         * @param {*} progressListener the progress listener
         * @param {*} progressRequestListener the progress request listener
         * @return {com.squareup.okhttp.Call} the XPX transaction using GET validate before call
         * @throws ApiException the api exception
         * @private
         */
        /*private*/ getXPXTransactionUsingGETValidateBeforeCall(nemHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(nemHash == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'nemHash\' when calling getXPXTransactionUsingGET(Async)");
            }
            let call : com.squareup.okhttp.Call = this.getXPXTransactionUsingGETCall(nemHash, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Get the XPX Transaction Hash
         * Endpoint can be used to get XPX Transaction.
         * @param {string} nemHash XPX Transaction Hash (required)
         * @return {string} String
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public getXPXTransactionUsingGET(nemHash : string) : string {
            let resp : io.nem.ApiResponse<string> = this.getXPXTransactionUsingGETWithHttpInfo(nemHash);
            return resp.getData();
        }

        /**
         * Get the XPX Transaction Hash
         * Endpoint can be used to get XPX Transaction.
         * @param {string} nemHash XPX Transaction Hash (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;String&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public getXPXTransactionUsingGETWithHttpInfo(nemHash : string) : io.nem.ApiResponse<string> {
            let call : com.squareup.okhttp.Call = this.getXPXTransactionUsingGETValidateBeforeCall(nemHash, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<string>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<string>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Get the XPX Transaction Hash (asynchronously)
         * Endpoint can be used to get XPX Transaction.
         * @param {string} nemHash XPX Transaction Hash (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public getXPXTransactionUsingGETAsync(nemHash : string, callback : io.nem.ApiCallback<string>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new RemoteTransactionAndAnnounceApi.RemoteTransactionAndAnnounceApi$4(this, callback);
                progressRequestListener = new RemoteTransactionAndAnnounceApi.RemoteTransactionAndAnnounceApi$5(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.getXPXTransactionUsingGETValidateBeforeCall(nemHash, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<string>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<string>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }
    }
    RemoteTransactionAndAnnounceApi["__class"] = "io.nem.xpx.service.remote.RemoteTransactionAndAnnounceApi";
    RemoteTransactionAndAnnounceApi["__interfaces"] = ["io.nem.xpx.service.intf.TransactionAndAnnounceApi"];



    export namespace RemoteTransactionAndAnnounceApi {

        export class RemoteTransactionAndAnnounceApi$0 implements com.squareup.okhttp.Interceptor {
            public __parent: any;
            /**
             * 
             * @param {*} chain
             * @return {com.squareup.okhttp.Response}
             */
            public intercept(chain : com.squareup.okhttp.Interceptor.Chain) : com.squareup.okhttp.Response {
                let originalResponse : com.squareup.okhttp.Response = chain.proceed(chain.request());
                return originalResponse.newBuilder().body(new io.nem.ProgressResponseBody(originalResponse.body(), this.progressListener)).build();
            }

            constructor(__parent: any, private progressListener: any) {
                this.__parent = __parent;
            }
        }
        RemoteTransactionAndAnnounceApi$0["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class RemoteTransactionAndAnnounceApi$1 implements io.nem.ProgressResponseBody.ProgressListener {
            public __parent: any;
            /**
             * 
             * @param {number} bytesRead
             * @param {number} contentLength
             * @param {boolean} done
             */
            public update(bytesRead : number, contentLength : number, done : boolean) {
                this.callback.onDownloadProgress(bytesRead, contentLength, done);
            }

            constructor(__parent: any, private callback: any) {
                this.__parent = __parent;
            }
        }
        RemoteTransactionAndAnnounceApi$1["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class RemoteTransactionAndAnnounceApi$2 implements io.nem.ProgressRequestBody.ProgressRequestListener {
            public __parent: any;
            /**
             * 
             * @param {number} bytesWritten
             * @param {number} contentLength
             * @param {boolean} done
             */
            public onRequestProgress(bytesWritten : number, contentLength : number, done : boolean) {
                this.callback.onUploadProgress(bytesWritten, contentLength, done);
            }

            constructor(__parent: any, private callback: any) {
                this.__parent = __parent;
            }
        }
        RemoteTransactionAndAnnounceApi$2["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class RemoteTransactionAndAnnounceApi$3 implements com.squareup.okhttp.Interceptor {
            public __parent: any;
            /**
             * 
             * @param {*} chain
             * @return {com.squareup.okhttp.Response}
             */
            public intercept(chain : com.squareup.okhttp.Interceptor.Chain) : com.squareup.okhttp.Response {
                let originalResponse : com.squareup.okhttp.Response = chain.proceed(chain.request());
                return originalResponse.newBuilder().body(new io.nem.ProgressResponseBody(originalResponse.body(), this.progressListener)).build();
            }

            constructor(__parent: any, private progressListener: any) {
                this.__parent = __parent;
            }
        }
        RemoteTransactionAndAnnounceApi$3["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class RemoteTransactionAndAnnounceApi$4 implements io.nem.ProgressResponseBody.ProgressListener {
            public __parent: any;
            /**
             * 
             * @param {number} bytesRead
             * @param {number} contentLength
             * @param {boolean} done
             */
            public update(bytesRead : number, contentLength : number, done : boolean) {
                this.callback.onDownloadProgress(bytesRead, contentLength, done);
            }

            constructor(__parent: any, private callback: any) {
                this.__parent = __parent;
            }
        }
        RemoteTransactionAndAnnounceApi$4["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class RemoteTransactionAndAnnounceApi$5 implements io.nem.ProgressRequestBody.ProgressRequestListener {
            public __parent: any;
            /**
             * 
             * @param {number} bytesWritten
             * @param {number} contentLength
             * @param {boolean} done
             */
            public onRequestProgress(bytesWritten : number, contentLength : number, done : boolean) {
                this.callback.onUploadProgress(bytesWritten, contentLength, done);
            }

            constructor(__parent: any, private callback: any) {
                this.__parent = __parent;
            }
        }
        RemoteTransactionAndAnnounceApi$5["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];


    }

}

