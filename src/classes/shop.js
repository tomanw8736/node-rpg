/**
 * @fileoverview Store management module for handling in-game shops and purchases.
 * @module store
 */

// Import dependencies
import { Item } from "./item.js";
import { select, input } from "@inquirer/prompts";
import { promises as fs, existsSync } from "fs";

/**
 * Represents a store that allows players to browse and purchase items.
 * @class
 */
class Store {
  /**
   * Creates a new Store instance.
   * @param {string} name - The name of the store.
   * @param {Object.<string, Object>} items - Collection of items available in the store.
   * @param {Object} database - Game database containing item information.
   */
  constructor(name, items, database) {
    this.name = name;
    this.items = items;
    this.database = database;
  }

  /**
   * Displays the store interface to the player and handles category selection.
   * @async
   * @param {Object} player - The player object interacting with the store.
   * @returns {Promise<void>}
   */
  async showStore(player) {
    console.clear();
    const action = await select({
      message: "Choose a category:",
      choices: [
        {
          name: "Weapons",
          value: "weapons",
        },
      ],
    });
    if (action === "weapons") {
      await this.showWeapons(player);
    }
  }

  /**
   * Displays available weapons and handles weapon selection.
   * @async
   * @param {Object} player - The player object interacting with the store.
   * @returns {Promise<void>}
   */
  async showWeapons(player) {
    const action = await select({
      message: "Pick an Item:",
      choices: Object.entries(this.items)
        .filter(([id, data]) => data.category === "weapon")
        .map(([id, data]) => ({
          name: `${data.name} | $${data.value}`,
          value: id,
        })),
    });
    this.buyItem(action, player);
  }

  /**
   * Processes the purchase of an item for the player.
   * @async
   * @param {string} item_id - The unique identifier of the item to purchase.
   * @param {Object} player - The player object making the purchase.
   * @param {number} player.money - The player's current money.
   * @param {Object} player.weapon - The player's current weapon.
   * @returns {Promise<void>}
   */
  async buyItem(item_id, player) {
    if (player.money >= this.database.items[item_id].value) {
      player.money -= this.database.items[item_id].value;
      player.weapon = this.database.items[item_id];
    }
  }
}

export { Store };