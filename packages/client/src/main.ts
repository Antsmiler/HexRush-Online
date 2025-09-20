import Phaser from 'phaser';
import { io } from 'socket.io-client';

const socket = io();

class HexRushScene extends Phaser.Scene {
  constructor() {
    super('HexRush');
  }
  preload() {
    // Load assets
  }
  create() {
    // Setup game board, player, etc.
    socket.on('gameState', (state) => {
      // Update game state
    });
  }
  update() {
    // Game loop logic
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
