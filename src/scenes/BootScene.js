import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
    constructor() {
        super('BootScene');
    }

    preload() {
        console.log("BootScene preload");
    }

    create() {
        console.log("BootScene started!");
        this.scene.start('GameScene');
    }
}
