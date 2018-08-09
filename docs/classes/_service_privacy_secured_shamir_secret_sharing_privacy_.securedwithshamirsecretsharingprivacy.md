[xpx-typescript-angular-sdk](../README.md) > ["service/privacy/secured-shamir-secret-sharing-privacy"](../modules/_service_privacy_secured_shamir_secret_sharing_privacy_.md) > [SecuredWithShamirSecretSharingPrivacy](../classes/_service_privacy_secured_shamir_secret_sharing_privacy_.securedwithshamirsecretsharingprivacy.md)

# Class: SecuredWithShamirSecretSharingPrivacy

Class represents SecuredWithShamirSecretSharingPrivacy

## Hierarchy

**SecuredWithShamirSecretSharingPrivacy**

## Index

### Constructors

* [constructor](_service_privacy_secured_shamir_secret_sharing_privacy_.securedwithshamirsecretsharingprivacy.md#constructor)

### Properties

* [cipher](_service_privacy_secured_shamir_secret_sharing_privacy_.securedwithshamirsecretsharingprivacy.md#cipher)

### Methods

* [decrypt](_service_privacy_secured_shamir_secret_sharing_privacy_.securedwithshamirsecretsharingprivacy.md#decrypt)
* [encrypt](_service_privacy_secured_shamir_secret_sharing_privacy_.securedwithshamirsecretsharingprivacy.md#encrypt)
* [combineShares](_service_privacy_secured_shamir_secret_sharing_privacy_.securedwithshamirsecretsharingprivacy.md#combineshares)
* [createShares](_service_privacy_secured_shamir_secret_sharing_privacy_.securedwithshamirsecretsharingprivacy.md#createshares)
* [hexToString](_service_privacy_secured_shamir_secret_sharing_privacy_.securedwithshamirsecretsharingprivacy.md#hextostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SecuredWithShamirSecretSharingPrivacy**(hexSecretParts: *`Array`<`string`>*): [SecuredWithShamirSecretSharingPrivacy](_service_privacy_secured_shamir_secret_sharing_privacy_.securedwithshamirsecretsharingprivacy.md)

*Defined in service/privacy/secured-shamir-secret-sharing-privacy.ts:32*

Constructor

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| hexSecretParts | `Array`<`string`> |  the array of secret parts in hex |

**Returns:** [SecuredWithShamirSecretSharingPrivacy](_service_privacy_secured_shamir_secret_sharing_privacy_.securedwithshamirsecretsharingprivacy.md)

___

## Properties

<a id="cipher"></a>

### `<Private>` cipher

**● cipher**: *[SecuredCipher](_service_privacy_secured_cipher_.securedcipher.md)*

*Defined in service/privacy/secured-shamir-secret-sharing-privacy.ts:32*

SecuredCipher provider

___

## Methods

<a id="decrypt"></a>

###  decrypt

▸ **decrypt**(data: *`any`*): `Observable`<`any`>

*Defined in service/privacy/secured-shamir-secret-sharing-privacy.ts:97*

Decrypts the encrypted data

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any` |  the encrypted data |

**Returns:** `Observable`<`any`>
Observable<any>

___
<a id="encrypt"></a>

###  encrypt

▸ **encrypt**(data: *`any`*): `Observable`<`any`>

*Defined in service/privacy/secured-shamir-secret-sharing-privacy.ts:88*

Encrypts raw data

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any` |  the raw data |

**Returns:** `Observable`<`any`>
Observable<any>

___
<a id="combineshares"></a>

### `<Static>` combineShares

▸ **combineShares**(hexSecretParts: *`Array`<`string`>*): `string`

*Defined in service/privacy/secured-shamir-secret-sharing-privacy.ts:68*

Combine shares to reconstruct the secret

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| hexSecretParts | `Array`<`string`> |  the array of secret parts in hex |

**Returns:** `string`
the hex string

___
<a id="createshares"></a>

### `<Static>` createShares

▸ **createShares**(secret: *`string`*, numShares: *`number`*, threshold: *`number`*): `Array`<`string`>

*Defined in service/privacy/secured-shamir-secret-sharing-privacy.ts:57*

Create shares from the secret

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| secret | `string` |  the secret in string |
| numShares | `number` |  the number of shares to compute |
| threshold | `number` |  the number of shares requires to reconstruct the secret |

**Returns:** `Array`<`string`>
Array<string>

___
<a id="hextostring"></a>

### `<Static>` hexToString

▸ **hexToString**(hex: *`any`*): `string`

*Defined in service/privacy/secured-shamir-secret-sharing-privacy.ts:78*

Convert hex to string

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| hex | `any` |  the hex string |

**Returns:** `string`
the hex in string format

___

