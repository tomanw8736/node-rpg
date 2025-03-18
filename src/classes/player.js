/**
 * Player Module
 *
 * A module that defines the Player class, representing a player character in the game
 * with attributes like health, experience, level, and equipment.
 *
 * @module player
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
   * @param {Object|string} weapon - The player's equipped weapon
   * @param {number} money - The player's money
   */
  constructor(name, health, max_health, level, exp, max_exp, weapon, money) {
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
   */
  giveEXP(amount) {
    this.exp += amount;
    console.log(`${this.name} has gained: ${amount}XP!`);

    // Check if player has gained enough XP to level up
    if (this.exp >= this.max_exp) {
      this.levelUp();
    }
  }

  giveMoney(amount) {
    this.money += amount;
  }

  /**
   * Increase the player's level
   *
   * @method levelUp
   * @description Increases the player's level by 1, resets experience points,
   *              and increases the experience threshold for the next level-up.
   *              Could be extended to improve other player attributes.
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
