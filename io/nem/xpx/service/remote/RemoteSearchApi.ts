/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.remote {
    /**
     * Instantiates a new remote search api.
     * s
     * 
     * @param {io.nem.ApiClient} apiClient the api client
     * @param {io.nem.xpx.service.NemTransactionApi} nemTransactionApi the nem transaction api
     * @class
     * @extends io.nem.xpx.service.common.PrivateSearchApi
     */
    export class RemoteSearchApi extends io.nem.xpx.service.common.PrivateSearchApi implements io.nem.xpx.service.intf.SearchApi {
        /**
         * The api client.
         */
        /*private*/ apiClient : io.nem.ApiClient;

        public constructor(apiClient : io.nem.ApiClient, nemTransactionApi : io.nem.xpx.service.NemTransactionApi) {
            super(nemTransactionApi);
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
         * Build call for searchTransactionWithKeywordUsingGET.
         * 
         * @param {string} xPubkey The Sender or Receiver&#39;s Public Key (required)
         * @param {string} keywords Comma delimited Keyword that will be match to the files available (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public searchTransactionWithKeywordUsingGETCall(xPubkey : string, keywords : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = /* replaceAll */"/search/by/keywords/{keywords}".replace(new RegExp("\\{keywords\\}", 'g'),this.apiClient.escapeString(keywords.toString()));
            let localVarQueryParams : Array<io.nem.Pair> = <any>([]);
            let localVarHeaderParams : any = <any>({});
            if(xPubkey != null) /* put */(localVarHeaderParams["x-pubkey"] = this.apiClient.parameterToString(xPubkey));
            let localVarFormParams : any = <any>({});
            let localVarAccepts : string[] = ["application/json"];
            let localVarAccept : string = this.apiClient.selectHeaderAccept(localVarAccepts);
            if(localVarAccept != null) /* put */(localVarHeaderParams["Accept"] = localVarAccept);
            let localVarContentTypes : string[] = ["application/json"];
            let localVarContentType : string = this.apiClient.selectHeaderContentType(localVarContentTypes);
            /* put */(localVarHeaderParams["Content-Type"] = localVarContentType);
            if(progressListener != null) {
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new RemoteSearchApi.RemoteSearchApi$0(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /**
         * Search transaction with keyword using GET validate before call.
         * 
         * @param {string} xPubkey the x pubkey
         * @param {string} keywords the keywords
         * @param {*} progressListener the progress listener
         * @param {*} progressRequestListener the progress request listener
         * @return {com.squareup.okhttp.Call} the com.squareup.okhttp. call
         * @throws ApiException the api exception
         * @private
         */
        /*private*/ searchTransactionWithKeywordUsingGETValidateBeforeCall(xPubkey : string, keywords : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(xPubkey == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'xPubkey\' when calling searchTransactionWithKeywordUsingGET(Async)");
            }
            if(keywords == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'keywords\' when calling searchTransactionWithKeywordUsingGET(Async)");
            }
            let call : com.squareup.okhttp.Call = this.searchTransactionWithKeywordUsingGETCall(xPubkey, keywords, progressListener, progressRequestListener);
            return call;
        }

        public searchTransactionWithKeywordUsingGET$java_lang_String$java_lang_String(xPubkey : string, keywords : string) : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> {
            let resp : io.nem.ApiResponse<Array<io.nem.xpx.model.ResourceHashMessageJsonEntity>> = this.searchTransactionWithKeywordUsingGETWithHttpInfo(xPubkey, keywords);
            return resp.getData();
        }

        /**
         * Search through all the owners documents to find a content that matches the text specified.
         * This endpoint can only be used to look up publicly available resources (PLAIN Message Types).
         * @param {string} xPubkey The Sender or Receiver&#39;s Public Key (required)
         * @param {string} keywords Comma delimited Keyword that will be match to the files available (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;List&lt;ResourceHashMessageJsonEntity&gt;&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public searchTransactionWithKeywordUsingGETWithHttpInfo(xPubkey : string, keywords : string) : io.nem.ApiResponse<Array<io.nem.xpx.model.ResourceHashMessageJsonEntity>> {
            let call : com.squareup.okhttp.Call = this.searchTransactionWithKeywordUsingGETValidateBeforeCall(xPubkey, keywords, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<Array<io.nem.xpx.model.ResourceHashMessageJsonEntity>>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<Array<io.nem.xpx.model.ResourceHashMessageJsonEntity>>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Search through all the owners documents to find a content that matches the text specified. (asynchronously)
         * This endpoint can only be used to look up publicly available resources (PLAIN Message Types).
         * @param {string} xPubkey The Sender or Receiver&#39;s Public Key (required)
         * @param {string} keywords Comma delimited Keyword that will be match to the files available (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public searchTransactionWithKeywordUsingGETAsync(xPubkey : string, keywords : string, callback : io.nem.ApiCallback<Array<io.nem.xpx.model.ResourceHashMessageJsonEntity>>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new RemoteSearchApi.RemoteSearchApi$1(this, callback);
                progressRequestListener = new RemoteSearchApi.RemoteSearchApi$2(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.searchTransactionWithKeywordUsingGETValidateBeforeCall(xPubkey, keywords, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<Array<io.nem.xpx.model.ResourceHashMessageJsonEntity>>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<Array<io.nem.xpx.model.ResourceHashMessageJsonEntity>>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for searchTransactionWithMetadataUsingGET.
         * 
         * @param {string} xPubkey The Sender or Receiver&#39;s Public Key (required)
         * @param {string} key Meta key (optional)
         * @param {string} value Meta value (optional)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public searchTransactionWithMetadataUsingGETCall(xPubkey : string, key : string, value : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = "/search/by/metadata";
            let localVarQueryParams : Array<io.nem.Pair> = <any>([]);
            if(key != null) /* addAll */((l1, l2) => l1.push.apply(l1, l2))(localVarQueryParams, this.apiClient.parameterToPairs("", "key", key));
            if(value != null) /* addAll */((l1, l2) => l1.push.apply(l1, l2))(localVarQueryParams, this.apiClient.parameterToPairs("", "value", value));
            let localVarHeaderParams : any = <any>({});
            if(xPubkey != null) /* put */(localVarHeaderParams["x-pubkey"] = this.apiClient.parameterToString(xPubkey));
            let localVarFormParams : any = <any>({});
            let localVarAccepts : string[] = ["application/json"];
            let localVarAccept : string = this.apiClient.selectHeaderAccept(localVarAccepts);
            if(localVarAccept != null) /* put */(localVarHeaderParams["Accept"] = localVarAccept);
            let localVarContentTypes : string[] = ["application/json"];
            let localVarContentType : string = this.apiClient.selectHeaderContentType(localVarContentTypes);
            /* put */(localVarHeaderParams["Content-Type"] = localVarContentType);
            if(progressListener != null) {
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new RemoteSearchApi.RemoteSearchApi$3(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /**
         * Search transaction with metadata using GET validate before call.
         * 
         * @param {string} xPubkey the x pubkey
         * @param {string} key the key
         * @param {string} value the value
         * @param {*} progressListener the progress listener
         * @param {*} progressRequestListener the progress request listener
         * @return {com.squareup.okhttp.Call} the com.squareup.okhttp. call
         * @throws ApiException the api exception
         * @private
         */
        /*private*/ searchTransactionWithMetadataUsingGETValidateBeforeCall(xPubkey : string, key : string, value : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(xPubkey == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'xPubkey\' when calling searchTransactionWithMetadataUsingGET(Async)");
            }
            let call : com.squareup.okhttp.Call = this.searchTransactionWithMetadataUsingGETCall(xPubkey, key, value, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Search through all the owners documents to find a key that matches the specified parameter key
         * This endpoint can only be used to look up publicly available resources (PLAIN Message Types).
         * @param {string} xPubkey The Sender or Receiver&#39;s Public Key (required)
         * @param {string} key Meta key (optional)
         * @param {string} value Meta value (optional)
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity[]} List&lt;ResourceHashMessageJsonEntity&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public searchTransactionWithMetadataUsingGET(xPubkey : string, key : string, value : string) : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> {
            let resp : io.nem.ApiResponse<Array<io.nem.xpx.model.ResourceHashMessageJsonEntity>> = this.searchTransactionWithMetadataUsingGETWithHttpInfo(xPubkey, key, value);
            return resp.getData();
        }

        /**
         * Search through all the owners documents to find a key that matches the specified parameter key
         * This endpoint can only be used to look up publicly available resources (PLAIN Message Types).
         * @param {string} xPubkey The Sender or Receiver&#39;s Public Key (required)
         * @param {string} key Meta key (optional)
         * @param {string} value Meta value (optional)
         * @return {io.nem.ApiResponse} ApiResponse&lt;List&lt;ResourceHashMessageJsonEntity&gt;&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public searchTransactionWithMetadataUsingGETWithHttpInfo(xPubkey : string, key : string, value : string) : io.nem.ApiResponse<Array<io.nem.xpx.model.ResourceHashMessageJsonEntity>> {
            let call : com.squareup.okhttp.Call = this.searchTransactionWithMetadataUsingGETValidateBeforeCall(xPubkey, key, value, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<Array<io.nem.xpx.model.ResourceHashMessageJsonEntity>>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<Array<io.nem.xpx.model.ResourceHashMessageJsonEntity>>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Search through all the owners documents to find a key that matches the specified parameter key (asynchronously)
         * This endpoint can only be used to look up publicly available resources (PLAIN Message Types).
         * @param {string} xPubkey The Sender or Receiver&#39;s Public Key (required)
         * @param {string} key Meta key (optional)
         * @param {string} value Meta value (optional)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public searchTransactionWithMetadataUsingGETAsync(xPubkey : string, key : string, value : string, callback : io.nem.ApiCallback<Array<io.nem.xpx.model.ResourceHashMessageJsonEntity>>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new RemoteSearchApi.RemoteSearchApi$4(this, callback);
                progressRequestListener = new RemoteSearchApi.RemoteSearchApi$5(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.searchTransactionWithMetadataUsingGETValidateBeforeCall(xPubkey, key, value, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<Array<io.nem.xpx.model.ResourceHashMessageJsonEntity>>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<Array<io.nem.xpx.model.ResourceHashMessageJsonEntity>>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        public searchTransactionWithKeywordUsingGET$java_lang_String$java_lang_String$java_lang_String(xPvKey : string, xPubkey : string, keywords : string) : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> {
            return super.searchTransactionWithKeyword(xPvKey, xPubkey, keywords);
        }

        /**
         * 
         * @param {string} xPvKey
         * @param {string} xPubkey
         * @param {string} keywords
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity[]}
         */
        public searchTransactionWithKeywordUsingGET(xPvKey? : any, xPubkey? : any, keywords? : any) : any {
            if(((typeof xPvKey === 'string') || xPvKey === null) && ((typeof xPubkey === 'string') || xPubkey === null) && ((typeof keywords === 'string') || keywords === null)) {
                return <any>this.searchTransactionWithKeywordUsingGET$java_lang_String$java_lang_String$java_lang_String(xPvKey, xPubkey, keywords);
            } else if(((typeof xPvKey === 'string') || xPvKey === null) && ((typeof xPubkey === 'string') || xPubkey === null) && keywords === undefined) {
                return <any>this.searchTransactionWithKeywordUsingGET$java_lang_String$java_lang_String(xPvKey, xPubkey);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @param {string} xPvKey
         * @param {string} xPubkey
         * @param {string} key
         * @param {string} value
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity[]}
         */
        public searchTransactionWithMetadataKeyValuePair(xPvKey : string, xPubkey : string, key : string, value : string) : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> {
            return super.searchTransactionWithMetadataKeyValuePair(xPvKey, xPubkey, key, value);
        }

        /**
         * 
         * @param {string} xPvKey
         * @param {string} xPubkey
         * @param {string} name
         * @return {io.nem.xpx.model.ResourceHashMessageJsonEntity[]}
         */
        public searchTransactionWithNameUsingGET(xPvKey : string, xPubkey : string, name : string) : Array<io.nem.xpx.model.ResourceHashMessageJsonEntity> {
            return super.searchTransactionWithName(xPvKey, xPubkey, name);
        }
    }
    RemoteSearchApi["__class"] = "io.nem.xpx.service.remote.RemoteSearchApi";
    RemoteSearchApi["__interfaces"] = ["io.nem.xpx.service.intf.SearchApi"];



    export namespace RemoteSearchApi {

        export class RemoteSearchApi$0 implements com.squareup.okhttp.Interceptor {
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
        RemoteSearchApi$0["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class RemoteSearchApi$1 implements io.nem.ProgressResponseBody.ProgressListener {
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
        RemoteSearchApi$1["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class RemoteSearchApi$2 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        RemoteSearchApi$2["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class RemoteSearchApi$3 implements com.squareup.okhttp.Interceptor {
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
        RemoteSearchApi$3["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class RemoteSearchApi$4 implements io.nem.ProgressResponseBody.ProgressListener {
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
        RemoteSearchApi$4["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class RemoteSearchApi$5 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        RemoteSearchApi$5["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];


    }

}

