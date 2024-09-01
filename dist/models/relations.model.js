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
exports.populateRoleData = exports.populatePurchasedProductData = exports.populateProductData = exports.populatePurchaseData = exports.populateUserData = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const product_model_1 = __importDefault(require("./product.model"));
const purchase_model_1 = __importDefault(require("./purchase.model"));
const purchased_product_model_1 = __importDefault(require("./purchased-product.model"));
const role_model_1 = __importDefault(require("./role.model"));
const populateUserData = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findById(userId).populate('role').exec();
    return user;
});
exports.populateUserData = populateUserData;
const populatePurchaseData = (purchaseId) => __awaiter(void 0, void 0, void 0, function* () {
    const purchase = yield purchase_model_1.default.findById(purchaseId).populate('user').populate('products').exec();
    return purchase;
});
exports.populatePurchaseData = populatePurchaseData;
const populateProductData = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.default.findById(productId).exec();
    return product;
});
exports.populateProductData = populateProductData;
const populatePurchasedProductData = (purchasedProductId) => __awaiter(void 0, void 0, void 0, function* () {
    const purchasedProduct = yield purchased_product_model_1.default.findById(purchasedProductId).populate('product').populate('purchase').exec();
    return purchasedProduct;
});
exports.populatePurchasedProductData = populatePurchasedProductData;
const populateRoleData = (roleId) => __awaiter(void 0, void 0, void 0, function* () {
    const role = yield role_model_1.default.findById(roleId).exec();
    return role;
});
exports.populateRoleData = populateRoleData;
//# sourceMappingURL=relations.model.js.map