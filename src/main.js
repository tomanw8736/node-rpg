//
// My third and hopefully not given-up on node.js project!
//

// imports
import { select, input } from "@inquirer/prompts";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { Player } from "./classes/player.js";
import { NPC } from "./classes/npc.js";


// saving/loading stuff
function saveGame(player) {
    const data = JSON.stringify({ name: player.name, health: player.health, attack: player.attack });
    writeFileSync('save.json', data);
    console.log('Saved successfully!');
}

function loadGame() {
    if (existsSync('save.json')) {
        const data = readFileSync('save.json', 'utf8'); // file path + charset
        const { name, health, attack } = JSON.parse(data);
        console.log('Game Loaded Successfully!');
        return new Player(name, health, attack);
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
            enemy.health -= player.attack;
            console.log(`${player.name} attacks ${enemy.name} dealing ${player.attack} damage!`);

            // checks if enemy is still alive
            if (!enemy.isAlive()) {
                console.log(`${enemy.name} has been killed!`);
                return;
            }

            // enemy attacks back at player
            player.health -= enemy.attack;
            console.log(`${enemy.name} attacks ${player.name} dealing ${enemy.attack} damage!`);

            // checks if player is still alive
            if (!player.isAlive()) {
                console.log(`${player.name} has been killed!`);
                return;
            }
        }
    }
}

async function newGame() {
    const name = await input({
        message: 'Please enter a name!'
    })
    return new Player(name, 100, 5);
}

// start game method
async function runGame() {
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

    if (menuAction === 'loadGame') {
        player = loadGame();

        if (!player) {
            player = await newGame();
        }
    } 
    else {
        player = await newGame();
    }

    // test battle
    const enemy = new NPC('Goblin', 30, 5);
    await battle(player, enemy);
    saveGame(player);
}
runGame();