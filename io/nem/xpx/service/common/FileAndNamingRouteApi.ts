/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.common {
    export class FileAndNamingRouteApi {
        /*private*/ apiClient : io.nem.ApiClient;

        public constructor(apiClient : io.nem.ApiClient) {
            if(this.apiClient===undefined) this.apiClient = null;
            this.apiClient = apiClient;
        }

        public getApiClient() : io.nem.ApiClient {
            return this.apiClient;
        }

        public setApiClient(apiClient : io.nem.ApiClient) {
            this.apiClient = apiClient;
        }

        /**
         * Build call for directXipnsGetUsingGET
         * @param {string} ipfsHash ipfsHash (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public directXipnsGetUsingGETCall(ipfsHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = /* replaceAll */"/xipns/{ipfsHash}".replace(new RegExp("\\{ipfsHash\\}", 'g'),this.apiClient.escapeString(ipfsHash.toString()));
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
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new FileAndNamingRouteApi.FileAndNamingRouteApi$0(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /*private*/ directXipnsGetUsingGETValidateBeforeCall(ipfsHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(ipfsHash == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'ipfsHash\' when calling directXipnsGetUsingGET(Async)");
            }
            let call : com.squareup.okhttp.Call = this.directXipnsGetUsingGETCall(ipfsHash, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Download associated file of the given NEM Hash
         * Download associated file of the given NEM Hash (This is only applicable to public files only)
         * @param {string} ipfsHash ipfsHash (required)
         * @return {Array} byte[]
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public directXipnsGetUsingGET(ipfsHash : string) : number[] {
            let resp : io.nem.ApiResponse<number[]> = this.directXipnsGetUsingGETWithHttpInfo(ipfsHash);
            return resp.getData();
        }

        /**
         * Download associated file of the given NEM Hash
         * Download associated file of the given NEM Hash (This is only applicable to public files only)
         * @param {string} ipfsHash ipfsHash (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;byte[]&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public directXipnsGetUsingGETWithHttpInfo(ipfsHash : string) : io.nem.ApiResponse<number[]> {
            let call : com.squareup.okhttp.Call = this.directXipnsGetUsingGETValidateBeforeCall(ipfsHash, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Download associated file of the given NEM Hash (asynchronously)
         * Download associated file of the given NEM Hash (This is only applicable to public files only)
         * @param {string} ipfsHash ipfsHash (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public directXipnsGetUsingGETAsync(ipfsHash : string, callback : io.nem.ApiCallback<number[]>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new FileAndNamingRouteApi.FileAndNamingRouteApi$1(this, callback);
                progressRequestListener = new FileAndNamingRouteApi.FileAndNamingRouteApi$2(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.directXipnsGetUsingGETValidateBeforeCall(ipfsHash, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for directXipnsHeadUsingHEAD
         * @param {string} ipfsHash ipfsHash (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public directXipnsHeadUsingHEADCall(ipfsHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = /* replaceAll */"/xipns/{ipfsHash}".replace(new RegExp("\\{ipfsHash\\}", 'g'),this.apiClient.escapeString(ipfsHash.toString()));
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
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new FileAndNamingRouteApi.FileAndNamingRouteApi$3(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "HEAD", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /*private*/ directXipnsHeadUsingHEADValidateBeforeCall(ipfsHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(ipfsHash == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'ipfsHash\' when calling directXipnsHeadUsingHEAD(Async)");
            }
            let call : com.squareup.okhttp.Call = this.directXipnsHeadUsingHEADCall(ipfsHash, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Download associated file of the given NEM Hash
         * Download associated file of the given NEM Hash (This is only applicable to public files only)
         * @param {string} ipfsHash ipfsHash (required)
         * @return {Array} byte[]
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public directXipnsHeadUsingHEAD(ipfsHash : string) : number[] {
            let resp : io.nem.ApiResponse<number[]> = this.directXipnsHeadUsingHEADWithHttpInfo(ipfsHash);
            return resp.getData();
        }

        /**
         * Download associated file of the given NEM Hash
         * Download associated file of the given NEM Hash (This is only applicable to public files only)
         * @param {string} ipfsHash ipfsHash (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;byte[]&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public directXipnsHeadUsingHEADWithHttpInfo(ipfsHash : string) : io.nem.ApiResponse<number[]> {
            let call : com.squareup.okhttp.Call = this.directXipnsHeadUsingHEADValidateBeforeCall(ipfsHash, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Download associated file of the given NEM Hash (asynchronously)
         * Download associated file of the given NEM Hash (This is only applicable to public files only)
         * @param {string} ipfsHash ipfsHash (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public directXipnsHeadUsingHEADAsync(ipfsHash : string, callback : io.nem.ApiCallback<number[]>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new FileAndNamingRouteApi.FileAndNamingRouteApi$4(this, callback);
                progressRequestListener = new FileAndNamingRouteApi.FileAndNamingRouteApi$5(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.directXipnsHeadUsingHEADValidateBeforeCall(ipfsHash, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for directXpxfsGetUsingGET
         * @param {string} nemHash nemHash (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public directXpxfsGetUsingGETCall(nemHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = /* replaceAll */"/xpxfs/{nemHash}".replace(new RegExp("\\{nemHash\\}", 'g'),this.apiClient.escapeString(nemHash.toString()));
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
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new FileAndNamingRouteApi.FileAndNamingRouteApi$6(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /*private*/ directXpxfsGetUsingGETValidateBeforeCall(nemHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(nemHash == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'nemHash\' when calling directXpxfsGetUsingGET(Async)");
            }
            let call : com.squareup.okhttp.Call = this.directXpxfsGetUsingGETCall(nemHash, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Download associated file of the given NEM Hash
         * Download associated file of the given NEM Hash (This is only applicable to public files only)
         * @param {string} nemHash nemHash (required)
         * @return {Array} byte[]
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public directXpxfsGetUsingGET(nemHash : string) : number[] {
            let resp : io.nem.ApiResponse<number[]> = this.directXpxfsGetUsingGETWithHttpInfo(nemHash);
            return resp.getData();
        }

        /**
         * Download associated file of the given NEM Hash
         * Download associated file of the given NEM Hash (This is only applicable to public files only)
         * @param {string} nemHash nemHash (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;byte[]&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public directXpxfsGetUsingGETWithHttpInfo(nemHash : string) : io.nem.ApiResponse<number[]> {
            let call : com.squareup.okhttp.Call = this.directXpxfsGetUsingGETValidateBeforeCall(nemHash, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Download associated file of the given NEM Hash (asynchronously)
         * Download associated file of the given NEM Hash (This is only applicable to public files only)
         * @param {string} nemHash nemHash (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public directXpxfsGetUsingGETAsync(nemHash : string, callback : io.nem.ApiCallback<number[]>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new FileAndNamingRouteApi.FileAndNamingRouteApi$7(this, callback);
                progressRequestListener = new FileAndNamingRouteApi.FileAndNamingRouteApi$8(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.directXpxfsGetUsingGETValidateBeforeCall(nemHash, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for directXpxfsHeadUsingHEAD
         * @param {string} nemHash nemHash (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public directXpxfsHeadUsingHEADCall(nemHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = /* replaceAll */"/xpxfs/{nemHash}".replace(new RegExp("\\{nemHash\\}", 'g'),this.apiClient.escapeString(nemHash.toString()));
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
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new FileAndNamingRouteApi.FileAndNamingRouteApi$9(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "HEAD", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /*private*/ directXpxfsHeadUsingHEADValidateBeforeCall(nemHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(nemHash == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'nemHash\' when calling directXpxfsHeadUsingHEAD(Async)");
            }
            let call : com.squareup.okhttp.Call = this.directXpxfsHeadUsingHEADCall(nemHash, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Download associated file of the given NEM Hash
         * Download associated file of the given NEM Hash (This is only applicable to public files only)
         * @param {string} nemHash nemHash (required)
         * @return {Array} byte[]
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public directXpxfsHeadUsingHEAD(nemHash : string) : number[] {
            let resp : io.nem.ApiResponse<number[]> = this.directXpxfsHeadUsingHEADWithHttpInfo(nemHash);
            return resp.getData();
        }

        /**
         * Download associated file of the given NEM Hash
         * Download associated file of the given NEM Hash (This is only applicable to public files only)
         * @param {string} nemHash nemHash (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;byte[]&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public directXpxfsHeadUsingHEADWithHttpInfo(nemHash : string) : io.nem.ApiResponse<number[]> {
            let call : com.squareup.okhttp.Call = this.directXpxfsHeadUsingHEADValidateBeforeCall(nemHash, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Download associated file of the given NEM Hash (asynchronously)
         * Download associated file of the given NEM Hash (This is only applicable to public files only)
         * @param {string} nemHash nemHash (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public directXpxfsHeadUsingHEADAsync(nemHash : string, callback : io.nem.ApiCallback<number[]>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new FileAndNamingRouteApi.FileAndNamingRouteApi$10(this, callback);
                progressRequestListener = new FileAndNamingRouteApi.FileAndNamingRouteApi$11(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.directXpxfsHeadUsingHEADValidateBeforeCall(nemHash, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for directXpxnsGetUsingGET
         * @param {string} nemHash nemHash (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public directXpxnsGetUsingGETCall(nemHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = /* replaceAll */"/xpxns/{nemHash}".replace(new RegExp("\\{nemHash\\}", 'g'),this.apiClient.escapeString(nemHash.toString()));
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
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new FileAndNamingRouteApi.FileAndNamingRouteApi$12(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /*private*/ directXpxnsGetUsingGETValidateBeforeCall(nemHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(nemHash == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'nemHash\' when calling directXpxnsGetUsingGET(Async)");
            }
            let call : com.squareup.okhttp.Call = this.directXpxnsGetUsingGETCall(nemHash, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Download associated file of the given NEM Hash
         * Download associated file of the given NEM Hash (This is only applicable to public files only)
         * @param {string} nemHash nemHash (required)
         * @return {Array} byte[]
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public directXpxnsGetUsingGET(nemHash : string) : number[] {
            let resp : io.nem.ApiResponse<number[]> = this.directXpxnsGetUsingGETWithHttpInfo(nemHash);
            return resp.getData();
        }

        /**
         * Download associated file of the given NEM Hash
         * Download associated file of the given NEM Hash (This is only applicable to public files only)
         * @param {string} nemHash nemHash (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;byte[]&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public directXpxnsGetUsingGETWithHttpInfo(nemHash : string) : io.nem.ApiResponse<number[]> {
            let call : com.squareup.okhttp.Call = this.directXpxnsGetUsingGETValidateBeforeCall(nemHash, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Download associated file of the given NEM Hash (asynchronously)
         * Download associated file of the given NEM Hash (This is only applicable to public files only)
         * @param {string} nemHash nemHash (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public directXpxnsGetUsingGETAsync(nemHash : string, callback : io.nem.ApiCallback<number[]>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new FileAndNamingRouteApi.FileAndNamingRouteApi$13(this, callback);
                progressRequestListener = new FileAndNamingRouteApi.FileAndNamingRouteApi$14(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.directXpxnsGetUsingGETValidateBeforeCall(nemHash, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for directXpxnsHeadUsingHEAD
         * @param {string} nemHash nemHash (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public directXpxnsHeadUsingHEADCall(nemHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = /* replaceAll */"/xpxns/{nemHash}".replace(new RegExp("\\{nemHash\\}", 'g'),this.apiClient.escapeString(nemHash.toString()));
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
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new FileAndNamingRouteApi.FileAndNamingRouteApi$15(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "HEAD", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /*private*/ directXpxnsHeadUsingHEADValidateBeforeCall(nemHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(nemHash == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'nemHash\' when calling directXpxnsHeadUsingHEAD(Async)");
            }
            let call : com.squareup.okhttp.Call = this.directXpxnsHeadUsingHEADCall(nemHash, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Download associated file of the given NEM Hash
         * Download associated file of the given NEM Hash (This is only applicable to public files only)
         * @param {string} nemHash nemHash (required)
         * @return {Array} byte[]
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public directXpxnsHeadUsingHEAD(nemHash : string) : number[] {
            let resp : io.nem.ApiResponse<number[]> = this.directXpxnsHeadUsingHEADWithHttpInfo(nemHash);
            return resp.getData();
        }

        /**
         * Download associated file of the given NEM Hash
         * Download associated file of the given NEM Hash (This is only applicable to public files only)
         * @param {string} nemHash nemHash (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;byte[]&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public directXpxnsHeadUsingHEADWithHttpInfo(nemHash : string) : io.nem.ApiResponse<number[]> {
            let call : com.squareup.okhttp.Call = this.directXpxnsHeadUsingHEADValidateBeforeCall(nemHash, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Download associated file of the given NEM Hash (asynchronously)
         * Download associated file of the given NEM Hash (This is only applicable to public files only)
         * @param {string} nemHash nemHash (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public directXpxnsHeadUsingHEADAsync(nemHash : string, callback : io.nem.ApiCallback<number[]>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new FileAndNamingRouteApi.FileAndNamingRouteApi$16(this, callback);
                progressRequestListener = new FileAndNamingRouteApi.FileAndNamingRouteApi$17(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.directXpxnsHeadUsingHEADValidateBeforeCall(nemHash, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for directxIpfsGetUsingGET
         * @param {string} ipfsHash ipfsHash (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public directxIpfsGetUsingGETCall(ipfsHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = /* replaceAll */"/xipfs/{ipfsHash}".replace(new RegExp("\\{ipfsHash\\}", 'g'),this.apiClient.escapeString(ipfsHash.toString()));
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
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new FileAndNamingRouteApi.FileAndNamingRouteApi$18(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /*private*/ directxIpfsGetUsingGETValidateBeforeCall(ipfsHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(ipfsHash == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'ipfsHash\' when calling directxIpfsGetUsingGET(Async)");
            }
            let call : com.squareup.okhttp.Call = this.directxIpfsGetUsingGETCall(ipfsHash, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Download associated file of the given NEM Hash
         * Download associated file of the given NEM Hash (This is only applicable to public files only)
         * @param {string} ipfsHash ipfsHash (required)
         * @return {Array} byte[]
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public directxIpfsGetUsingGET(ipfsHash : string) : number[] {
            let resp : io.nem.ApiResponse<number[]> = this.directxIpfsGetUsingGETWithHttpInfo(ipfsHash);
            return resp.getData();
        }

        /**
         * Download associated file of the given NEM Hash
         * Download associated file of the given NEM Hash (This is only applicable to public files only)
         * @param {string} ipfsHash ipfsHash (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;byte[]&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public directxIpfsGetUsingGETWithHttpInfo(ipfsHash : string) : io.nem.ApiResponse<number[]> {
            let call : com.squareup.okhttp.Call = this.directxIpfsGetUsingGETValidateBeforeCall(ipfsHash, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Download associated file of the given NEM Hash (asynchronously)
         * Download associated file of the given NEM Hash (This is only applicable to public files only)
         * @param {string} ipfsHash ipfsHash (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public directxIpfsGetUsingGETAsync(ipfsHash : string, callback : io.nem.ApiCallback<number[]>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new FileAndNamingRouteApi.FileAndNamingRouteApi$19(this, callback);
                progressRequestListener = new FileAndNamingRouteApi.FileAndNamingRouteApi$20(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.directxIpfsGetUsingGETValidateBeforeCall(ipfsHash, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for directxIpfsHeadUsingHEAD
         * @param {string} ipfsHash ipfsHash (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public directxIpfsHeadUsingHEADCall(ipfsHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = /* replaceAll */"/xipfs/{ipfsHash}".replace(new RegExp("\\{ipfsHash\\}", 'g'),this.apiClient.escapeString(ipfsHash.toString()));
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
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new FileAndNamingRouteApi.FileAndNamingRouteApi$21(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "HEAD", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /*private*/ directxIpfsHeadUsingHEADValidateBeforeCall(ipfsHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(ipfsHash == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'ipfsHash\' when calling directxIpfsHeadUsingHEAD(Async)");
            }
            let call : com.squareup.okhttp.Call = this.directxIpfsHeadUsingHEADCall(ipfsHash, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Download associated file of the given NEM Hash
         * Download associated file of the given NEM Hash (This is only applicable to public files only)
         * @param {string} ipfsHash ipfsHash (required)
         * @return {Array} byte[]
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public directxIpfsHeadUsingHEAD(ipfsHash : string) : number[] {
            let resp : io.nem.ApiResponse<number[]> = this.directxIpfsHeadUsingHEADWithHttpInfo(ipfsHash);
            return resp.getData();
        }

        /**
         * Download associated file of the given NEM Hash
         * Download associated file of the given NEM Hash (This is only applicable to public files only)
         * @param {string} ipfsHash ipfsHash (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;byte[]&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public directxIpfsHeadUsingHEADWithHttpInfo(ipfsHash : string) : io.nem.ApiResponse<number[]> {
            let call : com.squareup.okhttp.Call = this.directxIpfsHeadUsingHEADValidateBeforeCall(ipfsHash, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Download associated file of the given NEM Hash (asynchronously)
         * Download associated file of the given NEM Hash (This is only applicable to public files only)
         * @param {string} ipfsHash ipfsHash (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public directxIpfsHeadUsingHEADAsync(ipfsHash : string, callback : io.nem.ApiCallback<number[]>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new FileAndNamingRouteApi.FileAndNamingRouteApi$22(this, callback);
                progressRequestListener = new FileAndNamingRouteApi.FileAndNamingRouteApi$23(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.directxIpfsHeadUsingHEADValidateBeforeCall(ipfsHash, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for loadXpxfsDirectoryGetUsingGET
         * @param {string} nemHash NEM Txn (Public) linked to the directory (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public loadXpxfsDirectoryGetUsingGETCall(nemHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = /* replaceAll */"/xpxfs/{nemHash}/**".replace(new RegExp("\\{nemHash\\}", 'g'),this.apiClient.escapeString(nemHash.toString()));
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
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new FileAndNamingRouteApi.FileAndNamingRouteApi$24(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /*private*/ loadXpxfsDirectoryGetUsingGETValidateBeforeCall(nemHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(nemHash == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'nemHash\' when calling loadXpxfsDirectoryGetUsingGET(Async)");
            }
            let call : com.squareup.okhttp.Call = this.loadXpxfsDirectoryGetUsingGETCall(nemHash, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Loads a directory that&#39;s rooted from the NEM Blockchain
         * Loads a Static Content.
         * @param {string} nemHash NEM Txn (Public) linked to the directory (required)
         * @return {*} Object
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public loadXpxfsDirectoryGetUsingGET(nemHash : string) : any {
            let resp : io.nem.ApiResponse<any> = this.loadXpxfsDirectoryGetUsingGETWithHttpInfo(nemHash);
            return resp.getData();
        }

        /**
         * Loads a directory that&#39;s rooted from the NEM Blockchain
         * Loads a Static Content.
         * @param {string} nemHash NEM Txn (Public) linked to the directory (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;Object&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public loadXpxfsDirectoryGetUsingGETWithHttpInfo(nemHash : string) : io.nem.ApiResponse<any> {
            let call : com.squareup.okhttp.Call = this.loadXpxfsDirectoryGetUsingGETValidateBeforeCall(nemHash, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<any>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<any>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Loads a directory that&#39;s rooted from the NEM Blockchain (asynchronously)
         * Loads a Static Content.
         * @param {string} nemHash NEM Txn (Public) linked to the directory (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public loadXpxfsDirectoryGetUsingGETAsync(nemHash : string, callback : io.nem.ApiCallback<any>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new FileAndNamingRouteApi.FileAndNamingRouteApi$25(this, callback);
                progressRequestListener = new FileAndNamingRouteApi.FileAndNamingRouteApi$26(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.loadXpxfsDirectoryGetUsingGETValidateBeforeCall(nemHash, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<any>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<any>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for loadXpxfsDirectoryHeadUsingHEAD
         * @param {string} nemHash NEM Txn (Public) linked to the directory (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public loadXpxfsDirectoryHeadUsingHEADCall(nemHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = /* replaceAll */"/xpxfs/{nemHash}/**".replace(new RegExp("\\{nemHash\\}", 'g'),this.apiClient.escapeString(nemHash.toString()));
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
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new FileAndNamingRouteApi.FileAndNamingRouteApi$27(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "HEAD", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /*private*/ loadXpxfsDirectoryHeadUsingHEADValidateBeforeCall(nemHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(nemHash == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'nemHash\' when calling loadXpxfsDirectoryHeadUsingHEAD(Async)");
            }
            let call : com.squareup.okhttp.Call = this.loadXpxfsDirectoryHeadUsingHEADCall(nemHash, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Loads a directory that&#39;s rooted from the NEM Blockchain
         * Loads a Static Content.
         * @param {string} nemHash NEM Txn (Public) linked to the directory (required)
         * @return {*} Object
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public loadXpxfsDirectoryHeadUsingHEAD(nemHash : string) : any {
            let resp : io.nem.ApiResponse<any> = this.loadXpxfsDirectoryHeadUsingHEADWithHttpInfo(nemHash);
            return resp.getData();
        }

        /**
         * Loads a directory that&#39;s rooted from the NEM Blockchain
         * Loads a Static Content.
         * @param {string} nemHash NEM Txn (Public) linked to the directory (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;Object&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public loadXpxfsDirectoryHeadUsingHEADWithHttpInfo(nemHash : string) : io.nem.ApiResponse<any> {
            let call : com.squareup.okhttp.Call = this.loadXpxfsDirectoryHeadUsingHEADValidateBeforeCall(nemHash, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<any>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<any>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Loads a directory that&#39;s rooted from the NEM Blockchain (asynchronously)
         * Loads a Static Content.
         * @param {string} nemHash NEM Txn (Public) linked to the directory (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public loadXpxfsDirectoryHeadUsingHEADAsync(nemHash : string, callback : io.nem.ApiCallback<any>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new FileAndNamingRouteApi.FileAndNamingRouteApi$28(this, callback);
                progressRequestListener = new FileAndNamingRouteApi.FileAndNamingRouteApi$29(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.loadXpxfsDirectoryHeadUsingHEADValidateBeforeCall(nemHash, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<any>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<any>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for loadXpxnsDirectoryGetUsingGET
         * @param {string} nemHash NEM Txn (Public) linked to the directory (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public loadXpxnsDirectoryGetUsingGETCall(nemHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = /* replaceAll */"/xpxns/{nemHash}/**".replace(new RegExp("\\{nemHash\\}", 'g'),this.apiClient.escapeString(nemHash.toString()));
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
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new FileAndNamingRouteApi.FileAndNamingRouteApi$30(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /*private*/ loadXpxnsDirectoryGetUsingGETValidateBeforeCall(nemHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(nemHash == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'nemHash\' when calling loadXpxnsDirectoryGetUsingGET(Async)");
            }
            let call : com.squareup.okhttp.Call = this.loadXpxnsDirectoryGetUsingGETCall(nemHash, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Loads a directory that&#39;s rooted from the NEM Blockchain
         * Loads a Static Content.
         * @param {string} nemHash NEM Txn (Public) linked to the directory (required)
         * @return {*} Object
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public loadXpxnsDirectoryGetUsingGET(nemHash : string) : any {
            let resp : io.nem.ApiResponse<any> = this.loadXpxnsDirectoryGetUsingGETWithHttpInfo(nemHash);
            return resp.getData();
        }

        /**
         * Loads a directory that&#39;s rooted from the NEM Blockchain
         * Loads a Static Content.
         * @param {string} nemHash NEM Txn (Public) linked to the directory (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;Object&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public loadXpxnsDirectoryGetUsingGETWithHttpInfo(nemHash : string) : io.nem.ApiResponse<any> {
            let call : com.squareup.okhttp.Call = this.loadXpxnsDirectoryGetUsingGETValidateBeforeCall(nemHash, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<any>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<any>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Loads a directory that&#39;s rooted from the NEM Blockchain (asynchronously)
         * Loads a Static Content.
         * @param {string} nemHash NEM Txn (Public) linked to the directory (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public loadXpxnsDirectoryGetUsingGETAsync(nemHash : string, callback : io.nem.ApiCallback<any>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new FileAndNamingRouteApi.FileAndNamingRouteApi$31(this, callback);
                progressRequestListener = new FileAndNamingRouteApi.FileAndNamingRouteApi$32(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.loadXpxnsDirectoryGetUsingGETValidateBeforeCall(nemHash, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<any>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<any>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for loadXpxnsDirectoryHeadUsingHEAD
         * @param {string} nemHash NEM Txn (Public) linked to the directory (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public loadXpxnsDirectoryHeadUsingHEADCall(nemHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = /* replaceAll */"/xpxns/{nemHash}/**".replace(new RegExp("\\{nemHash\\}", 'g'),this.apiClient.escapeString(nemHash.toString()));
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
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new FileAndNamingRouteApi.FileAndNamingRouteApi$33(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "HEAD", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /*private*/ loadXpxnsDirectoryHeadUsingHEADValidateBeforeCall(nemHash : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(nemHash == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'nemHash\' when calling loadXpxnsDirectoryHeadUsingHEAD(Async)");
            }
            let call : com.squareup.okhttp.Call = this.loadXpxnsDirectoryHeadUsingHEADCall(nemHash, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Loads a directory that&#39;s rooted from the NEM Blockchain
         * Loads a Static Content.
         * @param {string} nemHash NEM Txn (Public) linked to the directory (required)
         * @return {*} Object
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public loadXpxnsDirectoryHeadUsingHEAD(nemHash : string) : any {
            let resp : io.nem.ApiResponse<any> = this.loadXpxnsDirectoryHeadUsingHEADWithHttpInfo(nemHash);
            return resp.getData();
        }

        /**
         * Loads a directory that&#39;s rooted from the NEM Blockchain
         * Loads a Static Content.
         * @param {string} nemHash NEM Txn (Public) linked to the directory (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;Object&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public loadXpxnsDirectoryHeadUsingHEADWithHttpInfo(nemHash : string) : io.nem.ApiResponse<any> {
            let call : com.squareup.okhttp.Call = this.loadXpxnsDirectoryHeadUsingHEADValidateBeforeCall(nemHash, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<any>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<any>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Loads a directory that&#39;s rooted from the NEM Blockchain (asynchronously)
         * Loads a Static Content.
         * @param {string} nemHash NEM Txn (Public) linked to the directory (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public loadXpxnsDirectoryHeadUsingHEADAsync(nemHash : string, callback : io.nem.ApiCallback<any>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new FileAndNamingRouteApi.FileAndNamingRouteApi$34(this, callback);
                progressRequestListener = new FileAndNamingRouteApi.FileAndNamingRouteApi$35(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.loadXpxnsDirectoryHeadUsingHEADValidateBeforeCall(nemHash, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<any>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<any>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }
    }
    FileAndNamingRouteApi["__class"] = "io.nem.xpx.service.common.FileAndNamingRouteApi";


    export namespace FileAndNamingRouteApi {

        export class FileAndNamingRouteApi$0 implements com.squareup.okhttp.Interceptor {
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
        FileAndNamingRouteApi$0["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class FileAndNamingRouteApi$1 implements io.nem.ProgressResponseBody.ProgressListener {
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
        FileAndNamingRouteApi$1["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class FileAndNamingRouteApi$2 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        FileAndNamingRouteApi$2["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class FileAndNamingRouteApi$3 implements com.squareup.okhttp.Interceptor {
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
        FileAndNamingRouteApi$3["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class FileAndNamingRouteApi$4 implements io.nem.ProgressResponseBody.ProgressListener {
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
        FileAndNamingRouteApi$4["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class FileAndNamingRouteApi$5 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        FileAndNamingRouteApi$5["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class FileAndNamingRouteApi$6 implements com.squareup.okhttp.Interceptor {
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
        FileAndNamingRouteApi$6["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class FileAndNamingRouteApi$7 implements io.nem.ProgressResponseBody.ProgressListener {
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
        FileAndNamingRouteApi$7["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class FileAndNamingRouteApi$8 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        FileAndNamingRouteApi$8["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class FileAndNamingRouteApi$9 implements com.squareup.okhttp.Interceptor {
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
        FileAndNamingRouteApi$9["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class FileAndNamingRouteApi$10 implements io.nem.ProgressResponseBody.ProgressListener {
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
        FileAndNamingRouteApi$10["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class FileAndNamingRouteApi$11 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        FileAndNamingRouteApi$11["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class FileAndNamingRouteApi$12 implements com.squareup.okhttp.Interceptor {
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
        FileAndNamingRouteApi$12["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class FileAndNamingRouteApi$13 implements io.nem.ProgressResponseBody.ProgressListener {
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
        FileAndNamingRouteApi$13["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class FileAndNamingRouteApi$14 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        FileAndNamingRouteApi$14["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class FileAndNamingRouteApi$15 implements com.squareup.okhttp.Interceptor {
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
        FileAndNamingRouteApi$15["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class FileAndNamingRouteApi$16 implements io.nem.ProgressResponseBody.ProgressListener {
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
        FileAndNamingRouteApi$16["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class FileAndNamingRouteApi$17 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        FileAndNamingRouteApi$17["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class FileAndNamingRouteApi$18 implements com.squareup.okhttp.Interceptor {
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
        FileAndNamingRouteApi$18["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class FileAndNamingRouteApi$19 implements io.nem.ProgressResponseBody.ProgressListener {
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
        FileAndNamingRouteApi$19["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class FileAndNamingRouteApi$20 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        FileAndNamingRouteApi$20["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class FileAndNamingRouteApi$21 implements com.squareup.okhttp.Interceptor {
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
        FileAndNamingRouteApi$21["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class FileAndNamingRouteApi$22 implements io.nem.ProgressResponseBody.ProgressListener {
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
        FileAndNamingRouteApi$22["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class FileAndNamingRouteApi$23 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        FileAndNamingRouteApi$23["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class FileAndNamingRouteApi$24 implements com.squareup.okhttp.Interceptor {
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
        FileAndNamingRouteApi$24["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class FileAndNamingRouteApi$25 implements io.nem.ProgressResponseBody.ProgressListener {
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
        FileAndNamingRouteApi$25["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class FileAndNamingRouteApi$26 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        FileAndNamingRouteApi$26["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class FileAndNamingRouteApi$27 implements com.squareup.okhttp.Interceptor {
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
        FileAndNamingRouteApi$27["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class FileAndNamingRouteApi$28 implements io.nem.ProgressResponseBody.ProgressListener {
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
        FileAndNamingRouteApi$28["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class FileAndNamingRouteApi$29 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        FileAndNamingRouteApi$29["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class FileAndNamingRouteApi$30 implements com.squareup.okhttp.Interceptor {
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
        FileAndNamingRouteApi$30["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class FileAndNamingRouteApi$31 implements io.nem.ProgressResponseBody.ProgressListener {
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
        FileAndNamingRouteApi$31["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class FileAndNamingRouteApi$32 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        FileAndNamingRouteApi$32["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class FileAndNamingRouteApi$33 implements com.squareup.okhttp.Interceptor {
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
        FileAndNamingRouteApi$33["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class FileAndNamingRouteApi$34 implements io.nem.ProgressResponseBody.ProgressListener {
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
        FileAndNamingRouteApi$34["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class FileAndNamingRouteApi$35 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        FileAndNamingRouteApi$35["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];


    }

}

