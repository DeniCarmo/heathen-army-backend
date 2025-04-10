import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { DBURLAUTH } from '../config/config.js';
import authRouter from './routes/auth.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());

const PORT = 4050;

const baseUrl = '/api/v1';

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true
}));

app.use(`${baseUrl}/auth`, authRouter);

mongoose.connect(DBURLAUTH).then(() => {
  console.log('Auth Server connection to database successfull');

  app.listen(PORT, () => console.log(`Auth Server is running at port: ${PORT}`));
}).catch(err => {
  console.log(err);
});
