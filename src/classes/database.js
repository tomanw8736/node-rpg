import { Weapon } from "./weapon.js";

// database shit
class DataBase {
    constructor(name) {
        this.name = name;
        this.weapons = [];
    }

    dbLoad() {
       this.dbPreLoad();
       /*
        database loading code goes here
       */

        // setting up weapons
        const weapon_test = new Weapon('Test', 10);

        this.weapons.push(weapon_test);

      this.dbPostLoad();
    }

    // method before db loads
    dbPreLoad() {
        console.log('Loading DataBase!');
        /*
            Put any code before the DB loads here!
        */
    }

    // method after db loads
    dbPostLoad() {
        console.log('DataBase Loaded!');
    }
}

export { DataBase }