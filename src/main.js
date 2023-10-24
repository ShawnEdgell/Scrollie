import Phaser from 'phaser';
import BootScene from './scenes/BootScene.js';
import GameScene from './scenes/GameScene.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [BootScene, GameScene],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
};


const game = new Phaser.Game(config);
