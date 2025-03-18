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

// game imports
import { Player } from "./classes/player.js";
import { NPC } from "./classes/npc.js";
import { DataBase } from "./classes/database.js";
import { Utils } from "./classes/utils.js";

const utils = new Utils("Utilities");

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
    money: player.money,
    inventory: player.inventory
  });
  writeFileSync("save.json", data);
  console.log("Saved successfully!");
}

/**
 * Load a saved game state
 *
 * @function loadGame
 * @description Reads the save file and reconstructs a Player object from the data.
 * @returns {Player|undefined} The loaded player object or undefined if no save exists
 */
function loadGame() {
  if (existsSync("save.json")) {
    const data = readFileSync("save.json", "utf8"); // file path + charset
    const { name, health, max_health, level, exp, max_exp, weapon, money, inventory } =
      JSON.parse(data);
    console.log("Game Loaded Successfully!");
    return new Player(
      name,
      health,
      max_health,
      level,
      exp,
      max_exp,
      weapon,
      money,
      inventory
    );
  }
  console.log("No save found!");
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
async function battle(database, player, enemy) {
  while (player.isAlive() && utils.isAlive(enemy)) {
    console.clear();
    console.log(`Enemy Name: ${enemy.name}`);
    console.log(`Enemy Health: ${enemy.health}`);
    const action = await select({
      message: `What will ${player.name} do?`,
      choices: [
        {
          name: "Attack",
          value: "attack",
        },
        {
          name: "Run",
          value: "run",
        },
      ],
    });

    // If action is 'attack'
    if (action === "attack") {
      // Player attacks enemy
      enemy.health -= player.weapon.attack;

      console.log(
        `${player.name} attacks ${enemy.name} dealing ${player.weapon.attack} damage!`
      );

      // Check if enemy is still alive
      if (!utils.isAlive(enemy)) {
        console.log(`${enemy.name} has been killed!`);
        player.giveEXP(enemy.exp_reward);
        return true;
      }

      // Enemy attacks back at player
      player.health -= enemy.attack;
      console.log(
        `${enemy.name} attacks ${player.name} dealing ${enemy.attack} damage!`
      );

      // Check if player is still alive
      if (!player.isAlive()) {
        console.log(`${player.name} has been killed!`);
        break;
      }
    } else if (action === "run") {
      mainMenu(player, database);
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
    message: "Please enter a name!",
  });
  return new Player(
    name,
    100,
    100,
    1,
    0,
    250,
    database.items["weapon_sword"],
    250,
    []
  );
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
      await battle(database, player, database.npcs["goblin"]);
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
 *              and starts the game loop.
 * @returns {Promise<void>}
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
 * //const database = new DataBase('Game');
 * //await database.dbLoad();
 * //console.log(database.weapons['test_weapon'].name);
 */
