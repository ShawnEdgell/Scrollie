import * as Phaser from 'phaser';

export default class Adventurer extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'adventurer');
        scene.add.existing(this);

        // Set up the character's physics properties
        scene.physics.world.enable(this); // Enable physics for the character
        this.setCollideWorldBounds(true); // Character will collide with game boundaries
        this.setGravityY(300); // Adjust gravity as needed
    }

    // Define movements and other methods specific to Adventurer here

    // Custom jump method
    jump() {
        this.setVelocityY(-300); // Adjust jump velocity as needed
    }
}
