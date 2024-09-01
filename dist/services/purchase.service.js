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
const purchase_model_1 = __importDefault(require("../models/purchase.model"));
class PurchaseService {
    static createPurchase(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const purchase = new purchase_model_1.default(data);
                return yield purchase.save();
            }
            catch (error) {
                throw new Error('Error creating purchase: ' + error.message);
            }
        });
    }
    static getPurchaseById(purchaseId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield purchase_model_1.default.findById(purchaseId).exec();
            }
            catch (error) {
                throw new Error('Error fetching purchase: ' + error.message);
            }
        });
    }
    static getAllPurchases() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield purchase_model_1.default.find().exec();
            }
            catch (error) {
                throw new Error('Error fetching purchases: ' + error.message);
            }
        });
    }
    static updatePurchase(purchaseId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield purchase_model_1.default.findByIdAndUpdate(purchaseId, data, { new: true }).exec();
            }
            catch (error) {
                throw new Error('Error updating purchase: ' + error.message);
            }
        });
    }
    static deletePurchase(purchaseId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield purchase_model_1.default.findByIdAndDelete(purchaseId).exec();
            }
            catch (error) {
                throw new Error('Error deleting purchase: ' + error.message);
            }
        });
    }
}
exports.default = PurchaseService;
//# sourceMappingURL=purchase.service.js.map