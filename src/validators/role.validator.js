import { body } from 'express-validator';

// Validaciones para la creación de rol
export const createRoleValidator = [
  body('name').isString().notEmpty().withMessage('Role name is required'),
  body('permissions').isArray().withMessage('Permissions should be an array')
];
