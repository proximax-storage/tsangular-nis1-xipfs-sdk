[xpx-typescript-angular-sdk](../README.md) > ["service/remote/upload.service"](../modules/_service_remote_upload_service_.md) > [RemoteUploadService](../classes/_service_remote_upload_service_.remoteuploadservice.md)

# Class: RemoteUploadService

Class represents the remote upload service

## Hierarchy

 [HttpService](_service_http_service_.httpservice.md)

**↳ RemoteUploadService**

## Index

### Constructors

* [constructor](_service_remote_upload_service_.remoteuploadservice.md#constructor)

### Properties

* [baseUrl](_service_remote_upload_service_.remoteuploadservice.md#baseurl)
* [http](_service_remote_upload_service_.remoteuploadservice.md#http)

### Methods

* [handleError](_service_remote_upload_service_.remoteuploadservice.md#handleerror)
* [isJSONString](_service_remote_upload_service_.remoteuploadservice.md#isjsonstring)
* [setBaseUrl](_service_remote_upload_service_.remoteuploadservice.md#setbaseurl)
* [uploadBase64Binary](_service_remote_upload_service_.remoteuploadservice.md#uploadbase64binary)
* [uploadBinary](_service_remote_upload_service_.remoteuploadservice.md#uploadbinary)
* [uploadCleanup](_service_remote_upload_service_.remoteuploadservice.md#uploadcleanup)
* [uploadGenerateSign](_service_remote_upload_service_.remoteuploadservice.md#uploadgeneratesign)
* [uploadSignAnnounce](_service_remote_upload_service_.remoteuploadservice.md#uploadsignannounce)
* [uploadText](_service_remote_upload_service_.remoteuploadservice.md#uploadtext)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RemoteUploadService**(http: *`HttpClient`*): [RemoteUploadService](_service_remote_upload_service_.remoteuploadservice.md)

*Overrides [HttpService](_service_http_service_.httpservice.md).[constructor](_service_http_service_.httpservice.md#constructor)*

*Defined in service/remote/upload.service.ts:41*

RemoteUploadService constructor

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| http | `HttpClient` |  the http client instance |

**Returns:** [RemoteUploadService](_service_remote_upload_service_.remoteuploadservice.md)

___

## Properties

<a id="baseurl"></a>

### `<Protected>` baseUrl

**● baseUrl**: *`string`* = "https://testnet2.gateway.proximax.io/"

*Overrides [HttpService](_service_http_service_.httpservice.md).[baseUrl](_service_http_service_.httpservice.md#baseurl)*

*Defined in service/remote/upload.service.ts:41*

___
<a id="http"></a>

### `<Protected>` http

**● http**: *`HttpClient`*

*Inherited from [HttpService](_service_http_service_.httpservice.md).[http](_service_http_service_.httpservice.md#http)*

*Defined in service/http.service.ts:41*

the http client instance

___

## Methods

<a id="handleerror"></a>

### `<Protected>` handleError

▸ **handleError**(error: *`HttpErrorResponse`*): `Observable`<`never`>

*Inherited from [HttpService](_service_http_service_.httpservice.md).[handleError](_service_http_service_.httpservice.md#handleerror)*

*Defined in service/http.service.ts:58*

Handles common error

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| error | `HttpErrorResponse` |  the error |

**Returns:** `Observable`<`never`>

___
<a id="isjsonstring"></a>

### `<Protected>` isJSONString

▸ **isJSONString**(str: *`string`*): `boolean`

*Inherited from [HttpService](_service_http_service_.httpservice.md).[isJSONString](_service_http_service_.httpservice.md#isjsonstring)*

*Defined in service/http.service.ts:79*

Checks the input string is in JSON format

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  the input string |

**Returns:** `boolean`

___
<a id="setbaseurl"></a>

###  setBaseUrl

▸ **setBaseUrl**(baseUrl: *`string`*): `void`

*Inherited from [HttpService](_service_http_service_.httpservice.md).[setBaseUrl](_service_http_service_.httpservice.md#setbaseurl)*

*Defined in service/http.service.ts:49*

Sets base url

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| baseUrl | `string` |  the base url |

**Returns:** `void`

___
<a id="uploadbase64binary"></a>

###  uploadBase64Binary

▸ **uploadBase64Binary**(payload: *[UploadBinaryRequest](_model_upload_binary_request_.uploadbinaryrequest.md)*): `Observable`<`any`>

*Defined in service/remote/upload.service.ts:193*

Uploads base64 encoded string binary file to IPFS network Example: service.uploadBinary(payload).subscribe((response) => { const rhm: ResourceHashMessage = response; const ipfsHash = rhm.hash(); });
*__deprecated__*: DO NOT USE - END POINT REMOVED

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| payload | [UploadBinaryRequest](_model_upload_binary_request_.uploadbinaryrequest.md) |  the upload binary request payload |

**Returns:** `Observable`<`any`>

___
<a id="uploadbinary"></a>

###  uploadBinary

▸ **uploadBinary**(payload: *[UploadBinaryRequest](_model_upload_binary_request_.uploadbinaryrequest.md)*): `Observable`<`any`>

*Defined in service/remote/upload.service.ts:130*

Uploads binary file to IPFS network Example: service.uploadBinary(payload).subscribe((response) => { const rhm: ResourceHashMessage = response; const ipfsHash = rhm.hash(); });

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| payload | [UploadBinaryRequest](_model_upload_binary_request_.uploadbinaryrequest.md) |  the upload binary request payload |

**Returns:** `Observable`<`any`>
Observable<any>

___
<a id="uploadcleanup"></a>

###  uploadCleanup

▸ **uploadCleanup**(multihash: *`string`*): `Observable`<`any`>

*Defined in service/remote/upload.service.ts:391*

Cleanup hash Example: uploadCleanup(multihash).subscribe(reponse => { const result: GenericResponseMessage = response.body; console.log(result); });

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| multihash | `string` |  the multihash |

**Returns:** `Observable`<`any`>

___
<a id="uploadgeneratesign"></a>

###  uploadGenerateSign

▸ **uploadGenerateSign**(pvkey: *`string`*, pubkey: *`string`*, messageType: *[MessageType](../enums/_model_message_type_.messagetype.md)*, file: *`Blob`*, keywords?: *`string`*, metadata?: *`string`*): `Observable`<`any`>

*Defined in service/remote/upload.service.ts:321*

Uploads binary file to IFPS network, sign and announce to NEM network Example: service.uploadSignAnnounce(payload).subscribe((response) => { const signedTxt: SignedTransaction = response.body; ; });

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| pvkey | `string` |  the blockchain network private key |
| pubkey | `string` |  the blockchain network public key |
| messageType | [MessageType](../enums/_model_message_type_.messagetype.md) |  the message type either PLAIN or SECURE |
| file | `Blob` |  the binary file |
| `Optional` keywords | `string` |  the keywords seperated by comma (,) |
| `Optional` metadata | `string` |  the metadata in JSON format |

**Returns:** `Observable`<`any`>
Observable<any>

___
<a id="uploadsignannounce"></a>

###  uploadSignAnnounce

▸ **uploadSignAnnounce**(pvkey: *`string`*, pubkey: *`string`*, messageType: *[MessageType](../enums/_model_message_type_.messagetype.md)*, payload: *[UploadBinaryRequest](_model_upload_binary_request_.uploadbinaryrequest.md)*): `Observable`<`any`>

*Defined in service/remote/upload.service.ts:259*

Uploads binary file to IFPS network, sign and announce to NEM network Example: service.uploadSignAnnounce(payload).subscribe((response) => { const signedTxt: SignedTransaction = response.body; ; });

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| pvkey | `string` |  the blockchain network private key |
| pubkey | `string` |  the blockchain network public key |
| messageType | [MessageType](../enums/_model_message_type_.messagetype.md) |  the message type either PLAIN or SECURE |
| payload | [UploadBinaryRequest](_model_upload_binary_request_.uploadbinaryrequest.md) |  the request payload for uploading binary file |

**Returns:** `Observable`<`any`>
Observable<any>

___
<a id="uploadtext"></a>

###  uploadText

▸ **uploadText**(payload: *[UploadTextRequest](_model_upload_text_request_.uploadtextrequest.md)*): `Observable`<`any`>

*Defined in service/remote/upload.service.ts:62*

Uploads text to IPFS network Example: service.uploadText(payload).subscribe((response) => { const rhm: ResourceHashMessage = response; const ipfsHash = rhm.hash(); });

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| payload | [UploadTextRequest](_model_upload_text_request_.uploadtextrequest.md) |  the upload text request payload |

**Returns:** `Observable`<`any`>
Observable<any>

___

