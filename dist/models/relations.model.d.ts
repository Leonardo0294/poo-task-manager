import mongoose from 'mongoose';
interface IUser extends mongoose.Document {
    role: mongoose.Types.ObjectId;
}
interface IPurchase extends mongoose.Document {
    user: mongoose.Types.ObjectId;
    products: mongoose.Types.ObjectId[];
}
interface IProduct extends mongoose.Document {
}
interface IPurchasedProduct extends mongoose.Document {
    product: mongoose.Types.ObjectId;
    purchase: mongoose.Types.ObjectId;
}
interface IRole extends mongoose.Document {
}
export declare const populateUserData: (userId: mongoose.Types.ObjectId) => Promise<IUser | null>;
export declare const populatePurchaseData: (purchaseId: mongoose.Types.ObjectId) => Promise<IPurchase | null>;
export declare const populateProductData: (productId: mongoose.Types.ObjectId) => Promise<IProduct | null>;
export declare const populatePurchasedProductData: (purchasedProductId: mongoose.Types.ObjectId) => Promise<IPurchasedProduct | null>;
export declare const populateRoleData: (roleId: mongoose.Types.ObjectId) => Promise<IRole | null>;
export {};
