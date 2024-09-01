import mongoose from 'mongoose';

// Definir el esquema del rol
const roleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
});

// Crear una clase para el modelo
class RoleClass {
  // Método estático para crear un nuevo rol
  static async createRole(data) {
    const role = new this(data);
    return await role.save();
  }

  // Método estático para obtener todos los roles
  static async getRoles() {
    return await this.find();
  }
}

// Agregar métodos estáticos a la clase
roleSchema.loadClass(RoleClass);

// Crear el modelo a partir del esquema
const Role = mongoose.model('Role', roleSchema);

export default Role;
