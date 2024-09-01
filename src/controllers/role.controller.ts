import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import Role from '../models/role.model'; // Asegúrate de que la extensión del archivo sea .ts si es necesario

// Crear un nuevo rol
export const createRole = [
  body('name').isString().notEmpty().withMessage('Role name is required'),
  body('permissions').isArray().withMessage('Permissions should be an array'),
  async (req: Request, res: Response): Promise<Response> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const role = await Role.createRole(req.body);
      return res.status(201).json(role);
    } catch (error) {
      return res.status(500).json({ message: (error as Error).message });
    }
  }
];

// Obtener todos los roles
export const getRoles = async (req: Request, res: Response): Promise<Response> => {
  try {
    const roles = await Role.getRoles();
    return res.status(200).json(roles);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};
