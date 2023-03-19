const Category = require("../models/category.models")

const getAllCategories = async () => {
  const data = await Category.findAll()
  return data
}

const findCategoryById = async (id) => {
  const data = await Category.findOne({
      where: {
          id: id
      }
  })
  return data
}

const createNewCategory = async (categoryObj) => {
  const idBase = 1
  const newCategory = {
      id: idBase++,
      name: categoryObj.name
  }
  const data = await Category.create(newCategory)
  return data
}

const deleteCategory = async (id) => {
  const data = await Category.destroy({
      where: {
          id: id
      }
  })
  return data
}

module.exports = {
getAllCategories,
findCategoryById,
createNewCategory,
deleteCategory
}