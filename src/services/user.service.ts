import User, { IUser } from '../models/user.model';

// Clase para manejar los usuarios
class UserService {
  // Crear un nuevo usuario
  static async createUser(data: Partial<IUser>): Promise<IUser> {
    try {
      const user = new User(data);
      return await user.save();
    } catch (error) {
      throw new Error('Error creating user: ' + (error as Error).message);
    }
  }

  // Obtener un usuario por ID
  static async getUserById(userId: string): Promise<IUser | null> {
    try {
      return await User.findById(userId).exec();
    } catch (error) {
      throw new Error('Error fetching user: ' + (error as Error).message);
    }
  }

  // Obtener todos los usuarios
  static async getAllUsers(): Promise<IUser[]> {
    try {
      return await User.find().exec();
    } catch (error) {
      throw new Error('Error fetching users: ' + (error as Error).message);
    }
  }

  // Actualizar un usuario
  static async updateUser(userId: string, data: Partial<IUser>): Promise<IUser | null> {
    try {
      return await User.findByIdAndUpdate(userId, data, { new: true }).exec();
    } catch (error) {
      throw new Error('Error updating user: ' + (error as Error).message);
    }
  }

  // Eliminar un usuario
  static async deleteUser(userId: string): Promise<IUser | null> {
    try {
      return await User.findByIdAndDelete(userId).exec();
    } catch (error) {
      throw new Error('Error deleting user: ' + (error as Error).message);
    }
  }
}

export default UserService;
