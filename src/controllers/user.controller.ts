import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import User from '../models/user.model'; // Asegúrate de que la extensión del archivo sea .ts si es necesario

// Crear un nuevo usuario
export const createUser = [
  body('name').isString().notEmpty().withMessage('Name is required'),
  body('email').isEmail().notEmpty().withMessage('Valid email is required'),
  body('password').isString().notEmpty().withMessage('Password is required'),
  async (req: Request, res: Response): Promise<Response> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, email, password } = req.body;
      const user = new User({ name, email, password });
      await user.save();
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ message: (error as Error).message });
    }
  }
];

// Autenticar un usuario
export const authenticateUser = [
  body('email').isEmail().notEmpty().withMessage('Valid email is required'),
  body('password').isString().notEmpty().withMessage('Password is required'),
  async (req: Request, res: Response): Promise<Response> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email, password });
      if (user) {
        return res.status(200).json(user);
      } else {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      return res.status(500).json({ message: (error as Error).message });
    }
  }
];
