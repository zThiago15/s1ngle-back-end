import express from 'express';
import 'dotenv/config';
import 'express-async-errors';

import userRoutes from './routes/userRoutes.js';

import errorHandler from './middlewares/errorHandler.js';

const app = express();
app.use(express.json());

app.use(userRoutes);
app.use(errorHandler);

const { PORT } = process.env;
app.listen(PORT, () => {
  console.info(`Listening at port ${PORT}`);
});

export default app;
