import mongoose from 'mongoose';

// Definir el esquema de compra
const purchaseSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true }
});

// Crear una clase para el modelo
class PurchaseClass {
  static async createPurchase(data) {
    const purchase = new this(data);
    return await purchase.save();
  }

  static async getPurchases() {
    return await this.find().populate('productId');
  }
}

// Agregar métodos estáticos a la clase
purchaseSchema.loadClass(PurchaseClass);

// Crear el modelo a partir del esquema
const Purchase = mongoose.model('Purchase', purchaseSchema);

export default Purchase;
