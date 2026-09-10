import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  userId: { type: String, required: true, unique: true, index: true },
  name: { type: String, required: true },
  phone: String,
  location: String,
  crop: String,
  quantity: Number,
  storage: Boolean,
}, { timestamps: true });

export default mongoose.model('UserProfile', schema);
