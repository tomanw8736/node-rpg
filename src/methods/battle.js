// Imports
import { Utils } from "../classes/utils.js";
import { select, input } from "@inquirer/prompts";
const utils = new Utils('Utilities');
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
          player.giveMoney(enemy.money_reward);
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

export { battle }