import jwt from 'jsonwebtoken';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
import { RefreshTokenModel } from '../models/RefreshTokenSchema.js';
import getExpirationTime from '../utils/getExpirationDate.js';

dayjs.extend(utc);
dayjs.extend(timezone);

const GenerateRefreshTokenProvider = async (userId) => {
  const refreshToken = {
    value: jwt.sign({}, process.env.REFRESH_TOKEN_SECRET),
    expirationDate: getExpirationTime(7200000),
    userId
  };

  const updatedRefreshtoken = await RefreshTokenModel.create(refreshToken);

  return updatedRefreshtoken;
}

export { GenerateRefreshTokenProvider };
