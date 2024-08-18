import PurchasedProduct from '../models/purchased-product.model.js';

class PurchasedProductService {
  static async createPurchasedProduct(data) {
    try {
      const purchasedProduct = new PurchasedProduct(data);
      return await purchasedProduct.save();
    } catch (error) {
      throw new Error('Error creating purchased product: ' + error.message);
    }
  }

  static async getPurchasedProductById(purchasedProductId) {
    try {
      return await PurchasedProduct.findById(purchasedProductId).exec();
    } catch (error) {
      throw new Error('Error fetching purchased product: ' + error.message);
    }
  }

  static async getAllPurchasedProducts() {
    try {
      return await PurchasedProduct.find().exec();
    } catch (error) {
      throw new Error('Error fetching purchased products: ' + error.message);
    }
  }

  static async updatePurchasedProduct(purchasedProductId, data) {
    try {
      return await PurchasedProduct.findByIdAndUpdate(purchasedProductId, data, { new: true }).exec();
    } catch (error) {
      throw new Error('Error updating purchased product: ' + error.message);
    }
  }

  static async deletePurchasedProduct(purchasedProductId) {
    try {
      return await PurchasedProduct.findByIdAndDelete(purchasedProductId).exec();
    } catch (error) {
      throw new Error('Error deleting purchased product: ' + error.message);
    }
  }
}

export default PurchasedProductService;
