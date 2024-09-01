import { IProduct } from '../models/product.model';
declare class ProductService {
    static createProduct(data: IProduct): Promise<IProduct>;
    static getProductById(productId: string): Promise<IProduct | null>;
    static getAllProducts(): Promise<IProduct[]>;
    static updateProduct(productId: string, data: Partial<IProduct>): Promise<IProduct | null>;
    static deleteProduct(productId: string): Promise<IProduct | null>;
}
export default ProductService;
