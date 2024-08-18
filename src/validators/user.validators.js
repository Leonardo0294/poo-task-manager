import { body } from 'express-validator';

// Validaciones para la creación de usuario
export const createUserValidator = [
  body('username').isString().notEmpty().withMessage('Username is required'),
  body('password').isString().notEmpty().withMessage('Password is required'),
  body('role').isMongoId().withMessage('Role must be a valid MongoDB ObjectId')
];

// Validaciones para autenticación de usuario
export const authenticateUserValidator = [
  body('username').isString().notEmpty().withMessage('Username is required'),
  body('password').isString().notEmpty().withMessage('Password is required')
];
