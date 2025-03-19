<a name="module_player"></a>

## player
Defines the Player class, representing a player character in the game
             with attributes like health, experience, level, and equipment.


* [player](#module_player)
    * [~Player](#module_player..Player)
        * [new Player()](#new_module_player..Player_new)
        * [new Player(name, health, max_health, level, exp, max_exp, weapon, money, inventory)](#new_module_player..Player_new)
    * [~Player](#module_player..Player)
        * [new Player()](#new_module_player..Player_new)
        * [new Player(name, health, max_health, level, exp, max_exp, weapon, money, inventory)](#new_module_player..Player_new)
    * [~isAlive()](#module_player..isAlive) ⇒ <code>boolean</code>
    * [~giveEXP(amount)](#module_player..giveEXP) ⇒ <code>void</code>
    * [~giveMoney(amount)](#module_player..giveMoney) ⇒ <code>void</code>
    * [~addItem(item)](#module_player..addItem) ⇒ <code>void</code>
    * [~removeItem(item_index)](#module_player..removeItem) ⇒ <code>void</code>
    * [~healPlayer(amount)](#module_player..healPlayer) ⇒ <code>void</code>
    * [~useItem(item_index)](#module_player..useItem) ⇒ <code>void</code>
    * [~showInventory()](#module_player..showInventory) ⇒ <code>boolean</code>
    * [~levelUp()](#module_player..levelUp) ⇒ <code>void</code>
    * [~showStats()](#module_player..showStats) ⇒ <code>void</code>

<a name="module_player..Player"></a>

### player~Player
**Kind**: inner class of [<code>player</code>](#module_player)  

* [~Player](#module_player..Player)
    * [new Player()](#new_module_player..Player_new)
    * [new Player(name, health, max_health, level, exp, max_exp, weapon, money, inventory)](#new_module_player..Player_new)

<a name="new_module_player..Player_new"></a>

#### new Player()
Represents a player character with various attributes such as health,
             experience, level, and equipped weapon. Provides methods for character
             progression and status display.

<a name="new_module_player..Player_new"></a>

#### new Player(name, health, max_health, level, exp, max_exp, weapon, money, inventory)
Create a new Player instance


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The player's name |
| health | <code>number</code> | The player's current health points |
| max_health | <code>number</code> | The player's maximum possible health points |
| level | <code>number</code> | The player's current level |
| exp | <code>number</code> | The player's current experience points |
| max_exp | <code>number</code> | Experience points required for next level |
| weapon | <code>Object</code> | The player's equipped weapon |
| money | <code>number</code> | The player's currency amount |
| inventory | <code>Array</code> | The player's collection of items |

**Example**  
```js
const player = new Player("Hero", 100, 100, 1, 0, 250, fists, 100, []);
```
<a name="module_player..Player"></a>

### player~Player
**Kind**: inner class of [<code>player</code>](#module_player)  

* [~Player](#module_player..Player)
    * [new Player()](#new_module_player..Player_new)
    * [new Player(name, health, max_health, level, exp, max_exp, weapon, money, inventory)](#new_module_player..Player_new)

<a name="new_module_player..Player_new"></a>

#### new Player()
Represents a player character with various attributes such as health,
             experience, level, and equipped weapon. Provides methods for character
             progression and status display.

<a name="new_module_player..Player_new"></a>

#### new Player(name, health, max_health, level, exp, max_exp, weapon, money, inventory)
Create a new Player instance


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The player's name |
| health | <code>number</code> | The player's current health points |
| max_health | <code>number</code> | The player's maximum possible health points |
| level | <code>number</code> | The player's current level |
| exp | <code>number</code> | The player's current experience points |
| max_exp | <code>number</code> | Experience points required for next level |
| weapon | <code>Object</code> | The player's equipped weapon |
| money | <code>number</code> | The player's currency amount |
| inventory | <code>Array</code> | The player's collection of items |

**Example**  
```js
const player = new Player("Hero", 100, 100, 1, 0, 250, fists, 100, []);
```
<a name="module_player..isAlive"></a>

### player~isAlive() ⇒ <code>boolean</code>
Determines if the player character is still alive based on
             their current health points.

**Kind**: inner method of [<code>player</code>](#module_player)  
**Returns**: <code>boolean</code> - True if the player has more than 0 health, false otherwise  
<a name="module_player..giveEXP"></a>

### player~giveEXP(amount) ⇒ <code>void</code>
Adds the specified amount of experience points to the player's
             current total. If the new total exceeds the threshold for the
             next level, triggers a level-up.

**Kind**: inner method of [<code>player</code>](#module_player)  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>number</code> | The amount of experience points to award |

<a name="module_player..giveMoney"></a>

### player~giveMoney(amount) ⇒ <code>void</code>
Adds the specified amount of money to the player's current balance.

**Kind**: inner method of [<code>player</code>](#module_player)  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>number</code> | The amount of money to award |

<a name="module_player..addItem"></a>

### player~addItem(item) ⇒ <code>void</code>
Adds the specified item to the player's inventory collection.

**Kind**: inner method of [<code>player</code>](#module_player)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Object</code> | The item to add to the inventory |

<a name="module_player..removeItem"></a>

### player~removeItem(item_index) ⇒ <code>void</code>
Removes the specified item to the player's inventory collection.

**Kind**: inner method of [<code>player</code>](#module_player)  

| Param | Type | Description |
| --- | --- | --- |
| item_index | <code>Number</code> | The item to remove to the inventory |

<a name="module_player..healPlayer"></a>

### player~healPlayer(amount) ⇒ <code>void</code>
Heals the player by the specified amount.

**Kind**: inner method of [<code>player</code>](#module_player)  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>Number</code> | The amount to heal the player by |

<a name="module_player..useItem"></a>

### player~useItem(item_index) ⇒ <code>void</code>
Applies an effect based off the item type and removes it from the inventory.

**Kind**: inner method of [<code>player</code>](#module_player)  

| Param | Type |
| --- | --- |
| item_index | <code>Number</code> | 

<a name="module_player..showInventory"></a>

### player~showInventory() ⇒ <code>boolean</code>
Shows all items in the inventory and allows the user to select and use an item

**Kind**: inner method of [<code>player</code>](#module_player)  
<a name="module_player..levelUp"></a>

### player~levelUp() ⇒ <code>void</code>
Increases the player's level by 1, resets experience points,
             and increases the experience threshold for the next level-up.

**Kind**: inner method of [<code>player</code>](#module_player)  
<a name="module_player..showStats"></a>

### player~showStats() ⇒ <code>void</code>
Outputs a formatted representation of the player's current
             attributes and status to the console. Shows name, level, experience,
             health, and equipped weapon.

**Kind**: inner method of [<code>player</code>](#module_player)  
