import express, { Express, Request, Response } from 'express';
import connectDB from './config/database';  
import userRoutes from './routes/user.routes';
import productRoutes from './routes/product.routes';
import purchaseRoutes from './routes/purchase.routes';
import purchasedProductRoutes from './routes/purchased-product.routes';
import roleRoutes from './routes/role.routes';

// Inicializar la aplicación Express
const app: Express = express();

// Conectar a la base de datos
connectDB();

// Configuración y middleware
app.use(express.json());  // Middleware para parsear cuerpos de JSON

// Importar y usar rutas
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/purchases', purchaseRoutes);
app.use('/api/purchased-products', purchasedProductRoutes);
app.use('/api/roles', roleRoutes);

// Ruta raíz opcional para verificar que el servidor esté funcionando
app.get('/', (req: Request, res: Response) => {
  res.send('API is running...');
});

// Configuración del puerto y inicio del servidor
const PORT: number = Number(process.env.PORT) || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
