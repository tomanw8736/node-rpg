// enemy/npc class
class NPC {
    constructor(name, health, attack, exp_reward) {
        this.name = name; // npc name (displayed during combat)
        this.health = health; // npc health
        this.attack = attack; // npc attack damage
        this.exp_reward = exp_reward; // npc exp reward on defeat
    }

    // returns a bool of whether or not
    // the noc is alive
    isAlive() {
        return this.health > 0;
    }
}

export { NPC }