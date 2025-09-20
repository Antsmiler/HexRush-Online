import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String },
  elo: { type: Number, default: 1000 },
  xp: { type: Number, default: 0 },
  cosmetics: [{ type: String }],
  matches: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Match' }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);
