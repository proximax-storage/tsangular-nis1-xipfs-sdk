[xpx-typescript-angular-sdk](../README.md) > ["model/nem-announce-resource"](../modules/_model_nem_announce_resource_.md)

# External module: "model/nem-announce-resource"

## Index

### Enumerations

* [TypeNemAnnounceResult](../enums/_model_nem_announce_resource_.typenemannounceresult.md)

### Classes

* [NemAnnounceResult](../classes/_model_nem_announce_resource_.nemannounceresult.md)

### Type aliases

* [CodeNemAnnounceResult](_model_nem_announce_resource_.md#codenemannounceresult)

---

## Type aliases

<a id="codenemannounceresult"></a>

###  CodeNemAnnounceResult

**ΤCodeNemAnnounceResult**: * `0` &#124; `1` &#124; `2` &#124; `3` &#124; `4` &#124; `5` &#124; `6` &#124; `7` &#124; `8` &#124; `9` &#124; `10` &#124; `11` &#124; `12` &#124; `13` &#124; `14` &#124; `15` &#124; `16` &#124; `17` &#124; `18` &#124; `19`
*

*Defined in model/nem-announce-resource.ts:74*

The meaning of the code is dependent on the type. For type 1 (validation result) only 0 and 1 mean there was no failure. 0: Neutral result. A typical example would be that a node validates an incoming transaction and realizes that it already knows about the transaction. In this case it is neither a success (meaning the node has a new transaction) nor a failure (because the transaction itself is valid). 1: Success result. A typical example would be that a node validates a new valid transaction. 2: Unknown failure. The validation failed for unknown reasons. 3: The entity that was validated has already past its deadline. 4: The entity used a deadline which lies too far in the future. 5: There was an account involved which had an insufficient balance to perform the operation. 6: The message supplied with the transaction is too large. 7: The hash of the entity which got validated is already in the database. 8: The signature of the entity could not be validated. 9: The entity used a timestamp that lies too far in the past. 10: The entity used a timestamp that lies in the future which is not acceptable. 11: The entity is unusable. 12: The score of the remote block chain is inferior (although a superior score was promised). 13: The remote block chain failed validation. 14: There was a conflicting importance transfer detected. 15: There were too many transaction in the supplied block. 16: The block contains a transaction that was signed by the harvester. 17: A previous importance transaction conflicts with a new transaction. 18: An importance transfer activation was attempted while previous one is active. 19: An importance transfer deactivation was attempted but is not active.

For type 2 the following codes are supported:

1: Successful heart beat detected.

For type 3 the following codes are supported:

0: Unknown status. 1: NIS is stopped. 2: NIS is starting. 3: NIS is running. 4: NIS is booting the local node (implies NIS is running). 5: The local node is booted (implies NIS is running). 6: The local node is synchronized (implies NIS is running and the local node is booted). 7: There is no remote node available (implies NIS is running and the local node is booted). 8: NIS is currently loading the block chain.

___

