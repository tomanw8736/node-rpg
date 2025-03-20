// Imports
import { readFileSync, writeFileSync, existsSync } from "fs";
import { Player } from "../classes/player.js";

/**
 * Load a saved game state
 *
 * @function loadGame
 * @description Reads the save file and reconstructs a Player object from the data.
 * @returns {Player|undefined} The loaded player object or undefined if no save exists
 */
function loadGame() {
    if (existsSync("save.json")) {
      const data = readFileSync("save.json", "utf8"); // file path + charset
      const { name, health, max_health, level, exp, max_exp, weapon, money, inventory, armor } =
        JSON.parse(data);
      console.log("Game Loaded Successfully!");
      return new Player(
        name,
        health,
        max_health,
        level,
        exp,
        max_exp,
        weapon,
        money,
        inventory,
        armor
      );
    }
    console.log("No save found!");
    // Note: This function implicitly returns undefined when no save is found
  }

  /**
 * Save the current game state
 *
 * @function saveGame
 * @description Serializes the player object to JSON and writes it to a save file.
 * @param {Player} player - The player object to save
 */
function saveGame(player) {
    const data = JSON.stringify({
      name: player.name,
      health: player.health,
      max_health: player.max_health,
      level: player.level,
      exp: player.exp,
      max_exp: player.max_exp,
      weapon: player.weapon,
      money: player.money,
      inventory: player.inventory,
      armor: player.armor,
    });
    writeFileSync("save.json", data);
    console.log("Saved successfully!");
  }

  export { saveGame, loadGame }