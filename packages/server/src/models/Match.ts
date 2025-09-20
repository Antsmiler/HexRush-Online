import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema({
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  winner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  duration: { type: Number },
  boardState: { type: Object },
  startedAt: { type: Date },
  endedAt: { type: Date }
});

export default mongoose.model('Match', matchSchema);
