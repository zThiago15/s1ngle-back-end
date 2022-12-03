import express from 'express';
import 'dotenv/config';

const app = express();
app.use(express.json());

const { PORT } = process.env;
app.listen(PORT, () => {
  console.info(`Listening at port ${PORT}`);
});
