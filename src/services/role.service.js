import Role from '../models/role.model.js';

class RoleService {
  static async createRole(data) {
    try {
      const role = new Role(data);
      return await role.save();
    } catch (error) {
      throw new Error('Error creating role: ' + error.message);
    }
  }

  static async getRoleById(roleId) {
    try {
      return await Role.findById(roleId).exec();
    } catch (error) {
      throw new Error('Error fetching role: ' + error.message);
    }
  }

  static async getAllRoles() {
    try {
      return await Role.find().exec();
    } catch (error) {
      throw new Error('Error fetching roles: ' + error.message);
    }
  }

  static async updateRole(roleId, data) {
    try {
      return await Role.findByIdAndUpdate(roleId, data, { new: true }).exec();
    } catch (error) {
      throw new Error('Error updating role: ' + error.message);
    }
  }

  static async deleteRole(roleId) {
    try {
      return await Role.findByIdAndDelete(roleId).exec();
    } catch (error) {
      throw new Error('Error deleting role: ' + error.message);
    }
  }
}

export default RoleService;
