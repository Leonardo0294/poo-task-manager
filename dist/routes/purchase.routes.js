"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const purchase_controller_1 = require("../controllers/purchase.controller");
const router = express_1.default.Router();
router.post('/', purchase_controller_1.createPurchase);
router.get('/', purchase_controller_1.getPurchases);
exports.default = router;
//# sourceMappingURL=purchase.routes.js.map