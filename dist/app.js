"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const purchase_routes_1 = __importDefault(require("./routes/purchase.routes"));
const purchased_product_routes_1 = __importDefault(require("./routes/purchased-product.routes"));
const role_routes_1 = __importDefault(require("./routes/role.routes"));
const app = (0, express_1.default)();
(0, database_1.default)();
app.use(express_1.default.json());
app.use('/api/users', user_routes_1.default);
app.use('/api/products', product_routes_1.default);
app.use('/api/purchases', purchase_routes_1.default);
app.use('/api/purchased-products', purchased_product_routes_1.default);
app.use('/api/roles', role_routes_1.default);
app.get('/', (req, res) => {
    res.send('API is running...');
});
const PORT = Number(process.env.PORT) || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map