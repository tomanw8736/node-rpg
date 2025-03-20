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
        {
          name: "Potions",
          value: "potions",
        },
        {
          name: "Armor",
          value: "armor",
        },
      ],
    });
    if (action === "weapons") {
      await this.showItems(player, "weapon");
    } else if (action === "potions") {
      await this.showItems(player, "potions");
    } else if (action === "armor") {
      await this.showItems(player, "armor");
    }
  }

  /**
   * Displays available items and handles item selection.
   * @async
   * @param {Object} player - The player object interacting with the store.
   * @returns {Promise<void>}
   */
  async showItems(player, category) {
    const action = await select({
      message: "Pick an Item:",
      choices: Object.entries(this.items)
        .filter(([id, data]) => data.category === category)
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
      if (this.database.items[item_id].category === "weapon") {
        player.weapon = this.database.items[item_id];
      } else if (this.database.items[item_id].category === "potions") {
        player.addItem(this.database.items[item_id]);
      } else if (this.database.items[item_id].category === "armor") {
        player.armor = this.database.items[item_id];
      }
    }
  }
}

export { Store };