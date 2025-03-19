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
}

export { Utils };
