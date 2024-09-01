import express, { Request, Response, NextFunction } from 'express';
import { createRole, getRoles } from '../controllers/role.controller';

// Crear un enrutador
const router = express.Router();

// Ruta para crear un nuevo rol
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await createRole(req, res, next);
  } catch (error) {
    next(error);
  }
});

// Ruta para obtener todos los roles
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await getRoles(req, res, next);
  } catch (error) {
    next(error);
  }
});

export default router;
