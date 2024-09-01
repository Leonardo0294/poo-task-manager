import { body, ValidationChain } from 'express-validator';

// Validaciones para la creación de rol
export const createRoleValidator: ValidationChain[] = [
  body('name')
    .isString()
    .withMessage('Role name must be a string')
    .notEmpty()
    .withMessage('Role name is required'),

  body('permissions')
    .isArray()
    .withMessage('Permissions should be an array')
];
