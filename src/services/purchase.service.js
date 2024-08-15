import { Purchase } from '../models/purchase.model.js';

export class PurchaseService {
  static async createPurchase(data) {
    return Purchase.create(data);
  }

  static async getAllPurchases() {
    return Purchase.findAll();
  }

  static async getPurchaseById(id) {
    return Purchase.findByPk(id);
  }
}
