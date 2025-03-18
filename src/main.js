/**
 * Main Game Module
 * 
 * The primary game controller that manages the game initialization, 
 * player interactions, combat, and save/load functionality.
 * 
 * @module main
 */

// Imports
import { select, input } from "@inquirer/prompts";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { Player } from "./classes/player.js";
import { NPC } from "./classes/npc.js";
import { DataBase } from "./classes/database.js";

/**
 * Save the current game state
 * 
 * @function saveGame
 * @description Serializes the player object to JSON and writes it to a save file.
 * @param {Player} player - The player object to save
 */
function saveGame(player) {
    const data = JSON.stringify({ 
        name: player.name,
        health: player.health,
        max_health: player.max_health,
        level: player.level,
        exp: player.exp,
        max_exp: player.max_exp,
        weapon: player.weapon,
    });
    writeFileSync('save.json', data);
    console.log('Saved successfully!');
}

/**
 * Load a saved game state
 * 
 * @function loadGame
 * @description Reads the save file and reconstructs a Player object from the data.
 * @returns {Player|undefined} The loaded player object or undefined if no save exists
 */
function loadGame() {
    if (existsSync('save.json')) {
        const data = readFileSync('save.json', 'utf8'); // file path + charset
        const { name, health, max_health, level, exp, max_exp, weapon } = JSON.parse(data);
        console.log('Game Loaded Successfully!');
        return new Player(name, health, max_health, level, exp, max_exp, weapon);
    }
    console.log('No save found!');
    // Note: This function implicitly returns undefined when no save is found
}

/**
 * Execute a battle between the player and an enemy
 * 
 * @async
 * @function battle
 * @description Manages the turn-based combat between player and enemy until one is defeated.
 * @param {Player} player - The player character
 * @param {NPC} enemy - The enemy character
 * @returns {Promise<void>}
 */
async function battle(player, enemy) {
    // Action menu
    while (player.isAlive() && enemy.isAlive()) {
        console.clear();
        console.log(`Enemy Name: ${enemy.name}`);
        console.log(`Enemy Health: ${enemy.health}`);
        const action = await select({
            message: `What will ${player.name} do?`,
            choices: [
                {
                    name: 'Attack',
                    value: 'attack',
                },
                {
                    name: 'Run',
                    value: 'run',
                },
            ],
        });

        // If action is 'attack'
        if (action === 'attack') {
            // Player attacks enemy
            enemy.health -= player.weapon.attack;
            
            console.log(`${player.name} attacks ${enemy.name} dealing ${player.weapon.attack} damage!`);

            // Check if enemy is still alive
            if (!enemy.isAlive()) {
                console.log(`${enemy.name} has been killed!`);
                player.giveEXP(enemy.exp_reward);
                mainMenu(player);
                return;
            }

            // Enemy attacks back at player
            player.health -= enemy.attack;
            console.log(`${enemy.name} attacks ${player.name} dealing ${enemy.attack} damage!`);

            // Check if player is still alive
            if (!player.isAlive()) {
                console.log(`${player.name} has been killed!`);
                break;
            }
        }

        else if (action === 'run') {
            mainMenu(player);
            break;
        }
    
    }
}

/**
 * Create a new player character
 * 
 * @async
 * @function newGame
 * @description Prompts for a player name and creates a new Player object with default values.
 * @param {DataBase} database - The game database containing weapon data
 * @returns {Promise<Player>} A new player object
 */
async function newGame(database) {
    const name = await input({
        message: 'Please enter a name!'
    });
    return new Player(name, 100, 100, 1, 0, 250, database.weapons['weapon_sword']);
}

/**
 * Display and handle the main menu
 * 
 * @async
 * @function mainMenu
 * @description Shows the main game menu and processes player choices.
 * @param {Player} player - The current player
 * @returns {Promise<void>}
 */
async function mainMenu(player) {
    var isRunning = true;
    while (isRunning) {
        console.clear();

        // Printing out player stats
        player.showStats();

        // Main menu options
        const menuAction = await select({
            message: 'Welcome home traveller!',
            choices: [
                {
                    name: 'Battle',
                    value: 'battle',
                },
                {
                    name: 'Exit',
                    value: 'exit',
                },
                {
                    name: 'Check Weapon',
                    value: 'checkWeapon',
                },
            ],
        });

        // Process menu selection
        if (menuAction === 'battle') {
            const goblin = new NPC('Goblin', 25, 2, 10);
            await battle(player, goblin);
        }
        else if (menuAction === 'exit') {
            saveGame(player);
            isRunning = false;
        }
    }
}

/**
 * Initialize and run the game
 * 
 * @async
 * @function runGame
 * @description Main entry point that initializes the database, loads or creates a player,
 *              and starts the game loop.
 * @returns {Promise<void>}
 */
async function runGame() {
    // Database setup
    const database = new DataBase('Game');
    await database.dbLoad();

    var player;
    console.clear();
    const menuAction = await select({
        message: 'Welcome! Please select an option:',
        choices: [
            {
                name: 'Load Game',
                value: 'loadGame',
            },
            {
                name: 'New Game',
                value: 'newGame',
            },
        ],
    });
    
    // Process initial menu selection
    if (menuAction === 'loadGame') {
        player = loadGame();

        if (!player) { // If there is no save
            player = await newGame(database);
        }
    } 
    else if (menuAction === 'newGame') {
        player = await newGame(database);
    }

    await mainMenu(player);
}

// Start the game
runGame();

/**
 * Commented out code - development/testing snippets
 * 
 * //const database = new DataBase('Game');
 * //await database.dbLoad();
 * //console.log(database.weapons['test_weapon'].name);
 */