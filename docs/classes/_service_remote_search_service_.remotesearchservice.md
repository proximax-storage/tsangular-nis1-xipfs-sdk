[xpx-typescript-angular-sdk](../README.md) > ["service/remote/search.service"](../modules/_service_remote_search_service_.md) > [RemoteSearchService](../classes/_service_remote_search_service_.remotesearchservice.md)

# Class: RemoteSearchService

Class represents the RemoteSearchService

## Hierarchy

 [HttpService](_service_http_service_.httpservice.md)

**↳ RemoteSearchService**

## Index

### Constructors

* [constructor](_service_remote_search_service_.remotesearchservice.md#constructor)

### Properties

* [baseUrl](_service_remote_search_service_.remotesearchservice.md#baseurl)
* [http](_service_remote_search_service_.remotesearchservice.md#http)

### Methods

* [handleError](_service_remote_search_service_.remotesearchservice.md#handleerror)
* [isJSONString](_service_remote_search_service_.remotesearchservice.md#isjsonstring)
* [seachByKeywords](_service_remote_search_service_.remotesearchservice.md#seachbykeywords)
* [seachByMetadata](_service_remote_search_service_.remotesearchservice.md#seachbymetadata)
* [seachByName](_service_remote_search_service_.remotesearchservice.md#seachbyname)
* [setBaseUrl](_service_remote_search_service_.remotesearchservice.md#setbaseurl)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RemoteSearchService**(http: *`HttpClient`*): [RemoteSearchService](_service_remote_search_service_.remotesearchservice.md)

*Overrides [HttpService](_service_http_service_.httpservice.md).[constructor](_service_http_service_.httpservice.md#constructor)*

*Defined in service/remote/search.service.ts:36*

NodeService constructor

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| http | `HttpClient` |  the http client instance |

**Returns:** [RemoteSearchService](_service_remote_search_service_.remotesearchservice.md)

___

## Properties

<a id="baseurl"></a>

### `<Protected>` baseUrl

**● baseUrl**: *`string`* = "https://testnet2.gateway.proximax.io/"

*Overrides [HttpService](_service_http_service_.httpservice.md).[baseUrl](_service_http_service_.httpservice.md#baseurl)*

*Defined in service/remote/search.service.ts:36*

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
<a id="seachbykeywords"></a>

###  seachByKeywords

▸ **seachByKeywords**(pubKey: *`string`*, keywords?: *`string`*): `Observable`<`any`>

*Defined in service/remote/search.service.ts:57*

Search files in IPFS network by keywords Example:

```
seachByKeywords(pubKey,keywords).subscribe(response => {
     let result = response.body;
 });
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| pubKey | `string` |  the Nem public key |
| `Optional` keywords | `string` |  the search keywords seperated by comma |

**Returns:** `Observable`<`any`>
Observable<any>

___
<a id="seachbymetadata"></a>

###  seachByMetadata

▸ **seachByMetadata**(pubKey: *`string`*, key?: *`string`*, value?: *`string`*): `Observable`<`any`>

*Defined in service/remote/search.service.ts:132*

Search files in IPFS network by metadata Example:

```
seachByName(pubKey,name).subscribe(response => {
     let result = response.body;
 });
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| pubKey | `string` |  the Nem public key |
| `Optional` key | `string` |  the metadata key |
| `Optional` value | `string` |  the metadata value |

**Returns:** `Observable`<`any`>
Observable<any>

___
<a id="seachbyname"></a>

###  seachByName

▸ **seachByName**(pubKey: *`string`*, name?: *`string`*): `Observable`<`any`>

*Defined in service/remote/search.service.ts:94*

Search files in IPFS network by name Example:

```
seachByName(pubKey,name).subscribe(response => {
     let result = response.body;
 });
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| pubKey | `string` |  the Nem public key |
| `Optional` name | `string` |  the search name seperated by comma |

**Returns:** `Observable`<`any`>
Observable<any>

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

