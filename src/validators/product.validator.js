import { body } from 'express-validator';

// Validaciones para la creación de producto
export const createProductValidator = [
  body('name').isString().notEmpty().withMessage('Product name is required'),
  body('price').isNumeric().notEmpty().withMessage('Price is required'),
  body('description').isString().notEmpty().withMessage('Description is required'),
  body('stock').isNumeric().notEmpty().withMessage('Stock is required')
];
