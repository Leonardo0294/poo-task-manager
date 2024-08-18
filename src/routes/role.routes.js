import express from 'express';
import { createRole, getRoles } from '../controllers/role.controller.js';

const router = express.Router();

// Rutas para roles
router.post('/', createRole);
router.get('/', getRoles);

export default router;
