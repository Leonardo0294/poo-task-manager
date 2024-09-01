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
exports.getPurchases = exports.createPurchase = void 0;
const express_validator_1 = require("express-validator");
const purchase_model_1 = __importDefault(require("../models/purchase.model"));
exports.createPurchase = [
    (0, express_validator_1.body)('user').isMongoId().withMessage('Invalid user ID'),
    (0, express_validator_1.body)('products').isArray().withMessage('Products should be an array'),
    (0, express_validator_1.body)('total').isNumeric().withMessage('Invalid total value'),
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const purchase = yield purchase_model_1.default.createPurchase(req.body);
            return res.status(201).json(purchase);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    })
];
const getPurchases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const purchases = yield purchase_model_1.default.getPurchases();
        return res.status(200).json(purchases);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.getPurchases = getPurchases;
//# sourceMappingURL=purchase.controller.js.map