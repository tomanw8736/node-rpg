import { Store } from "./shop.js";
import { Item } from "./item.js";
import { promises as fs, existsSync } from "fs";
import { NPC } from "./npc.js";
import { battle } from "../methods/battle.js";
import { select } from "@inquirer/prompts";

class DungeonHandler {
    constructor(utilities, database, player) {
        this.utilities = utilities;
        this.database = database;
        this.player = player;
        this.dungeons = [];
    }

    async loadDungeons() {
        const data = await fs.readFile("dungeons.json", "utf8");
        const dungeonsData = JSON.parse(data);

        this.dungeons = dungeonsData;

        console.log(`Loaded Dungeons!`);
    }

    async startDungeon(dungeon) {
        console.log(dungeon);
        for (const enemy of dungeon.enemies) {
            await battle(
                this.utilities,
                this.player,
                this.database.npcs[enemy],
                true,
                dungeon.name
            );
        }
        this.player.giveMoney(dungeon.money_reward);
        return true;
    }

    async showDungeons() {
        const action = await select({
            message: "Pick a Dungeon:",
            choices: Object.entries(this.dungeons)
            .map(([id, data]) => ({
                name: `${data.name}`,
                value: id,
            }))
        });

        await this.startDungeon(this.dungeons[action]);
    }

}

export { DungeonHandler };