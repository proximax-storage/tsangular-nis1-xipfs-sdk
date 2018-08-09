[xpx-typescript-angular-sdk](../README.md) > ["service/privacy/secured-password-privacy"](../modules/_service_privacy_secured_password_privacy_.md) > [SecuredWithPasswordPrivacy](../classes/_service_privacy_secured_password_privacy_.securedwithpasswordprivacy.md)

# Class: SecuredWithPasswordPrivacy

Class represents SecuredWithPasswordPrivacy

## Hierarchy

**SecuredWithPasswordPrivacy**

## Index

### Constructors

* [constructor](_service_privacy_secured_password_privacy_.securedwithpasswordprivacy.md#constructor)

### Properties

* [cipher](_service_privacy_secured_password_privacy_.securedwithpasswordprivacy.md#cipher)

### Methods

* [decrypt](_service_privacy_secured_password_privacy_.securedwithpasswordprivacy.md#decrypt)
* [encrypt](_service_privacy_secured_password_privacy_.securedwithpasswordprivacy.md#encrypt)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SecuredWithPasswordPrivacy**(password: *`string`*): [SecuredWithPasswordPrivacy](_service_privacy_secured_password_privacy_.securedwithpasswordprivacy.md)

*Defined in service/privacy/secured-password-privacy.ts:30*

Constructor

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| password | `string` |  the password |

**Returns:** [SecuredWithPasswordPrivacy](_service_privacy_secured_password_privacy_.securedwithpasswordprivacy.md)

___

## Properties

<a id="cipher"></a>

### `<Private>` cipher

**● cipher**: *[SecuredCipher](_service_privacy_secured_cipher_.securedcipher.md)*

*Defined in service/privacy/secured-password-privacy.ts:30*

SecuredCipher provider

___

## Methods

<a id="decrypt"></a>

###  decrypt

▸ **decrypt**(data: *`any`*): `Observable`<`any`>

*Defined in service/privacy/secured-password-privacy.ts:60*

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

*Defined in service/privacy/secured-password-privacy.ts:50*

Encrypts raw data

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any` |  the raw data |

**Returns:** `Observable`<`any`>
Observable<any>

___

