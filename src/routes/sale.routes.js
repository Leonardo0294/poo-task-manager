import express from 'express';
import { SaleController } from '../controllers/sale.controller.js';

const router = express.Router();

// Rutas para ventas (deberías definir qué rutas necesitas)
router.post('/', SaleController.createSale);
router.get('/', SaleController.getAllSales);
router.get('/:id', SaleController.getSaleById);

export default router;
