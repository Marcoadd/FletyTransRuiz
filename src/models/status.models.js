const { DataTypes } = require("sequelize");

const db = require("../utils/dataBase");

const Status = db.define("status", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Status