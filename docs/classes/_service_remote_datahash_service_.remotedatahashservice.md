[xpx-typescript-angular-sdk](../README.md) > ["service/remote/datahash.service"](../modules/_service_remote_datahash_service_.md) > [RemoteDataHashService](../classes/_service_remote_datahash_service_.remotedatahashservice.md)

# Class: RemoteDataHashService

Class represents remote data hash service

## Hierarchy

 [HttpService](_service_http_service_.httpservice.md)

**↳ RemoteDataHashService**

## Index

### Constructors

* [constructor](_service_remote_datahash_service_.remotedatahashservice.md#constructor)

### Properties

* [baseUrl](_service_remote_datahash_service_.remotedatahashservice.md#baseurl)
* [http](_service_remote_datahash_service_.remotedatahashservice.md#http)

### Methods

* [generateDatahash](_service_remote_datahash_service_.remotedatahashservice.md#generatedatahash)
* [handleError](_service_remote_datahash_service_.remotedatahashservice.md#handleerror)
* [isJSONString](_service_remote_datahash_service_.remotedatahashservice.md#isjsonstring)
* [setBaseUrl](_service_remote_datahash_service_.remotedatahashservice.md#setbaseurl)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RemoteDataHashService**(http: *`HttpClient`*): [RemoteDataHashService](_service_remote_datahash_service_.remotedatahashservice.md)

*Overrides [HttpService](_service_http_service_.httpservice.md).[constructor](_service_http_service_.httpservice.md#constructor)*

*Defined in service/remote/datahash.service.ts:33*

RemoteDataHashService constructor

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| http | `HttpClient` |  the http client instance |

**Returns:** [RemoteDataHashService](_service_remote_datahash_service_.remotedatahashservice.md)

___

## Properties

<a id="baseurl"></a>

### `<Protected>` baseUrl

**● baseUrl**: *`string`* = "https://testnet2.gateway.proximax.io/"

*Overrides [HttpService](_service_http_service_.httpservice.md).[baseUrl](_service_http_service_.httpservice.md#baseurl)*

*Defined in service/remote/datahash.service.ts:33*

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

<a id="generatedatahash"></a>

###  generateDatahash

▸ **generateDatahash**(data: *`any`*): `Observable`<`any`>

*Defined in service/remote/datahash.service.ts:56*

Generates datahash for free form data Example:

```
generateDatahash(data).subscribe(response => {
      const statusCode = response.status; //202 accepted
      const header:HttpHeaders = response.headers;
      const data = response.body;
 });
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any` |  the free form data |

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

