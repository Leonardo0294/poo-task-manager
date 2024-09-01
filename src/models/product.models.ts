import mongoose, { Document, Model, Schema } from 'mongoose';

// Definir la interfaz para el documento del producto
interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
  stock: number;
}

// Definir la interfaz para el modelo del producto, incluyendo métodos estáticos
interface IProductModel extends Model<IProduct> {
  createProduct(data: IProduct): Promise<IProduct>;
  getProducts(): Promise<IProduct[]>;
}

// Definir el esquema del producto
const productSchema: Schema<IProduct> = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  stock: { type: Number, required: true }
});

// Crear una clase para el modelo con métodos estáticos
class ProductClass {
  static async createProduct(data: IProduct): Promise<IProduct> {
    const product = new this(data);
    return await product.save();
  }

  static async getProducts(): Promise<IProduct[]> {
    return await this.find();
  }
}

// Métodos estáticos a la clase
productSchema.loadClass(ProductClass);

// Crear el modelo a partir del esquema
const Product = mongoose.model<IProduct, IProductModel>('Product', productSchema);

export default Product;
