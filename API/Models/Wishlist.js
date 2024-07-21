// models/Wishlist.js
import mongoose from 'mongoose';

const wishlistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  place: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Place' }
});

export default mongoose.model('Wishlist', wishlistSchema);
