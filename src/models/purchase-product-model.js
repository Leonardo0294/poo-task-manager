import mongoose from 'mongoose';

// Definir el esquema del producto comprado
const purchasedProductSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  purchase: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Purchase',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

// Crear una clase para el modelo
class PurchasedProductClass {
  static async createPurchasedProduct(data) {
    const purchasedProduct = new this(data);
    return await purchasedProduct.save();
  }

  static async getPurchasedProducts() {
    return await this.find().populate('product').populate('purchase');
  }
}

// Agregar métodos estáticos a la clase
purchasedProductSchema.loadClass(PurchasedProductClass);

// Crear el modelo a partir del esquema
const PurchasedProduct = mongoose.model('PurchasedProduct', purchasedProductSchema);

export default PurchasedProduct;
