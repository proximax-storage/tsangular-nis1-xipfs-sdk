[xpx-typescript-angular-sdk](../README.md) > ["service/privacy/secured-cipher"](../modules/_service_privacy_secured_cipher_.md) > [SecuredCipher](../classes/_service_privacy_secured_cipher_.securedcipher.md)

# Class: SecuredCipher

Class represents the secured cipher

## Hierarchy

**SecuredCipher**

## Index

### Constructors

* [constructor](_service_privacy_secured_cipher_.securedcipher.md#constructor)

### Properties

* [alg](_service_privacy_secured_cipher_.securedcipher.md#alg)
* [cryptoJS](_service_privacy_secured_cipher_.securedcipher.md#cryptojs)
* [iv](_service_privacy_secured_cipher_.securedcipher.md#iv)
* [keyUsage](_service_privacy_secured_cipher_.securedcipher.md#keyusage)
* [salt](_service_privacy_secured_cipher_.securedcipher.md#salt)
* [secret](_service_privacy_secured_cipher_.securedcipher.md#secret)

### Methods

* [decrypt](_service_privacy_secured_cipher_.securedcipher.md#decrypt)
* [encrypt](_service_privacy_secured_cipher_.securedcipher.md#encrypt)
* [generateKey](_service_privacy_secured_cipher_.securedcipher.md#generatekey)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SecuredCipher**(secret: *`Uint8Array`*): [SecuredCipher](_service_privacy_secured_cipher_.securedcipher.md)

*Defined in service/privacy/secured-cipher.ts:55*

SecuredCipher constructor

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| secret | `Uint8Array` |  the secret |

**Returns:** [SecuredCipher](_service_privacy_secured_cipher_.securedcipher.md)

___

## Properties

<a id="alg"></a>

### `<Private>` alg

**● alg**: *`string`* = "AES-GCM"

*Defined in service/privacy/secured-cipher.ts:40*

The algorithm used to generate the key

___
<a id="cryptojs"></a>

### `<Private>` cryptoJS

**● cryptoJS**: *`any`*

*Defined in service/privacy/secured-cipher.ts:55*

The crypto provider

___
<a id="iv"></a>

### `<Private>` iv

**● iv**: *`Uint8Array`* =  new Uint8Array([169, 155, 200, 50, 86, 53, 227, 3])

*Defined in service/privacy/secured-cipher.ts:35*

The initialise vector Notes: it is not safe to use fix iv. However, this need to match the JavaSDK TODO: need to make this random

___
<a id="keyusage"></a>

### `<Private>` keyUsage

**● keyUsage**: *`string`[]* =  ['encrypt', 'decrypt']

*Defined in service/privacy/secured-cipher.ts:45*

The key usage for encrypt and decrypt

___
<a id="salt"></a>

### `<Private>` salt

**● salt**: *`Uint8Array`* =  new Uint8Array([169, 155, 200, 50, 86, 53, 227, 3])

*Defined in service/privacy/secured-cipher.ts:27*

The random data for one way hash

___
<a id="secret"></a>

### `<Private>` secret

**● secret**: *`Uint8Array`*

*Defined in service/privacy/secured-cipher.ts:50*

The secret hash

___

## Methods

<a id="decrypt"></a>

###  decrypt

▸ **decrypt**(data: *`any`*): `Promise`<`string`>

*Defined in service/privacy/secured-cipher.ts:142*

Decrypts data

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any` |  the encrypted data |

**Returns:** `Promise`<`string`>
Promise<string>

___
<a id="encrypt"></a>

###  encrypt

▸ **encrypt**(data: *`any`*): `Promise`<`string`>

*Defined in service/privacy/secured-cipher.ts:102*

Encrypts data

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any` |  the data to be encrypted |

**Returns:** `Promise`<`string`>
Promise<string>

___
<a id="generatekey"></a>

###  generateKey

▸ **generateKey**(passpharse: *`string`*): `PromiseLike`<`CryptoKey`>

*Defined in service/privacy/secured-cipher.ts:72*

Generates the crypto key

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| passpharse | `string` |  The passpharse |

**Returns:** `PromiseLike`<`CryptoKey`>
PromiseLike<CryptoKey>

___

