import express from 'express';
import { check } from 'express-validator';
import { PurchaseController } from '../controllers/purchase.controller.js';

const router = express.Router();

// Rutas para compras
router.post('/', [
  check('buyer_id').notEmpty().withMessage('Buyer ID is required'),
  check('total_amount').isFloat({ gt: 0 }).withMessage('Total amount must be a positive number'),
  check('purchase_date').isDate().withMessage('Purchase date must be a valid date'),
], PurchaseController.createPurchase);

router.get('/', PurchaseController.getAllPurchases);
router.get('/:id', PurchaseController.getPurchaseById);

export default router;
