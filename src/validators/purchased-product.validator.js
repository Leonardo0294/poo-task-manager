import { body } from 'express-validator';

// Validaciones para la creación de producto comprado
export const createPurchasedProductValidator = [
  body('product').isMongoId().withMessage('Product must be a valid MongoDB ObjectId'),
  body('purchase').isMongoId().withMessage('Purchase must be a valid MongoDB ObjectId'),
  body('quantity').isNumeric().notEmpty().withMessage('Quantity is required')
];
