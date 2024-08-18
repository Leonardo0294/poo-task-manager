import PurchasedProduct from '../models/purchase-product-model.js';
import { body, validationResult } from 'express-validator';

// Crear un nuevo producto comprado
export const createPurchasedProduct = [
  body('product').isMongoId(),
  body('purchase').isMongoId(),
  body('quantity').isNumeric().notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const purchasedProduct = await PurchasedProduct.createPurchasedProduct(req.body);
      res.status(201).json(purchasedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
];

// Obtener todos los productos comprados
export const getPurchasedProducts = async (req, res) => {
  try {
    const purchasedProducts = await PurchasedProduct.getPurchasedProducts();
    res.status(200).json(purchasedProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
