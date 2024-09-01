import { body, ValidationChain } from 'express-validator';

// Validaciones para la creación de usuario
export const createUserValidator: ValidationChain[] = [
  body('username')
    .isString()
    .withMessage('Username must be a string')
    .notEmpty()
    .withMessage('Username is required'),

  body('password')
    .isString()
    .withMessage('Password must be a string')
    .notEmpty()
    .withMessage('Password is required'),

  body('role')
    .isMongoId()
    .withMessage('Role must be a valid MongoDB ObjectId')
];

// Validaciones para autenticación de usuario
export const authenticateUserValidator: ValidationChain[] = [
  body('username')
    .isString()
    .withMessage('Username must be a string')
    .notEmpty()
    .withMessage('Username is required'),

  body('password')
    .isString()
    .withMessage('Password must be a string')
    .notEmpty()
    .withMessage('Password is required')
];
