import mongoose, { Document, Model, Schema } from 'mongoose';

// Definir la interfaz para el documento del producto comprado
interface IPurchasedProduct extends Document {
  product: mongoose.Types.ObjectId;
  purchase: mongoose.Types.ObjectId;
  quantity: number;
}

// Definir el esquema del producto comprado
const purchasedProductSchema: Schema<IPurchasedProduct> = new Schema({
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
  static async createPurchasedProduct(data: IPurchasedProduct): Promise<IPurchasedProduct> {
    const purchasedProduct = new this(data);
    return await purchasedProduct.save();
  }

  static async getPurchasedProducts(): Promise<IPurchasedProduct[]> {
    return await this.find().populate('product').populate('purchase');
  }
}

// Métodos estáticos a la clase
purchasedProductSchema.loadClass(PurchasedProductClass);

// Crear el modelo a partir del esquema
const PurchasedProduct: Model<IPurchasedProduct> = mongoose.model<IPurchasedProduct>('PurchasedProduct', purchasedProductSchema);

export default PurchasedProduct;
