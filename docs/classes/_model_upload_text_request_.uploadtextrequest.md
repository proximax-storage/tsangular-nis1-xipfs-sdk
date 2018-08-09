[xpx-typescript-angular-sdk](../README.md) > ["model/upload-text-request"](../modules/_model_upload_text_request_.md) > [UploadTextRequest](../classes/_model_upload_text_request_.uploadtextrequest.md)

# Class: UploadTextRequest

Class represents the UploadTextRequest

## Hierarchy

**UploadTextRequest**

## Index

### Constructors

* [constructor](_model_upload_text_request_.uploadtextrequest.md#constructor)

### Properties

* [contentType](_model_upload_text_request_.uploadtextrequest.md#contenttype)
* [encoding](_model_upload_text_request_.uploadtextrequest.md#encoding)
* [keywords](_model_upload_text_request_.uploadtextrequest.md#keywords)
* [metadata](_model_upload_text_request_.uploadtextrequest.md#metadata)
* [name](_model_upload_text_request_.uploadtextrequest.md#name)
* [text](_model_upload_text_request_.uploadtextrequest.md#text)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new UploadTextRequest**(name?: *`string`*, text?: *`string`*, keywords?: *`string`*, metadata?: *`string`*, contentType?: *`string`*, encoding?: *`string`*): [UploadTextRequest](_model_upload_text_request_.uploadtextrequest.md)

*Defined in model/upload-text-request.ts:20*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` name | `string` |
| `Optional` text | `string` |
| `Optional` keywords | `string` |
| `Optional` metadata | `string` |
| `Optional` contentType | `string` |
| `Optional` encoding | `string` |

**Returns:** [UploadTextRequest](_model_upload_text_request_.uploadtextrequest.md)

___

## Properties

<a id="contenttype"></a>

### `<Optional>` contentType

**● contentType**: *`string`*

*Defined in model/upload-text-request.ts:46*

The content type of the upload request payload e.g. text/plain

___
<a id="encoding"></a>

### `<Optional>` encoding

**● encoding**: *`string`*

*Defined in model/upload-text-request.ts:51*

The encoding of the upload payload e.g. UTF-8

___
<a id="keywords"></a>

### `<Optional>` keywords

**● keywords**: *`string`*

*Defined in model/upload-text-request.ts:35*

The keyword of the upload request payload

___
<a id="metadata"></a>

### `<Optional>` metadata

**● metadata**: *`string`*

*Defined in model/upload-text-request.ts:41*

The metadata of the upload request payload The metadata must be in JSON format e.g. {'Author':'ProximaX'}

___
<a id="name"></a>

### `<Optional>` name

**● name**: *`string`*

*Defined in model/upload-text-request.ts:25*

The name of the upload request payload

___
<a id="text"></a>

### `<Optional>` text

**● text**: *`string`*

*Defined in model/upload-text-request.ts:30*

The text of the upload request payload

___

