/**
 * Database Module
 *
 * @module database
 * @description Handles the loading and management of game weapons from a JSON file.
 */

import { Store } from "./shop.js";
import { Item } from "./item.js";
import { promises as fs, existsSync } from "fs";
import { NPC } from "./npc.js";

/**
 * Database class for managing game weapons
 *
 * @class DataBase
 * @description Responsible for loading weapon data from persistent storage,
 *              creating corresponding Weapon objects, and making them available
 *              to the game system.
 */
class DataBase {
  /**
   * Create a new Database instance
   *
   * @constructor
   * @param {string} name - The name identifier for this database instance
   */
  constructor(name) {
    this.name = name;
    this.items = {}; // Object to store weapon instances indexed by weaponID
    this.npcs = {};
    this.store = new Store("Store", this.items, this);
  }

  /**
   * Load the database from persistent storage
   *
   * @async
   * @method dbLoad
   * @description Main method that orchestrates the database loading process.
   *              Executes in three phases:
   *              1. Pre-load operations
   *              2. Core loading logic
   *              3. Post-load operations
   * @returns {Promise<Object>} A promise that resolves to the weapons object
   * @throws {Error} If database loading fails and cannot be handled
   * @example
   * const gameDB = new DataBase('weapons');
   * await gameDB.dbLoad();
   * const sword = gameDB.weapons['sword1'];
   */
  async dbLoad() {
    this.dbPreLoad();

    try {
      await this.loadWeaponsFromFile();
      await this.loadNPCFromFile();
    } catch (error) {
      await this.handleLoadError(error);
    }

    this.dbPostLoad();
    return this.items;
  }

  /**
   * Operations to perform before database loading
   *
   * @method dbPreLoad
   * @description Executes preparatory steps before the main loading process.
   * @returns {void}
   */
  dbPreLoad() {
    console.log("Loading DataBase!");
    // checking if items.json exists
    if (existsSync("items.json")) {
      console.log("Weapons file exists!");
    }
    // This is an extension point for pre-loading operations
  }

  /**
   * Operations to perform after database loading
   *
   * @method dbPostLoad
   * @description Executes cleanup and finalization steps after the main
   *              loading process completes successfully.
   * @returns {void}
   */
  dbPostLoad() {
    console.log("DataBase Loaded!");
    // This is an extension point for post-loading operations
  }

  /**
   * Handle errors that occur during database loading
   *
   * @async
   * @method handleLoadError
   * @description Processes errors that occur during the loading process and
   *              takes appropriate actions based on error type.
   * @param {Error} error - The error that occurred during loading
   * @returns {Promise<void>}
   * @private
   */
  async handleLoadError(error) {
    console.log("Error loading DataBase: ", error);

    if (error.code === "ENOENT") {
      console.log("Weapons file not found!");
    } else if (error instanceof SyntaxError) {
      console.log("Invalid JSON Format!");
    }
  }

  /**
   * Load weapons data from the JSON file
   *
   * @async
   * @method loadWeaponsFromFile
   * @description Reads the weapons data file, parses it, and creates
   *              Weapon objects for each entry.
   * @returns {Promise<void>}
   * @throws {Error} If file reading or parsing fails
   * @private
   */
  async loadWeaponsFromFile() {
    // Read the weapons data file from the filesystem
    const data = await fs.readFile("items.json", "utf8");
    const itemsData = JSON.parse(data);

    // Create weapon objects and store them in the weapons collection
    for (const itemID in itemsData) {
      if (itemsData.hasOwnProperty(itemID)) {
        const itemData = itemsData[itemID];
        this.items[itemID] = new Item(
          itemID,
          itemData.name,
          itemData.attack,
          itemData.value,
          itemData.category
        );
      }
    }
  }

  async loadNPCFromFile() {
    const data = await fs.readFile("npc.json", "utf8");
    const npcsData = JSON.parse(data);

    for (const npcID in npcsData) {
      if (npcsData.hasOwnProperty(npcID)) {
        const npcData = npcsData[npcID];
        this.npcs[npcID] = new NPC(
          npcData.name,
          npcData.health,
          npcData.attack,
          npcData.exp_reward,
          npcData.money_reward,
        );
      }
    }
  }

  async dbReload() {
    console.log('Reloading DataBase!');
    await this.loadNPCFromFile();
    await this.loadWeaponsFromFile();
    console.log('DataBase Reloaded!');
  }
}

export { DataBase };
