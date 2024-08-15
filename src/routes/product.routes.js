import { Router } from 'express';
import { ProductController } from '../controllers/product.controller.js';
import { createProductValidator } from '../validators/product.validator.js';

const router = Router();

// Definir las rutas
router.post('/', createProductValidator, ProductController.createProduct);
router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById);

export default router;
