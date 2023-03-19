const { DataTypes } = require("sequelize");

const db = require("../utils/dataBase");
const categories = require("./category.models")
const status = require("./status.models")

const Products = db.define("products", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comments: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descriptioin: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
      references: {
        model: categories,
        key: 'id'
      }
  },
  statusId: {
    type: DataTypes.INTEGER,
    allowNull: false,
      references: {
        model: status,
        key: 'id'
     }
  },
});

module.exports = Products
