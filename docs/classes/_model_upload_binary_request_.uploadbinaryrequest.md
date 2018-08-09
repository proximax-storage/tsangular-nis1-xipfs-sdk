[xpx-typescript-angular-sdk](../README.md) > ["model/upload-binary-request"](../modules/_model_upload_binary_request_.md) > [UploadBinaryRequest](../classes/_model_upload_binary_request_.uploadbinaryrequest.md)

# Class: UploadBinaryRequest

Class represents the UploadBinaryRequest payload

## Hierarchy

**UploadBinaryRequest**

## Index

### Constructors

* [constructor](_model_upload_binary_request_.uploadbinaryrequest.md#constructor)

### Properties

* [contentType](_model_upload_binary_request_.uploadbinaryrequest.md#contenttype)
* [data](_model_upload_binary_request_.uploadbinaryrequest.md#data)
* [keywords](_model_upload_binary_request_.uploadbinaryrequest.md#keywords)
* [metadata](_model_upload_binary_request_.uploadbinaryrequest.md#metadata)
* [name](_model_upload_binary_request_.uploadbinaryrequest.md#name)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new UploadBinaryRequest**(name?: *`string`*, data?: *`any`*, keywords?: *`string`*, metadata?: *`string`*, contentType?: *`string`*): [UploadBinaryRequest](_model_upload_binary_request_.uploadbinaryrequest.md)

*Defined in model/upload-binary-request.ts:20*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` name | `string` |
| `Optional` data | `any` |
| `Optional` keywords | `string` |
| `Optional` metadata | `string` |
| `Optional` contentType | `string` |

**Returns:** [UploadBinaryRequest](_model_upload_binary_request_.uploadbinaryrequest.md)

___

## Properties

<a id="contenttype"></a>

### `<Optional>` contentType

**● contentType**: *`string`*

*Defined in model/upload-binary-request.ts:46*

The content type of the upload request payload e.g. text/plain

___
<a id="data"></a>

### `<Optional>` data

**● data**: *`any`*

*Defined in model/upload-binary-request.ts:30*

The data of the upload request payload e.g in byte array

___
<a id="keywords"></a>

### `<Optional>` keywords

**● keywords**: *`string`*

*Defined in model/upload-binary-request.ts:35*

The keyword of the upload request payload

___
<a id="metadata"></a>

### `<Optional>` metadata

**● metadata**: *`string`*

*Defined in model/upload-binary-request.ts:41*

The metadata of the upload request payload The metadata must be in JSON format e.g. {'Author':'ProximaX'}

___
<a id="name"></a>

### `<Optional>` name

**● name**: *`string`*

*Defined in model/upload-binary-request.ts:25*

The name of the upload request payload

___

