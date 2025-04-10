import jwt from 'jsonwebtoken';
import { config } from '../config/env.js';

export const authenticateToken = (req, res, next) => {
  const { accessToken } = req.cookies;

  if (!accessToken) return res.status(403).json({ message: 'Access denied.' });

  jwt.verify(accessToken, config.accessTokenSecret, (err, user) => {
    if (err) return res.status(401).json({ message: 'Invalid token' });

    req.user = user.sub.replaceAll('"', '');
    return next();
  });
};
