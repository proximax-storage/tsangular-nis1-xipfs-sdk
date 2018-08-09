[xpx-typescript-angular-sdk](../README.md) > ["service/remote/node.service"](../modules/_service_remote_node_service_.md) > [RemoteNodeService](../classes/_service_remote_node_service_.remotenodeservice.md)

# Class: RemoteNodeService

Class represents the RemoteNodeService

## Hierarchy

 [HttpService](_service_http_service_.httpservice.md)

**↳ RemoteNodeService**

## Index

### Constructors

* [constructor](_service_remote_node_service_.remotenodeservice.md#constructor)

### Properties

* [baseUrl](_service_remote_node_service_.remotenodeservice.md#baseurl)
* [http](_service_remote_node_service_.remotenodeservice.md#http)

### Methods

* [checkNode](_service_remote_node_service_.remotenodeservice.md#checknode)
* [getNodeInfo](_service_remote_node_service_.remotenodeservice.md#getnodeinfo)
* [getNodePeer](_service_remote_node_service_.remotenodeservice.md#getnodepeer)
* [handleError](_service_remote_node_service_.remotenodeservice.md#handleerror)
* [isJSONString](_service_remote_node_service_.remotenodeservice.md#isjsonstring)
* [setBaseUrl](_service_remote_node_service_.remotenodeservice.md#setbaseurl)
* [setBlockchainConnection](_service_remote_node_service_.remotenodeservice.md#setblockchainconnection)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RemoteNodeService**(http: *`HttpClient`*): [RemoteNodeService](_service_remote_node_service_.remotenodeservice.md)

*Overrides [HttpService](_service_http_service_.httpservice.md).[constructor](_service_http_service_.httpservice.md#constructor)*

*Defined in service/remote/node.service.ts:37*

NodeService constructor

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| http | `HttpClient` |  the http client instance |

**Returns:** [RemoteNodeService](_service_remote_node_service_.remotenodeservice.md)

___

## Properties

<a id="baseurl"></a>

### `<Protected>` baseUrl

**● baseUrl**: *`string`* = "https://testnet2.gateway.proximax.io/"

*Overrides [HttpService](_service_http_service_.httpservice.md).[baseUrl](_service_http_service_.httpservice.md#baseurl)*

*Defined in service/remote/node.service.ts:37*

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

<a id="checknode"></a>

###  checkNode

▸ **checkNode**(): `Observable`<`any`>

*Defined in service/remote/node.service.ts:58*

Check node information Example:

```
checkNode().subscribe(response => {
     let message: GenericResponseMessage = response.body;
 });
```

**Returns:** `Observable`<`any`>
Observable<any>

___
<a id="getnodeinfo"></a>

###  getNodeInfo

▸ **getNodeInfo**(): `Observable`<`any`>

*Defined in service/remote/node.service.ts:86*

Get the node information Example:

```
getNodeInfo().subscribe(response => {
     let nodeInfo: NodeInfo = response.body;
 });
```

**Returns:** `Observable`<`any`>
Observable<any>

___
<a id="getnodepeer"></a>

###  getNodePeer

▸ **getNodePeer**(): `Observable`<`any`>

*Defined in service/remote/node.service.ts:114*

Get the node peer information Example:

```
getNodePeer().subscribe(response => {
     let NodePeers: NodePeer[] = response.body;
 });
```

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
<a id="setblockchainconnection"></a>

###  setBlockchainConnection

▸ **setBlockchainConnection**(network: *`string`*, domain: *`string`*, port: *`string`*): `Observable`<`any`>

*Defined in service/remote/node.service.ts:146*

Set the blockchain connection Example:

```
setBlockchainConnection(network,domain,port).subscribe(response => {
     let NodePeers: NodePeer[] = response.body;
 });
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| network | `string` |  the network name or ip address |
| domain | `string` |  the network domain |
| port | `string` |  the network port |

**Returns:** `Observable`<`any`>
Observable<any>

___

