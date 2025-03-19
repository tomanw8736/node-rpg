## Functions

<dl>
<dt><a href="#loadGame">loadGame()</a> ⇒ <code>Player</code> | <code>undefined</code></dt>
<dd><p>Reads the save file and reconstructs a Player object from the data.</p>
</dd>
<dt><a href="#saveGame">saveGame(player)</a></dt>
<dd><p>Serializes the player object to JSON and writes it to a save file.</p>
</dd>
</dl>

<a name="loadGame"></a>

## loadGame() ⇒ <code>Player</code> \| <code>undefined</code>
Reads the save file and reconstructs a Player object from the data.

**Kind**: global function  
**Returns**: <code>Player</code> \| <code>undefined</code> - The loaded player object or undefined if no save exists  
<a name="saveGame"></a>

## saveGame(player)
Serializes the player object to JSON and writes it to a save file.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| player | <code>Player</code> | The player object to save |

