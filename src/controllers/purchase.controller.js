import { PurchaseService } from '../services/purchase.service.js';

export class PurchaseController {
  static async createPurchase(req, res) {
    try {
      const purchase = await PurchaseService.createPurchase(req.body);
      res.status(201).json(purchase);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAllPurchases(req, res) {
    try {
      const purchases = await PurchaseService.getAllPurchases();
      res.json(purchases);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getPurchaseById(req, res) {
    try {
      const purchase = await PurchaseService.getPurchaseById(req.params.id);
      res.json(purchase);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
