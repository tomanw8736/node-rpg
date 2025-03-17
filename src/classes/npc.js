// enemy/npc class
class NPC {
    constructor(name, health, attack) {
        this.name = name; // npc name (displayed during combat)
        this.health = health; // npc health
        this.attack = attack; // npc attack damage
    }

    // returns a bool of whether or not
    // the noc is alive
    isAlive() {
        return this.health > 0;
    }
}

export { NPC }