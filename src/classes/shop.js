// stores for items and shit
import { Weapon } from "./weapon.js";
import { select, input } from "@inquirer/prompts";
import { promises as fs, existsSync } from 'fs';

class Store {
    constructor(name, items, database) {
        this.name = name;
        this.items = items;
        this.database = database
    }

    async showStore(player) {
        console.clear();
        const action = await select({
            message: 'Choose a category:',
            choices: [
                {
                    name: 'Weapons',
                    value: 'weapons'
                },
            ],
        });
        if (action === 'weapons') {
            await this.showWeapons(player);
        }
    }

    async showWeapons(player) {
        const action = await select({
            message: 'Pick an Item:',
            choices: Object.entries(this.items)
            .filter(([id, data]) => data.category === "weapon")
            .map(([id, data]) => ({
                name: `${data.name} | $${data.value}`,
                value: id
            })),
        })
        this.buyItem(action, player);
    }

    async buyItem(item_id, player) {
        if (player.money >= this.database.weapons[item_id].value) {
            player.money -= this.database.weapons[item_id].value;
            player.weapon = this.database.weapons[item_id];
        }
    }
}

export { Store }