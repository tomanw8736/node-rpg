<a name="module_database"></a>

## database
Handles the loading and management of game items and NPCs from JSON files.
             Provides access to game entities through a centralized system.


* [database](#module_database)
    * [~DataBase](#module_database..DataBase)
        * [new DataBase()](#new_module_database..DataBase_new)
        * [new DataBase(name)](#new_module_database..DataBase_new)
    * [~DataBase](#module_database..DataBase)
        * [new DataBase()](#new_module_database..DataBase_new)
        * [new DataBase(name)](#new_module_database..DataBase_new)
    * [~dbLoad()](#module_database..dbLoad) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [~dbPreLoad()](#module_database..dbPreLoad) ⇒ <code>void</code>
    * [~dbPostLoad()](#module_database..dbPostLoad) ⇒ <code>void</code>
    * [~dbReload()](#module_database..dbReload) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="module_database..DataBase"></a>

### database~DataBase
**Kind**: inner class of [<code>database</code>](#module_database)  

* [~DataBase](#module_database..DataBase)
    * [new DataBase()](#new_module_database..DataBase_new)
    * [new DataBase(name)](#new_module_database..DataBase_new)

<a name="new_module_database..DataBase_new"></a>

#### new DataBase()
Responsible for loading item and NPC data from persistent storage,
             creating corresponding game objects, and making them available
             to the game system. Also manages the in-game store.

<a name="new_module_database..DataBase_new"></a>

#### new DataBase(name)
Create a new Database instance


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name identifier for this database instance |

**Example**  
```js
const gameDB = new DataBase('Game');
```
<a name="module_database..DataBase"></a>

### database~DataBase
**Kind**: inner class of [<code>database</code>](#module_database)  

* [~DataBase](#module_database..DataBase)
    * [new DataBase()](#new_module_database..DataBase_new)
    * [new DataBase(name)](#new_module_database..DataBase_new)

<a name="new_module_database..DataBase_new"></a>

#### new DataBase()
Responsible for loading item and NPC data from persistent storage,
             creating corresponding game objects, and making them available
             to the game system. Also manages the in-game store.

<a name="new_module_database..DataBase_new"></a>

#### new DataBase(name)
Create a new Database instance


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name identifier for this database instance |

**Example**  
```js
const gameDB = new DataBase('Game');
```
<a name="module_database..dbLoad"></a>

### database~dbLoad() ⇒ <code>Promise.&lt;Object&gt;</code>
Main method that orchestrates the database loading process.
             Executes in three phases:
             1. Pre-load operations
             2. Core loading logic (items and NPCs)
             3. Post-load operations

**Kind**: inner method of [<code>database</code>](#module_database)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - A promise that resolves to the items object  
**Throws**:

- <code>Error</code> If database loading fails and cannot be handled

**Example**  
```js
const gameDB = new DataBase('Game');
await gameDB.dbLoad();
const sword = gameDB.items['sword1'];
```
<a name="module_database..dbPreLoad"></a>

### database~dbPreLoad() ⇒ <code>void</code>
Executes preparatory steps before the main loading process,
             such as checking for existence of required data files.

**Kind**: inner method of [<code>database</code>](#module_database)  
<a name="module_database..dbPostLoad"></a>

### database~dbPostLoad() ⇒ <code>void</code>
Executes cleanup and finalization steps after the main
             loading process completes successfully.

**Kind**: inner method of [<code>database</code>](#module_database)  
<a name="module_database..dbReload"></a>

### database~dbReload() ⇒ <code>Promise.&lt;void&gt;</code>
Reloads both NPC and item data from their respective files.
             Used to refresh game data during gameplay without restarting.

**Kind**: inner method of [<code>database</code>](#module_database)  
**Throws**:

- <code>Error</code> If file reading or parsing fails

