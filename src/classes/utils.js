/**
 * Utilities Module
 *
 * @module utils
 * @description Provides utility functions and helper methods for game mechanics
 *              that may be shared across different modules.
 */

import { Player } from "./player.js";
import { NPC } from "./npc.js";
import { DataBase } from "./database.js";
import { select, input } from "@inquirer/prompts";

/**
 * Utility class for common game operations
 *
 * @class Utils
 * @description Provides helper methods for common operations across different
 *              game entities such as players and NPCs.
 */
class Utils {
  /**
   * Create a new Utils instance
   *
   * @constructor
   * @param {string} name - The name identifier for this utilities instance
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * Check if an entity is alive
   *
   * @method isAlive
   * @description Determines if a game entity (player or NPC) is still alive
   *              based on their current health points.
   * @param {Object} entity - The entity to check, must have a health property
   * @returns {boolean} True if the entity has more than 0 health, false otherwise
   * @example
   * const utils = new Utils('GameUtils');
   * if (utils.isAlive(player)) {
   *   // Player is still alive, continue game
   * }
   */
  isAlive(entity) {
    return entity.health > 0;
  }

  /**
   * Display the administrative menu
   *
   * @method adminMenu
   * @description Presents an admin interface with options to modify game state
   * @param {Player} player - The player instance to modify
   * @param {DataBase} database - The game database containing items and other data
   * @returns {Promise<void>} A promise that resolves when menu interaction is complete
   * @example
   * const utils = new Utils('AdminUtils');
   * await utils.adminMenu(currentPlayer, gameDatabase);
   */
  async adminMenu(player, database) {
    console.clear();
    console.log("------ ADMIN MENU ------");

    const action = await select({
      message: "Pick an option:",
      choices: [
        {
          name: "Add Item",
          value: "addItem",
        },
      ],
    });

    if (action === "addItem") {
      await this.showItems(player, database);
    }
  }

  /**
   * Display and select items to add to player inventory
   *
   * @method showItems
   * @description Presents a selection menu of available non-weapon items and adds
   *              the selected item to the player's inventory
   * @param {Player} player - The player to receive the selected item
   * @param {DataBase} database - The database containing item definitions
   * @returns {Promise<boolean>} A promise that resolves to true when an item has been added
   * @example
   * const utils = new Utils('ItemUtils');
   * const success = await utils.showItems(currentPlayer, gameDatabase);
   * if (success) {
   *   console.log('Item added successfully');
   * }
   */
  async showItems(player, database) {
    const action = await select({
      message: "Pick an Item:",
      choices: Object.entries(database.items)
      .filter(([id, data]) => data.category !== "weapon")
      .map(([id, data]) => ({
        name: `${data.name} | ${data.description}`,
        value: id,
      })),
    });
    player.addItem(database.items[action]);
    return true;
  }

  /**
   * Selects a random enemy from the database's NPCs.
   * 
   * @param {Object} database - The game database containing NPCs
   * @returns {Object} A randomly selected enemy NPC object
   */
  pickEnemy(database) {
    const enemies = Object.values(database.npcs);
    const randomIndex = Math.floor(Math.random() * enemies.length);
    return enemies[randomIndex];
  }
}

export { Utils };