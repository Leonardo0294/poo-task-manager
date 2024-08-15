import { Product } from '../models/product.model.js';

export class ProductService {
  static async createProduct(data) {
    return Product.create(data);
  }

  static async getAllProducts() {
    return Product.findAll();
  }

  static async getProductById(id) {
    return Product.findByPk(id);
  }
}
