import { UserModel } from "../../models/UserSchema.js";

const GetUserController = async (req, res) => {
  const foundUser = await UserModel.findOne({
    'email': req.body.email
  });

  if (!foundUser) return res.status(400).json({ message: 'User not found' });

  return res.status(200).json({
    id: foundUser._id,
    username: foundUser.username,
    email: foundUser.email,
    role: foundUser.role
  });
}

export { GetUserController };