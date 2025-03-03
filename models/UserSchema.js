import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true,
      enum: ['admin', 'user'],
      defasult: 'user'
    }
  },
  {
    timestamps: true
  }
);

export const UserModel = mongoose.model('User', UserSchema);
