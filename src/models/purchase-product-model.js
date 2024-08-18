import mongoose from 'mongoose';

// Definir el esquema del producto comprado
const purchasedProductSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  purchaseDate: { type: Date, default: Date.now }
});

// Crear una clase para el modelo
class PurchasedProductClass {
  // Método estático para crear un nuevo producto comprado
  static async createPurchasedProduct(data) {
    const purchasedProduct = new this(data);
    return await purchasedProduct.save();
  }

  // Método estático para obtener todos los productos comprados
  static async getPurchasedProducts() {
    return await this.find().populate('productId');
  }
}

// Agregar métodos estáticos a la clase
purchasedProductSchema.loadClass(PurchasedProductClass);

// Crear el modelo a partir del esquema
const PurchasedProduct = mongoose.model('PurchasedProduct', purchasedProductSchema);

export default PurchasedProduct;
