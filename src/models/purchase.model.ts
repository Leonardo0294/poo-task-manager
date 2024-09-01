import mongoose, { Document, Model, Schema } from 'mongoose';

// Definir la interfaz para el documento de compra
interface IPurchase extends Document {
  user: mongoose.Types.ObjectId;
  products: mongoose.Types.ObjectId[];
  total: number;
}

// Definir el esquema de compra
const purchaseSchema: Schema<IPurchase> = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  total: { type: Number, required: true }
});

// Crear una clase para el modelo
class PurchaseClass {
  static async createPurchase(data: IPurchase): Promise<IPurchase> {
    const purchase = new this(data);
    return await purchase.save();
  }

  static async getPurchases(): Promise<IPurchase[]> {
    return await this.find().populate('products').populate('user');
  }
}

// Métodos estáticos a la clase
purchaseSchema.loadClass(PurchaseClass);

// Crear el modelo a partir del esquema
const Purchase: Model<IPurchase> = mongoose.model<IPurchase>('Purchase', purchaseSchema);

export default Purchase;
