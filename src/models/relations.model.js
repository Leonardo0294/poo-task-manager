import mongoose from 'mongoose';
import User from './user.model.js';
import Product from './product.model.js';
import Purchase from './purchase.model.js';
import PurchasedProduct from './purchased-product.model.js';
import Role from './role.model.js';

// Ejemplo de cómo usar las relaciones
export const populateUserData = async (userId) => {
  const user = await User.findById(userId).populate('role');
  return user;
};

export const populatePurchaseData = async (purchaseId) => {
  const purchase = await Purchase.findById(purchaseId).populate('user').populate('products');
  return purchase;
};

export const populateProductData = async (productId) => {
  const product = await Product.findById(productId);
  return product;
};

export const populatePurchasedProductData = async (purchasedProductId) => {
  const purchasedProduct = await PurchasedProduct.findById(purchasedProductId).populate('product').populate('purchase');
  return purchasedProduct;
};

export const populateRoleData = async (roleId) => {
  const role = await Role.findById(roleId);
  return role;
};
