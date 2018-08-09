[xpx-typescript-angular-sdk](../README.md) > ["service/remote/account.service"](../modules/_service_remote_account_service_.md) > [RemoteAccountService](../classes/_service_remote_account_service_.remoteaccountservice.md)

# Class: RemoteAccountService

Class represents Remote account service

## Hierarchy

 [HttpService](_service_http_service_.httpservice.md)

**↳ RemoteAccountService**

## Index

### Constructors

* [constructor](_service_remote_account_service_.remoteaccountservice.md#constructor)

### Properties

* [baseUrl](_service_remote_account_service_.remoteaccountservice.md#baseurl)
* [http](_service_remote_account_service_.remoteaccountservice.md#http)

### Methods

* [getAccountInfo](_service_remote_account_service_.remoteaccountservice.md#getaccountinfo)
* [getEntireTransaction](_service_remote_account_service_.remoteaccountservice.md#getentiretransaction)
* [getIncomingTransactions](_service_remote_account_service_.remoteaccountservice.md#getincomingtransactions)
* [getOutgoingTransactions](_service_remote_account_service_.remoteaccountservice.md#getoutgoingtransactions)
* [getTransactions](_service_remote_account_service_.remoteaccountservice.md#gettransactions)
* [getUnconfirmedTransactions](_service_remote_account_service_.remoteaccountservice.md#getunconfirmedtransactions)
* [handleError](_service_remote_account_service_.remoteaccountservice.md#handleerror)
* [isJSONString](_service_remote_account_service_.remoteaccountservice.md#isjsonstring)
* [setBaseUrl](_service_remote_account_service_.remoteaccountservice.md#setbaseurl)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RemoteAccountService**(http: *`HttpClient`*): [RemoteAccountService](_service_remote_account_service_.remoteaccountservice.md)

*Overrides [HttpService](_service_http_service_.httpservice.md).[constructor](_service_http_service_.httpservice.md#constructor)*

*Defined in service/remote/account.service.ts:34*

RemoteAccountService constructor

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| http | `HttpClient` |  the http client instance |

**Returns:** [RemoteAccountService](_service_remote_account_service_.remoteaccountservice.md)

___

## Properties

<a id="baseurl"></a>

### `<Protected>` baseUrl

**● baseUrl**: *`string`* = "https://testnet2.gateway.proximax.io/"

*Overrides [HttpService](_service_http_service_.httpservice.md).[baseUrl](_service_http_service_.httpservice.md#baseurl)*

*Defined in service/remote/account.service.ts:34*

The default baseURl

___
<a id="http"></a>

### `<Protected>` http

**● http**: *`HttpClient`*

*Inherited from [HttpService](_service_http_service_.httpservice.md).[http](_service_http_service_.httpservice.md#http)*

*Defined in service/http.service.ts:41*

the http client instance

___

## Methods

<a id="getaccountinfo"></a>

###  getAccountInfo

▸ **getAccountInfo**(pubKey: *`string`*): `Observable`<`any`>

*Defined in service/remote/account.service.ts:135*

Gets Nem account information by the public key Example:

```
getAccountInfo(publicKey).subscribe(response => {
      const statusCode = response.status; //202 accepted
      const header:HttpHeaders = response.headers;
      const accountMetaDataPair: AccountMetaDataPair = response.body;
 });
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| pubKey | `string` |  Nem account public key |

**Returns:** `Observable`<`any`>
Observable<any>

___
<a id="getentiretransaction"></a>

###  getEntireTransaction

▸ **getEntireTransaction**(pubKey: *`string`*): `Observable`<`any`>

*Defined in service/remote/account.service.ts:57*

Gets the entire Nem account transactions by the public key Example:

```
getEntireTransaction(publicKey).subscribe(response => {
      const statusCode = response.status; //202 accepted
      const header:HttpHeaders = response.headers;
      const data = response.body;
 });
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| pubKey | `string` |  Nem account public key |

**Returns:** `Observable`<`any`>
Observable<any>

___
<a id="getincomingtransactions"></a>

###  getIncomingTransactions

▸ **getIncomingTransactions**(pubKey: *`string`*): `Observable`<`any`>

*Defined in service/remote/account.service.ts:96*

Gets all incoming Nem transactions by the public key Example:

```
getIncomingTransactions(publicKey).subscribe(response => {
      const statusCode = response.status; //202 accepted
      const header:HttpHeaders = response.headers;
      const data = response.body;
 });
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| pubKey | `string` |  Nem account public key |

**Returns:** `Observable`<`any`>
Observable<any>

___
<a id="getoutgoingtransactions"></a>

###  getOutgoingTransactions

▸ **getOutgoingTransactions**(pubKey: *`string`*): `Observable`<`any`>

*Defined in service/remote/account.service.ts:175*

Gets all outgoing Nem transactions by the public key Example:

```
getOutgoingTransactions(publicKey).subscribe(response => {
      const statusCode = response.status; //202 accepted
      const header:HttpHeaders = response.headers;
      const data = response.body;
 });
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| pubKey | `string` |  Nem account public key |

**Returns:** `Observable`<`any`>
Observable<any>

___
<a id="gettransactions"></a>

###  getTransactions

▸ **getTransactions**(pubKey: *`string`*, hash?: *`string`*, pageSize?: *`number`*): `Observable`<`any`>

*Defined in service/remote/account.service.ts:216*

Gets all Nem transactions by the public key Example:

```
getTransactions(publicKey).subscribe(response => {
      const statusCode = response.status; //202 accepted
      const header:HttpHeaders = response.headers;
      const data = response.body;
 });
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| pubKey | `string` |  the Nem account public key |
| `Optional` hash | `string` |  the Nem transaction hash |
| `Optional` pageSize | `number` |  the page size of transaction list |

**Returns:** `Observable`<`any`>
Observable<any>

___
<a id="getunconfirmedtransactions"></a>

###  getUnconfirmedTransactions

▸ **getUnconfirmedTransactions**(pubKey: *`string`*): `Observable`<`any`>

*Defined in service/remote/account.service.ts:266*

Gets all unconfirmed Nem transactions by the public key Example:

```
getUnconfirmedTransactions(publicKey).subscribe(response => {
      const statusCode = response.status; //202 accepted
      const header:HttpHeaders = response.headers;
      const data = response.body;
 });
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| pubKey | `string` |  Nem account public key |

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

