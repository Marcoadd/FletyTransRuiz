const Product = require("../models/product.models")

const findAllProducts = async () => {
  const data = await Product.findAll()
  return data
}

const findProductById = async (id) => {
  const data = await Product.findOne({
      where: {
          id: id
      }
  })
  return data
}

const createNewProduct = async (productObj) => {
  const idBase = 1
  const newProduct = {
      id: idBase++,
      productName : productObj.productName,
      comments : productObj.comments,
      description: productObj.description,
  }
  const data = await Product.create(newProduct)
  return data
}

const updateProduct = async (id, productObj) => {
  const data = await Product.update(productObj,{
      where: {
          id: id
      }
  })
  return data[0]
}

const deleteProduct = async (id) => {
  const data = await Product.destroy({
      where: {
          id: id
      }
  })
  return data
}

module.exports = {
  findAllProducts,
  findProductById,
  createNewProduct,
  updateProduct,
  deleteProduct
}