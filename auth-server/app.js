import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { DBURLAUTH } from '../config/config.js';
import authRouter from './routes/auth.js';

const app = express();

const PORT = 4050;

const baseUrl = '/api/v1';

app.use(express.json());
app.use(cors());

app.use(`${baseUrl}/auth`, authRouter);

mongoose.connect(DBURLAUTH).then(() => {
  console.log('Auth Server connection to database successfull');

  app.listen(PORT, () => console.log(`Auth Server is running at port: ${PORT}`));
}).catch(err => {
  console.log(err);
});
