import express, { Request, Response, NextFunction } from 'express';
import { createUser, authenticateUser } from '../controllers/user.controller';

// Crear un enrutador
const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await createUser(req, res, next);
  } catch (error) {
    next(error);
  }
});

// Ruta para autenticar un usuario
router.post('/login', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await authenticateUser(req, res, next);
  } catch (error) {
    next(error);
  }
});

export default router;
