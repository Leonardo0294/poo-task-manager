import mongoose from 'mongoose';
import User from './user.model';
import Product from './product.model';
import Purchase from './purchase.model';
import PurchasedProduct from './purchased-product.model';
import Role from './role.model';

// Definir las interfaces para los documentos
interface IUser extends mongoose.Document {
  role: mongoose.Types.ObjectId;
}

interface IPurchase extends mongoose.Document {
  user: mongoose.Types.ObjectId;
  products: mongoose.Types.ObjectId[];
}

interface IProduct extends mongoose.Document {}

interface IPurchasedProduct extends mongoose.Document {
  product: mongoose.Types.ObjectId;
  purchase: mongoose.Types.ObjectId;
}

interface IRole extends mongoose.Document {}

// Ejemplo de cómo usar las relaciones
export const populateUserData = async (userId: mongoose.Types.ObjectId): Promise<IUser | null> => {
  const user = await User.findById(userId).populate('role').exec();
  return user;
};

export const populatePurchaseData = async (purchaseId: mongoose.Types.ObjectId): Promise<IPurchase | null> => {
  const purchase = await Purchase.findById(purchaseId).populate('user').populate('products').exec();
  return purchase;
};

export const populateProductData = async (productId: mongoose.Types.ObjectId): Promise<IProduct | null> => {
  const product = await Product.findById(productId).exec();
  return product;
};

export const populatePurchasedProductData = async (purchasedProductId: mongoose.Types.ObjectId): Promise<IPurchasedProduct | null> => {
  const purchasedProduct = await PurchasedProduct.findById(purchasedProductId).populate('product').populate('purchase').exec();
  return purchasedProduct;
};

export const populateRoleData = async (roleId: mongoose.Types.ObjectId): Promise<IRole | null> => {
  const role = await Role.findById(roleId).exec();
  return role;
};
