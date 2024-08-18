import Product from '../models/product.models.js';
import { body, validationResult } from 'express-validator';

// Crear un nuevo producto
export const createProduct = [
  body('name').isString().notEmpty(),
  body('price').isNumeric().notEmpty(),
  body('description').isString().notEmpty(),
  body('stock').isNumeric().notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const product = await Product.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
];

// Obtener todos los productos
export const getProducts = async (req, res) => {
  try {
    const products = await Product.getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
