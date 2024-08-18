import Product from '../models/product.model.js';

class ProductService {
  static async createProduct(data) {
    try {
      const product = new Product(data);
      return await product.save();
    } catch (error) {
      throw new Error('Error creating product: ' + error.message);
    }
  }

  static async getProductById(productId) {
    try {
      return await Product.findById(productId).exec();
    } catch (error) {
      throw new Error('Error fetching product: ' + error.message);
    }
  }

  static async getAllProducts() {
    try {
      return await Product.find().exec();
    } catch (error) {
      throw new Error('Error fetching products: ' + error.message);
    }
  }

  static async updateProduct(productId, data) {
    try {
      return await Product.findByIdAndUpdate(productId, data, { new: true }).exec();
    } catch (error) {
      throw new Error('Error updating product: ' + error.message);
    }
  }

  static async deleteProduct(productId) {
    try {
      return await Product.findByIdAndDelete(productId).exec();
    } catch (error) {
      throw new Error('Error deleting product: ' + error.message);
    }
  }
}

export default ProductService;
