const Products = require("./product.models")
const Category = require("./category.models")
const Status = require("./status.models")

const initModels = () => {
  // Productos <=> Categorias
    Category.hasMany(Products)
    Products.belongsTo(Category)

    //Productos <=> Status
    Status.hasMany(Products)
    Products.belongsTo(Status)
}

module.exports = initModels