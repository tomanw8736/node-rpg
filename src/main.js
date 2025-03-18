/**
 * Main Game Module
 *
 * @module main
 * @description The primary game controller that manages the game initialization,
 *              player interactions, combat, and save/load functionality.
 */

// Imports
import { select, input } from "@inquirer/prompts";
import { Player } from "./classes/player.js";
import { DataBase } from "./classes/database.js";
import { battle } from "./methods/battle.js";
import { saveGame, loadGame } from "./methods/save-load.js";

/**
 * Create a new player character
 *
 * @async
 * @function newGame
 * @description Prompts for a player name and creates a new Player object with default values.
 * @param {DataBase} database - The game database containing item data
 * @returns {Promise<Player>} A promise that resolves to a new player object
 * @example
 * const database = new DataBase('Game');
 * const player = await newGame(database);
 */
async function newGame(database) {
  const name = await input({
    message: "Please enter a name!",
  });
  return new Player(
    name,
    100,
    100,
    1,
    0,
    250,
    database.items["fists"],
    250,
    []
  );
}

/**
 * Display and handle the main menu
 *
 * @async
 * @function mainMenu
 * @description Shows the main game menu and processes player choices including
 *              battle, store interaction, checking NPCs, and exiting the game.
 * @param {Player} player - The current player instance
 * @param {DataBase} database - The game database containing items and NPCs
 * @returns {Promise<void>}
 * @throws {Error} Potential errors from database operations or battle mechanics
 */
async function mainMenu(player, database) {
  var isRunning = true;
  while (isRunning) {
    await database.dbReload();
    console.clear();

    // Printing out player stats
    player.showStats();

    // Main menu options
    const menuAction = await select({
      message: "Welcome home traveller!",
      choices: [
        {
          name: "Battle",
          value: "battle",
        },
        {
          name: "Exit",
          value: "exit",
        },
        {
            name: "Check",
            value: "check"
        },
        {
          name: "Open Store",
          value: "openStore",
        },
      ],
    });

    // Process menu selection
    if (menuAction === "battle") {
      await battle(database, player, database.npcs["barbarian"]);
    } else if (menuAction === "exit") {
      saveGame(player);
      isRunning = false;
    } else if (menuAction === "openStore") {
      await database.store.showStore(player);
    } else if (menuAction === 'check') {
        console.log(database.npcs['goblin']);
        break;
    }
  }
}

/**
 * Initialize and run the game
 *
 * @async
 * @function runGame
 * @description Main entry point that initializes the database, loads or creates a player,
 *              and starts the game loop. Handles the initial game menu for new or
 *              continuing gameplay.
 * @returns {Promise<void>}
 * @throws {Error} If database initialization fails or player creation/loading encounters an error
 */
async function runGame() {
  // Database setup
  const database = new DataBase("Game");
  await database.dbLoad();
  var player;
  console.clear();
  const menuAction = await select({
    message: "Welcome! Please select an option:",
    choices: [
      {
        name: "Load Game",
        value: "loadGame",
      },
      {
        name: "New Game",
        value: "newGame",
      },
    ],
  });

  // Process initial menu selection
  if (menuAction === "loadGame") {
    player = loadGame();

    if (!player) {
      // If there is no save
      player = await newGame(database);
    }
  } else if (menuAction === "newGame") {
    player = await newGame(database);
  }

  await mainMenu(player, database);
}

// Start the game
runGame();

/**
 * Commented out code - development/testing snippets
 *
 * @private
 * @description Code used during development for testing database functionality.
 * Retained for reference but not used in production.
 * 
 * //const database = new DataBase('Game');
 * //await database.dbLoad();
 * //console.log(database.weapons['test_weapon'].name);
 */