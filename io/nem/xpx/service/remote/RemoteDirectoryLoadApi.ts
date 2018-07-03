/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.remote {
    /**
     * Instantiates a new remote directory load api.
     * 
     * @param {io.nem.ApiClient} apiClient the api client
     * @class
     */
    export class RemoteDirectoryLoadApi implements io.nem.xpx.service.intf.DirectoryLoadApi {
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
         * Build call for loadDirectoryUsingGET.
         * 
         * @param {string} nemHash NEM Txn (Public) linked to the directory (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public loadDirectoryUsingGETCall(nemHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = /* replaceAll */"/directory/load/{nemHash}/**".replace(new RegExp("\\{nemHash\\}", 'g'),this.apiClient.escapeString(nemHash.toString()));
            let localVarQueryParams : Array<io.nem.Pair> = <any>([]);
            let localVarHeaderParams : any = <any>({});
            let localVarFormParams : any = <any>({});
            let localVarAccepts : string[] = ["*/*"];
            let localVarAccept : string = this.apiClient.selectHeaderAccept(localVarAccepts);
            if(localVarAccept != null) /* put */(localVarHeaderParams["Accept"] = localVarAccept);
            let localVarContentTypes : string[] = ["application/json"];
            let localVarContentType : string = this.apiClient.selectHeaderContentType(localVarContentTypes);
            /* put */(localVarHeaderParams["Content-Type"] = localVarContentType);
            if(progressListener != null) {
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new RemoteDirectoryLoadApi.RemoteDirectoryLoadApi$0(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /**
         * Load directory using GET validate before call.
         * 
         * @param {string} nemHash the nem hash
         * @param {*} progressListener the progress listener
         * @param {*} progressRequestListener the progress request listener
         * @return {com.squareup.okhttp.Call} the com.squareup.okhttp. call
         * @throws ApiException the api exception
         * @private
         */
        /*private*/ loadDirectoryUsingGETValidateBeforeCall(nemHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(nemHash == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'nemHash\' when calling loadDirectoryUsingGET(Async)");
            }
            let call : com.squareup.okhttp.Call = this.loadDirectoryUsingGETCall(nemHash, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Loads a Static Content.
         * Loads a Static Content.
         * @param {string} nemHash NEM Txn (Public) linked to the directory (required)
         * @return {*} Object
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public loadDirectoryUsingGET(nemHash : string) : any {
            let resp : io.nem.ApiResponse<any> = this.loadDirectoryUsingGETWithHttpInfo(nemHash);
            return resp.getData();
        }

        /**
         * Loads a Static Content.
         * Loads a Static Content.
         * @param {string} nemHash NEM Txn (Public) linked to the directory (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;Object&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public loadDirectoryUsingGETWithHttpInfo(nemHash : string) : io.nem.ApiResponse<any> {
            let call : com.squareup.okhttp.Call = this.loadDirectoryUsingGETValidateBeforeCall(nemHash, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<any>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<any>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Loads a Static Content. (asynchronously)
         * Loads a Static Content.
         * @param {string} nemHash NEM Txn (Public) linked to the directory (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public loadDirectoryUsingGETAsync(nemHash : string, callback : io.nem.ApiCallback<any>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new RemoteDirectoryLoadApi.RemoteDirectoryLoadApi$1(this, callback);
                progressRequestListener = new RemoteDirectoryLoadApi.RemoteDirectoryLoadApi$2(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.loadDirectoryUsingGETValidateBeforeCall(nemHash, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<any>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<any>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }
    }
    RemoteDirectoryLoadApi["__class"] = "io.nem.xpx.service.remote.RemoteDirectoryLoadApi";
    RemoteDirectoryLoadApi["__interfaces"] = ["io.nem.xpx.service.intf.DirectoryLoadApi"];



    export namespace RemoteDirectoryLoadApi {

        export class RemoteDirectoryLoadApi$0 implements com.squareup.okhttp.Interceptor {
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
        RemoteDirectoryLoadApi$0["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class RemoteDirectoryLoadApi$1 implements io.nem.ProgressResponseBody.ProgressListener {
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
        RemoteDirectoryLoadApi$1["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class RemoteDirectoryLoadApi$2 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        RemoteDirectoryLoadApi$2["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];


    }

}

