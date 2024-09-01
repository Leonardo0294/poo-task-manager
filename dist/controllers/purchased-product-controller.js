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
exports.getPurchasedProducts = exports.createPurchasedProduct = void 0;
const express_validator_1 = require("express-validator");
const purchase_product_model_1 = __importDefault(require("../models/purchase-product-model"));
exports.createPurchasedProduct = [
    (0, express_validator_1.body)('product').isMongoId().withMessage('Invalid product ID'),
    (0, express_validator_1.body)('purchase').isMongoId().withMessage('Invalid purchase ID'),
    (0, express_validator_1.body)('quantity').isNumeric().withMessage('Quantity must be a number').notEmpty().withMessage('Quantity is required'),
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const purchasedProduct = new purchase_product_model_1.default(req.body);
            yield purchasedProduct.save();
            return res.status(201).json(purchasedProduct);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    })
];
const getPurchasedProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const purchasedProducts = yield purchase_product_model_1.default.find();
        return res.status(200).json(purchasedProducts);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.getPurchasedProducts = getPurchasedProducts;
//# sourceMappingURL=purchased-product-controller.js.map