import { Store } from "./shop.js";
import { Item } from "./item.js";
import { promises as fs, existsSync } from "fs";
import { NPC } from "./npc.js";
import { battle } from "../methods/battle.js";

class Dungeon {
    constructor(id) {
        this.id = id;
        this.enemies = [];
        this.money_reward = 0;
    }

    async loadDungeon() {
        const data = await fs.readFile("dungeons.json", "utf8");
        const dungeonsData = JSON.parse(data);

        this.enemies = dungeonsData[this.id].enemies;
        this.money_reward = dungeonsData[this.id].money_reward;

        console.log(`Loaded Dungeon: ${this.id}!`);
    }

    async startDungeon(database) {
        
        return true;
    }

}

export { Dungeon };