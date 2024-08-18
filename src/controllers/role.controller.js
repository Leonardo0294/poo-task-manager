import Role from '../models/role.model.js';
import { body, validationResult } from 'express-validator';

// Crear un nuevo rol
export const createRole = [
  body('name').isString().notEmpty(),
  body('permissions').isArray(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const role = await Role.createRole(req.body);
      res.status(201).json(role);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
];

// Obtener todos los roles
export const getRoles = async (req, res) => {
  try {
    const roles = await Role.getRoles();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
