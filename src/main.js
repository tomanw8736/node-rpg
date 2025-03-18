//
// My third and hopefully not given-up on node.js project!
//

// imports
import { select, input } from "@inquirer/prompts";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { Player } from "./classes/player.js";
import { NPC } from "./classes/npc.js";
import { DataBase } from "./classes/database.js";


// saving/loading stuff
function saveGame(player) {
    const data = JSON.stringify({ 
        name: player.name,
        health: player.health,
        max_health: player.max_health,
        attack: player.attack,
        level: player.level,
        exp: player.exp,
        max_exp: player.max_exp,
        weapon: player.weapon,
    });
    writeFileSync('save.json', data);
    console.log('Saved successfully!');
}

function loadGame() {
    if (existsSync('save.json')) {
        const data = readFileSync('save.json', 'utf8'); // file path + charset
        const { name, health, max_health, attack, level, exp, max_exp, weapon } = JSON.parse(data);
        console.log('Game Loaded Successfully!');
        return new Player(name, health, max_health, attack, level, exp, max_exp, weapon);
    }
    console.log('No save found!');
}



// battle method
// requires player arg (Player class)
// and enemy arg (NPC class)
async function battle(player, enemy) {

    // action menu
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
        })

        // if action is 'attack'
        if ( action === 'attack' ) {
            enemy.health -= player.weapon.attack;
            console.log(`${player.name} attacks ${enemy.name} dealing ${player.attack} damage!`);

            // checks if enemy is still alive
            if (!enemy.isAlive()) {
                console.log(`${enemy.name} has been killed!`);
                player.giveEXP(enemy.exp_reward)
                mainMenu(player);
                return;
            }

            // enemy attacks back at player
            player.health -= enemy.attack;
            console.log(`${enemy.name} attacks ${player.name} dealing ${enemy.attack} damage!`);

            // checks if player is still alive
            if (!player.isAlive()) {
                console.log(`${player.name} has been killed!`);
                break;
            }
        }
    }
}

async function newGame(database) {
    const name = await input({
        message: 'Please enter a name!'
    })
    return new Player(name, 100, 100, 5, 1, 0, 250, database.weapons['weapon_sword']);
}


//
// MAIN MENU METHOD
//
async function mainMenu(player) {
    console.clear();

    // printing out player stats
    player.showStats();

    // main meun options
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

    // if the player chose battle
    if (menuAction === 'battle') {
        const goblin = new NPC('Goblin', 25, 2, 10);
        await battle(player, goblin);
    }
    else if (menuAction === 'exit') {
        saveGame(player);
        process.exit();
    }
    else {
        console.log(player.weapon);
    }
}



// start game method
async function runGame() {
    // db setup
    const database = new DataBase('Game'); // making new DataBase object
    await database.dbLoad(); // loading the database

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
    // if the player selects 'load game'
    if (menuAction === 'loadGame') {
        player = loadGame(); // calling the loadGame() method

        if (!player) { // if there is no save
            player = await newGame(database);
        }
    } 
    else if (menuAction === 'newGame') {
        player = await newGame(database);
    }

    await mainMenu(player);
}

runGame();
//const database = new DataBase('Game'); // making new DataBase object
//await database.dbLoad(); // loading the database
//console.log(database.weapons['test_weapon'].name);