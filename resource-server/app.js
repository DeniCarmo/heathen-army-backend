import express from 'express';
import bannersRouter from './routes/banners.js';
import mongoose from 'mongoose';
import cors from 'cors';
import { DBURLRESOURCE } from '../config/config.js';

const app = express();

const PORT = 4040;

const baseUrl = '/api/v1';

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(`${baseUrl}/banners`, bannersRouter);

mongoose.connect(DBURLRESOURCE).then(() => {
  console.log('Resource Server connection to database successfull');

  app.listen(PORT, () => console.log(`Resource Server is running in port: ${PORT}`));
}).catch(err => {
  console.log(err);
});
