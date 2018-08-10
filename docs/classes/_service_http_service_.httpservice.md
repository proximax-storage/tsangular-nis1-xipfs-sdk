[xpx-typescript-angular-sdk](../README.md) > ["service/http.service"](../modules/_service_http_service_.md) > [HttpService](../classes/_service_http_service_.httpservice.md)

# Class: HttpService

Abstract class represents the HttpService

## Hierarchy

**HttpService**

↳  [RemoteAccountService](_service_remote_account_service_.remoteaccountservice.md)

↳  [RemoteUploadService](_service_remote_upload_service_.remoteuploadservice.md)

↳  [RemoteDownloadService](_service_remote_download_service_.remotedownloadservice.md)

↳  [RemoteNodeService](_service_remote_node_service_.remotenodeservice.md)

↳  [RemoteTransactionAnnounceService](_service_remote_transaction_announce_service_.remotetransactionannounceservice.md)

↳  [RemoteDataHashService](_service_remote_datahash_service_.remotedatahashservice.md)

↳  [RemoteSearchService](_service_remote_search_service_.remotesearchservice.md)

## Index

### Constructors

* [constructor](_service_http_service_.httpservice.md#constructor)

### Properties

* [baseUrl](_service_http_service_.httpservice.md#baseurl)
* [http](_service_http_service_.httpservice.md#http)

### Methods

* [handleError](_service_http_service_.httpservice.md#handleerror)
* [isJSONString](_service_http_service_.httpservice.md#isjsonstring)
* [setBaseUrl](_service_http_service_.httpservice.md#setbaseurl)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new HttpService**(http: *`HttpClient`*): [HttpService](_service_http_service_.httpservice.md)

*Defined in service/http.service.ts:35*

HttpService constructor

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| http | `HttpClient` |  the http client instance |

**Returns:** [HttpService](_service_http_service_.httpservice.md)

___

## Properties

<a id="baseurl"></a>

### `<Protected>``<Abstract>` baseUrl

**● baseUrl**: *`string`*

*Defined in service/http.service.ts:35*

The baseUrl

___
<a id="http"></a>

### `<Protected>` http

**● http**: *`HttpClient`*

*Defined in service/http.service.ts:41*

the http client instance

___

## Methods

<a id="handleerror"></a>

### `<Protected>` handleError

▸ **handleError**(error: *`HttpErrorResponse`*): `Observable`<`never`>

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

*Defined in service/http.service.ts:49*

Sets base url

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| baseUrl | `string` |  the base url |

**Returns:** `void`

___

