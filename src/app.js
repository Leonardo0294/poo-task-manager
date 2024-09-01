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
// Inicializar la aplicación Express
const app = (0, express_1.default)();
// Conectar a la base de datos
(0, database_1.default)();
// Configuración y middleware
app.use(express_1.default.json()); // Middleware para parsear cuerpos de JSON
// Importar y usar rutas
app.use('/api/users', user_routes_1.default);
app.use('/api/products', product_routes_1.default);
app.use('/api/purchases', purchase_routes_1.default);
app.use('/api/purchased-products', purchased_product_routes_1.default);
app.use('/api/roles', role_routes_1.default);
// Ruta raíz opcional para verificar que el servidor esté funcionando
app.get('/', (req, res) => {
    res.send('API is running...');
});
// Configuración del puerto y inicio del servidor
const PORT = Number(process.env.PORT) || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
