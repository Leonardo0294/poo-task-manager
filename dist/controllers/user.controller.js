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
exports.authenticateUser = exports.createUser = void 0;
const express_validator_1 = require("express-validator");
const user_model_1 = __importDefault(require("../models/user.model"));
exports.createUser = [
    (0, express_validator_1.body)('name').isString().notEmpty().withMessage('Name is required'),
    (0, express_validator_1.body)('email').isEmail().notEmpty().withMessage('Valid email is required'),
    (0, express_validator_1.body)('password').isString().notEmpty().withMessage('Password is required'),
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const { name, email, password } = req.body;
            const user = new user_model_1.default({ name, email, password });
            yield user.save();
            return res.status(201).json(user);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    })
];
exports.authenticateUser = [
    (0, express_validator_1.body)('email').isEmail().notEmpty().withMessage('Valid email is required'),
    (0, express_validator_1.body)('password').isString().notEmpty().withMessage('Password is required'),
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const { email, password } = req.body;
            const user = yield user_model_1.default.findOne({ email, password });
            if (user) {
                return res.status(200).json(user);
            }
            else {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    })
];
//# sourceMappingURL=user.controller.js.map