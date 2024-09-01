"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPurchasedProductValidator = void 0;
const express_validator_1 = require("express-validator");
exports.createPurchasedProductValidator = [
    (0, express_validator_1.body)('product')
        .isMongoId()
        .withMessage('Product must be a valid MongoDB ObjectId'),
    (0, express_validator_1.body)('purchase')
        .isMongoId()
        .withMessage('Purchase must be a valid MongoDB ObjectId'),
    (0, express_validator_1.body)('quantity')
        .isNumeric()
        .withMessage('Quantity must be a number')
        .notEmpty()
        .withMessage('Quantity is required')
];
//# sourceMappingURL=purchased-product.validator.js.map