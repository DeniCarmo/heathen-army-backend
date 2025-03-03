import jwt from 'jsonwebtoken';

const GenerateTokenProvider = async (userId) => {
  return jwt.sign({}, process.env.ACCESS_TOKEN_SECRET, {subject: JSON.stringify(userId), expiresIn: '15m'});
}

export { GenerateTokenProvider };
