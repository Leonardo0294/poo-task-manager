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
const express_1 = __importDefault(require("express"));
const purchased_product_service_1 = __importDefault(require("./purchased-product.service"));
const router = express_1.default.Router();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const purchasedProduct = yield purchased_product_service_1.default.createPurchasedProduct(req.body);
        res.status(201).json(purchasedProduct);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const purchasedProducts = yield purchased_product_service_1.default.getAllPurchasedProducts();
        res.status(200).json(purchasedProducts);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const purchasedProduct = yield purchased_product_service_1.default.getPurchasedProductById(req.params.id);
        if (!purchasedProduct) {
            return res.status(404).json({ message: 'Purchased product not found' });
        }
        res.status(200).json(purchasedProduct);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedPurchasedProduct = yield purchased_product_service_1.default.updatePurchasedProduct(req.params.id, req.body);
        if (!updatedPurchasedProduct) {
            return res.status(404).json({ message: 'Purchased product not found' });
        }
        res.status(200).json(updatedPurchasedProduct);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedPurchasedProduct = yield purchased_product_service_1.default.deletePurchasedProduct(req.params.id);
        if (!deletedPurchasedProduct) {
            return res.status(404).json({ message: 'Purchased product not found' });
        }
        res.status(200).json({ message: 'Purchased product deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
exports.default = router;
//# sourceMappingURL=purchased-product.service.js.map