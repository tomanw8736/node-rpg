// player class
class Player {
    constructor(name, health, attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;
    }

    // returns a bool of whether or not
    // the player is alive
    isAlive() {
        return this.health > 0;
    }
}

export { Player }