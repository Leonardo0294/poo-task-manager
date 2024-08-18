import mongoose from 'mongoose';

// Definir el esquema del producto
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  stock: { type: Number, required: true }
});

// Crear una clase para el modelo
class ProductClass {
  static async createProduct(data) {
    const product = new this(data);
    return await product.save();
  }

  static async getProducts() {
    return await this.find();
  }
}

// métodos estáticos a la clase
productSchema.loadClass(ProductClass);

//Se crea el modelo a partir del esquema
const Product = mongoose.model('Product', productSchema);

export default Product;
