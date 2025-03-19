// Imports
import { Item } from "./item.js";
import { select, input } from "@inquirer/prompts";
import { promises as fs, existsSync } from "fs";
/**
 * Player Module
 *
 * @module player
 * @description Defines the Player class, representing a player character in the game
 *              with attributes like health, experience, level, and equipment.
 */

/**
 * Player class for representing the game's player character
 *
 * @class Player
 * @description Represents a player character with various attributes such as health,
 *              experience, level, and equipped weapon. Provides methods for character
 *              progression and status display.
 */
class Player {
    /**
     * Create a new Player instance
     *
     * @constructor
     * @param {string} name - The player's name
     * @param {number} health - The player's current health points
     * @param {number} max_health - The player's maximum possible health points
     * @param {number} level - The player's current level
     * @param {number} exp - The player's current experience points
     * @param {number} max_exp - Experience points required for next level
     * @param {Object} weapon - The player's equipped weapon
     * @param {number} money - The player's currency amount
     * @param {Array} inventory - The player's collection of items
     * @example
     * const player = new Player("Hero", 100, 100, 1, 0, 250, fists, 100, []);
     */
    constructor(name, health, max_health, level, exp, max_exp, weapon, money, inventory) {
      // Basic player information
      this.name = name;
  
      // Health attributes
      this.health = health;
      this.max_health = max_health;
  
      // Progression attributes
      this.level = level;
      this.exp = exp;
      this.max_exp = max_exp;
  
      // Equipment
      this.weapon = weapon;
      this.money = money;
      this.inventory = inventory;
    }
  
    /**
     * Check if the player is still alive
     *
     * @method isAlive
     * @description Determines if the player character is still alive based on
     *              their current health points.
     * @returns {boolean} True if the player has more than 0 health, false otherwise
     */
    isAlive() {
      return this.health > 0;
    }
  
    /**
     * Award experience points to the player
     *
     * @method giveEXP
     * @description Adds the specified amount of experience points to the player's
     *              current total. If the new total exceeds the threshold for the
     *              next level, triggers a level-up.
     * @param {number} amount - The amount of experience points to award
     * @returns {void}
     */
    giveEXP(amount) {
      this.exp += amount;
      console.log(`${this.name} has gained: ${amount}XP!`);
  
      // Check if player has gained enough XP to level up
      if (this.exp >= this.max_exp) {
        this.levelUp();
      }
    }
  
    /**
     * Award money to the player
     *
     * @method giveMoney
     * @description Adds the specified amount of money to the player's current balance.
     * @param {number} amount - The amount of money to award
     * @returns {void}
     */
    giveMoney(amount) {
      this.money += amount;
    }
  
    /**
     * Add an item to the player's inventory
     *
     * @method addItem
     * @description Adds the specified item to the player's inventory collection.
     * @param {Object} item - The item to add to the inventory
     * @returns {void}
     */
    addItem(item) {
      this.inventory.push(item);
    }

    /**
     * Remove an item to the player's inventory
     *
     * @method removeItem
     * @description Removes the specified item to the player's inventory collection.
     * @param {Number} item_index - The item to remove to the inventory
     * @returns {void}
     */
    removeItem(item_index) {
        this.inventory.splice(item_index, 1);
    }

    /**
     * 
     * @method healPlayer
     * @description Heals the player by the specified amount.
     * @param {Number} amount - The amount to heal the player by
     * @returns {void}
     */
    healPlayer(amount) {
        this.health += amount;
        if (this.health > this.max_health) {
            this.health = this.max_health;
        }
    }

    /**
     * @method useItem
     * @description Applies an effect based off the item type and removes it from the inventory.
     * @param {Number} item_index 
     * @returns {void}
     */
    useItem(item_index) {
        if (this.inventory[item_index].category === "potions") {
            this.healPlayer(this.inventory[item_index].attack);
            this.removeItem(item_index);
        }
    }

    /**
     * @method showInventory
     * @description Shows all items in the inventory and allows the user to select and use an item
     * @returns {boolean}
     */
    async showInventory() {
        const action = await select({
            message: "Pick an Item:",
            choices: Object.entries(this.inventory)
              .filter(([id, data]) => data.category === "potions")
              .map(([id, data]) => ({
                name: `${data.name} | ${data.description}`,
                value: id,
              })),
        });
        this.useItem(action);
        return true;
    }


  
    /**
     * Increase the player's level
     *
     * @method levelUp
     * @description Increases the player's level by 1, resets experience points,
     *              and increases the experience threshold for the next level-up.
     * @returns {void}
     */
    levelUp() {
      this.level += 1;
      this.max_exp = this.exp * 2;
      this.exp = 0;
  
      /**
       * Extension point for level-up rewards
       *
       * Potential features to implement:
       * - Increase max health
       * - Restore health points
       * - Unlock new abilities
       * - Award skill points
       * - Improve base stats
       */
    }
  
    /**
     * Display player statistics
     *
     * @method showStats
     * @description Outputs a formatted representation of the player's current
     *              attributes and status to the console. Shows name, level, experience,
     *              health, and equipped weapon.
     * @returns {void}
     */
    showStats() {
      console.log("------------------");
      console.log(`Player Name: ${this.name}`);
      console.log(`Player Level: ${this.level} (${this.exp}/${this.max_exp})`);
      console.log(`Player Balance: ${this.money}`);
      console.log("------------------");
      console.log(`Health: ${this.health}/${this.max_health}`);
      //console.log(this.weapon);
      console.log(`Weapon: ${this.weapon.name}`);
      console.log("------------------");
    }
  }
  
  export { Player };