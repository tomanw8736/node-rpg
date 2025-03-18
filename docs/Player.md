<a name="module_player"></a>

## player
Player Module

A module that defines the Player class, representing a player character in the game
with attributes like health, experience, level, and equipment.


* [player](#module_player)
    * [~Player](#module_player..Player)
        * [new Player()](#new_module_player..Player_new)
        * [new Player(name, health, max_health, level, exp, max_exp, weapon)](#new_module_player..Player_new)
    * [~Player](#module_player..Player)
        * [new Player()](#new_module_player..Player_new)
        * [new Player(name, health, max_health, level, exp, max_exp, weapon)](#new_module_player..Player_new)
    * [~isAlive()](#module_player..isAlive) ⇒ <code>boolean</code>
    * [~giveEXP(amount)](#module_player..giveEXP)
    * [~levelUp()](#module_player..levelUp)
    * [~showStats()](#module_player..showStats)

<a name="module_player..Player"></a>

### player~Player
**Kind**: inner class of [<code>player</code>](#module_player)  

* [~Player](#module_player..Player)
    * [new Player()](#new_module_player..Player_new)
    * [new Player(name, health, max_health, level, exp, max_exp, weapon)](#new_module_player..Player_new)

<a name="new_module_player..Player_new"></a>

#### new Player()
Represents a player character with various attributes such as health,
             experience, level, and equipped weapon. Provides methods for character
             progression and status display.

<a name="new_module_player..Player_new"></a>

#### new Player(name, health, max_health, level, exp, max_exp, weapon)
Create a new Player instance


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The player's name |
| health | <code>number</code> | The player's current health points |
| max_health | <code>number</code> | The player's maximum possible health points |
| level | <code>number</code> | The player's current level |
| exp | <code>number</code> | The player's current experience points |
| max_exp | <code>number</code> | Experience points required for next level |
| weapon | <code>Object</code> \| <code>string</code> | The player's equipped weapon |

<a name="module_player..Player"></a>

### player~Player
**Kind**: inner class of [<code>player</code>](#module_player)  

* [~Player](#module_player..Player)
    * [new Player()](#new_module_player..Player_new)
    * [new Player(name, health, max_health, level, exp, max_exp, weapon)](#new_module_player..Player_new)

<a name="new_module_player..Player_new"></a>

#### new Player()
Represents a player character with various attributes such as health,
             experience, level, and equipped weapon. Provides methods for character
             progression and status display.

<a name="new_module_player..Player_new"></a>

#### new Player(name, health, max_health, level, exp, max_exp, weapon)
Create a new Player instance


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The player's name |
| health | <code>number</code> | The player's current health points |
| max_health | <code>number</code> | The player's maximum possible health points |
| level | <code>number</code> | The player's current level |
| exp | <code>number</code> | The player's current experience points |
| max_exp | <code>number</code> | Experience points required for next level |
| weapon | <code>Object</code> \| <code>string</code> | The player's equipped weapon |

<a name="module_player..isAlive"></a>

### player~isAlive() ⇒ <code>boolean</code>
Determines if the player character is still alive based on
             their current health points.

**Kind**: inner method of [<code>player</code>](#module_player)  
**Returns**: <code>boolean</code> - True if the player has more than 0 health, false otherwise  
<a name="module_player..giveEXP"></a>

### player~giveEXP(amount)
Adds the specified amount of experience points to the player's
             current total. If the new total exceeds the threshold for the
             next level, triggers a level-up.

**Kind**: inner method of [<code>player</code>](#module_player)  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>number</code> | The amount of experience points to award |

<a name="module_player..levelUp"></a>

### player~levelUp()
Increases the player's level by 1, resets experience points,
             and increases the experience threshold for the next level-up.
             Could be extended to improve other player attributes.

**Kind**: inner method of [<code>player</code>](#module_player)  
<a name="module_player..showStats"></a>

### player~showStats()
Outputs a formatted representation of the player's current
             attributes and status to the console. Shows name, level, experience,
             health, and equipped weapon.

**Kind**: inner method of [<code>player</code>](#module_player)  
