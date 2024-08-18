import mongoose from 'mongoose';

// Definir el esquema de compra
const purchaseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Asegúrate de que 'user' esté definido
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }], // Asegúrate de que 'products' sea una lista de ObjectIds
  total: { type: Number, required: true } // Asegúrate de que 'total' sea un número
});

// Crear una clase para el modelo
class PurchaseClass {
  static async createPurchase(data) {
    const purchase = new this(data);
    return await purchase.save();
  }

  static async getPurchases() {
    return await this.find().populate('products').populate('user');
  }
}

// Agregar métodos estáticos a la clase
purchaseSchema.loadClass(PurchaseClass);

// Crear el modelo a partir del esquema
const Purchase = mongoose.model('Purchase', purchaseSchema);

export default Purchase;
