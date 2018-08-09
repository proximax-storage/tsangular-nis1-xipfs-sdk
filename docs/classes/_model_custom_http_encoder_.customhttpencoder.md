[xpx-typescript-angular-sdk](../README.md) > ["model/custom-http-encoder"](../modules/_model_custom_http_encoder_.md) > [CustomHttpEncoder](../classes/_model_custom_http_encoder_.customhttpencoder.md)

# Class: CustomHttpEncoder

CustomHttpEncoder Fix plus sign (+) not encoding, so sent as blank space See: [https://github.com/angular/angular/issues/11058#issuecomment-247367318](https://github.com/angular/angular/issues/11058#issuecomment-247367318)

## Hierarchy

 `HttpUrlEncodingCodec`

**↳ CustomHttpEncoder**

## Implements

* `HttpParameterCodec`

## Index

### Methods

* [decodeKey](_model_custom_http_encoder_.customhttpencoder.md#decodekey)
* [decodeValue](_model_custom_http_encoder_.customhttpencoder.md#decodevalue)
* [encodeKey](_model_custom_http_encoder_.customhttpencoder.md#encodekey)
* [encodeValue](_model_custom_http_encoder_.customhttpencoder.md#encodevalue)

---

## Methods

<a id="decodekey"></a>

###  decodeKey

▸ **decodeKey**(k: *`string`*): `string`

*Inherited from HttpUrlEncodingCodec.decodeKey*

*Defined in C:/Works/Pets/proximax/angular-xpx-storage/node_modules/@angular/common/http/src/params.d.ts:30*

**Parameters:**

| Param | Type |
| ------ | ------ |
| k | `string` |

**Returns:** `string`

___
<a id="decodevalue"></a>

###  decodeValue

▸ **decodeValue**(v: *`string`*): `string`

*Inherited from HttpUrlEncodingCodec.decodeValue*

*Defined in C:/Works/Pets/proximax/angular-xpx-storage/node_modules/@angular/common/http/src/params.d.ts:31*

**Parameters:**

| Param | Type |
| ------ | ------ |
| v | `string` |

**Returns:** `string`

___
<a id="encodekey"></a>

###  encodeKey

▸ **encodeKey**(k: *`string`*): `string`

*Overrides HttpUrlEncodingCodec.encodeKey*

*Defined in model/custom-http-encoder.ts:31*

Encode the key

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| k | `string` |  the key |

**Returns:** `string`
the encoded key string

___
<a id="encodevalue"></a>

###  encodeValue

▸ **encodeValue**(v: *`string`*): `string`

*Overrides HttpUrlEncodingCodec.encodeValue*

*Defined in model/custom-http-encoder.ts:41*

Encode the value

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| v | `string` |  the value |

**Returns:** `string`
the encoded value

___

