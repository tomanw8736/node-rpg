/**
 * Database Module
 * 
 * A module that handles the loading and management of game weapons from a JSON file.
 * 
 * @module database
 */

import { Weapon } from "./weapon.js";
import { promises as fs } from 'fs';

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
        this.weapons = {};  // Object to store weapon instances indexed by weaponID
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
     * @returns {Promise<void>}
     * @throws {Error} If database loading fails
     */
    async dbLoad() {
        this.dbPreLoad();
        
        /**
         * Core database loading implementation
         * 
         * Reads weapon data from JSON file, parses it,
         * and instantiates Weapon objects for each entry.
         */
        try {
            // Read the weapons data file from the filesystem
            const data = await fs.readFile('weapons.json', 'utf8');
            const weaponsData = JSON.parse(data);

            // Create weapon objects and store them in the weapons collection
            for (const weaponID in weaponsData) {
                if (weaponsData.hasOwnProperty(weaponID)) {
                    const weaponData = weaponsData[weaponID];
                    this.weapons[weaponID] = new Weapon(
                        weaponID, 
                        weaponData.name, 
                        weaponData.attack
                    );
                }
            }
        } catch (error) {
            console.log('Error loading DataBase: ', error);
            
            /**
             * Error handling
             * 
             * Currently re-throws the error, which prevents dbPostLoad()
             * from executing if loading fails. Consider implementing
             * more robust error handling strategies, such as:
             * - Loading from a backup file
             * - Creating an empty database
             * - Attempting reconnection if it's a connection error
             */
            throw error;
        }

        this.dbPostLoad();
    }

    /**
     * Operations to perform before database loading
     * 
     * @method dbPreLoad
     * @description Executes preparatory steps before the main loading process.
     *              Can be extended to include initialization logic, resource
     *              allocation, or validation steps.
     */
    dbPreLoad() {
        console.log('Loading DataBase!');
        
        /**
         * Extension point for pre-loading operations
         * 
         * Potential operations to implement:
         * - Clear existing cache
         * - Set up timers or metrics for load operation
         * - Prepare connection pools
         * - Verify file existence
         * - Lock resources
         */
    }

    /**
     * Operations to perform after database loading
     * 
     * @method dbPostLoad
     * @description Executes cleanup and finalization steps after the main
     *              loading process completes successfully.
     */
    dbPostLoad() {
        console.log('DataBase Loaded!');
        
        /**
         * Extension point for post-loading operations
         * 
         * Potential operations to implement:
         * - Validate loaded data integrity
         * - Build indices for efficient queries
         * - Notify other system components that data is ready
         * - Log loading statistics (time taken, items loaded)
         * - Release locks
         */
    }
}

export { DataBase };