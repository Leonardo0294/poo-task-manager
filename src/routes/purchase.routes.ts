import express, { Request, Response, NextFunction } from 'express';
import { createPurchase, getPurchases } from '../controllers/purchase.controller';

// Crear un enrutador
const router = express.Router();

// Rutas para compras
router.post('/', createPurchase as (req: Request, res: Response, next: NextFunction) => Promise<void>);
router.get('/', getPurchases as (req: Request, res: Response, next: NextFunction) => Promise<void>);

export default router;
