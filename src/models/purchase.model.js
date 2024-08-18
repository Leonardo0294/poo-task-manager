import mongoose from 'mongoose';

// Definir el esquema de compra
const purchaseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }], 
  total: { type: Number, required: true } 
});

// clase para el modelo
class PurchaseClass {
  static async createPurchase(data) {
    const purchase = new this(data);
    return await purchase.save();
  }

  static async getPurchases() {
    return await this.find().populate('products').populate('user');
  }
}

//métodos estáticos a la clase
purchaseSchema.loadClass(PurchaseClass);

// Se crea el modelo a partir del esquema
const Purchase = mongoose.model('Purchase', purchaseSchema);

export default Purchase;
