import { UserModel } from "../../models/UserSchema.js";
import { comparePass } from "../../utils/bcryptHelpers.js";
import { GenerateRefreshTokenProvider } from "../../provider/GenerateRefreshtoken.js";
import { GenerateTokenProvider } from "../../provider/GenerateToken.js";
import { RefreshTokenModel } from "../../models/RefreshTokenSchema.js";

const LoginUserController  = async (req, res) => {
  const {email, password} = req.body;
  const user = await UserModel.findOne({'email': email});

  if (!user) return res.status(400).json({ message: 'User not found.' });

  const isMatch = await comparePass(password, user.password);

  if (!isMatch) return res.status(403).json({ message: 'Invalid credentials.' });

  const accessToken = await GenerateTokenProvider(user._id);

  await RefreshTokenModel.deleteMany({ userId: user._id });
  
  const refreshToken = await GenerateRefreshTokenProvider(user._id);

  res.cookie('accessToken', accessToken, {
    maxAge: 120000,
    httpOnly: true,
    secure: false,
    sameSite: 'Lax'
  });

  res.cookie('refreshToken', refreshToken.value, {
    maxAge: 120000,
    httpOnly: true,
    secure: false,
    sameSite: 'Lax'
  });

  return res.json({
    status: 200,
    message: 'User logged successfuly',
    data: {
      username: user.username,
      email: user.email
    }
  });
}

export { LoginUserController };