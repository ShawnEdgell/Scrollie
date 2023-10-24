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

        // Create and enable physics for Zombie
        this.zombie = new Zombie(this, 600, 300);

        // Set up custom movement keys
        this.customControls = this.input.keyboard.addKeys({
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            jump: Phaser.Input.Keyboard.KeyCodes.SPACE, // Use "W" for jump
        });
    }

    update() {
        // Debugging statements
        if (this.customControls.jump.isDown !== this.prevJumpState) {
            console.log('Jump key is down:', this.customControls.jump.isDown);
            this.prevJumpState = this.customControls.jump.isDown;
        }

        // Player movement
        if (this.customControls.left.isDown) {
            this.adventurer.setVelocityX(-160);
        } else if (this.customControls.right.isDown) {
            this.adventurer.setVelocityX(160);
        } else {
            this.adventurer.setVelocityX(0);
        }

        // Player jumping when "W" key is pressed
        if (this.customControls.jump.isDown && this.adventurer.body.onFloor()) {
            this.adventurer.jump();
        }
    }
}
