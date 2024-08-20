import { Router } from 'express';
import { InMemoryBookRepository } from '../../infrastructure/repositories/InMemoryBookRepository';
import { GetAllBooks } from '../../use-cases/GetAllBooks';
import { BookController } from '../controller/BookController';
import { authenticateToken } from '../middleware/auth';

const router = Router();

const bookRepository = new InMemoryBookRepository();
const bookController = new BookController();

router.get('/books', authenticateToken, (req, res) => bookController.getAll(req, res));

export { router as bookRoutes };