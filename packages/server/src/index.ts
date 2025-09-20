import express from 'express';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import Redis from 'ioredis';
// Type-only import to help TypeScript find types
import type {} from 'ioredis';

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/hexrush';
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';
const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';

mongoose.connect(MONGO_URL);
// const redis = new Redis(REDIS_URL);

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: { origin: '*' }
});

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// JWT Auth middleware
app.use((req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return next();
  try {
    (req as unknown).user = jwt.verify(token, JWT_SECRET);
  } catch {
    // ignore invalid token
  }
  next();
});

// Socket.IO connection
io.on('connection', (socket) => {
  console.log('Socket connected:', socket.id);
  // TODO: Lobby, matchmaking, game loop, anti-cheat, metrics
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
