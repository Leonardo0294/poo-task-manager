import mongoose, { Document, Schema } from 'mongoose';

// Definir la interfaz para el documento User
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

// Definir el esquema
const userSchema: Schema = new Schema({
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

// Se crea el modelo
const User = mongoose.model<IUser>('User', userSchema);

export default User;
