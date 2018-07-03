/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.remote {
    /**
     * Instantiates a new remote publish and subscribe api.
     * 
     * @param {io.nem.ApiClient} apiClient the api client
     * @class
     */
    export class RemotePublishAndSubscribeApi implements io.nem.xpx.service.intf.PublishAndSubscribeApi {
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
         * Build call for publishTopicUsingGET.
         * 
         * @param {string} topic Topic (required)
         * @param {string} message Initial Message (optional)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public publishTopicUsingGETCall(topic : string, message : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = /* replaceAll */"/pubsub/init/{topic}".replace(new RegExp("\\{topic\\}", 'g'),this.apiClient.escapeString(topic.toString()));
            let localVarQueryParams : Array<io.nem.Pair> = <any>([]);
            if(message != null) /* addAll */((l1, l2) => l1.push.apply(l1, l2))(localVarQueryParams, this.apiClient.parameterToPairs("", "message", message));
            let localVarHeaderParams : any = <any>({});
            let localVarFormParams : any = <any>({});
            let localVarAccepts : string[] = ["*/*"];
            let localVarAccept : string = this.apiClient.selectHeaderAccept(localVarAccepts);
            if(localVarAccept != null) /* put */(localVarHeaderParams["Accept"] = localVarAccept);
            let localVarContentTypes : string[] = ["application/json"];
            let localVarContentType : string = this.apiClient.selectHeaderContentType(localVarContentTypes);
            /* put */(localVarHeaderParams["Content-Type"] = localVarContentType);
            if(progressListener != null) {
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new RemotePublishAndSubscribeApi.RemotePublishAndSubscribeApi$0(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /**
         * Publish topic using GET validate before call.
         * 
         * @param {string} topic the topic
         * @param {string} message the message
         * @param {*} progressListener the progress listener
         * @param {*} progressRequestListener the progress request listener
         * @return {com.squareup.okhttp.Call} the com.squareup.okhttp. call
         * @throws ApiException the api exception
         * @private
         */
        /*private*/ publishTopicUsingGETValidateBeforeCall(topic : string, message : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(topic == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'topic\' when calling publishTopicUsingGET(Async)");
            }
            let call : com.squareup.okhttp.Call = this.publishTopicUsingGETCall(topic, message, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Publish and Subscribe. Make sure that the IPFS daemon has pubsub enabled.
         * Publish and Subscribe. Make sure that the IPFS daemon has pubsub enabled.
         * @param {string} topic Topic (required)
         * @param {string} message Initial Message (optional)
         * @return {*} Object
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public publishTopicUsingGET(topic : string, message : string) : any {
            let resp : io.nem.ApiResponse<any> = this.publishTopicUsingGETWithHttpInfo(topic, message);
            return resp.getData();
        }

        /**
         * Publish and Subscribe. Make sure that the IPFS daemon has pubsub enabled.
         * Publish and Subscribe. Make sure that the IPFS daemon has pubsub enabled.
         * @param {string} topic Topic (required)
         * @param {string} message Initial Message (optional)
         * @return {io.nem.ApiResponse} ApiResponse&lt;Object&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public publishTopicUsingGETWithHttpInfo(topic : string, message : string) : io.nem.ApiResponse<any> {
            let call : com.squareup.okhttp.Call = this.publishTopicUsingGETValidateBeforeCall(topic, message, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<any>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<any>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Publish and Subscribe. Make sure that the IPFS daemon has pubsub enabled. (asynchronously)
         * Publish and Subscribe. Make sure that the IPFS daemon has pubsub enabled.
         * @param {string} topic Topic (required)
         * @param {string} message Initial Message (optional)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public publishTopicUsingGETAsync(topic : string, message : string, callback : io.nem.ApiCallback<any>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new RemotePublishAndSubscribeApi.RemotePublishAndSubscribeApi$1(this, callback);
                progressRequestListener = new RemotePublishAndSubscribeApi.RemotePublishAndSubscribeApi$2(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.publishTopicUsingGETValidateBeforeCall(topic, message, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<any>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<any>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }

        /**
         * Build call for sendToTopicUsingGET.
         * 
         * @param {string} topic Topic (required)
         * @param {string} message Initial Message (optional)
         * @param {*} progressListener Progress listener
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} Call to execute
         * @throws ApiException If fail to serialize the request body object
         */
        public sendToTopicUsingGETCall(topic : string, message : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let localVarPostBody : any = null;
            let localVarPath : string = /* replaceAll */"/pubsub/send/to/{topic}".replace(new RegExp("\\{topic\\}", 'g'),this.apiClient.escapeString(topic.toString()));
            let localVarQueryParams : Array<io.nem.Pair> = <any>([]);
            if(message != null) /* addAll */((l1, l2) => l1.push.apply(l1, l2))(localVarQueryParams, this.apiClient.parameterToPairs("", "message", message));
            let localVarHeaderParams : any = <any>({});
            let localVarFormParams : any = <any>({});
            let localVarAccepts : string[] = ["*/*"];
            let localVarAccept : string = this.apiClient.selectHeaderAccept(localVarAccepts);
            if(localVarAccept != null) /* put */(localVarHeaderParams["Accept"] = localVarAccept);
            let localVarContentTypes : string[] = ["application/json"];
            let localVarContentType : string = this.apiClient.selectHeaderContentType(localVarContentTypes);
            /* put */(localVarHeaderParams["Content-Type"] = localVarContentType);
            if(progressListener != null) {
                /* add */(this.apiClient.getHttpClient().networkInterceptors().push(new RemotePublishAndSubscribeApi.RemotePublishAndSubscribeApi$3(this, progressListener))>0);
            }
            let localVarAuthNames : string[] = [];
            return this.apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
        }

        /**
         * Send to topic using GET validate before call.
         * 
         * @param {string} topic the topic
         * @param {string} message the message
         * @param {*} progressListener the progress listener
         * @param {*} progressRequestListener the progress request listener
         * @return {com.squareup.okhttp.Call} the com.squareup.okhttp. call
         * @throws ApiException the api exception
         * @private
         */
        /*private*/ sendToTopicUsingGETValidateBeforeCall(topic : string, message : string, progressListener : io.nem.ProgressResponseBody.ProgressListener, progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            if(topic == null) {
                throw new io.nem.xpx.exceptions.ApiException("Missing the required parameter \'topic\' when calling sendToTopicUsingGET(Async)");
            }
            let call : com.squareup.okhttp.Call = this.sendToTopicUsingGETCall(topic, message, progressListener, progressRequestListener);
            return call;
        }

        /**
         * Send a message to a published topic
         * Publish and Subscribe. Make sure that the IPFS daemon has pubsub enabled.
         * @param {string} topic Topic (required)
         * @param {string} message Initial Message (optional)
         * @return {*} Object
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public sendToTopicUsingGET(topic : string, message : string) : any {
            let resp : io.nem.ApiResponse<any> = this.sendToTopicUsingGETWithHttpInfo(topic, message);
            return resp.getData();
        }

        /**
         * Send a message to a published topic
         * Publish and Subscribe. Make sure that the IPFS daemon has pubsub enabled.
         * @param {string} topic Topic (required)
         * @param {string} message Initial Message (optional)
         * @return {io.nem.ApiResponse} ApiResponse&lt;Object&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public sendToTopicUsingGETWithHttpInfo(topic : string, message : string) : io.nem.ApiResponse<any> {
            let call : com.squareup.okhttp.Call = this.sendToTopicUsingGETValidateBeforeCall(topic, message, null, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<any>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<any>()).getType();
            return this.apiClient.execute<any>(call, localVarReturnType);
        }

        /**
         * Send a message to a published topic (asynchronously)
         * Publish and Subscribe. Make sure that the IPFS daemon has pubsub enabled.
         * @param {string} topic Topic (required)
         * @param {string} message Initial Message (optional)
         * @param {*} callback The callback to be executed when the API call finishes
         * @return {com.squareup.okhttp.Call} The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         */
        public sendToTopicUsingGETAsync(topic : string, message : string, callback : io.nem.ApiCallback<any>) : com.squareup.okhttp.Call {
            let progressListener : io.nem.ProgressResponseBody.ProgressListener = null;
            let progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener = null;
            if(callback != null) {
                progressListener = new RemotePublishAndSubscribeApi.RemotePublishAndSubscribeApi$4(this, callback);
                progressRequestListener = new RemotePublishAndSubscribeApi.RemotePublishAndSubscribeApi$5(this, callback);
            }
            let call : com.squareup.okhttp.Call = this.sendToTopicUsingGETValidateBeforeCall(topic, message, progressListener, progressRequestListener);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<any>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<any>()).getType();
            this.apiClient.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, localVarReturnType, callback);
            return call;
        }
    }
    RemotePublishAndSubscribeApi["__class"] = "io.nem.xpx.service.remote.RemotePublishAndSubscribeApi";
    RemotePublishAndSubscribeApi["__interfaces"] = ["io.nem.xpx.service.intf.PublishAndSubscribeApi"];



    export namespace RemotePublishAndSubscribeApi {

        export class RemotePublishAndSubscribeApi$0 implements com.squareup.okhttp.Interceptor {
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
        RemotePublishAndSubscribeApi$0["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class RemotePublishAndSubscribeApi$1 implements io.nem.ProgressResponseBody.ProgressListener {
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
        RemotePublishAndSubscribeApi$1["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class RemotePublishAndSubscribeApi$2 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        RemotePublishAndSubscribeApi$2["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];



        export class RemotePublishAndSubscribeApi$3 implements com.squareup.okhttp.Interceptor {
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
        RemotePublishAndSubscribeApi$3["__interfaces"] = ["com.squareup.okhttp.Interceptor"];



        export class RemotePublishAndSubscribeApi$4 implements io.nem.ProgressResponseBody.ProgressListener {
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
        RemotePublishAndSubscribeApi$4["__interfaces"] = ["io.nem.ProgressResponseBody.ProgressListener"];



        export class RemotePublishAndSubscribeApi$5 implements io.nem.ProgressRequestBody.ProgressRequestListener {
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
        RemotePublishAndSubscribeApi$5["__interfaces"] = ["io.nem.ProgressRequestBody.ProgressRequestListener"];


    }

}

