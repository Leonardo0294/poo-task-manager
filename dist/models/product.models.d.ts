import { Document, Model } from 'mongoose';
interface IProduct extends Document {
    name: string;
    price: number;
    description: string;
    stock: number;
}
interface IProductModel extends Model<IProduct> {
    createProduct(data: IProduct): Promise<IProduct>;
    getProducts(): Promise<IProduct[]>;
}
declare const Product: IProductModel;
export default Product;
