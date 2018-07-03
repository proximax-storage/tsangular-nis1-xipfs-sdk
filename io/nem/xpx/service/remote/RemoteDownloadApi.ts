/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.remote {
    /**
     * Instantiates a new remote download api.
     * 
     * @param {io.nem.ApiClient} apiClient the api client
     * @class
     */
    export class RemoteDownloadApi implements io.nem.xpx.service.intf.DownloadApi {
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
         * Build call for downloadBinaryUsingGET.
         * 
         * @param {string} nemHash The NEM Transaction Hash (required)
         * @param {string} transferMode Transfer Mode default: bytes (bytes,stream,base64) (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public downloadBinaryUsingGETCall(nemHash : string, transferMode : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = "/download/binary";
            let localVarQueryParams : Array<io.nem.Pair> = <any>([]);
            if(nemHash != null) /* addAll */((l1, l2) => l1.push.apply(l1, l2))(localVarQueryParams, this.apiClient.parameterToPairs("", "nemHash", nemHash));
            if(transferMode != null) /* addAll */((l1, l2) => l1.push.apply(l1, l2))(localVarQueryParams, this.apiClient.parameterToPairs("", "transferMode", transferMode));
            let localVarHeaderParams : any = <any>({});
            let localVarFormParams : any = <any>({});
            let localVarAccepts : string[] = ["*/*"];
            let localVarAccept : string = this.apiClient.selectHeaderAccept(localVarAccepts);
            if(localVarAccept != null) /* put */(localVarHeaderParams["Accept"] = localVarAccept);
            let localVarContentTypes : string[] = ["application/json"];
            let localVarContentType : string = this.apiClient.selectHeaderContentType(localVarContentTypes);
            /* put */(localVarHeaderParams["Content-Type"] = localVarContentType);
            if(progressListener != null) {
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new RemoteDownloadApi.RemoteDownloadApi$0(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /**
         * Download binary using GET validate before call.
         * 
         * @param {string} nemHash the nem hash
         * @param {string} transferMode the transfer mode
         * @param {*} progressListener the progress listener
         * @param {*} progressRequestListener the progress request listener
         * @return {com.squareup.okhttp.Call} the com.squareup.okhttp. call
         * @throws ApiException the api exception
         * @private
         */
        /*private*/ downloadBinaryUsingGETValidateBeforeCall(nemHash : string, transferMode : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(nemHash == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'nemHash\' when calling downloadBinaryUsingGET(Async)");
            }
            if(transferMode == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'transferMode\' when calling downloadBinaryUsingGET(Async)");
            }
            let call : com.squareup.okhttp.Call = this.downloadBinaryUsingGETCall(nemHash, transferMode, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Download a binary using NEM Transaction Hash
         * Download the binary file associated to a NEM Hash. If NEM Hash uses SECURE Message, it returns the NEM TXN Payload Instead
         * @param {string} nemHash The NEM Transaction Hash (required)
         * @param {string} transferMode Transfer Mode default: bytes (bytes,stream,base64) (required)
         * @return {Array} byte[]
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public downloadBinaryUsingGET(nemHash : string, transferMode : string) : number[] {
            let resp : io.nem.ApiResponse<number[]> = this.downloadBinaryUsingGETWithHttpInfo(nemHash, transferMode);
            return resp.getData();
        }

        /**
         * Download a binary using NEM Transaction Hash
         * Download the binary file associated to a NEM Hash. If NEM Hash uses SECURE Message, it returns the NEM TXN Payload Instead
         * @param {string} nemHash The NEM Transaction Hash (required)
         * @param {string} transferMode Transfer Mode default: bytes (bytes,stream,base64) (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;byte[]&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public downloadBinaryUsingGETWithHttpInfo(nemHash : string, transferMode : string) : io.nem.ApiResponse<number[]> {
            let call : com.squareup.okhttp.Call = this.downloadBinaryUsingGETValidateBeforeCall(nemHash, transferMode, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Download a binary using NEM Transaction Hash (asynchronously)
         * Download the binary file associated to a NEM Hash. If NEM Hash uses SECURE Message, it returns the NEM TXN Payload Instead
         * @param {string} nemHash The NEM Transaction Hash (required)
         * @param {string} transferMode Transfer Mode default: bytes (bytes,stream,base64) (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public downloadBinaryUsingGETAsync(nemHash : string, transferMode : string, callback : io.nem.ApiCallback<number[]>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new RemoteDownloadApi.RemoteDownloadApi$1(this, callback);
                progressRequestListener = new RemoteDownloadApi.RemoteDownloadApi$2(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.downloadBinaryUsingGETValidateBeforeCall(nemHash, transferMode, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for downloadFileUsingGET.
         * 
         * @param {string} nemHash The NEM Transaction Hash (required)
         * @param {string} transferMode Transfer Mode default: bytes (bytes,stream,base64) (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public downloadFileUsingGETCall(nemHash : string, transferMode : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = "/download/file";
            let localVarQueryParams : Array<io.nem.Pair> = <any>([]);
            if(nemHash != null) /* addAll */((l1, l2) => l1.push.apply(l1, l2))(localVarQueryParams, this.apiClient.parameterToPairs("", "nemHash", nemHash));
            if(transferMode != null) /* addAll */((l1, l2) => l1.push.apply(l1, l2))(localVarQueryParams, this.apiClient.parameterToPairs("", "transferMode", transferMode));
            let localVarHeaderParams : any = <any>({});
            let localVarFormParams : any = <any>({});
            let localVarAccepts : string[] = ["*/*"];
            let localVarAccept : string = this.apiClient.selectHeaderAccept(localVarAccepts);
            if(localVarAccept != null) /* put */(localVarHeaderParams["Accept"] = localVarAccept);
            let localVarContentTypes : string[] = ["application/json"];
            let localVarContentType : string = this.apiClient.selectHeaderContentType(localVarContentTypes);
            /* put */(localVarHeaderParams["Content-Type"] = localVarContentType);
            if(progressListener != null) {
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new RemoteDownloadApi.RemoteDownloadApi$3(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /**
         * Download file using GET validate before call.
         * 
         * @param {string} nemHash the nem hash
         * @param {string} transferMode the transfer mode
         * @param {*} progressListener the progress listener
         * @param {*} progressRequestListener the progress request listener
         * @return {com.squareup.okhttp.Call} the com.squareup.okhttp. call
         * @throws ApiException the api exception
         * @private
         */
        /*private*/ downloadFileUsingGETValidateBeforeCall(nemHash : string, transferMode : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(nemHash == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'nemHash\' when calling downloadFileUsingGET(Async)");
            }
            if(transferMode == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'transferMode\' when calling downloadFileUsingGET(Async)");
            }
            let call : com.squareup.okhttp.Call = this.downloadFileUsingGETCall(nemHash, transferMode, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Download a file associated to a NEM Hash.
         * Download the binary file associated to a NEM Hash. If NEM Hash uses SECURE Message, it returns the NEM TXN Payload Instead
         * @param {string} nemHash The NEM Transaction Hash (required)
         * @param {string} transferMode Transfer Mode default: bytes (bytes,stream,base64) (required)
         * @return {Array} byte[]
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public downloadFileUsingGET(nemHash : string, transferMode : string) : number[] {
            let resp : io.nem.ApiResponse<number[]> = this.downloadFileUsingGETWithHttpInfo(nemHash, transferMode);
            return resp.getData();
        }

        /**
         * Download a file associated to a NEM Hash.
         * Download the binary file associated to a NEM Hash. If NEM Hash uses SECURE Message, it returns the NEM TXN Payload Instead
         * @param {string} nemHash The NEM Transaction Hash (required)
         * @param {string} transferMode Transfer Mode default: bytes (bytes,stream,base64) (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;byte[]&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public downloadFileUsingGETWithHttpInfo(nemHash : string, transferMode : string) : io.nem.ApiResponse<number[]> {
            let call : com.squareup.okhttp.Call = this.downloadFileUsingGETValidateBeforeCall(nemHash, transferMode, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Download a file associated to a NEM Hash. (asynchronously)
         * Download the binary file associated to a NEM Hash. If NEM Hash uses SECURE Message, it returns the NEM TXN Payload Instead
         * @param {string} nemHash The NEM Transaction Hash (required)
         * @param {string} transferMode Transfer Mode default: bytes (bytes,stream,base64) (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public downloadFileUsingGETAsync(nemHash : string, transferMode : string, callback : io.nem.ApiCallback<number[]>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new RemoteDownloadApi.RemoteDownloadApi$4(this, callback);
                progressRequestListener = new RemoteDownloadApi.RemoteDownloadApi$5(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.downloadFileUsingGETValidateBeforeCall(nemHash, transferMode, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for downloadSecureBinaryUsingGET.
         * 
         * @param {string} xPvkey The Sender or Receiver&#39;s Private Key (required)
         * @param {string} nemHash The NEM Transaction Hash (required)
         * @param {string} transferType Transfer Type default: bytes (bytes,stream,base64) (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public downloadSecureBinaryUsingGETCall(xPvkey : string, nemHash : string, transferType : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = "/download/secure/binary";
            let localVarQueryParams : Array<io.nem.Pair> = <any>([]);
            if(nemHash != null) /* addAll */((l1, l2) => l1.push.apply(l1, l2))(localVarQueryParams, this.apiClient.parameterToPairs("", "nemHash", nemHash));
            if(transferType != null) /* addAll */((l1, l2) => l1.push.apply(l1, l2))(localVarQueryParams, this.apiClient.parameterToPairs("", "transferType", transferType));
            let localVarHeaderParams : any = <any>({});
            if(xPvkey != null) /* put */(localVarHeaderParams["x-pvkey"] = this.apiClient.parameterToString(xPvkey));
            let localVarFormParams : any = <any>({});
            let localVarAccepts : string[] = ["*/*"];
            let localVarAccept : string = this.apiClient.selectHeaderAccept(localVarAccepts);
            if(localVarAccept != null) /* put */(localVarHeaderParams["Accept"] = localVarAccept);
            let localVarContentTypes : string[] = ["application/json"];
            let localVarContentType : string = this.apiClient.selectHeaderContentType(localVarContentTypes);
            /* put */(localVarHeaderParams["Content-Type"] = localVarContentType);
            if(progressListener != null) {
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new RemoteDownloadApi.RemoteDownloadApi$6(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /**
         * Download secure binary using GET validate before call.
         * 
         * @param {string} xPvkey the x pvkey
         * @param {string} nemHash the nem hash
         * @param {string} transferType the transfer type
         * @param {*} progressListener the progress listener
         * @param {*} progressRequestListener the progress request listener
         * @return {com.squareup.okhttp.Call} the com.squareup.okhttp. call
         * @throws ApiException the api exception
         * @private
         */
        /*private*/ downloadSecureBinaryUsingGETValidateBeforeCall(xPvkey : string, nemHash : string, transferType : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(xPvkey == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'xPvkey\' when calling downloadSecureBinaryUsingGET(Async)");
            }
            if(nemHash == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'nemHash\' when calling downloadSecureBinaryUsingGET(Async)");
            }
            if(transferType == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'transferType\' when calling downloadSecureBinaryUsingGET(Async)");
            }
            let call : com.squareup.okhttp.Call = this.downloadSecureBinaryUsingGETCall(xPvkey, nemHash, transferType, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Download a secure resource/blob using NEM Private Key and Transaction Hash
         * Download a blob associated to a NEM Hash. If NEM Hash uses SECURE Message, it returns the NEM TXN Payload Instead
         * @param {string} xPvkey The Sender or Receiver&#39;s Private Key (required)
         * @param {string} nemHash The NEM Transaction Hash (required)
         * @param {string} transferType Transfer Type default: bytes (bytes,stream,base64) (required)
         * @return {Array} byte[]
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public downloadSecureBinaryUsingGET(xPvkey : string, nemHash : string, transferType : string) : number[] {
            let resp : io.nem.ApiResponse<number[]> = this.downloadSecureBinaryUsingGETWithHttpInfo(xPvkey, nemHash, transferType);
            return resp.getData();
        }

        /**
         * Download a secure resource/blob using NEM Private Key and Transaction Hash
         * Download a blob associated to a NEM Hash. If NEM Hash uses SECURE Message, it returns the NEM TXN Payload Instead
         * @param {string} xPvkey The Sender or Receiver&#39;s Private Key (required)
         * @param {string} nemHash The NEM Transaction Hash (required)
         * @param {string} transferType Transfer Type default: bytes (bytes,stream,base64) (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;byte[]&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public downloadSecureBinaryUsingGETWithHttpInfo(xPvkey : string, nemHash : string, transferType : string) : io.nem.ApiResponse<number[]> {
            let call : com.squareup.okhttp.Call = this.downloadSecureBinaryUsingGETValidateBeforeCall(xPvkey, nemHash, transferType, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Download a secure resource/blob using NEM Private Key and Transaction Hash (asynchronously)
         * Download a blob associated to a NEM Hash. If NEM Hash uses SECURE Message, it returns the NEM TXN Payload Instead
         * @param {string} xPvkey The Sender or Receiver&#39;s Private Key (required)
         * @param {string} nemHash The NEM Transaction Hash (required)
         * @param {string} transferType Transfer Type default: bytes (bytes,stream,base64) (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public downloadSecureBinaryUsingGETAsync(xPvkey : string, nemHash : string, transferType : string, callback : io.nem.ApiCallback<number[]>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new RemoteDownloadApi.RemoteDownloadApi$7(this, callback);
                progressRequestListener = new RemoteDownloadApi.RemoteDownloadApi$8(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.downloadSecureBinaryUsingGETValidateBeforeCall(xPvkey, nemHash, transferType, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for downloadSecureFileUsingGET.
         * 
         * @param {string} xPvkey The Sender or Receiver&#39;s Private Key (required)
         * @param {string} nemHash The NEM Transaction Hash (required)
         * @param {string} transferType Transfer Type default: bytes (bytes,stream,base64) (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public downloadSecureFileUsingGETCall(xPvkey : string, nemHash : string, transferType : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = "/download/secure/file";
            let localVarQueryParams : Array<io.nem.Pair> = <any>([]);
            if(nemHash != null) /* addAll */((l1, l2) => l1.push.apply(l1, l2))(localVarQueryParams, this.apiClient.parameterToPairs("", "nemHash", nemHash));
            if(transferType != null) /* addAll */((l1, l2) => l1.push.apply(l1, l2))(localVarQueryParams, this.apiClient.parameterToPairs("", "transferType", transferType));
            let localVarHeaderParams : any = <any>({});
            if(xPvkey != null) /* put */(localVarHeaderParams["x-pvkey"] = this.apiClient.parameterToString(xPvkey));
            let localVarFormParams : any = <any>({});
            let localVarAccepts : string[] = ["*/*"];
            let localVarAccept : string = this.apiClient.selectHeaderAccept(localVarAccepts);
            if(localVarAccept != null) /* put */(localVarHeaderParams["Accept"] = localVarAccept);
            let localVarContentTypes : string[] = ["application/json"];
            let localVarContentType : string = this.apiClient.selectHeaderContentType(localVarContentTypes);
            /* put */(localVarHeaderParams["Content-Type"] = localVarContentType);
            if(progressListener != null) {
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new RemoteDownloadApi.RemoteDownloadApi$9(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /**
         * Download secure file using GET validate before call.
         * 
         * @param {string} xPvkey the x pvkey
         * @param {string} nemHash the nem hash
         * @param {string} transferType the transfer type
         * @param {*} progressListener the progress listener
         * @param {*} progressRequestListener the progress request listener
         * @return {com.squareup.okhttp.Call} the com.squareup.okhttp. call
         * @throws ApiException the api exception
         * @private
         */
        /*private*/ downloadSecureFileUsingGETValidateBeforeCall(xPvkey : string, nemHash : string, transferType : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(xPvkey == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'xPvkey\' when calling downloadSecureFileUsingGET(Async)");
            }
            if(nemHash == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'nemHash\' when calling downloadSecureFileUsingGET(Async)");
            }
            if(transferType == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'transferType\' when calling downloadSecureFileUsingGET(Async)");
            }
            let call : com.squareup.okhttp.Call = this.downloadSecureFileUsingGETCall(xPvkey, nemHash, transferType, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Download a secure resource/file using NEM Private Key and Transaction Hash
         * Download a file associated to a NEM Hash. If NEM Hash uses SECURE Message, it returns the NEM TXN Payload Instead
         * @param {string} xPvkey The Sender or Receiver&#39;s Private Key (required)
         * @param {string} nemHash The NEM Transaction Hash (required)
         * @param {string} transferType Transfer Type default: bytes (bytes,stream,base64) (required)
         * @return {Array} byte[]
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public downloadSecureFileUsingGET(xPvkey : string, nemHash : string, transferType : string) : number[] {
            let resp : io.nem.ApiResponse<number[]> = this.downloadSecureFileUsingGETWithHttpInfo(xPvkey, nemHash, transferType);
            return resp.getData();
        }

        /**
         * Download a secure resource/file using NEM Private Key and Transaction Hash
         * Download a file associated to a NEM Hash. If NEM Hash uses SECURE Message, it returns the NEM TXN Payload Instead
         * @param {string} xPvkey The Sender or Receiver&#39;s Private Key (required)
         * @param {string} nemHash The NEM Transaction Hash (required)
         * @param {string} transferType Transfer Type default: bytes (bytes,stream,base64) (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;byte[]&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public downloadSecureFileUsingGETWithHttpInfo(xPvkey : string, nemHash : string, transferType : string) : io.nem.ApiResponse<number[]> {
            let call : com.squareup.okhttp.Call = this.downloadSecureFileUsingGETValidateBeforeCall(xPvkey, nemHash, transferType, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Download a secure resource/file using NEM Private Key and Transaction Hash (asynchronously)
         * Download a file associated to a NEM Hash. If NEM Hash uses SECURE Message, it returns the NEM TXN Payload Instead
         * @param {string} xPvkey The Sender or Receiver&#39;s Private Key (required)
         * @param {string} nemHash The NEM Transaction Hash (required)
         * @param {string} transferType Transfer Type default: bytes (bytes,stream,base64) (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public downloadSecureFileUsingGETAsync(xPvkey : string, nemHash : string, transferType : string, callback : io.nem.ApiCallback<number[]>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new RemoteDownloadApi.RemoteDownloadApi$10(this, callback);
                progressRequestListener = new RemoteDownloadApi.RemoteDownloadApi$11(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.downloadSecureFileUsingGETValidateBeforeCall(xPvkey, nemHash, transferType, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for downloadTextUsingGET.
         * 
         * @param {string} nemHash The NEM Transaction Hash (required)
         * @param {string} transferMode Transfer Mode default: bytes (bytes,stream) (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public downloadTextUsingGETCall(nemHash : string, transferMode : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = "/download/text";
            let localVarQueryParams : Array<io.nem.Pair> = <any>([]);
            if(nemHash != null) /* addAll */((l1, l2) => l1.push.apply(l1, l2))(localVarQueryParams, this.apiClient.parameterToPairs("", "nemHash", nemHash));
            if(transferMode != null) /* addAll */((l1, l2) => l1.push.apply(l1, l2))(localVarQueryParams, this.apiClient.parameterToPairs("", "transferMode", transferMode));
            let localVarHeaderParams : any = <any>({});
            let localVarFormParams : any = <any>({});
            let localVarAccepts : string[] = ["*/*"];
            let localVarAccept : string = this.apiClient.selectHeaderAccept(localVarAccepts);
            if(localVarAccept != null) /* put */(localVarHeaderParams["Accept"] = localVarAccept);
            let localVarContentTypes : string[] = ["application/json"];
            let localVarContentType : string = this.apiClient.selectHeaderContentType(localVarContentTypes);
            /* put */(localVarHeaderParams["Content-Type"] = localVarContentType);
            if(progressListener != null) {
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new RemoteDownloadApi.RemoteDownloadApi$12(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /**
         * Download text using GET validate before call.
         * 
         * @param {string} nemHash the nem hash
         * @param {string} transferMode the transfer mode
         * @param {*} progressListener the progress listener
         * @param {*} progressRequestListener the progress request listener
         * @return {com.squareup.okhttp.Call} the com.squareup.okhttp. call
         * @throws ApiException the api exception
         * @private
         */
        /*private*/ downloadTextUsingGETValidateBeforeCall(nemHash : string, transferMode : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(nemHash == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'nemHash\' when calling downloadTextUsingGET(Async)");
            }
            if(transferMode == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'transferMode\' when calling downloadTextUsingGET(Async)");
            }
            let call : com.squareup.okhttp.Call = this.downloadTextUsingGETCall(nemHash, transferMode, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Download a base64 encoded plain text data using NEM Transaction Hash
         * Download a plain text data associated to a NEM Hash. If NEM Hash uses SECURE Message, it returns the NEM TXN Payload Instead
         * @param {string} nemHash The NEM Transaction Hash (required)
         * @param {string} transferMode Transfer Mode default: bytes (bytes,stream) (required)
         * @return {Array} byte[]
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public downloadTextUsingGET(nemHash : string, transferMode : string) : number[] {
            let resp : io.nem.ApiResponse<number[]> = this.downloadTextUsingGETWithHttpInfo(nemHash, transferMode);
            return resp.getData();
        }

        /**
         * Download a base64 encoded plain text data using NEM Transaction Hash
         * Download a plain text data associated to a NEM Hash. If NEM Hash uses SECURE Message, it returns the NEM TXN Payload Instead
         * @param {string} nemHash The NEM Transaction Hash (required)
         * @param {string} transferMode Transfer Mode default: bytes (bytes,stream) (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;byte[]&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public downloadTextUsingGETWithHttpInfo(nemHash : string, transferMode : string) : io.nem.ApiResponse<number[]> {
            let call : com.squareup.okhttp.Call = this.downloadTextUsingGETValidateBeforeCall(nemHash, transferMode, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Download a base64 encoded plain text data using NEM Transaction Hash (asynchronously)
         * Download a plain text data associated to a NEM Hash. If NEM Hash uses SECURE Message, it returns the NEM TXN Payload Instead
         * @param {string} nemHash The NEM Transaction Hash (required)
         * @param {string} transferMode Transfer Mode default: bytes (bytes,stream) (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public downloadTextUsingGETAsync(nemHash : string, transferMode : string, callback : io.nem.ApiCallback<number[]>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new RemoteDownloadApi.RemoteDownloadApi$13(this, callback);
                progressRequestListener = new RemoteDownloadApi.RemoteDownloadApi$14(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.downloadTextUsingGETValidateBeforeCall(nemHash, transferMode, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for downloadUsingDataHashUsingGET.
         * 
         * @param {string} dataHash The NEM Transaction Hash (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public downloadUsingDataHashUsingGETCall(dataHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = "/download/direct/datahash";
            let localVarQueryParams : Array<io.nem.Pair> = <any>([]);
            if(dataHash != null) /* addAll */((l1, l2) => l1.push.apply(l1, l2))(localVarQueryParams, this.apiClient.parameterToPairs("", "dataHash", dataHash));
            let localVarHeaderParams : any = <any>({});
            let localVarFormParams : any = <any>({});
            let localVarAccepts : string[] = ["*/*"];
            let localVarAccept : string = this.apiClient.selectHeaderAccept(localVarAccepts);
            if(localVarAccept != null) /* put */(localVarHeaderParams["Accept"] = localVarAccept);
            let localVarContentTypes : string[] = ["application/json"];
            let localVarContentType : string = this.apiClient.selectHeaderContentType(localVarContentTypes);
            /* put */(localVarHeaderParams["Content-Type"] = localVarContentType);
            if(progressListener != null) {
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new RemoteDownloadApi.RemoteDownloadApi$15(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /**
         * Download using data hash using GET validate before call.
         * 
         * @param {string} dataHash the data hash
         * @param {*} progressListener the progress listener
         * @param {*} progressRequestListener the progress request listener
         * @return {com.squareup.okhttp.Call} the com.squareup.okhttp. call
         * @throws ApiException the api exception
         * @private
         */
        /*private*/ downloadUsingDataHashUsingGETValidateBeforeCall(dataHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(dataHash == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'dataHash\' when calling downloadUsingDataHashUsingGET(Async)");
            }
            let call : com.squareup.okhttp.Call = this.downloadUsingDataHashUsingGETCall(dataHash, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Download IPFS file associated to the datahash
         * Download IPFS file associated to the datahash.
         * 
         * @param {string} dataHash The NEM Transaction Hash (required)
         * @return {Array} byte[]
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public downloadUsingDataHashUsingGET(dataHash : string) : number[] {
            let resp : io.nem.ApiResponse<number[]> = this.downloadUsingDataHashUsingGETWithHttpInfo(dataHash);
            return resp.getData();
        }

        /**
         * Download IPFS file associated to the datahash
         * Download IPFS file associated to the datahash.
         * 
         * @param {string} dataHash The NEM Transaction Hash (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;byte[]&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public downloadUsingDataHashUsingGETWithHttpInfo(dataHash : string) : io.nem.ApiResponse<number[]> {
            let call : com.squareup.okhttp.Call = this.downloadUsingDataHashUsingGETValidateBeforeCall(dataHash, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Download IPFS file associated to the datahash (asynchronously)
         * Download IPFS file associated to the datahash.
         * 
         * @param {string} dataHash The NEM Transaction Hash (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public downloadUsingDataHashUsingGETAsync(dataHash : string, callback : io.nem.ApiCallback<number[]>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new RemoteDownloadApi.RemoteDownloadApi$16(this, callback);
                progressRequestListener = new RemoteDownloadApi.RemoteDownloadApi$17(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.downloadUsingDataHashUsingGETValidateBeforeCall(dataHash, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }
    }
    RemoteDownloadApi["__class"] = "io.nem.xpx.service.remote.RemoteDownloadApi";
    RemoteDownloadApi["__interfaces"] = ["io.nem.xpx.service.intf.DownloadApi"];



    export namespace RemoteDownloadApi {

        export class RemoteDownloadApi$0 implements com.squareup.okhttp.Interceptor {
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
        RemoteDownloadApi$0["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class RemoteDownloadApi$1 implements io.nem.ProgressResponseBody.ProgressListener {
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
        RemoteDownloadApi$1["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class RemoteDownloadApi$2 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        RemoteDownloadApi$2["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class RemoteDownloadApi$3 implements com.squareup.okhttp.Interceptor {
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
        RemoteDownloadApi$3["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class RemoteDownloadApi$4 implements io.nem.ProgressResponseBody.ProgressListener {
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
        RemoteDownloadApi$4["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class RemoteDownloadApi$5 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        RemoteDownloadApi$5["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class RemoteDownloadApi$6 implements com.squareup.okhttp.Interceptor {
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
        RemoteDownloadApi$6["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class RemoteDownloadApi$7 implements io.nem.ProgressResponseBody.ProgressListener {
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
        RemoteDownloadApi$7["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class RemoteDownloadApi$8 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        RemoteDownloadApi$8["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class RemoteDownloadApi$9 implements com.squareup.okhttp.Interceptor {
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
        RemoteDownloadApi$9["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class RemoteDownloadApi$10 implements io.nem.ProgressResponseBody.ProgressListener {
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
        RemoteDownloadApi$10["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class RemoteDownloadApi$11 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        RemoteDownloadApi$11["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class RemoteDownloadApi$12 implements com.squareup.okhttp.Interceptor {
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
        RemoteDownloadApi$12["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class RemoteDownloadApi$13 implements io.nem.ProgressResponseBody.ProgressListener {
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
        RemoteDownloadApi$13["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class RemoteDownloadApi$14 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        RemoteDownloadApi$14["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class RemoteDownloadApi$15 implements com.squareup.okhttp.Interceptor {
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
        RemoteDownloadApi$15["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class RemoteDownloadApi$16 implements io.nem.ProgressResponseBody.ProgressListener {
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
        RemoteDownloadApi$16["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class RemoteDownloadApi$17 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        RemoteDownloadApi$17["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];


    }

}

