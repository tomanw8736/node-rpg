<a name="module_store"></a>

## store
Store management module for handling in-game shops and purchases.


* [store](#module_store)
    * [~Store](#module_store..Store)
        * [new Store(name, items, database)](#new_module_store..Store_new)
        * [.showStore(player)](#module_store..Store+showStore) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.showWeapons(player)](#module_store..Store+showWeapons) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.buyItem(item_id, player)](#module_store..Store+buyItem) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="module_store..Store"></a>

### store~Store
Represents a store that allows players to browse and purchase items.

**Kind**: inner class of [<code>store</code>](#module_store)  

* [~Store](#module_store..Store)
    * [new Store(name, items, database)](#new_module_store..Store_new)
    * [.showStore(player)](#module_store..Store+showStore) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.showWeapons(player)](#module_store..Store+showWeapons) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.buyItem(item_id, player)](#module_store..Store+buyItem) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="new_module_store..Store_new"></a>

#### new Store(name, items, database)
Creates a new Store instance.


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the store. |
| items | <code>Object.&lt;string, Object&gt;</code> | Collection of items available in the store. |
| database | <code>Object</code> | Game database containing item information. |

<a name="module_store..Store+showStore"></a>

#### store.showStore(player) ⇒ <code>Promise.&lt;void&gt;</code>
Displays the store interface to the player and handles category selection.

**Kind**: instance method of [<code>Store</code>](#module_store..Store)  

| Param | Type | Description |
| --- | --- | --- |
| player | <code>Object</code> | The player object interacting with the store. |

<a name="module_store..Store+showWeapons"></a>

#### store.showWeapons(player) ⇒ <code>Promise.&lt;void&gt;</code>
Displays available weapons and handles weapon selection.

**Kind**: instance method of [<code>Store</code>](#module_store..Store)  

| Param | Type | Description |
| --- | --- | --- |
| player | <code>Object</code> | The player object interacting with the store. |

<a name="module_store..Store+buyItem"></a>

#### store.buyItem(item_id, player) ⇒ <code>Promise.&lt;void&gt;</code>
Processes the purchase of an item for the player.

**Kind**: instance method of [<code>Store</code>](#module_store..Store)  

| Param | Type | Description |
| --- | --- | --- |
| item_id | <code>string</code> | The unique identifier of the item to purchase. |
| player | <code>Object</code> | The player object making the purchase. |
| player.money | <code>number</code> | The player's current money. |
| player.weapon | <code>Object</code> | The player's current weapon. |

