import Product, { IProduct } from '../models/product.model';

// Definición de la clase ProductService
class ProductService {
  // Crear un nuevo producto
  static async createProduct(data: IProduct): Promise<IProduct> {
    try {
      const product = new Product(data);
      return await product.save();
    } catch (error) {
      throw new Error('Error creating product: ' + error.message);
    }
  }

  // Obtener un producto por ID
  static async getProductById(productId: string): Promise<IProduct | null> {
    try {
      return await Product.findById(productId).exec();
    } catch (error) {
      throw new Error('Error fetching product: ' + error.message);
    }
  }

  // Obtener todos los productos
  static async getAllProducts(): Promise<IProduct[]> {
    try {
      return await Product.find().exec();
    } catch (error) {
      throw new Error('Error fetching products: ' + error.message);
    }
  }

  // Actualizar un producto
  static async updateProduct(productId: string, data: Partial<IProduct>): Promise<IProduct | null> {
    try {
      return await Product.findByIdAndUpdate(productId, data, { new: true }).exec();
    } catch (error) {
      throw new Error('Error updating product: ' + error.message);
    }
  }

  // Eliminar un producto
  static async deleteProduct(productId: string): Promise<IProduct | null> {
    try {
      return await Product.findByIdAndDelete(productId).exec();
    } catch (error) {
      throw new Error('Error deleting product: ' + error.message);
    }
  }
}

export default ProductService;
