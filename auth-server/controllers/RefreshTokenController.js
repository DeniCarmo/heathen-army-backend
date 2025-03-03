import { RefreshTokenModel } from "../../models/RefreshTokenSchema.js";
import { GenerateTokenProvider } from "../../provider/GenerateToken.js";
import { GenerateRefreshTokenProvider } from "../../provider/GenerateRefreshtoken.js";

const RefreshTokenController = async (req, res) => {
  const { refresh_token } = req.body;
  const currentDate = Math.floor(Date.now() / 1000);

  const refreshToken = await RefreshTokenModel.findOne({'value': refresh_token});

  if (!refreshToken) return res.json({ message: 'Invalid refresh token' }); // new Error('Invalid refresh token.');

  const refreshTokenExpired = currentDate > refreshToken.expirationDate ? true : false;

  const token = await GenerateTokenProvider(refreshToken.userId);

  if (refreshTokenExpired) {
    await RefreshTokenModel.deleteMany({ userId: refreshToken.userId });

    const newRefreshToken = await GenerateRefreshTokenProvider(refreshToken.userId);

    return res.json({ token, refreshToken: newRefreshToken });
  }

  return res.json({ token });
};

export { RefreshTokenController };