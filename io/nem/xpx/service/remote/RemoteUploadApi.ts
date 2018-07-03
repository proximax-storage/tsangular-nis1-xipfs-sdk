/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.remote {
    /**
     * Instantiates a new remote upload api.
     * 
     * @param {io.nem.ApiClient} apiClient the api client
     * @class
     */
    export class RemoteUploadApi implements io.nem.xpx.service.intf.UploadApi {
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
         * Calls the garbage clean up and tries to unpin the given hash
         * This endpoint can be used to generates the datahash and uploads the file in the process.
         * @param {string} multihash The pinned multihash (required)
         * @return {string} String
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         */
        public deletePinnedContent(multihash : string) : string {
            let localVarPostBody : any = null;
            let localVarPath : string = "/upload/cleanup";
            let localVarQueryParams : Array<io.nem.Pair> = <any>([]);
            if(multihash != null) /* addAll */((l1, l2) => l1.push.apply(l1, l2))(localVarQueryParams, this.apiClient.parameterToPairs("", "multihash", multihash));
            let localVarHeaderParams : any = <any>({});
            let localVarFormParams : any = <any>({});
            let localVarAccepts : string[] = ["application/json"];
            let localVarAccept : string = this.apiClient.selectHeaderAccept(localVarAccepts);
            if(localVarAccept != null) /* put */(localVarHeaderParams["Accept"] = localVarAccept);
            let localVarContentTypes : string[] = ["application/json"];
            let localVarContentType : string = this.apiClient.selectHeaderContentType(localVarContentTypes);
            /* put */(localVarHeaderParams["Content-Type"] = localVarContentType);
            let localVarAuthNames : string[] = [];
            let call : com.squareup.okhttp.Call = this.apiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<string>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<string>()).getType();
            let resp : io.nem.ApiResponse<string> = this.apiClient.execute<any>(call, localVarReturnType);
            return resp.getData();
        }

        /**
         * Uploads a Base64 encoded byte[] binary file to the IPFS/P2P Storage Network
         * This endpoint can be used to generate the data that will be injected to the NEM Blockchain.
         * @return {Array} Object
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         * @param {Array} binaryData
         * @param {string} name
         * @param {string} contentType
         * @param {string} keywords
         * @param {string} metadata
         */
        public uploadBytesBinary(binaryData : number[], name : string, contentType : string, keywords : string, metadata : string) : number[] {
            let localVarPostBody : io.nem.xpx.model.UploadBytesBinaryRequestParameter = new io.nem.xpx.model.UploadBytesBinaryRequestParameter().contentType(contentType).keywords(keywords).metadata(metadata).name(name).data(binaryData);
            let localVarPath : string = "/upload/bytes/binary";
            let localVarQueryParams : Array<io.nem.Pair> = <any>([]);
            let localVarHeaderParams : any = <any>({});
            let localVarAccepts : string[] = ["*/*"];
            let localVarAccept : string = this.apiClient.selectHeaderAccept(localVarAccepts);
            if(localVarAccept != null) /* put */(localVarHeaderParams["Accept"] = localVarAccept);
            let localVarContentTypes : string[] = ["application/json"];
            let localVarContentType : string = this.apiClient.selectHeaderContentType(localVarContentTypes);
            /* put */(localVarHeaderParams["Content-Type"] = localVarContentType);
            let localVarAuthNames : string[] = [];
            let call : com.squareup.okhttp.Call = this.apiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarPostBody, localVarHeaderParams, /* emptyMap */{}, localVarAuthNames, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<number[]>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<number[]>()).getType();
            let response : io.nem.ApiResponse<number[]> = this.apiClient.execute<any>(call, localVarReturnType);
            return response.getData();
        }

        /**
         * Upload the Text to the IPFS/P2P Storage Network
         * This endpoint can be used to generate the data that will be injected to the NEM Blockchain.
         * @return {Array} Object
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         * @param {Array} textInBytes
         * @param {string} name
         * @param {string} contentType
         * @param {string} encoding
         * @param {string} keywords
         * @param {string} metadata
         */
        public uploadText(textInBytes : number[], name : string, contentType : string, encoding : string, keywords : string, metadata : string) : number[] {
            let localVarPostBody : io.nem.xpx.model.UploadTextRequestParameter = new io.nem.xpx.model.UploadTextRequestParameter().contentType(contentType).encoding(encoding).keywords(keywords).metadata(metadata).name(name).text(org.apache.commons.codec.binary.Base64.encodeBase64String(textInBytes));
            let localVarPath : string = "/upload/text";
            let localVarQueryParams : Array<io.nem.Pair> = <any>([]);
            let localVarHeaderParams : any = <any>({});
            let localVarFormParams : any = <any>({});
            let localVarAccepts : string[] = ["*/*"];
            let localVarAccept : string = this.apiClient.selectHeaderAccept(localVarAccepts);
            if(localVarAccept != null) /* put */(localVarHeaderParams["Accept"] = localVarAccept);
            let localVarContentTypes : string[] = ["application/json"];
            let localVarContentType : string = this.apiClient.selectHeaderContentType(localVarContentTypes);
            /* put */(localVarHeaderParams["Content-Type"] = localVarContentType);
            let localVarAuthNames : string[] = [];
            let call : com.squareup.okhttp.Call = this.apiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarPostBody, localVarHeaderParams, /* emptyMap */{}, localVarAuthNames, null);
            let localVarReturnType : java.lang.reflect.Type = ((target:com.google.gson.reflect.TypeToken<any>) => {
                return target;

            })(new com.google.gson.reflect.TypeToken<any>()).getType();
            let response : io.nem.ApiResponse<number[]> = this.apiClient.execute<any>(call, localVarReturnType);
            return response.getData();
        }

        /**
         * 
         * @param {string} path
         * @param {string} name
         * @param {string} keywords
         * @param {string} metadata
         * @return {Array}
         */
        public uploadPath(path : string, name : string, keywords : string, metadata : string) : number[] {
            throw new io.nem.xpx.exceptions.PathUploadNotSupportedException("Path upload is not supported for remote upload");
        }
    }
    RemoteUploadApi["__class"] = "io.nem.xpx.service.remote.RemoteUploadApi";
    RemoteUploadApi["__interfaces"] = ["io.nem.xpx.service.intf.UploadApi"];


}

