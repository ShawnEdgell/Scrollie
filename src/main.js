import * as Phaser from 'phaser';
import BootScene from './scenes/BootScene.js'; // BootScene import
import GameScene from './scenes/GameScene.js';

const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.RESIZE,
        parent: 'phaser-game',
        width: '100%',
        height: '100%',
    },
    scene: [BootScene, GameScene], // Add BootScene to the scenes array
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false,
        },
    },
};

const game = new Phaser.Game(config);
