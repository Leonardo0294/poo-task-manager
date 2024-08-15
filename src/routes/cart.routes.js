import express from 'express';
import { CartController } from '../controllers/cart.controller.js';

const router = express.Router();

// Rutas para carritos (deberías definir qué rutas necesitas)
router.post('/', CartController.createCart);
router.get('/', CartController.getAllCarts);
router.get('/:id', CartController.getCartById);

export default router;
