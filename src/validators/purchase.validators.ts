import { body, ValidationChain } from 'express-validator';

// Validaciones para la creación de compra
export const createPurchaseValidator: ValidationChain[] = [
  body('user')
    .isMongoId()
    .withMessage('User must be a valid MongoDB ObjectId'),

  body('products')
    .isArray()
    .withMessage('Products should be an array')
    .optional() // Asumiendo que products puede ser opcional
    .custom((value: any) => {
      if (value && !value.every((id: any) => typeof id === 'string')) {
        throw new Error('Each product ID must be a string');
      }
      return true;
    }),

  body('total')
    .isNumeric()
    .withMessage('Total must be a number')
    .notEmpty()
    .withMessage('Total is required')
];
