import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import Purchase from '../models/purchase.model'; // Asegúrate de que la extensión del archivo sea .ts si es necesario

// Crear una nueva compra
export const createPurchase = [
  body('user').isMongoId().withMessage('Invalid user ID'),
  body('products').isArray().withMessage('Products should be an array'),
  body('total').isNumeric().withMessage('Invalid total value'),
  async (req: Request, res: Response): Promise<Response> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const purchase = await Purchase.createPurchase(req.body);
      return res.status(201).json(purchase);
    } catch (error) {
      return res.status(500).json({ message: (error as Error).message });
    }
  }
];

// Obtener todas las compras
export const getPurchases = async (req: Request, res: Response): Promise<Response> => {
  try {
    const purchases = await Purchase.getPurchases();
    return res.status(200).json(purchases);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};
