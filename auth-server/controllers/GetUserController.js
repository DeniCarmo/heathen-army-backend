import { UserModel } from "../../models/UserSchema.js";

const GetUserController = async (req, res) => {
  const foundUser = await UserModel.findOne({
    '_id': req.user
  }).select('-password');

  if (!foundUser) return res.status(400).json({ message: 'User not found' });

  return res.status(200).json({
    status: 200,
    user: {
      username: foundUser.username,
      email: foundUser.email,
      role: foundUser.role
    }
  });
}

export { GetUserController };