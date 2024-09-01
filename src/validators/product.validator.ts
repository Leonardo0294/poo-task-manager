import { body, ValidationChain } from 'express-validator';

// Validaciones para la creación de producto
export const createProductValidator: ValidationChain[] = [
  body('name')
    .isString()
    .withMessage('Product name must be a string')
    .notEmpty()
    .withMessage('Product name is required')
    .isLength({ min: 3 })
    .withMessage('Product name must be at least 3 characters long'),

  body('price')
    .isNumeric()
    .withMessage('Price must be a number')
    .notEmpty()
    .withMessage('Price is required')
    .toFloat()
    .custom(value => value > 0)
    .withMessage('Price must be greater than 0'),

  body('description')
    .isString()
    .withMessage('Description must be a string')
    .notEmpty()
    .withMessage('Description is required')
    .isLength({ min: 10 })
    .withMessage('Description must be at least 10 characters long'),

  body('stock')
    .isNumeric()
    .withMessage('Stock must be a number')
    .notEmpty()
    .withMessage('Stock is required')
    .toInt()
    .custom(value => value >= 0)
    .withMessage('Stock must be 0 or greater')
];
