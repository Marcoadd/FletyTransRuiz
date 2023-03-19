const Categories = require('./category.models')
const Products = require('./product.models')

const initModels = () => {

    Products.belongsTo(Categories)
    Categories.hasMany(Products)

}

module.exports = initModels
