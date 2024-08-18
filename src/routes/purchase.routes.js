import express from 'express';
import { createPurchase, getPurchases } from '../controllers/purchase.controller.js';

const router = express.Router();

// Rutas para compras
router.post('/', createPurchase);
router.get('/', getPurchases);

export default router;
