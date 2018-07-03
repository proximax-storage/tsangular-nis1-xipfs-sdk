/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.remote {
    /**
     * Instantiates a new remote node api.
     * 
     * @param {io.nem.ApiClient} apiClient the api client
     * @class
     */
    export class RemoteNodeApi implements io.nem.xpx.service.intf.NodeApi {
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
         * Build call for checkNodeUsingGET.
         * 
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public checkNodeUsingGETCall(progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = "/node/check";
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
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new RemoteNodeApi.RemoteNodeApi$0(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /**
         * Check node using GET validate before call.
         * 
         * @param {*} progressListener the progress listener
         * @param {*} progressRequestListener the progress request listener
         * @return {com.squareup.okhttp.Call} the com.squareup.okhttp. call
         * @throws ApiException the api exception
         * @private
         */
        /*private*/ checkNodeUsingGETValidateBeforeCall(progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let call : com.squareup.okhttp.Call = this.checkNodeUsingGETCall(progressListener, progressRequestListener);
            return call;
        }

        /**
         * Check if the Storage Node is up and running.
         * This endpoint is used to check if the P2P Storage Node instance is either alive or down.
         * @return {io.nem.xpx.model.GenericResponseMessage} GenericResponseMessage
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public checkNodeUsingGET() : io.nem.xpx.model.GenericResponseMessage {
            let resp : io.nem.ApiResponse<io.nem.xpx.model.GenericResponseMessage> = this.checkNodeUsingGETWithHttpInfo();
            return resp.getData();
        }

        /**
         * Check if the Storage Node is up and running.
         * This endpoint is used to check if the P2P Storage Node instance is either alive or down.
         * @return {io.nem.ApiResponse} ApiResponse&lt;GenericResponseMessage&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public checkNodeUsingGETWithHttpInfo() : io.nem.ApiResponse<io.nem.xpx.model.GenericResponseMessage> {
            let call : com.squareup.okhttp.Call = this.checkNodeUsingGETValidateBeforeCall(null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<io.nem.xpx.model.GenericResponseMessage>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<io.nem.xpx.model.GenericResponseMessage>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Check if the Storage Node is up and running. (asynchronously)
         * This endpoint is used to check if the P2P Storage Node instance is either alive or down.
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public checkNodeUsingGETAsync(callback : io.nem.ApiCallback<io.nem.xpx.model.GenericResponseMessage>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new RemoteNodeApi.RemoteNodeApi$1(this, callback);
                progressRequestListener = new RemoteNodeApi.RemoteNodeApi$2(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.checkNodeUsingGETValidateBeforeCall(progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<io.nem.xpx.model.GenericResponseMessage>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<io.nem.xpx.model.GenericResponseMessage>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for getNodeInfoPeersUsingGET.
         * 
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public getNodeInfoPeersUsingGETCall(progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = "/node/info/peers";
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
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new RemoteNodeApi.RemoteNodeApi$3(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /**
         * Gets the node info peers using GET validate before call.
         * 
         * @param {*} progressListener the progress listener
         * @param {*} progressRequestListener the progress request listener
         * @return {com.squareup.okhttp.Call} the node info peers using GET validate before call
         * @throws ApiException the api exception
         * @private
         */
        /*private*/ getNodeInfoPeersUsingGETValidateBeforeCall(progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let call : com.squareup.okhttp.Call = this.getNodeInfoPeersUsingGETCall(progressListener, progressRequestListener);
            return call;
        }

        /**
         * Get Storage Node Information
         * This endpoint returns the information of the P2P Storage Node.
         * 
         * @return {io.nem.xpx.model.NodeInfo} NodeInfo
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public getNodeInfoPeersUsingGET() : io.nem.xpx.model.NodeInfo {
            let resp : io.nem.ApiResponse<io.nem.xpx.model.NodeInfo> = this.getNodeInfoPeersUsingGETWithHttpInfo();
            return resp.getData();
        }

        /**
         * Get Storage Node Information
         * This endpoint returns the information of the P2P Storage Node.
         * 
         * @return {io.nem.ApiResponse} ApiResponse&lt;NodeInfo&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public getNodeInfoPeersUsingGETWithHttpInfo() : io.nem.ApiResponse<io.nem.xpx.model.NodeInfo> {
            let call : com.squareup.okhttp.Call = this.getNodeInfoPeersUsingGETValidateBeforeCall(null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<io.nem.xpx.model.NodeInfo>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<io.nem.xpx.model.NodeInfo>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Get Storage Node Information (asynchronously)
         * This endpoint returns the information of the P2P Storage Node.
         * 
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public getNodeInfoPeersUsingGETAsync(callback : io.nem.ApiCallback<io.nem.xpx.model.NodeInfo>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new RemoteNodeApi.RemoteNodeApi$4(this, callback);
                progressRequestListener = new RemoteNodeApi.RemoteNodeApi$5(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.getNodeInfoPeersUsingGETValidateBeforeCall(progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<io.nem.xpx.model.NodeInfo>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<io.nem.xpx.model.NodeInfo>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for getNodeInfoUsingGET.
         * 
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public getNodeInfoUsingGETCall(progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = "/node/info";
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
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new RemoteNodeApi.RemoteNodeApi$6(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /**
         * Gets the node info using GET validate before call.
         * 
         * @param {*} progressListener the progress listener
         * @param {*} progressRequestListener the progress request listener
         * @return {com.squareup.okhttp.Call} the node info using GET validate before call
         * @throws ApiException the api exception
         * @private
         */
        /*private*/ getNodeInfoUsingGETValidateBeforeCall(progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let call : com.squareup.okhttp.Call = this.getNodeInfoUsingGETCall(progressListener, progressRequestListener);
            return call;
        }

        /**
         * Get Storage Node Information
         * This endpoint returns the information of the P2P Storage Node.
         * 
         * @return {io.nem.xpx.model.NodeInfo} NodeInfo
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public getNodeInfoUsingGET() : io.nem.xpx.model.NodeInfo {
            let resp : io.nem.ApiResponse<io.nem.xpx.model.NodeInfo> = this.getNodeInfoUsingGETWithHttpInfo();
            return resp.getData();
        }

        /**
         * Get Storage Node Information
         * This endpoint returns the information of the P2P Storage Node.
         * 
         * @return {io.nem.ApiResponse} ApiResponse&lt;NodeInfo&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public getNodeInfoUsingGETWithHttpInfo() : io.nem.ApiResponse<io.nem.xpx.model.NodeInfo> {
            let call : com.squareup.okhttp.Call = this.getNodeInfoUsingGETValidateBeforeCall(null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<io.nem.xpx.model.NodeInfo>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<io.nem.xpx.model.NodeInfo>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Get Storage Node Information (asynchronously)
         * This endpoint returns the information of the P2P Storage Node.
         * 
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public getNodeInfoUsingGETAsync(callback : io.nem.ApiCallback<io.nem.xpx.model.NodeInfo>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new RemoteNodeApi.RemoteNodeApi$7(this, callback);
                progressRequestListener = new RemoteNodeApi.RemoteNodeApi$8(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.getNodeInfoUsingGETValidateBeforeCall(progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<io.nem.xpx.model.NodeInfo>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<io.nem.xpx.model.NodeInfo>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for setBlockchainNodeConnectionUsingPOST.
         * 
         * @param {string} network Blockchain Network (required)
         * @param {string} domain Blockchain Network Domain (xxx.xxx.xxx) (required)
         * @param {string} port Blockchain Network Port (xxx.xxx.xxx) (required)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public setBlockchainNodeConnectionUsingPOSTCall(network : string, domain : string, port : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = "/node/set/blockchain/connection";
            let localVarQueryParams : Array<io.nem.Pair> = <any>([]);
            if(network != null) /* addAll */((l1, l2) => l1.push.apply(l1, l2))(localVarQueryParams, this.apiClient.parameterToPairs("", "network", network));
            if(domain != null) /* addAll */((l1, l2) => l1.push.apply(l1, l2))(localVarQueryParams, this.apiClient.parameterToPairs("", "domain", domain));
            if(port != null) /* addAll */((l1, l2) => l1.push.apply(l1, l2))(localVarQueryParams, this.apiClient.parameterToPairs("", "port", port));
            let localVarHeaderParams : any = <any>({});
            let localVarFormParams : any = <any>({});
            let localVarAccepts : string[] = ["application/json"];
            let localVarAccept : string = this.apiClient.selectHeaderAccept(localVarAccepts);
            if(localVarAccept != null) /* put */(localVarHeaderParams["Accept"] = localVarAccept);
            let localVarContentTypes : string[] = ["application/json"];
            let localVarContentType : string = this.apiClient.selectHeaderContentType(localVarContentTypes);
            /* put */(localVarHeaderParams["Content-Type"] = localVarContentType);
            if(progressListener != null) {
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new RemoteNodeApi.RemoteNodeApi$9(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /**
         * Sets the blockchain node connection using POST validate before call.
         * 
         * @param {string} network the network
         * @param {string} domain the domain
         * @param {string} port the port
         * @param {*} progressListener the progress listener
         * @param {*} progressRequestListener the progress request listener
         * @return {com.squareup.okhttp.Call} the com.squareup.okhttp. call
         * @throws ApiException the api exception
         * @private
         */
        /*private*/ setBlockchainNodeConnectionUsingPOSTValidateBeforeCall(network : string, domain : string, port : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(network == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'network\' when calling setBlockchainNodeConnectionUsingPOST(Async)");
            }
            if(domain == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'domain\' when calling setBlockchainNodeConnectionUsingPOST(Async)");
            }
            if(port == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'port\' when calling setBlockchainNodeConnectionUsingPOST(Async)");
            }
            let call : com.squareup.okhttp.Call = this.setBlockchainNodeConnectionUsingPOSTCall(network, domain, port, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Get Storage Node Information
         * This endpoint returns the information of the P2P Storage Node.
         * 
         * @param {string} network Blockchain Network (required)
         * @param {string} domain Blockchain Network Domain (xxx.xxx.xxx) (required)
         * @param {string} port Blockchain Network Port (xxx.xxx.xxx) (required)
         * @return {string} String
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public setBlockchainNodeConnectionUsingPOST(network : string, domain : string, port : string) : string {
            let resp : io.nem.ApiResponse<string> = this.setBlockchainNodeConnectionUsingPOSTWithHttpInfo(network, domain, port);
            return resp.getData();
        }

        /**
         * Get Storage Node Information
         * This endpoint returns the information of the P2P Storage Node.
         * 
         * @param {string} network Blockchain Network (required)
         * @param {string} domain Blockchain Network Domain (xxx.xxx.xxx) (required)
         * @param {string} port Blockchain Network Port (xxx.xxx.xxx) (required)
         * @return {io.nem.ApiResponse} ApiResponse&lt;String&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public setBlockchainNodeConnectionUsingPOSTWithHttpInfo(network : string, domain : string, port : string) : io.nem.ApiResponse<string> {
            let call : com.squareup.okhttp.Call = this.setBlockchainNodeConnectionUsingPOSTValidateBeforeCall(network, domain, port, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<string>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<string>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Get Storage Node Information (asynchronously)
         * This endpoint returns the information of the P2P Storage Node.
         * 
         * @param {string} network Blockchain Network (required)
         * @param {string} domain Blockchain Network Domain (xxx.xxx.xxx) (required)
         * @param {string} port Blockchain Network Port (xxx.xxx.xxx) (required)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public setBlockchainNodeConnectionUsingPOSTAsync(network : string, domain : string, port : string, callback : io.nem.ApiCallback<string>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new RemoteNodeApi.RemoteNodeApi$10(this, callback);
                progressRequestListener = new RemoteNodeApi.RemoteNodeApi$11(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.setBlockchainNodeConnectionUsingPOSTValidateBeforeCall(network, domain, port, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<string>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<string>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }
    }
    RemoteNodeApi["__class"] = "io.nem.xpx.service.remote.RemoteNodeApi";
    RemoteNodeApi["__interfaces"] = ["io.nem.xpx.service.intf.NodeApi"];



    export namespace RemoteNodeApi {

        export class RemoteNodeApi$0 implements com.squareup.okhttp.Interceptor {
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
        RemoteNodeApi$0["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class RemoteNodeApi$1 implements io.nem.ProgressResponseBody.ProgressListener {
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
        RemoteNodeApi$1["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class RemoteNodeApi$2 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        RemoteNodeApi$2["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class RemoteNodeApi$3 implements com.squareup.okhttp.Interceptor {
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
        RemoteNodeApi$3["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class RemoteNodeApi$4 implements io.nem.ProgressResponseBody.ProgressListener {
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
        RemoteNodeApi$4["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class RemoteNodeApi$5 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        RemoteNodeApi$5["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class RemoteNodeApi$6 implements com.squareup.okhttp.Interceptor {
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
        RemoteNodeApi$6["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class RemoteNodeApi$7 implements io.nem.ProgressResponseBody.ProgressListener {
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
        RemoteNodeApi$7["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class RemoteNodeApi$8 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        RemoteNodeApi$8["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class RemoteNodeApi$9 implements com.squareup.okhttp.Interceptor {
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
        RemoteNodeApi$9["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class RemoteNodeApi$10 implements io.nem.ProgressResponseBody.ProgressListener {
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
        RemoteNodeApi$10["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class RemoteNodeApi$11 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        RemoteNodeApi$11["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];


    }

}

