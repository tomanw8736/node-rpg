<a name="module_main"></a>

## main
Main Game Module

The primary game controller that manages the game initialization, 
player interactions, combat, and save/load functionality.


* [main](#module_main)
    * [~saveGame(player)](#module_main..saveGame)
    * [~loadGame()](#module_main..loadGame) ⇒ <code>Player</code> \| <code>undefined</code>
    * [~battle(player, enemy)](#module_main..battle) ⇒ <code>Promise.&lt;void&gt;</code>
    * [~newGame(database)](#module_main..newGame) ⇒ <code>Promise.&lt;Player&gt;</code>
    * [~mainMenu(player)](#module_main..mainMenu) ⇒ <code>Promise.&lt;void&gt;</code>
    * [~runGame()](#module_main..runGame) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="module_main..saveGame"></a>

### main~saveGame(player)
Serializes the player object to JSON and writes it to a save file.

**Kind**: inner method of [<code>main</code>](#module_main)  

| Param | Type | Description |
| --- | --- | --- |
| player | <code>Player</code> | The player object to save |

<a name="module_main..loadGame"></a>

### main~loadGame() ⇒ <code>Player</code> \| <code>undefined</code>
Reads the save file and reconstructs a Player object from the data.

**Kind**: inner method of [<code>main</code>](#module_main)  
**Returns**: <code>Player</code> \| <code>undefined</code> - The loaded player object or undefined if no save exists  
<a name="module_main..battle"></a>

### main~battle(player, enemy) ⇒ <code>Promise.&lt;void&gt;</code>
Manages the turn-based combat between player and enemy until one is defeated.

**Kind**: inner method of [<code>main</code>](#module_main)  

| Param | Type | Description |
| --- | --- | --- |
| player | <code>Player</code> | The player character |
| enemy | <code>NPC</code> | The enemy character |

<a name="module_main..newGame"></a>

### main~newGame(database) ⇒ <code>Promise.&lt;Player&gt;</code>
Prompts for a player name and creates a new Player object with default values.

**Kind**: inner method of [<code>main</code>](#module_main)  
**Returns**: <code>Promise.&lt;Player&gt;</code> - A new player object  

| Param | Type | Description |
| --- | --- | --- |
| database | <code>DataBase</code> | The game database containing weapon data |

<a name="module_main..mainMenu"></a>

### main~mainMenu(player) ⇒ <code>Promise.&lt;void&gt;</code>
Shows the main game menu and processes player choices.

**Kind**: inner method of [<code>main</code>](#module_main)  

| Param | Type | Description |
| --- | --- | --- |
| player | <code>Player</code> | The current player |

<a name="module_main..runGame"></a>

### main~runGame() ⇒ <code>Promise.&lt;void&gt;</code>
Main entry point that initializes the database, loads or creates a player,
             and starts the game loop.

**Kind**: inner method of [<code>main</code>](#module_main)  
