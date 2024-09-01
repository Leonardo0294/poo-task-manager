import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import Product from '../models/product.models'; // Asegúrate de que la extensión del archivo sea .ts si es necesario

// Crear un nuevo producto
export const createProduct = [
  // Validaciones
  body('name').isString().withMessage('Name must be a string').notEmpty().withMessage('Name is required'),
  body('price').isNumeric().withMessage('Price must be a number').notEmpty().withMessage('Price is required'),
  body('description').isString().withMessage('Description must be a string').notEmpty().withMessage('Description is required'),
  body('stock').isNumeric().withMessage('Stock must be a number').notEmpty().withMessage('Stock is required'),

  // Handler
  async (req: Request, res: Response): Promise<Response> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Usa el método estático createProduct
      const product = await Product.createProduct(req.body);
      return res.status(201).json(product);
    } catch (error) {
      return res.status(500).json({ message: (error as Error).message });
    }
  }
];

// Obtener todos los productos
export const getProducts = async (req: Request, res: Response): Promise<Response> => {
  try {
    // Usa el método estático getProducts
    const products = await Product.getProducts();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};
