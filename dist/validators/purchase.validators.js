"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPurchaseValidator = void 0;
const express_validator_1 = require("express-validator");
exports.createPurchaseValidator = [
    (0, express_validator_1.body)('user')
        .isMongoId()
        .withMessage('User must be a valid MongoDB ObjectId'),
    (0, express_validator_1.body)('products')
        .isArray()
        .withMessage('Products should be an array')
        .optional()
        .custom((value) => {
        if (value && !value.every((id) => typeof id === 'string')) {
            throw new Error('Each product ID must be a string');
        }
        return true;
    }),
    (0, express_validator_1.body)('total')
        .isNumeric()
        .withMessage('Total must be a number')
        .notEmpty()
        .withMessage('Total is required')
];
//# sourceMappingURL=purchase.validators.js.map