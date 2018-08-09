[xpx-typescript-angular-sdk](../README.md) > ["service/remote/download.service"](../modules/_service_remote_download_service_.md) > [RemoteDownloadService](../classes/_service_remote_download_service_.remotedownloadservice.md)

# Class: RemoteDownloadService

Class represents remote download service

## Hierarchy

 [HttpService](_service_http_service_.httpservice.md)

**↳ RemoteDownloadService**

## Index

### Constructors

* [constructor](_service_remote_download_service_.remotedownloadservice.md#constructor)

### Properties

* [baseUrl](_service_remote_download_service_.remotedownloadservice.md#baseurl)
* [http](_service_remote_download_service_.remotedownloadservice.md#http)

### Methods

* [downloadBinary](_service_remote_download_service_.remotedownloadservice.md#downloadbinary)
* [downloadDirectDatahash](_service_remote_download_service_.remotedownloadservice.md#downloaddirectdatahash)
* [downloadDirectNemhash](_service_remote_download_service_.remotedownloadservice.md#downloaddirectnemhash)
* [downloadSecureBinary](_service_remote_download_service_.remotedownloadservice.md#downloadsecurebinary)
* [downloadSecureFile](_service_remote_download_service_.remotedownloadservice.md#downloadsecurefile)
* [downloadText](_service_remote_download_service_.remotedownloadservice.md#downloadtext)
* [handleError](_service_remote_download_service_.remotedownloadservice.md#handleerror)
* [isJSONString](_service_remote_download_service_.remotedownloadservice.md#isjsonstring)
* [setBaseUrl](_service_remote_download_service_.remotedownloadservice.md#setbaseurl)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RemoteDownloadService**(http: *`HttpClient`*): [RemoteDownloadService](_service_remote_download_service_.remotedownloadservice.md)

*Overrides [HttpService](_service_http_service_.httpservice.md).[constructor](_service_http_service_.httpservice.md#constructor)*

*Defined in service/remote/download.service.ts:36*

RemoteDownloadService constructor

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| http | `HttpClient` |  the http client instance |

**Returns:** [RemoteDownloadService](_service_remote_download_service_.remotedownloadservice.md)

___

## Properties

<a id="baseurl"></a>

### `<Protected>` baseUrl

**● baseUrl**: *`string`* = "https://testnet2.gateway.proximax.io/"

*Overrides [HttpService](_service_http_service_.httpservice.md).[baseUrl](_service_http_service_.httpservice.md#baseurl)*

*Defined in service/remote/download.service.ts:36*

The default baseUrl

___
<a id="http"></a>

### `<Protected>` http

**● http**: *`HttpClient`*

*Inherited from [HttpService](_service_http_service_.httpservice.md).[http](_service_http_service_.httpservice.md#http)*

*Defined in service/http.service.ts:41*

the http client instance

___

## Methods

<a id="downloadbinary"></a>

###  downloadBinary

▸ **downloadBinary**(hash: *`string`*, transferMode: *[TransferMode](../enums/_model_transfer_mode_.transfermode.md)*): `Observable`<`any`>

*Defined in service/remote/download.service.ts:61*

Download the binary file associated to a NEM Hash. If NEM Hash uses SECURE Message, it returns the NEM TXN Payload Instead Example:

```
downloadBinary(hash,transferMode).subscribe(response => {
      const statusCode = response.status; //202 accepted
      const header:HttpHeaders = response.headers;
      const data = response.body;
 });
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| hash | `string` |  the NEM hash |
| transferMode | [TransferMode](../enums/_model_transfer_mode_.transfermode.md) |  the transfer mode either Bytes, Stream or Base64 |

**Returns:** `Observable`<`any`>
Observable<any>

___
<a id="downloaddirectdatahash"></a>

###  downloadDirectDatahash

▸ **downloadDirectDatahash**(dataHash: *`string`*): `Observable`<`any`>

*Defined in service/remote/download.service.ts:327*

Download the data from Datahash. Example:

```
downloadDirectDatahash(hash).subscribe(response => {
      const statusCode = response.status; //202 accepted
      const header:HttpHeaders = response.headers;
      const data = response.body;
 });
```

**Parameters:**

| Param | Type |
| ------ | ------ |
| dataHash | `string` |

**Returns:** `Observable`<`any`>
Observable<any>

___
<a id="downloaddirectnemhash"></a>

###  downloadDirectNemhash

▸ **downloadDirectNemhash**(nemhash: *`string`*): `Observable`<`any`>

*Defined in service/remote/download.service.ts:284*

Download the data associated to a NEM Hash. Example:

```
downloadDirectNemhash(hash).subscribe(response => {
      const statusCode = response.status; //202 accepted
      const header:HttpHeaders = response.headers;
      const data = response.body;
 });
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| nemhash | `string` |  the NEM hash |

**Returns:** `Observable`<`any`>
Observable<any>

___
<a id="downloadsecurebinary"></a>

###  downloadSecureBinary

▸ **downloadSecureBinary**(pvkey: *`string`*, hash: *`string`*, transferMode: *[TransferMode](../enums/_model_transfer_mode_.transfermode.md)*): `Observable`<`any`>

*Defined in service/remote/download.service.ts:168*

Download the binary file associated to a NEM Hash. If NEM Hash uses SECURE Message, it returns the NEM TXN Payload Instead Example:

```
downloadSecureBinary(pvkey,hash,transferMode).subscribe(response => {
      const statusCode = response.status; //202 accepted
      const header:HttpHeaders = response.headers;
      const data = response.body;
 });
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| pvkey | `string` |  the private key |
| hash | `string` |  the NEM hash |
| transferMode | [TransferMode](../enums/_model_transfer_mode_.transfermode.md) |  the transfer mode either Bytes, Stream or Base64 |

**Returns:** `Observable`<`any`>
Observable<any>

___
<a id="downloadsecurefile"></a>

###  downloadSecureFile

▸ **downloadSecureFile**(pvkey: *`string`*, hash: *`string`*, transferMode: *[TransferMode](../enums/_model_transfer_mode_.transfermode.md)*): `Observable`<`any`>

*Defined in service/remote/download.service.ts:227*

Download data associated to a IPFS Hash. Example:

```
downloadSecureFile(pvkey,hash,transferMode).subscribe(response => {
      const statusCode = response.status; //202 accepted
      const header:HttpHeaders = response.headers;
      const data = response.body;
 });
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| pvkey | `string` |  the private key |
| hash | `string` |  the NEM hash |
| transferMode | [TransferMode](../enums/_model_transfer_mode_.transfermode.md) |  the transfer mode either Bytes, Stream or Base64 |

**Returns:** `Observable`<`any`>
Observable<any>

___
<a id="downloadtext"></a>

###  downloadText

▸ **downloadText**(hash: *`string`*, transferMode: *[TransferMode](../enums/_model_transfer_mode_.transfermode.md)*): `Observable`<`any`>

*Defined in service/remote/download.service.ts:114*

Download the text file associated to a NEM Hash. If NEM Hash uses SECURE Message, it returns the NEM TXN Payload Instead Example:

```
downloadText(hash,transferMode).subscribe(response => {
      const statusCode = response.status; //202 accepted
      const header:HttpHeaders = response.headers;
      const data = response.body;
 });
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| hash | `string` |  the NEM hash |
| transferMode | [TransferMode](../enums/_model_transfer_mode_.transfermode.md) |  the transfer mode either Bytes, Stream or Base64 |

**Returns:** `Observable`<`any`>
Observable<any>

___
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

