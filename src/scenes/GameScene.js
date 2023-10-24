import Phaser from 'phaser';
import Adventurer from '../characters/Adventurer.js';
import Zombie from '../characters/Zombie.js';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    preload() {
        console.log("GameScene preload");
        this.load.image('background', '/assets/background/backgroundColorForest.png');
        this.load.image('adventurer', '/assets/players/Adventurer/Poses/adventurer_stand.png');
        this.load.image('zombie', '/assets/players/Zombie/Poses/zombie_stand.png');        
    }

    create() {
        console.log("GameScene started!");

        // Display assets
        this.add.image(400, 300, 'background'); // Centered background image
        this.adventurer = new Adventurer(this, 200, 300);
        this.zombie = new Zombie(this, 600, 300);
    }

    update() {
        // This function runs in a loop. Add code here for game mechanics, movements, etc.
    }
}
