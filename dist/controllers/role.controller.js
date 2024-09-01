"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoles = exports.createRole = void 0;
const express_validator_1 = require("express-validator");
const role_model_1 = __importDefault(require("../models/role.model"));
exports.createRole = [
    (0, express_validator_1.body)('name').isString().notEmpty().withMessage('Role name is required'),
    (0, express_validator_1.body)('permissions').isArray().withMessage('Permissions should be an array'),
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const role = yield role_model_1.default.createRole(req.body);
            return res.status(201).json(role);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    })
];
const getRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield role_model_1.default.getRoles();
        return res.status(200).json(roles);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.getRoles = getRoles;
//# sourceMappingURL=role.controller.js.map