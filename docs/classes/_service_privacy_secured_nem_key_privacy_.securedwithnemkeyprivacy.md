[xpx-typescript-angular-sdk](../README.md) > ["service/privacy/secured-nem-key-privacy"](../modules/_service_privacy_secured_nem_key_privacy_.md) > [SecuredWithNemKeyPrivacy](../classes/_service_privacy_secured_nem_key_privacy_.securedwithnemkeyprivacy.md)

# Class: SecuredWithNemKeyPrivacy

Class represents Secured With Nem Key Privacy Strategy

## Hierarchy

**SecuredWithNemKeyPrivacy**

## Index

### Constructors

* [constructor](_service_privacy_secured_nem_key_privacy_.securedwithnemkeyprivacy.md#constructor)

### Properties

* [pubKey](_service_privacy_secured_nem_key_privacy_.securedwithnemkeyprivacy.md#pubkey)
* [pvKey](_service_privacy_secured_nem_key_privacy_.securedwithnemkeyprivacy.md#pvkey)

### Methods

* [decrypt](_service_privacy_secured_nem_key_privacy_.securedwithnemkeyprivacy.md#decrypt)
* [encrypt](_service_privacy_secured_nem_key_privacy_.securedwithnemkeyprivacy.md#encrypt)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SecuredWithNemKeyPrivacy**(pvKey: *`string`*, pubKey: *`string`*): [SecuredWithNemKeyPrivacy](_service_privacy_secured_nem_key_privacy_.securedwithnemkeyprivacy.md)

*Defined in service/privacy/secured-nem-key-privacy.ts:32*

Constructor

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| pvKey | `string` |  the Nem private key |
| pubKey | `string` |  the Nem public key |

**Returns:** [SecuredWithNemKeyPrivacy](_service_privacy_secured_nem_key_privacy_.securedwithnemkeyprivacy.md)

___

## Properties

<a id="pubkey"></a>

### `<Private>` pubKey

**● pubKey**: *`string`*

*Defined in service/privacy/secured-nem-key-privacy.ts:32*

The public key

___
<a id="pvkey"></a>

### `<Private>` pvKey

**● pvKey**: *`string`*

*Defined in service/privacy/secured-nem-key-privacy.ts:27*

The private key

___

## Methods

<a id="decrypt"></a>

###  decrypt

▸ **decrypt**(data: *`any`*): `any`

*Defined in service/privacy/secured-nem-key-privacy.ts:58*

Decrupt the data based on recipient private key and sender public key

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any` |  the input data |

**Returns:** `any`
decrypted data

___
<a id="encrypt"></a>

###  encrypt

▸ **encrypt**(data: *`any`*): `any`

*Defined in service/privacy/secured-nem-key-privacy.ts:49*

Encrypt the data based on sender private key and recipient public key

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any` |  the input data |

**Returns:** `any`
encrypted data

___

