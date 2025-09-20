import Phaser from 'phaser';
import { io } from 'socket.io-client';

const socket = io();

class HexRushScene extends Phaser.Scene {
  constructor() {
    super('HexRush');
  }
  preload() {
      // Load assets
      console.log('Phaser preload called');
  }
  create() {
        // Setup game board, player, etc.
        console.log('Phaser create called');
        // Set background color explicitly
        this.cameras.main.setBackgroundColor('#222244');
        // Add a visible debug rectangle
        const graphics = this.add.graphics();
        graphics.fillStyle(0xff0000, 1);
        graphics.fillRect(200, 150, 400, 300);
        this.add.text(400, 300, 'Hello HexRush!', {
          font: '32px Arial',
          color: '#ffffff',
        }).setOrigin(0.5);
        socket.on('gameState', (state) => {
          // Update game state
        });
  }
  update() {
      // Game loop logic
      console.log('Phaser update called');
  }
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: HexRushScene,
  parent: 'game-root',
};

new Phaser.Game(config);
