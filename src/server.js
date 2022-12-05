import express from 'express';
import 'dotenv/config';

import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json());
app.use(userRoutes);

const { PORT } = process.env;
app.listen(PORT, () => {
  console.info(`Listening at port ${PORT}`);
});

export default app;