[xpx-typescript-angular-sdk](../README.md) > ["service/remote/transaction-announce.service"](../modules/_service_remote_transaction_announce_service_.md) > [RemoteTransactionAnnounceService](../classes/_service_remote_transaction_announce_service_.remotetransactionannounceservice.md)

# Class: RemoteTransactionAnnounceService

Class represents remote transaction announce service

## Hierarchy

 [HttpService](_service_http_service_.httpservice.md)

**↳ RemoteTransactionAnnounceService**

## Index

### Constructors

* [constructor](_service_remote_transaction_announce_service_.remotetransactionannounceservice.md#constructor)

### Properties

* [baseUrl](_service_remote_transaction_announce_service_.remotetransactionannounceservice.md#baseurl)
* [http](_service_remote_transaction_announce_service_.remotetransactionannounceservice.md#http)

### Methods

* [getTransaction](_service_remote_transaction_announce_service_.remotetransactionannounceservice.md#gettransaction)
* [handleError](_service_remote_transaction_announce_service_.remotetransactionannounceservice.md#handleerror)
* [isJSONString](_service_remote_transaction_announce_service_.remotetransactionannounceservice.md#isjsonstring)
* [setBaseUrl](_service_remote_transaction_announce_service_.remotetransactionannounceservice.md#setbaseurl)
* [transactionAnnounce](_service_remote_transaction_announce_service_.remotetransactionannounceservice.md#transactionannounce)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RemoteTransactionAnnounceService**(http: *`HttpClient`*): [RemoteTransactionAnnounceService](_service_remote_transaction_announce_service_.remotetransactionannounceservice.md)

*Overrides [HttpService](_service_http_service_.httpservice.md).[constructor](_service_http_service_.httpservice.md#constructor)*

*Defined in service/remote/transaction-announce.service.ts:37*

RemoteTransactionAnnounceService constructor

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| http | `HttpClient` |  the http client instance |

**Returns:** [RemoteTransactionAnnounceService](_service_remote_transaction_announce_service_.remotetransactionannounceservice.md)

___

## Properties

<a id="baseurl"></a>

### `<Protected>` baseUrl

**● baseUrl**: *`string`* = "https://testnet2.gateway.proximax.io/"

*Overrides [HttpService](_service_http_service_.httpservice.md).[baseUrl](_service_http_service_.httpservice.md#baseurl)*

*Defined in service/remote/transaction-announce.service.ts:37*

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

<a id="gettransaction"></a>

###  getTransaction

▸ **getTransaction**(hash: *`string`*): `Observable`<`any`>

*Defined in service/remote/transaction-announce.service.ts:87*

Get the XPX transaction
*__deprecated__*: DO NOT USE

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| hash | `string` |  the NEM hash |

**Returns:** `Observable`<`any`>

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
<a id="transactionannounce"></a>

###  transactionAnnounce

▸ **transactionAnnounce**(payload: *[SignedTransaction](../interfaces/_model_signed_transaction_.signedtransaction.md)*): `Observable`<`any`>

*Defined in service/remote/transaction-announce.service.ts:52*

Announce the data signature to NEM network

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| payload | [SignedTransaction](../interfaces/_model_signed_transaction_.signedtransaction.md) |  the SignedTransaction payload |

**Returns:** `Observable`<`any`>
Observable<any>

___

