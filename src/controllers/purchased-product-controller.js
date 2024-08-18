import PurchasedProduct from '../models/purchase-product-model.js';
import { body, validationResult } from 'express-validator';

// Crear un nuevo producto comprado
export const createPurchasedProduct = [
  body('product').isMongoId().withMessage('Invalid product ID'), // Validar ID de producto
  body('purchase').isMongoId().withMessage('Invalid purchase ID'), // Validar ID de compra
  body('quantity').isNumeric().withMessage('Quantity must be a number').notEmpty().withMessage('Quantity is required'), // Validar cantidad
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const purchasedProduct = new PurchasedProduct(req.body);
      await purchasedProduct.save();  // Guardar el nuevo producto comprado en la base de datos
      res.status(201).json(purchasedProduct);  // Responder con el producto comprado creado
    } catch (error) {
      res.status(500).json({ message: error.message });  // Manejar errores del servidor
    }
  }
];

// Obtener todos los productos comprados
export const getPurchasedProducts = async (req, res) => {
  try {
    const purchasedProducts = await PurchasedProduct.find(); 
    res.status(200).json(purchasedProducts);  
  } catch (error) {
    res.status(500).json({ message: error.message });  
  }
};
