<a name="module_weapon"></a>

## weapon
Weapon Module

A module that defines the Weapon class, representing weapons that can be
equipped by the player character for combat purposes.


* [weapon](#module_weapon)
    * [~Weapon](#module_weapon..Weapon)
        * [new Weapon()](#new_module_weapon..Weapon_new)
    * [~Item](#module_weapon..Item)
        * [new Item(id, name, attack, value, category, description)](#new_module_weapon..Item_new)
        * [.id](#module_weapon..Item+id) : <code>string</code>
        * [.name](#module_weapon..Item+name) : <code>string</code>
        * [.attack](#module_weapon..Item+attack) : <code>number</code>
        * [.value](#module_weapon..Item+value) : <code>number</code>
        * [.category](#module_weapon..Item+category) : <code>string</code>
        * [.description](#module_weapon..Item+description) : <code>string</code>

<a name="module_weapon..Weapon"></a>

### weapon~Weapon
**Kind**: inner class of [<code>weapon</code>](#module_weapon)  
<a name="new_module_weapon..Weapon_new"></a>

#### new Weapon()
Represents a weapon that can be equipped by the player. Weapons
             have unique identifiers, display names, and attack values that
             determine their effectiveness in combat.

<a name="module_weapon..Item"></a>

### weapon~Item
**Kind**: inner class of [<code>weapon</code>](#module_weapon)  

* [~Item](#module_weapon..Item)
    * [new Item(id, name, attack, value, category, description)](#new_module_weapon..Item_new)
    * [.id](#module_weapon..Item+id) : <code>string</code>
    * [.name](#module_weapon..Item+name) : <code>string</code>
    * [.attack](#module_weapon..Item+attack) : <code>number</code>
    * [.value](#module_weapon..Item+value) : <code>number</code>
    * [.category](#module_weapon..Item+category) : <code>string</code>
    * [.description](#module_weapon..Item+description) : <code>string</code>

<a name="new_module_weapon..Item_new"></a>

#### new Item(id, name, attack, value, category, description)
Create a new Weapon instance


| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Unique identifier for the item |
| name | <code>string</code> | Display name of the item |
| attack | <code>number</code> | Attack power/damage value of the item |
| value | <code>number</code> | The sell/buy value of the item |
| category | <code>string</code> | The shop category of the item |
| description | <code>string</code> | The description of the item |

<a name="module_weapon..Item+id"></a>

#### item.id : <code>string</code>
Unique identifier for the item
Used for database lookups and save/load operations

**Kind**: instance property of [<code>Item</code>](#module_weapon..Item)  
<a name="module_weapon..Item+name"></a>

#### item.name : <code>string</code>
Display name of the item
Used in user interface and combat messages

**Kind**: instance property of [<code>Item</code>](#module_weapon..Item)  
<a name="module_weapon..Item+attack"></a>

#### item.attack : <code>number</code>
Attack power/damage value
Determines how much the effect will do

**Kind**: instance property of [<code>Item</code>](#module_weapon..Item)  
<a name="module_weapon..Item+value"></a>

#### item.value : <code>number</code>
Buy/Sell cost of the item
Used in the shop display and stats display

**Kind**: instance property of [<code>Item</code>](#module_weapon..Item)  
<a name="module_weapon..Item+category"></a>

#### item.category : <code>string</code>
Shop category of the item

**Kind**: instance property of [<code>Item</code>](#module_weapon..Item)  
<a name="module_weapon..Item+description"></a>

#### item.description : <code>string</code>
Description of the item

**Kind**: instance property of [<code>Item</code>](#module_weapon..Item)  
