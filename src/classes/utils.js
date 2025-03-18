/**
 * Utilities Module
 *
 * @module utils
 * @description Provides utility functions and helper methods for game mechanics
 *              that may be shared across different modules.
 */

import { Player } from "./player.js";
import { NPC } from "./npc.js";

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
}

export { Utils };