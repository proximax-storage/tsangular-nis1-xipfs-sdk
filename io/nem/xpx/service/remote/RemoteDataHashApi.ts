/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.remote {
    /**
     * Instantiates a new remote data hash api.
     * 
     * @param {io.nem.ApiClient} apiClient the api client
     * @class
     */
    export class RemoteDataHashApi implements io.nem.xpx.service.intf.DataHashApi {
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
         * Build call for generateHashForDataOnlyUsingPOST.
         * 
         * @param {Array} data Free form string data that will be stored on the P2P Network (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public generateHashForDataOnlyUsingPOSTCall(data : number[], progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = data;
            let localVarPath : string = "/datahash/hash-only";
            let localVarQueryParams : Array<io.nem.Pair> = <any>([]);
            let localVarHeaderParams : any = <any>({});
            let localVarFormParams : any = <any>({});
            let localVarAccepts : string[] = ["application/json"];
            let localVarAccept : string = this.apiClient.selectHeaderAccept(localVarAccepts);
            if(localVarAccept != null) /* put */(localVarHeaderParams["Accept"] = localVarAccept);
            let localVarContentTypes : string[] = ["multipart/form-data"];
            let localVarContentType : string = this.apiClient.selectHeaderContentType(localVarContentTypes);
            /* put */(localVarHeaderParams["Content-Type"] = localVarContentType);
            if(progressListener != null) {
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new RemoteDataHashApi.RemoteDataHashApi$0(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /**
         * Generate hash for data only using POST validate before call.
         * 
         * @param {Array} data the data
         * @param {*} progressListener the progress listener
         * @param {*} progressRequestListener the progress request listener
         * @return {com.squareup.okhttp.Call} the com.squareup.okhttp. call
         * @throws ApiException the api exception
         * @private
         */
        /*private*/ generateHashForDataOnlyUsingPOSTValidateBeforeCall(data : number[], progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(data == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'data\' when calling generateHashForDataOnlyUsingPOST(Async)");
            }
            let call : com.squareup.okhttp.Call = this.generateHashForDataOnlyUsingPOSTCall(data, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Generates the datahash but doesn&#39;t upload the file on the network
         * This endpoint can be used to generates the datahash and uploads the file in the process.
         * @param {Array} data Free form string data that will be stored on the P2P Network (required)
         * @return {string} String
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public generateHashForDataOnlyUsingPOST(data : number[]) : string {
            let resp : io.nem.ApiResponse<string> = this.generateHashForDataOnlyUsingPOSTWithHttpInfo(data);
            return resp.getData();
        }

        /**
         * Generates the datahash but doesn&#39;t upload the file on the network
         * This endpoint can be used to generates the datahash and uploads the file in the process.
         * @param {Array} data Free form string data that will be stored on the P2P Network (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;String&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public generateHashForDataOnlyUsingPOSTWithHttpInfo(data : number[]) : io.nem.ApiResponse<string> {
            let call : com.squareup.okhttp.Call = this.generateHashForDataOnlyUsingPOSTValidateBeforeCall(data, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<string>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<string>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Generates the datahash but doesn&#39;t upload the file on the network (asynchronously)
         * This endpoint can be used to generates the datahash and uploads the file in the process.
         * @param {Array} data Free form string data that will be stored on the P2P Network (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public generateHashForDataOnlyUsingPOSTAsync(data : number[], callback : io.nem.ApiCallback<string>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new RemoteDataHashApi.RemoteDataHashApi$1(this, callback);
                progressRequestListener = new RemoteDataHashApi.RemoteDataHashApi$2(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.generateHashForDataOnlyUsingPOSTValidateBeforeCall(data, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<string>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<string>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }
    }
    RemoteDataHashApi["__class"] = "io.nem.xpx.service.remote.RemoteDataHashApi";
    RemoteDataHashApi["__interfaces"] = ["io.nem.xpx.service.intf.DataHashApi"];



    export namespace RemoteDataHashApi {

        export class RemoteDataHashApi$0 implements com.squareup.okhttp.Interceptor {
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
        RemoteDataHashApi$0["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class RemoteDataHashApi$1 implements io.nem.ProgressResponseBody.ProgressListener {
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
        RemoteDataHashApi$1["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class RemoteDataHashApi$2 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        RemoteDataHashApi$2["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];


    }

}

