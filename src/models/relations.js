import { User } from './user.model.js';
import { Product } from './product.model.js';
import { Purchase } from './purchase.model.js';
import { PurchasedProduct } from './purchased-product.model.js';

// Relaciones entre modelos
User.hasMany(Product, { foreignKey: 'seller_id' });
Product.belongsTo(User, { foreignKey: 'seller_id' });

User.hasMany(Purchase, { foreignKey: 'buyer_id' });
Purchase.belongsTo(User, { foreignKey: 'buyer_id' });

Product.hasMany(PurchasedProduct, { foreignKey: 'product_id' });
PurchasedProduct.belongsTo(Product, { foreignKey: 'product_id' });

Purchase.hasMany(PurchasedProduct, { foreignKey: 'purchase_id' });
PurchasedProduct.belongsTo(Purchase, { foreignKey: 'purchase_id' });
