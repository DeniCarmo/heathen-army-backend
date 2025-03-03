import jwt from 'jsonwebtoken';
import { config } from '../config/env.js';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const [, token] = authHeader?.split(' ');

  if (!token) return res.status(401).json({ message: 'Access denied.' });

  jwt.verify(token, config.accessTokenSecret, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });

    req.user = user;
    return next();
  });
};
