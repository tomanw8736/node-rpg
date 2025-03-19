/**
 * Weapon Module
 * 
 * A module that defines the Weapon class, representing weapons that can be
 * equipped by the player character for combat purposes.
 * 
 * @module weapon
 */

/**
 * Weapon class for representing equippable combat items
 * 
 * @class Weapon
 * @description Represents a weapon that can be equipped by the player. Weapons
 *              have unique identifiers, display names, and attack values that
 *              determine their effectiveness in combat.
 */
class Item {
    /**
     * Create a new Weapon instance
     * 
     * @constructor
     * @param {string} id - Unique identifier for the item
     * @param {string} name - Display name of the item
     * @param {number} attack - Attack power/damage value of the item
     * @param {number} value - The sell/buy value of the item
     * @param {string} category - The shop category of the item
     * @param {string} description - The description of the item
     */
    constructor(id, name, attack, value, category, description) {
        /**
         * Unique identifier for the item
         * Used for database lookups and save/load operations
         * @type {string}
         */
        this.id = id;
        
        /**
         * Display name of the item
         * Used in user interface and combat messages
         * @type {string}
         */
        this.name = name;
        
        /**
         * Attack power/damage value
         * Determines how much the effect will do
         * @type {number}
         */
        this.attack = attack;

        /**
         * Buy/Sell cost of the item
         * Used in the shop display and stats display
         * @type {number}
         */
        this.value = value;

        /**
         * Shop category of the item
         * @type {string}
         */
        this.category = category;

        /**
         * Description of the item
         * @type {string}
         */
        this.description = description;
        
        /**
         * Extension point for additional weapon properties
         * 
         * Potential properties to implement:
         * - durability: Weapon condition/uses remaining
         * - rarity: Common, uncommon, rare, etc.
         * - special effects: Critical hit chance, elemental damage, etc.
         * - requirements: Level or stats needed to equip
         */
    }
    
    /**
     * Extension point for weapon methods
     * 
     * Potential methods to implement:
     * - getDescription(): Return a formatted description of the weapon
     * - calculateDamage(): Calculate damage based on weapon properties and player stats
     * - applyEffects(): Apply special effects during combat
     * - reduceDurability(): Decrease durability after use
     */
}

export { Item };