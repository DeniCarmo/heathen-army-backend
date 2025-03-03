import mongoose from "mongoose";

const RefreshTokenSchema = mongoose.Schema({
  value: {
    type: String,
    required: true
  },
  expirationDate: {
    type: Number,
    required: true
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    required: true
  }
});

export const RefreshTokenModel = mongoose.model('RefreshToken', RefreshTokenSchema);
