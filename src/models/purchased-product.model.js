import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import { Product } from './product.model.js';
import { Purchase } from './purchase.model.js';

export const PurchasedProduct = sequelize.define('PurchasedProduct', {
  purchased_product_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  purchase_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Purchase,
      key: 'purchase_id',
    },
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: 'product_id',
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price_at_purchase: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  timestamps: true,
});
