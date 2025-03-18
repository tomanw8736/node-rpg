import { Weapon } from "./weapon.js";
import { promises as fs } from 'fs';

// database shit
class DataBase {
    constructor(name) {
        this.name = name;
        this.weapons = [];
    }

    async dbLoad() {
       this.dbPreLoad();
       /*
        database loading code goes here
       */
        try {
        // setting up weapons
            const weapon_test = new Weapon( // test weapon
                'test_weapon', // weapon id
                'Test Weapon', // name
                10 // damage
            );
            const weapon_sword = new Weapon(
                'weapon_sword',
                'Sword',
                5
            );

            // pushing weapons
            this.weapons[weapon_test.id] = weapon_test;
            this.weapons[weapon_sword.id] = weapon_sword;

        } catch (error) {
            console.log('Error loading DataBase: ', error);
            // handle error goes here
            throw error; // re-throw to prevent dbPostLoad() if the loading failed
        }

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