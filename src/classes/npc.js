/**
 * NPC Module
 *
 * A module that defines the NPC (Non-Player Character) class, representing
 * enemies that the player can encounter and battle in the game.
 *
 * @module npc
 */

/**
 * NPC class for representing non-player characters and enemies
 *
 * @class NPC
 * @description Represents an enemy or non-player character in the game.
 *              NPCs have properties like name, health, attack power, and
 *              experience rewards that determine their behavior in combat.
 */
class NPC {
  /**
   * Create a new NPC instance
   *
   * @constructor
   * @param {string} name - The name of the NPC
   * @param {number} health - The NPC's health points
   * @param {number} attack - The NPC's attack damage
   * @param {number} exp_reward - Experience points awarded on defeat
   */
  constructor(name, health, attack, exp_reward, money_reward) {
    /**
     * NPC name displayed during combat
     * @type {string}
     */
    this.name = name;

    /**
     * NPC health points
     * @type {number}
     */
    this.health = health;

    /**
     * NPC attack damage
     * @type {number}
     */
    this.attack = attack;

    /**
     * Experience points awarded to the player when defeating this NPC
     * @type {number}
     */
    this.exp_reward = exp_reward;
    
    this.money_reward = money_reward;

    /**
     * Extension point for additional NPC properties
     *
     * Potential properties to implement:
     * - level: NPC level for scaling difficulty
     * - loot: Items that can be dropped when defeated
     * - abilities: Special attacks or abilities
     * - behavior: AI patterns for combat strategy
     * - dialogue: Text for interaction outside of combat
     */
  }

  /**
   * Check if the NPC is still alive
   *
   * @method isAlive
   * @description Determines if the NPC is still alive based on
   *              their current health points.
   * @returns {boolean} True if the NPC has more than 0 health, false otherwise
   */
  isAlive() {
    return this.health > 0;
  }

  /**
   * Extension point for additional NPC methods
   *
   * Potential methods to implement:
   * - takeDamage(amount): Process damage with potential resistance/weakness
   * - heal(amount): Restore health during combat
   * - chooseAction(): AI logic to determine next action
   * - useAbility(): Execute special abilities
   * - getDescription(): Return a formatted description of the NPC
   */
}

export { NPC };
