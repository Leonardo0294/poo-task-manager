import mongoose, { Document, Model } from 'mongoose';
interface IPurchase extends Document {
    user: mongoose.Types.ObjectId;
    products: mongoose.Types.ObjectId[];
    total: number;
}
declare const Purchase: Model<IPurchase>;
export default Purchase;
