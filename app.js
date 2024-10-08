import express from 'express';
import connectDB from './src/config/database.js'; 
import userRoutes from './src/routes/user.routes.js';
import productRoutes from './src/routes/product.routes.js';
import purchaseRoutes from './src/routes/purchase.routes.js';
import purchasedProductRoutes from './src/routes/purchased-product.routes.js';
import roleRoutes from './src/routes/role.routes.js';

const app = express();

// Conectar a la base de datos
connectDB();

// Configuración y middleware
app.use(express.json());

// Importar y usar rutas
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/purchases', purchaseRoutes);
app.use('/api/purchased-products', purchasedProductRoutes);
app.use('/api/roles', roleRoutes);

// Configuración del puerto y inicio del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
