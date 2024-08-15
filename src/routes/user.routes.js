import express from 'express';
import { check } from 'express-validator';
import { UserController } from '../controllers/user.controller.js';

const router = express.Router();

// Rutas para usuarios
router.post('/register', [
  check('username').notEmpty().withMessage('Username is required'),
  check('email').isEmail().withMessage('Valid email is required'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], UserController.register);

router.post('/login', [
  check('email').isEmail().withMessage('Valid email is required'),
  check('password').notEmpty().withMessage('Password is required'),
], UserController.login);

export default router;
