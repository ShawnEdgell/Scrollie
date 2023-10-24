import * as Phaser from 'phaser';

export default class Adventurer extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'adventurer');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setCollideWorldBounds(true); // Character will collide with game boundaries
    }

    // Define movements and other methods specific to Adventurer here
}