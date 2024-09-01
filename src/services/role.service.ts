import Role, { IRole } from '../models/role.model';

// Clase para manejar los roles
class RoleService {
  // Crear un nuevo rol
  static async createRole(data: Partial<IRole>): Promise<IRole> {
    try {
      const role = new Role(data);
      return await role.save();
    } catch (error) {
      throw new Error('Error creating role: ' + (error as Error).message);
    }
  }

  // Obtener un rol por ID
  static async getRoleById(roleId: string): Promise<IRole | null> {
    try {
      return await Role.findById(roleId).exec();
    } catch (error) {
      throw new Error('Error fetching role: ' + (error as Error).message);
    }
  }

  // Obtener todos los roles
  static async getAllRoles(): Promise<IRole[]> {
    try {
      return await Role.find().exec();
    } catch (error) {
      throw new Error('Error fetching roles: ' + (error as Error).message);
    }
  }

  // Actualizar un rol
  static async updateRole(roleId: string, data: Partial<IRole>): Promise<IRole | null> {
    try {
      return await Role.findByIdAndUpdate(roleId, data, { new: true }).exec();
    } catch (error) {
      throw new Error('Error updating role: ' + (error as Error).message);
    }
  }

  // Eliminar un rol
  static async deleteRole(roleId: string): Promise<IRole | null> {
    try {
      return await Role.findByIdAndDelete(roleId).exec();
    } catch (error) {
      throw new Error('Error deleting role: ' + (error as Error).message);
    }
  }
}

export default RoleService;
