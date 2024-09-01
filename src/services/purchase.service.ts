import Purchase, { IPurchase } from '../models/purchase.model';

// Definición de la clase PurchaseService
class PurchaseService {
  // Crear una nueva compra
  static async createPurchase(data: IPurchase): Promise<IPurchase> {
    try {
      const purchase = new Purchase(data);
      return await purchase.save();
    } catch (error) {
      throw new Error('Error creating purchase: ' + error.message);
    }
  }

  // Obtener una compra por ID
  static async getPurchaseById(purchaseId: string): Promise<IPurchase | null> {
    try {
      return await Purchase.findById(purchaseId).exec();
    } catch (error) {
      throw new Error('Error fetching purchase: ' + error.message);
    }
  }

  // Obtener todas las compras
  static async getAllPurchases(): Promise<IPurchase[]> {
    try {
      return await Purchase.find().exec();
    } catch (error) {
      throw new Error('Error fetching purchases: ' + error.message);
    }
  }

  // Actualizar una compra
  static async updatePurchase(purchaseId: string, data: Partial<IPurchase>): Promise<IPurchase | null> {
    try {
      return await Purchase.findByIdAndUpdate(purchaseId, data, { new: true }).exec();
    } catch (error) {
      throw new Error('Error updating purchase: ' + error.message);
    }
  }

  // Eliminar una compra
  static async deletePurchase(purchaseId: string): Promise<IPurchase | null> {
    try {
      return await Purchase.findByIdAndDelete(purchaseId).exec();
    } catch (error) {
      throw new Error('Error deleting purchase: ' + error.message);
    }
  }
}

export default PurchaseService;
