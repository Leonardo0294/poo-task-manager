import Purchase from '../models/purchase.model.js';
import { body, validationResult } from 'express-validator';

// Crear una nueva compra
export const createPurchase = [
  body('user').isMongoId().withMessage('Invalid user ID'),
  body('products').isArray().withMessage('Products should be an array'),
  body('total').isNumeric().withMessage('Invalid total value'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const purchase = await Purchase.createPurchase(req.body);
      res.status(201).json(purchase);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
];

// Obtener todas las compras
export const getPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.getPurchases();
    res.status(200).json(purchases);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
