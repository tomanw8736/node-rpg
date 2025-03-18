<a name="module_npc"></a>

## npc
NPC Module

A module that defines the NPC (Non-Player Character) class, representing
enemies that the player can encounter and battle in the game.


* [npc](#module_npc)
    * [~NPC](#module_npc..NPC)
        * [new NPC()](#new_module_npc..NPC_new)
        * [new NPC(name, health, attack, exp_reward)](#new_module_npc..NPC_new)
        * [.name](#module_npc..NPC+name) : <code>string</code>
        * [.health](#module_npc..NPC+health) : <code>number</code>
        * [.attack](#module_npc..NPC+attack) : <code>number</code>
        * [.exp_reward](#module_npc..NPC+exp_reward) : <code>number</code>
    * [~NPC](#module_npc..NPC)
        * [new NPC()](#new_module_npc..NPC_new)
        * [new NPC(name, health, attack, exp_reward)](#new_module_npc..NPC_new)
        * [.name](#module_npc..NPC+name) : <code>string</code>
        * [.health](#module_npc..NPC+health) : <code>number</code>
        * [.attack](#module_npc..NPC+attack) : <code>number</code>
        * [.exp_reward](#module_npc..NPC+exp_reward) : <code>number</code>
    * [~isAlive()](#module_npc..isAlive) ⇒ <code>boolean</code>

<a name="module_npc..NPC"></a>

### npc~NPC
**Kind**: inner class of [<code>npc</code>](#module_npc)  

* [~NPC](#module_npc..NPC)
    * [new NPC()](#new_module_npc..NPC_new)
    * [new NPC(name, health, attack, exp_reward)](#new_module_npc..NPC_new)
    * [.name](#module_npc..NPC+name) : <code>string</code>
    * [.health](#module_npc..NPC+health) : <code>number</code>
    * [.attack](#module_npc..NPC+attack) : <code>number</code>
    * [.exp_reward](#module_npc..NPC+exp_reward) : <code>number</code>

<a name="new_module_npc..NPC_new"></a>

#### new NPC()
Represents an enemy or non-player character in the game.
             NPCs have properties like name, health, attack power, and
             experience rewards that determine their behavior in combat.

<a name="new_module_npc..NPC_new"></a>

#### new NPC(name, health, attack, exp_reward)
Create a new NPC instance


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the NPC |
| health | <code>number</code> | The NPC's health points |
| attack | <code>number</code> | The NPC's attack damage |
| exp_reward | <code>number</code> | Experience points awarded on defeat |

<a name="module_npc..NPC+name"></a>

#### npC.name : <code>string</code>
NPC name displayed during combat

**Kind**: instance property of [<code>NPC</code>](#module_npc..NPC)  
<a name="module_npc..NPC+health"></a>

#### npC.health : <code>number</code>
NPC health points

**Kind**: instance property of [<code>NPC</code>](#module_npc..NPC)  
<a name="module_npc..NPC+attack"></a>

#### npC.attack : <code>number</code>
NPC attack damage

**Kind**: instance property of [<code>NPC</code>](#module_npc..NPC)  
<a name="module_npc..NPC+exp_reward"></a>

#### npC.exp\_reward : <code>number</code>
Experience points awarded to the player when defeating this NPC

**Kind**: instance property of [<code>NPC</code>](#module_npc..NPC)  
<a name="module_npc..NPC"></a>

### npc~NPC
**Kind**: inner class of [<code>npc</code>](#module_npc)  

* [~NPC](#module_npc..NPC)
    * [new NPC()](#new_module_npc..NPC_new)
    * [new NPC(name, health, attack, exp_reward)](#new_module_npc..NPC_new)
    * [.name](#module_npc..NPC+name) : <code>string</code>
    * [.health](#module_npc..NPC+health) : <code>number</code>
    * [.attack](#module_npc..NPC+attack) : <code>number</code>
    * [.exp_reward](#module_npc..NPC+exp_reward) : <code>number</code>

<a name="new_module_npc..NPC_new"></a>

#### new NPC()
Represents an enemy or non-player character in the game.
             NPCs have properties like name, health, attack power, and
             experience rewards that determine their behavior in combat.

<a name="new_module_npc..NPC_new"></a>

#### new NPC(name, health, attack, exp_reward)
Create a new NPC instance


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the NPC |
| health | <code>number</code> | The NPC's health points |
| attack | <code>number</code> | The NPC's attack damage |
| exp_reward | <code>number</code> | Experience points awarded on defeat |

<a name="module_npc..NPC+name"></a>

#### npC.name : <code>string</code>
NPC name displayed during combat

**Kind**: instance property of [<code>NPC</code>](#module_npc..NPC)  
<a name="module_npc..NPC+health"></a>

#### npC.health : <code>number</code>
NPC health points

**Kind**: instance property of [<code>NPC</code>](#module_npc..NPC)  
<a name="module_npc..NPC+attack"></a>

#### npC.attack : <code>number</code>
NPC attack damage

**Kind**: instance property of [<code>NPC</code>](#module_npc..NPC)  
<a name="module_npc..NPC+exp_reward"></a>

#### npC.exp\_reward : <code>number</code>
Experience points awarded to the player when defeating this NPC

**Kind**: instance property of [<code>NPC</code>](#module_npc..NPC)  
<a name="module_npc..isAlive"></a>

### npc~isAlive() ⇒ <code>boolean</code>
Determines if the NPC is still alive based on
             their current health points.

**Kind**: inner method of [<code>npc</code>](#module_npc)  
**Returns**: <code>boolean</code> - True if the NPC has more than 0 health, false otherwise  
