import mongoose from 'mongoose';

// Definir el esquema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  
});

// Crear el modelo
const User = mongoose.model('User', userSchema);

export default User;
