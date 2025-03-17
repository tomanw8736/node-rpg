//
// My third and hopefully not given-up on node.js project!
//

// imports
import { select, input } from "@inquirer/prompts";
import { readFileSync, writeFileSync } from "fs";
import { Player } from "./classes/player.js";
import { NPC } from "./classes/npc.js";

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
                break;
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

// start game method
async function runGame() {
    console.clear();
    const name = await input({
        message: 'Please enter a name!'
    })
    const player = new Player(name, 100, 5);
    console.log(`Welcome to my RPG ${player.name}!`);

    // test battle
    const enemy = new NPC('Goblin', 30, 5);
    await battle(player, enemy);
}
runGame();