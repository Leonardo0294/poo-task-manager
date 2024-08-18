import { body } from 'express-validator';

// Validaciones para la creación de compra
export const createPurchaseValidator = [
  body('user').isMongoId().withMessage('User must be a valid MongoDB ObjectId'),
  body('products').isArray().withMessage('Products should be an array'),
  body('total').isNumeric().notEmpty().withMessage('Total is required')
];
