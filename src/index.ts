import express from 'express';
import dotenv from "dotenv";
dotenv.config();

import { errorHandler } from './interface/middleware/errorHandler';
import { bookRoutes } from './interface/routes/BookRoutes';
import logger from './infrastructure/logger/logger';
import { setupSwagger } from "./interface/swagger";

const app = express();

app.use(express.json());
app.use('/api', bookRoutes);
app.use(errorHandler);
setupSwagger(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});