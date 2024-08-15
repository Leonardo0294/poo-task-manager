import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './src/config/database.js';
import userRoutes from './src/routes/user.routes.js';
import productRoutes from './src/routes/product.routes.js';
import purchaseRoutes from './src/routes/purchase.routes.js';
import saleRoutes from './src/routes/sale.routes.js';
import cartRoutes from './src/routes/cart.routes.js';

// Cargar variables de entorno
dotenv.config();

const app = express();

app.use(express.json());

// Rutas de la API
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/purchases', purchaseRoutes);
app.use('/api/sales', saleRoutes);
app.use('/api/carts', cartRoutes);

// Sincronizar modelos con la base de datos
const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true }); // Sincroniza los modelos con la base de datos
    console.log('Database synchronized');
  } catch (err) {
    console.error('Failed to sync database:', err);
  }
};

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await syncDatabase();
});
