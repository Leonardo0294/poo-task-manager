import User from '../models/user.models.js';
import { body, validationResult } from 'express-validator';

// Crear un nuevo usuario
export const createUser = [
  body('username').isString().notEmpty(),
  body('password').isString().notEmpty(),
  body('role').isMongoId(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { username, password, role } = req.body;
      const user = await User.register(username, password, role);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
];

// Autenticar un usuario
export const authenticateUser = [
  body('username').isString().notEmpty(),
  body('password').isString().notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { username, password } = req.body;
      const user = await User.authenticate(username, password);
      if (user) {
        // Aquí puedes generar y devolver un token JWT si es necesario
        res.status(200).json(user);
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
];
