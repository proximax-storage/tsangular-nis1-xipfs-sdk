[xpx-typescript-angular-sdk](../README.md) > ["model/account-info"](../modules/_model_account_info_.md) > [AccountInfo](../interfaces/_model_account_info_.accountinfo.md)

# Interface: AccountInfo

Interface represents the NEM account information

## Hierarchy

**AccountInfo**

## Index

### Properties

* [address](_model_account_info_.accountinfo.md#address)
* [balance](_model_account_info_.accountinfo.md#balance)
* [harvestedBlocks](_model_account_info_.accountinfo.md#harvestedblocks)
* [importance](_model_account_info_.accountinfo.md#importance)
* [label](_model_account_info_.accountinfo.md#label)
* [multisigInfo](_model_account_info_.accountinfo.md#multisiginfo)
* [publicKey](_model_account_info_.accountinfo.md#publickey)
* [vestedBalance](_model_account_info_.accountinfo.md#vestedbalance)

---

## Properties

<a id="address"></a>

### `<Optional>` address

**● address**: *`string`*

*Defined in model/account-info.ts:26*

The address of the account.

___
<a id="balance"></a>

### `<Optional>` balance

**● balance**: *`number`*

*Defined in model/account-info.ts:31*

The balance of the account in micro NEM

___
<a id="harvestedblocks"></a>

### `<Optional>` harvestedBlocks

**● harvestedBlocks**: *`number`*

*Defined in model/account-info.ts:56*

The number blocks that the account already harvested.

___
<a id="importance"></a>

### `<Optional>` importance

**● importance**: *`number`*

*Defined in model/account-info.ts:36*

The important of the account

___
<a id="label"></a>

### `<Optional>` label

**● label**: *`string`*

*Defined in model/account-info.ts:46*

The label of the account (not used, always null).

___
<a id="multisiginfo"></a>

### `<Optional>` multisigInfo

**● multisigInfo**: *[MultisigInfo](_model_multisig_info_.multisiginfo.md)*

*Defined in model/account-info.ts:51*

The multisig information

___
<a id="publickey"></a>

### `<Optional>` publicKey

**● publicKey**: *`string`*

*Defined in model/account-info.ts:41*

The public key of the account.

___
<a id="vestedbalance"></a>

### `<Optional>` vestedBalance

**● vestedBalance**: *`number`*

*Defined in model/account-info.ts:61*

The vested part of the balance of the account in micro NEM.

___

