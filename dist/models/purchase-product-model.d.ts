import mongoose, { Document, Model } from 'mongoose';
interface IPurchasedProduct extends Document {
    product: mongoose.Types.ObjectId;
    purchase: mongoose.Types.ObjectId;
    quantity: number;
}
declare const PurchasedProduct: Model<IPurchasedProduct>;
export default PurchasedProduct;
