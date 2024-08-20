import { Request, Response, NextFunction } from 'express';
import logger from '../../infrastructure/logger/logger';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  logger.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
}