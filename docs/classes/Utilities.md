<a name="module_utils"></a>

## utils
Provides utility functions and helper methods for game mechanics
             that may be shared across different modules.


* [utils](#module_utils)
    * [~Utils](#module_utils..Utils)
        * [new Utils()](#new_module_utils..Utils_new)
        * [new Utils(name)](#new_module_utils..Utils_new)
        * [.pickEnemy(database)](#module_utils..Utils+pickEnemy) ⇒ <code>Object</code>
    * [~Utils](#module_utils..Utils)
        * [new Utils()](#new_module_utils..Utils_new)
        * [new Utils(name)](#new_module_utils..Utils_new)
        * [.pickEnemy(database)](#module_utils..Utils+pickEnemy) ⇒ <code>Object</code>
    * [~isAlive(entity)](#module_utils..isAlive) ⇒ <code>boolean</code>
    * [~adminMenu(player, database)](#module_utils..adminMenu) ⇒ <code>Promise.&lt;void&gt;</code>
    * [~showItems(player, database)](#module_utils..showItems) ⇒ <code>Promise.&lt;boolean&gt;</code>

<a name="module_utils..Utils"></a>

### utils~Utils
**Kind**: inner class of [<code>utils</code>](#module_utils)  

* [~Utils](#module_utils..Utils)
    * [new Utils()](#new_module_utils..Utils_new)
    * [new Utils(name)](#new_module_utils..Utils_new)
    * [.pickEnemy(database)](#module_utils..Utils+pickEnemy) ⇒ <code>Object</code>

<a name="new_module_utils..Utils_new"></a>

#### new Utils()
Provides helper methods for common operations across different
             game entities such as players and NPCs.

<a name="new_module_utils..Utils_new"></a>

#### new Utils(name)
Create a new Utils instance


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name identifier for this utilities instance |

<a name="module_utils..Utils+pickEnemy"></a>

#### utils.pickEnemy(database) ⇒ <code>Object</code>
Selects a random enemy from the database's NPCs.

**Kind**: instance method of [<code>Utils</code>](#module_utils..Utils)  
**Returns**: <code>Object</code> - A randomly selected enemy NPC object  

| Param | Type | Description |
| --- | --- | --- |
| database | <code>Object</code> | The game database containing NPCs |

<a name="module_utils..Utils"></a>

### utils~Utils
**Kind**: inner class of [<code>utils</code>](#module_utils)  

* [~Utils](#module_utils..Utils)
    * [new Utils()](#new_module_utils..Utils_new)
    * [new Utils(name)](#new_module_utils..Utils_new)
    * [.pickEnemy(database)](#module_utils..Utils+pickEnemy) ⇒ <code>Object</code>

<a name="new_module_utils..Utils_new"></a>

#### new Utils()
Provides helper methods for common operations across different
             game entities such as players and NPCs.

<a name="new_module_utils..Utils_new"></a>

#### new Utils(name)
Create a new Utils instance


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name identifier for this utilities instance |

<a name="module_utils..Utils+pickEnemy"></a>

#### utils.pickEnemy(database) ⇒ <code>Object</code>
Selects a random enemy from the database's NPCs.

**Kind**: instance method of [<code>Utils</code>](#module_utils..Utils)  
**Returns**: <code>Object</code> - A randomly selected enemy NPC object  

| Param | Type | Description |
| --- | --- | --- |
| database | <code>Object</code> | The game database containing NPCs |

<a name="module_utils..isAlive"></a>

### utils~isAlive(entity) ⇒ <code>boolean</code>
Determines if a game entity (player or NPC) is still alive
             based on their current health points.

**Kind**: inner method of [<code>utils</code>](#module_utils)  
**Returns**: <code>boolean</code> - True if the entity has more than 0 health, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>Object</code> | The entity to check, must have a health property |

**Example**  
```js
const utils = new Utils('GameUtils');
if (utils.isAlive(player)) {
  // Player is still alive, continue game
}
```
<a name="module_utils..adminMenu"></a>

### utils~adminMenu(player, database) ⇒ <code>Promise.&lt;void&gt;</code>
Presents an admin interface with options to modify game state

**Kind**: inner method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when menu interaction is complete  

| Param | Type | Description |
| --- | --- | --- |
| player | <code>Player</code> | The player instance to modify |
| database | <code>DataBase</code> | The game database containing items and other data |

**Example**  
```js
const utils = new Utils('AdminUtils');
await utils.adminMenu(currentPlayer, gameDatabase);
```
<a name="module_utils..showItems"></a>

### utils~showItems(player, database) ⇒ <code>Promise.&lt;boolean&gt;</code>
Presents a selection menu of available non-weapon items and adds
             the selected item to the player's inventory

**Kind**: inner method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise that resolves to true when an item has been added  

| Param | Type | Description |
| --- | --- | --- |
| player | <code>Player</code> | The player to receive the selected item |
| database | <code>DataBase</code> | The database containing item definitions |

**Example**  
```js
const utils = new Utils('ItemUtils');
const success = await utils.showItems(currentPlayer, gameDatabase);
if (success) {
  console.log('Item added successfully');
}
```
