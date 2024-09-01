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
const product_model_1 = __importDefault(require("../models/product.model"));
class ProductService {
    static createProduct(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = new product_model_1.default(data);
                return yield product.save();
            }
            catch (error) {
                throw new Error('Error creating product: ' + error.message);
            }
        });
    }
    static getProductById(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield product_model_1.default.findById(productId).exec();
            }
            catch (error) {
                throw new Error('Error fetching product: ' + error.message);
            }
        });
    }
    static getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield product_model_1.default.find().exec();
            }
            catch (error) {
                throw new Error('Error fetching products: ' + error.message);
            }
        });
    }
    static updateProduct(productId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield product_model_1.default.findByIdAndUpdate(productId, data, { new: true }).exec();
            }
            catch (error) {
                throw new Error('Error updating product: ' + error.message);
            }
        });
    }
    static deleteProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield product_model_1.default.findByIdAndDelete(productId).exec();
            }
            catch (error) {
                throw new Error('Error deleting product: ' + error.message);
            }
        });
    }
}
exports.default = ProductService;
//# sourceMappingURL=product.service.js.map