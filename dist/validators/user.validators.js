"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUserValidator = exports.createUserValidator = void 0;
const express_validator_1 = require("express-validator");
exports.createUserValidator = [
    (0, express_validator_1.body)('username')
        .isString()
        .withMessage('Username must be a string')
        .notEmpty()
        .withMessage('Username is required'),
    (0, express_validator_1.body)('password')
        .isString()
        .withMessage('Password must be a string')
        .notEmpty()
        .withMessage('Password is required'),
    (0, express_validator_1.body)('role')
        .isMongoId()
        .withMessage('Role must be a valid MongoDB ObjectId')
];
exports.authenticateUserValidator = [
    (0, express_validator_1.body)('username')
        .isString()
        .withMessage('Username must be a string')
        .notEmpty()
        .withMessage('Username is required'),
    (0, express_validator_1.body)('password')
        .isString()
        .withMessage('Password must be a string')
        .notEmpty()
        .withMessage('Password is required')
];
//# sourceMappingURL=user.validators.js.map