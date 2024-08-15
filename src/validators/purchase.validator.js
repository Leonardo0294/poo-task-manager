import { check } from 'express-validator';

export const purchaseValidationRules = [
  check('buyer_id').notEmpty().withMessage('Buyer ID is required'),
  check('total_amount').isFloat({ gt: 0 }).withMessage('Total amount must be a positive number'),
  check('purchase_date').isDate().withMessage('Purchase date must be a valid date'),
];
