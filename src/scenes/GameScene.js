import * as Phaser from 'phaser';
import Adventurer from '../characters/Adventurer.js';
import Zombie from '../characters/Zombie.js';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    preload() {
        console.log("GameScene preload");
        this.load.image('background', './public/assets/background/backgroundColorForest.png');
        this.load.image('adventurer', './public/assets/players/Adventurer/Poses/adventurer_stand.png');
        this.load.image('zombie', './public/assets/players/Zombie/Poses/zombie_stand.png');
    }

    create() {
        console.log("GameScene started!");

        // Display assets
        this.add.image(400, 300, 'background');
        
        // Create and enable physics for Adventurer
        this.adventurer = new Adventurer(this, 200, 300);
        this.physics.world.enable(this.adventurer);
        this.adventurer.setCollideWorldBounds(true);
        
        // Create and enable physics for Zombie
        this.zombie = new Zombie(this, 600, 300);
        this.physics.world.enable(this.zombie); 
        this.zombie.setCollideWorldBounds(true);

        // Set up custom movement keys
        this.customControls = this.input.keyboard.addKeys({
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            jump: Phaser.Input.Keyboard.KeyCodes.W,
        });
    }

    update() {
        // Player movement (Adventurer)
        if (this.customControls.left.isDown) {
            this.adventurer.setVelocityX(-160);
        } else if (this.customControls.right.isDown) {
            this.adventurer.setVelocityX(160);
        } else {
            this.adventurer.setVelocityX(0);
        }
    
        // Player jumping (Adventurer)
        if (this.customControls.jump.isDown && this.adventurer.body.touching.down) {
            this.adventurer.setVelocityY(-330);
        }

        // You can add similar movement and controls for the Zombie here if needed.
    }
}
