import { IPurchase } from '../models/purchase.model';
declare class PurchaseService {
    static createPurchase(data: IPurchase): Promise<IPurchase>;
    static getPurchaseById(purchaseId: string): Promise<IPurchase | null>;
    static getAllPurchases(): Promise<IPurchase[]>;
    static updatePurchase(purchaseId: string, data: Partial<IPurchase>): Promise<IPurchase | null>;
    static deletePurchase(purchaseId: string): Promise<IPurchase | null>;
}
export default PurchaseService;
