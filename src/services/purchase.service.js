import Purchase from '../models/purchase.model.js';

class PurchaseService {
  static async createPurchase(data) {
    try {
      const purchase = new Purchase(data);
      return await purchase.save();
    } catch (error) {
      throw new Error('Error creating purchase: ' + error.message);
    }
  }

  static async getPurchaseById(purchaseId) {
    try {
      return await Purchase.findById(purchaseId).exec();
    } catch (error) {
      throw new Error('Error fetching purchase: ' + error.message);
    }
  }

  static async getAllPurchases() {
    try {
      return await Purchase.find().exec();
    } catch (error) {
      throw new Error('Error fetching purchases: ' + error.message);
    }
  }

  static async updatePurchase(purchaseId, data) {
    try {
      return await Purchase.findByIdAndUpdate(purchaseId, data, { new: true }).exec();
    } catch (error) {
      throw new Error('Error updating purchase: ' + error.message);
    }
  }

  static async deletePurchase(purchaseId) {
    try {
      return await Purchase.findByIdAndDelete(purchaseId).exec();
    } catch (error) {
      throw new Error('Error deleting purchase: ' + error.message);
    }
  }
}

export default PurchaseService;
