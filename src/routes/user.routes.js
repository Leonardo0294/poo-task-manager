import express from 'express';
import { createUser, authenticateUser } from '../controllers/user.controller.js';

const router = express.Router();

// Rutas para usuarios
router.post('/register', createUser);
router.post('/login', authenticateUser);

export default router;
