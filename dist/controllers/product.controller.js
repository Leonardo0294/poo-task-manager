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
exports.getProducts = exports.createProduct = void 0;
const express_validator_1 = require("express-validator");
const product_models_1 = __importDefault(require("../models/product.models"));
exports.createProduct = [
    (0, express_validator_1.body)('name').isString().withMessage('Name must be a string').notEmpty().withMessage('Name is required'),
    (0, express_validator_1.body)('price').isNumeric().withMessage('Price must be a number').notEmpty().withMessage('Price is required'),
    (0, express_validator_1.body)('description').isString().withMessage('Description must be a string').notEmpty().withMessage('Description is required'),
    (0, express_validator_1.body)('stock').isNumeric().withMessage('Stock must be a number').notEmpty().withMessage('Stock is required'),
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const product = yield product_models_1.default.createProduct(req.body);
            return res.status(201).json(product);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    })
];
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_models_1.default.getProducts();
        return res.status(200).json(products);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.getProducts = getProducts;
//# sourceMappingURL=product.controller.js.map