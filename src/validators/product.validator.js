import { body } from 'express-validator';

// Validador para crear un producto
export const createProductValidator = [
  body('name').isString().notEmpty().withMessage('El nombre del producto es obligatorio.'),
  body('description').isString().notEmpty().withMessage('La descripción del producto es obligatoria.'),
  body('price').isFloat({ gt: 0 }).withMessage('El precio debe ser un número mayor que 0.'),
  body('category').isString().notEmpty().withMessage('La categoría del producto es obligatoria.'),
  body('stock').isInt({ gt: 0 }).withMessage('El stock debe ser un número entero mayor que 0.')
];

// Agrega aquí otros validadores si es necesario
