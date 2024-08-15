import { User } from '../models/user.models.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export class UserService {
  static async register(data) {
    const { username, email, password } = data;
    const hashedPassword = await bcrypt.hash(password, 10);
    return User.create({ username, email, password: hashedPassword, role_id: 1 }); // Asignar un rol predeterminado
  }

  static async login(data) {
    const { email, password } = data;
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid email or password');
    }
    return jwt.sign({ user_id: user.user_id }, process.env.SECRET_KEY, { expiresIn: '1h' });
  }
}
