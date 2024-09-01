import { body, ValidationChain } from 'express-validator';

// Validaciones para la creación de producto comprado
export const createPurchasedProductValidator: ValidationChain[] = [
  body('product')
    .isMongoId()
    .withMessage('Product must be a valid MongoDB ObjectId'),

  body('purchase')
    .isMongoId()
    .withMessage('Purchase must be a valid MongoDB ObjectId'),

  body('quantity')
    .isNumeric()
    .withMessage('Quantity must be a number')
    .notEmpty()
    .withMessage('Quantity is required')
];
