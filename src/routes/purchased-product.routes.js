import express from 'express';
import { createPurchasedProduct, getPurchasedProducts } from '../controllers/purchased-product-controller.js';

const router = express.Router();

// Rutas para productos comprados
router.post('/', createPurchasedProduct);
router.get('/', getPurchasedProducts);

export default router;
