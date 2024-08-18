import User from '../models/user.models.js';
import { body, validationResult } from 'express-validator';

// Crear un nuevo usuario
export const createUser = [
  body('name').isString().notEmpty(),      
  body('email').isEmail().notEmpty(),       
  body('password').isString().notEmpty(),   
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, email, password } = req.body;
      const user = new User({ name, email, password });
      await user.save(); 
      res.status(201).json(user);  
    } catch (error) {
      res.status(500).json({ message: error.message });  
    }
  }
];

// Autenticar un usuario
export const authenticateUser = [
  body('email').isEmail().notEmpty(),      
  body('password').isString().notEmpty(),  
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email, password });  
      if (user) {
        res.status(200).json(user);  
      } else {
        res.status(401).json({ message: 'Invalid credentials' });  
      }
    } catch (error) {
      res.status(500).json({ message: error.message });  
    }
  }
];
