import User from '../models/user.models.js';
import { body, validationResult } from 'express-validator';

// Crear un nuevo usuario
export const createUser = [
  body('name').isString().notEmpty(),       // 'name' es requerido
  body('email').isEmail().notEmpty(),       // 'email' debe ser una dirección de correo válida
  body('password').isString().notEmpty(),   // 'password' es requerido
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, email, password } = req.body;
      const user = new User({ name, email, password });
      await user.save();  // Guarda el nuevo usuario en la base de datos
      res.status(201).json(user);  // Responde con el usuario creado
    } catch (error) {
      res.status(500).json({ message: error.message });  // Maneja errores del servidor
    }
  }
];

// Autenticar un usuario
export const authenticateUser = [
  body('email').isEmail().notEmpty(),       // 'email' debe ser una dirección de correo válida
  body('password').isString().notEmpty(),   // 'password' es requerido
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email, password });  // Busca el usuario por email y contraseña
      if (user) {
        res.status(200).json(user);  // Responde con el usuario encontrado
      } else {
        res.status(401).json({ message: 'Invalid credentials' });  // Credenciales inválidas
      }
    } catch (error) {
      res.status(500).json({ message: error.message });  // Maneja errores del servidor
    }
  }
];
