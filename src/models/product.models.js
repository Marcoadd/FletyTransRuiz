const { DataTypes} = require('sequelize')

const db = require('../utils/dataBase')
const Categories = require('./category.models')

const Products = db.define('products', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false, 
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Categories,
            key: 'id'
        }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
  },
})



module.exports = Products