const { DataTypes } = require("sequelize");

const db = require("../utils/dataBase");

const Categories = db.define("categories", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Categories