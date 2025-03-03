import { UserModel } from "../../models/UserSchema.js";
import { hashPassword } from "../../utils/bcryptHelpers.js";

const UpdateUserController = async (req, res) => {
  const { email, updates } = req.body;
  const { newEmail, newUsername, newPassword, newRole } = updates;

  if (!email) return res.status(400).json({ message: "The field 'email' is required." });

  const foundUser = await UserModel.findOne({ email });
  if (!foundUser) return res.status(404).json({ message: 'User not found.' });

  const updatedData = {};

  if (updates.newEmail) updatedData.email = newEmail;
  if (newUsername) updatedData.username = newUsername;
  if (newRole) updatedData.role = newRole;

  if (newPassword) updatedData.password = await hashPassword(newPassword);

  const updatedUser = await UserModel.findOneAndUpdate(
    { email },
    { $set: updatedData },
    { new: true }
  );

  return res.status(200).json({
    message: 'User updated successfully.',
    userUpdated: {
      username: updatedUser.username,
      email: updatedUser.email,
      role: updatedUser.role
    }
  });
}

export { UpdateUserController }