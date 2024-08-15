import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import { User } from './user.models.js';

export const Purchase = sequelize.define('Purchase', {
  purchase_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  buyer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id',
    },
  },
  total_amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  purchase_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  timestamps: true,
});
