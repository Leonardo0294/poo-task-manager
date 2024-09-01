"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoleValidator = void 0;
const express_validator_1 = require("express-validator");
exports.createRoleValidator = [
    (0, express_validator_1.body)('name')
        .isString()
        .withMessage('Role name must be a string')
        .notEmpty()
        .withMessage('Role name is required'),
    (0, express_validator_1.body)('permissions')
        .isArray()
        .withMessage('Permissions should be an array')
];
//# sourceMappingURL=role.validator.js.map