import { Player } from "./player.js";
import { NPC } from "./npc.js";

class Utils {
  constructor(name) {
    this.name = name;
  }

  isAlive(entity) {
    return entity.health > 0;
  }
}

export { Utils };
