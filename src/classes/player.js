// player class
class Player {
    constructor(name, health, max_health, attack, level, exp, max_exp) {
        this.name = name; // player name
        this.health = health; // player health
        this.max_health = max_health; // max player health
        this.attack = attack; // player attack

        // levelling
        this.level = level; // player level
        this.exp = exp; // player exp
        this.max_exp = max_exp; // max exp before level up
    }

    // returns a bool of whether or not
    // the player is alive
    isAlive() {
        return this.health > 0;
    }

    giveEXP(amount) {
        this.exp += amount;
        console.log(`${this.name} has gained: ${amount}XP!`);
        if (this.exp >= this.max_exp) {
            this.levelUp();
        }
    }

    levelUp() {
        this.level += 1;
        this.max_exp = this.exp * 2;
        this.exp = 0;
    }

    // displays palyer stats
    showStats() {
        console.log('------------------');
        console.log(`Player Name: ${this.name}`);
        console.log(`Player Level: ${this.level} (${this.exp}/${this.max_exp})`);
        console.log('------------------');
        console.log(`Health: ${this.health}/${this.max_health}`);
        console.log(`Damage: ${this.attack}`);
        console.log('------------------');
    }
}

export { Player }