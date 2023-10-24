import Phaser from 'phaser';

export default class Zombie extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'zombie');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setCollideWorldBounds(true); // Character will collide with game boundaries
    }

    // Define movements and other methods specific to Zombie here
}
