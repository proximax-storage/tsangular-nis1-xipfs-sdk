/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.remote {
    /**
     * Instantiates a new remote account api.
     * 
     * @param {io.nem.ApiClient} apiClient the api client
     * @class
     */
    export class RemoteAccountApi implements io.nem.xpx.service.intf.AccountApi {
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
         * Build call for getAllIncomingNemAddressTransactionsUsingGET.
         * 
         * @param {string} publicKey The NEM Account Public Key (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public getAllIncomingNemAddressTransactionsUsingGETCall(publicKey : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = /* replaceAll */"/account/get/incoming/transactions/{publicKey}".replace(new RegExp("\\{publicKey\\}", 'g'),this.apiClient.escapeString(publicKey.toString()));
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
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new RemoteAccountApi.RemoteAccountApi$0(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /**
         * Gets the all incoming nem address transactions using GET validate before call.
         * 
         * @param {string} publicKey the public key
         * @param {*} progressListener the progress listener
         * @param {*} progressRequestListener the progress request listener
         * @return {com.squareup.okhttp.Call} the all incoming nem address transactions using GET validate before call
         * @throws ApiException the api exception
         * @private
         */
        /*private*/ getAllIncomingNemAddressTransactionsUsingGETValidateBeforeCall(publicKey : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(publicKey == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'publicKey\' when calling getAllIncomingNemAddressTransactionsUsingGET(Async)");
            }
            let call : com.squareup.okhttp.Call = this.getAllIncomingNemAddressTransactionsUsingGETCall(publicKey, progressListener, progressRequestListener);
            return call;
        }

        /**
         * getAllIncomingNemAddressTransactions.
         * 
         * @param {string} publicKey The NEM Account Public Key (required)
         * @return {string} String
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public getAllIncomingNemAddressTransactionsUsingGET(publicKey : string) : string {
            let resp : io.nem.ApiResponse<string> = this.getAllIncomingNemAddressTransactionsUsingGETWithHttpInfo(publicKey);
            return resp.getData();
        }

        /**
         * getAllIncomingNemAddressTransactions.
         * 
         * @param {string} publicKey The NEM Account Public Key (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;String&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public getAllIncomingNemAddressTransactionsUsingGETWithHttpInfo(publicKey : string) : io.nem.ApiResponse<string> {
            let call : com.squareup.okhttp.Call = this.getAllIncomingNemAddressTransactionsUsingGETValidateBeforeCall(publicKey, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<string>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<string>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * getAllIncomingNemAddressTransactions (asynchronously).
         * 
         * @param {string} publicKey The NEM Account Public Key (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public getAllIncomingNemAddressTransactionsUsingGETAsync(publicKey : string, callback : io.nem.ApiCallback<string>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new RemoteAccountApi.RemoteAccountApi$1(this, callback);
                progressRequestListener = new RemoteAccountApi.RemoteAccountApi$2(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.getAllIncomingNemAddressTransactionsUsingGETValidateBeforeCall(publicKey, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<string>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<string>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for getAllNemAddressTransactionsUsingGET.
         * 
         * @param {string} publicKey The NEM Account Public Key (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public getAllNemAddressTransactionsUsingGETCall(publicKey : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = /* replaceAll */"/account/get/transactions/{publicKey}".replace(new RegExp("\\{publicKey\\}", 'g'),this.apiClient.escapeString(publicKey.toString()));
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
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new RemoteAccountApi.RemoteAccountApi$3(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /**
         * Gets the all nem address transactions using GET validate before call.
         * 
         * @param {string} publicKey the public key
         * @param {*} progressListener the progress listener
         * @param {*} progressRequestListener the progress request listener
         * @return {com.squareup.okhttp.Call} the all nem address transactions using GET validate before call
         * @throws ApiException the api exception
         * @private
         */
        /*private*/ getAllNemAddressTransactionsUsingGETValidateBeforeCall(publicKey : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(publicKey == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'publicKey\' when calling getAllNemAddressTransactionsUsingGET(Async)");
            }
            let call : com.squareup.okhttp.Call = this.getAllNemAddressTransactionsUsingGETCall(publicKey, progressListener, progressRequestListener);
            return call;
        }

        /**
         * getAllNemAddressTransactions.
         * 
         * @param {string} publicKey The NEM Account Public Key (required)
         * @return {string} String
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public getAllNemAddressTransactionsUsingGET(publicKey : string) : string {
            let resp : io.nem.ApiResponse<string> = this.getAllNemAddressTransactionsUsingGETWithHttpInfo(publicKey);
            return resp.getData();
        }

        /**
         * getAllNemAddressTransactions.
         * 
         * @param {string} publicKey The NEM Account Public Key (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;String&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public getAllNemAddressTransactionsUsingGETWithHttpInfo(publicKey : string) : io.nem.ApiResponse<string> {
            let call : com.squareup.okhttp.Call = this.getAllNemAddressTransactionsUsingGETValidateBeforeCall(publicKey, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<string>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<string>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * getAllNemAddressTransactions (asynchronously).
         * 
         * @param {string} publicKey The NEM Account Public Key (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public getAllNemAddressTransactionsUsingGETAsync(publicKey : string, callback : io.nem.ApiCallback<string>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new RemoteAccountApi.RemoteAccountApi$4(this, callback);
                progressRequestListener = new RemoteAccountApi.RemoteAccountApi$5(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.getAllNemAddressTransactionsUsingGETValidateBeforeCall(publicKey, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<string>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<string>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for getAllNemAddressTransactionsWithPageSizeUsingGET.
         * 
         * @param {string} publicKey The NEM Account Public Key (required)
         * @param {string} pageSize Page Size (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public getAllNemAddressTransactionsWithPageSizeUsingGETCall(publicKey : string, pageSize : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = /* replaceAll *//* replaceAll */"/account/get/transactions/{publicKey}/{pageSize}".replace(new RegExp("\\{publicKey\\}", 'g'),this.apiClient.escapeString(publicKey.toString())).replace(new RegExp("\\{pageSize\\}", 'g'),this.apiClient.escapeString(pageSize.toString()));
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
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new RemoteAccountApi.RemoteAccountApi$6(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /**
         * Gets the all nem address transactions with page size using GET validate before call.
         * 
         * @param {string} publicKey the public key
         * @param {string} pageSize the page size
         * @param {*} progressListener the progress listener
         * @param {*} progressRequestListener the progress request listener
         * @return {com.squareup.okhttp.Call} the all nem address transactions with page size using GET validate before call
         * @throws ApiException the api exception
         * @private
         */
        /*private*/ getAllNemAddressTransactionsWithPageSizeUsingGETValidateBeforeCall(publicKey : string, pageSize : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(publicKey == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'publicKey\' when calling getAllNemAddressTransactionsWithPageSizeUsingGET(Async)");
            }
            if(pageSize == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'pageSize\' when calling getAllNemAddressTransactionsWithPageSizeUsingGET(Async)");
            }
            let call : com.squareup.okhttp.Call = this.getAllNemAddressTransactionsWithPageSizeUsingGETCall(publicKey, pageSize, progressListener, progressRequestListener);
            return call;
        }

        /**
         * getAllNemAddressTransactionsWithPageSize.
         * 
         * @param {string} publicKey The NEM Account Public Key (required)
         * @param {string} pageSize Page Size (required)
         * @return {string} String
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public getAllNemAddressTransactionsWithPageSizeUsingGET(publicKey : string, pageSize : string) : string {
            let resp : io.nem.ApiResponse<string> = this.getAllNemAddressTransactionsWithPageSizeUsingGETWithHttpInfo(publicKey, pageSize);
            return resp.getData();
        }

        /**
         * getAllNemAddressTransactionsWithPageSize.
         * 
         * @param {string} publicKey The NEM Account Public Key (required)
         * @param {string} pageSize Page Size (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;String&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public getAllNemAddressTransactionsWithPageSizeUsingGETWithHttpInfo(publicKey : string, pageSize : string) : io.nem.ApiResponse<string> {
            let call : com.squareup.okhttp.Call = this.getAllNemAddressTransactionsWithPageSizeUsingGETValidateBeforeCall(publicKey, pageSize, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<string>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<string>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * getAllNemAddressTransactionsWithPageSize (asynchronously).
         * 
         * @param {string} publicKey The NEM Account Public Key (required)
         * @param {string} pageSize Page Size (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public getAllNemAddressTransactionsWithPageSizeUsingGETAsync(publicKey : string, pageSize : string, callback : io.nem.ApiCallback<string>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new RemoteAccountApi.RemoteAccountApi$7(this, callback);
                progressRequestListener = new RemoteAccountApi.RemoteAccountApi$8(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.getAllNemAddressTransactionsWithPageSizeUsingGETValidateBeforeCall(publicKey, pageSize, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<string>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<string>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for getAllOutgoingNemAddressTransactionsUsingGET.
         * 
         * @param {string} publicKey The NEM Account Public Key (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public getAllOutgoingNemAddressTransactionsUsingGETCall(publicKey : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = /* replaceAll */"/account/get/outgoing/transactions/{publicKey}".replace(new RegExp("\\{publicKey\\}", 'g'),this.apiClient.escapeString(publicKey.toString()));
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
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new RemoteAccountApi.RemoteAccountApi$9(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /**
         * Gets the all outgoing nem address transactions using GET validate before call.
         * 
         * @param {string} publicKey the public key
         * @param {*} progressListener the progress listener
         * @param {*} progressRequestListener the progress request listener
         * @return {com.squareup.okhttp.Call} the all outgoing nem address transactions using GET validate before call
         * @throws ApiException the api exception
         * @private
         */
        /*private*/ getAllOutgoingNemAddressTransactionsUsingGETValidateBeforeCall(publicKey : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(publicKey == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'publicKey\' when calling getAllOutgoingNemAddressTransactionsUsingGET(Async)");
            }
            let call : com.squareup.okhttp.Call = this.getAllOutgoingNemAddressTransactionsUsingGETCall(publicKey, progressListener, progressRequestListener);
            return call;
        }

        /**
         * getAllOutgoingNemAddressTransactions.
         * 
         * @param {string} publicKey The NEM Account Public Key (required)
         * @return {string} String
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public getAllOutgoingNemAddressTransactionsUsingGET(publicKey : string) : string {
            let resp : io.nem.ApiResponse<string> = this.getAllOutgoingNemAddressTransactionsUsingGETWithHttpInfo(publicKey);
            return resp.getData();
        }

        /**
         * getAllOutgoingNemAddressTransactions.
         * 
         * @param {string} publicKey The NEM Account Public Key (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;String&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public getAllOutgoingNemAddressTransactionsUsingGETWithHttpInfo(publicKey : string) : io.nem.ApiResponse<string> {
            let call : com.squareup.okhttp.Call = this.getAllOutgoingNemAddressTransactionsUsingGETValidateBeforeCall(publicKey, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<string>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<string>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * getAllOutgoingNemAddressTransactions (asynchronously).
         * 
         * @param {string} publicKey The NEM Account Public Key (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public getAllOutgoingNemAddressTransactionsUsingGETAsync(publicKey : string, callback : io.nem.ApiCallback<string>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new RemoteAccountApi.RemoteAccountApi$10(this, callback);
                progressRequestListener = new RemoteAccountApi.RemoteAccountApi$11(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.getAllOutgoingNemAddressTransactionsUsingGETValidateBeforeCall(publicKey, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<string>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<string>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for getAllUnconfirmedNemAddressTransactionsUsingGET.
         * 
         * @param {string} publicKey The NEM Account Public Key (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public getAllUnconfirmedNemAddressTransactionsUsingGETCall(publicKey : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = /* replaceAll */"/account/get/unconfirmed/transactions/{publicKey}".replace(new RegExp("\\{publicKey\\}", 'g'),this.apiClient.escapeString(publicKey.toString()));
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
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new RemoteAccountApi.RemoteAccountApi$12(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /**
         * Gets the all unconfirmed nem address transactions using GET validate before call.
         * 
         * @param {string} publicKey the public key
         * @param {*} progressListener the progress listener
         * @param {*} progressRequestListener the progress request listener
         * @return {com.squareup.okhttp.Call} the all unconfirmed nem address transactions using GET validate before call
         * @throws ApiException the api exception
         * @private
         */
        /*private*/ getAllUnconfirmedNemAddressTransactionsUsingGETValidateBeforeCall(publicKey : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(publicKey == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'publicKey\' when calling getAllUnconfirmedNemAddressTransactionsUsingGET(Async)");
            }
            let call : com.squareup.okhttp.Call = this.getAllUnconfirmedNemAddressTransactionsUsingGETCall(publicKey, progressListener, progressRequestListener);
            return call;
        }

        /**
         * getAllUnconfirmedNemAddressTransactions.
         * 
         * @param {string} publicKey The NEM Account Public Key (required)
         * @return {string} String
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public getAllUnconfirmedNemAddressTransactionsUsingGET(publicKey : string) : string {
            let resp : io.nem.ApiResponse<string> = this.getAllUnconfirmedNemAddressTransactionsUsingGETWithHttpInfo(publicKey);
            return resp.getData();
        }

        /**
         * getAllUnconfirmedNemAddressTransactions.
         * 
         * @param {string} publicKey The NEM Account Public Key (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;String&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public getAllUnconfirmedNemAddressTransactionsUsingGETWithHttpInfo(publicKey : string) : io.nem.ApiResponse<string> {
            let call : com.squareup.okhttp.Call = this.getAllUnconfirmedNemAddressTransactionsUsingGETValidateBeforeCall(publicKey, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<string>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<string>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * getAllUnconfirmedNemAddressTransactions (asynchronously).
         * 
         * @param {string} publicKey The NEM Account Public Key (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public getAllUnconfirmedNemAddressTransactionsUsingGETAsync(publicKey : string, callback : io.nem.ApiCallback<string>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new RemoteAccountApi.RemoteAccountApi$13(this, callback);
                progressRequestListener = new RemoteAccountApi.RemoteAccountApi$14(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.getAllUnconfirmedNemAddressTransactionsUsingGETValidateBeforeCall(publicKey, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<string>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<string>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for getNemAddressDetailsUsingGET.
         * 
         * @param {string} publicKey The NEM Account Public Key (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public getNemAddressDetailsUsingGETCall(publicKey : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = /* replaceAll */"/account/get/info/{publicKey}".replace(new RegExp("\\{publicKey\\}", 'g'),this.apiClient.escapeString(publicKey.toString()));
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
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new RemoteAccountApi.RemoteAccountApi$15(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /**
         * Gets the nem address details using GET validate before call.
         * 
         * @param {string} publicKey the public key
         * @param {*} progressListener the progress listener
         * @param {*} progressRequestListener the progress request listener
         * @return {com.squareup.okhttp.Call} the nem address details using GET validate before call
         * @throws ApiException the api exception
         * @private
         */
        /*private*/ getNemAddressDetailsUsingGETValidateBeforeCall(publicKey : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(publicKey == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'publicKey\' when calling getNemAddressDetailsUsingGET(Async)");
            }
            let call : com.squareup.okhttp.Call = this.getNemAddressDetailsUsingGETCall(publicKey, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Get the NEM Address Details
         * This endpoint returns the NEM Address/Account Information of a given address.
         * 
         * @param {string} publicKey The NEM Account Public Key (required)
         * @return {io.nem.xpx.model.AccountMetaDataPair} AccountMetaDataPair
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public getNemAddressDetailsUsingGET(publicKey : string) : io.nem.xpx.model.AccountMetaDataPair {
            let resp : io.nem.ApiResponse<io.nem.xpx.model.AccountMetaDataPair> = this.getNemAddressDetailsUsingGETWithHttpInfo(publicKey);
            return resp.getData();
        }

        /**
         * Get the NEM Address Details
         * This endpoint returns the NEM Address/Account Information of a given address.
         * 
         * @param {string} publicKey The NEM Account Public Key (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;AccountMetaDataPair&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public getNemAddressDetailsUsingGETWithHttpInfo(publicKey : string) : io.nem.ApiResponse<io.nem.xpx.model.AccountMetaDataPair> {
            let call : com.squareup.okhttp.Call = this.getNemAddressDetailsUsingGETValidateBeforeCall(publicKey, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<io.nem.xpx.model.AccountMetaDataPair>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<io.nem.xpx.model.AccountMetaDataPair>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Get the NEM Address Details (asynchronously)
         * This endpoint returns the NEM Address/Account Information of a given address.
         * 
         * @param {string} publicKey The NEM Account Public Key (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public getNemAddressDetailsUsingGETAsync(publicKey : string, callback : io.nem.ApiCallback<io.nem.xpx.model.AccountMetaDataPair>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new RemoteAccountApi.RemoteAccountApi$16(this, callback);
                progressRequestListener = new RemoteAccountApi.RemoteAccountApi$17(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.getNemAddressDetailsUsingGETValidateBeforeCall(publicKey, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<io.nem.xpx.model.AccountMetaDataPair>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<io.nem.xpx.model.AccountMetaDataPair>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }
    }
    RemoteAccountApi["__class"] = "io.nem.xpx.service.remote.RemoteAccountApi";
    RemoteAccountApi["__interfaces"] = ["io.nem.xpx.service.intf.AccountApi"];



    export namespace RemoteAccountApi {

        export class RemoteAccountApi$0 implements com.squareup.okhttp.Interceptor {
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
        RemoteAccountApi$0["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class RemoteAccountApi$1 implements io.nem.ProgressResponseBody.ProgressListener {
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
        RemoteAccountApi$1["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class RemoteAccountApi$2 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        RemoteAccountApi$2["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class RemoteAccountApi$3 implements com.squareup.okhttp.Interceptor {
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
        RemoteAccountApi$3["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class RemoteAccountApi$4 implements io.nem.ProgressResponseBody.ProgressListener {
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
        RemoteAccountApi$4["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class RemoteAccountApi$5 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        RemoteAccountApi$5["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class RemoteAccountApi$6 implements com.squareup.okhttp.Interceptor {
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
        RemoteAccountApi$6["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class RemoteAccountApi$7 implements io.nem.ProgressResponseBody.ProgressListener {
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
        RemoteAccountApi$7["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class RemoteAccountApi$8 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        RemoteAccountApi$8["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class RemoteAccountApi$9 implements com.squareup.okhttp.Interceptor {
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
        RemoteAccountApi$9["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class RemoteAccountApi$10 implements io.nem.ProgressResponseBody.ProgressListener {
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
        RemoteAccountApi$10["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class RemoteAccountApi$11 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        RemoteAccountApi$11["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class RemoteAccountApi$12 implements com.squareup.okhttp.Interceptor {
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
        RemoteAccountApi$12["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class RemoteAccountApi$13 implements io.nem.ProgressResponseBody.ProgressListener {
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
        RemoteAccountApi$13["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class RemoteAccountApi$14 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        RemoteAccountApi$14["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class RemoteAccountApi$15 implements com.squareup.okhttp.Interceptor {
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
        RemoteAccountApi$15["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class RemoteAccountApi$16 implements io.nem.ProgressResponseBody.ProgressListener {
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
        RemoteAccountApi$16["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class RemoteAccountApi$17 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        RemoteAccountApi$17["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];


    }

}

