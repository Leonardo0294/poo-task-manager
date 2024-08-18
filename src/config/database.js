import mongoose from 'mongoose';
import dotenv from 'dotenv';

//  dotenv para manejar variables de entorno
dotenv.config();

// URL de conexión desde las variables de entorno
const { MONGO_URI } = process.env;

if (!MONGO_URI) {
  throw new Error('MONGO_URI is not defined in environment variables');
}

// Conexion a la base de datos MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Salir del proceso con un código de error
  }
};

export default connectDB;
