import express, { Request, Response, NextFunction } from 'express';
import { createProduct, getProducts } from '../controllers/product.controller';

// Crear un enrutador
const router = express.Router();

// Rutas para productos
router.post('/', createProduct as (req: Request, res: Response, next: NextFunction) => Promise<void>);
router.get('/', getProducts as (req: Request, res: Response, next: NextFunction) => Promise<void>);

export default router;
