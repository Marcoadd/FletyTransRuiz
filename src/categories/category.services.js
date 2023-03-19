const categoryController = require("./category.controller")
const responses = require("../utils/handleRespon")

const getAllCategories = (req, res) => {
  categoryController.getAllCategories()
  .then(data => {
    responses.success({
            status: 200,
            data: data,
            message: 'Getting all Categories',
            res
        })
})
    .catch(err => {
        responses.error({
            status: 400,
            data: err,
            message: 'Something bad getting all categories',
            res
        })
})
}

const getCategoryById = (req ,res) => {
  const id = req.params.id 
  categoryController.findCategoryById(id)
      .then(data => {
          if(data){
              responses.success({
                  status: 200,
                  data,
                  message: `Getting category with id: ${id}`,
                  res
              })
          } else {
              responses.error({
                  status: 404,
                  message: `Category with ID: ${id}, not found`,
                  res
              })
          }
      })
      .catch(err => {
          responses.error({
              status: 400,
              data: err,
              message: 'Something bad getting the category',
              res
          })
      })
}

const postNewCategory = (req, res) => {
  const categoryObj = req.body
  categoryController.createNewCategory(categoryObj)
      .then(data => {
          responses.success({
              status: 201,
              data,
              message: `category created succesfully with id: ${data.id}`,
              res
          })
      })
      .catch(err => {
          responses.error({
              status: 400,
              data: err,
              message: 'Error ocurred trying to create a new category',
              res,
              fields: {
                  name : 'String',
              }
          })
      })
}

const deleteCategory = (req, res) => {
  const id = req.params.id 

  categoryController.deleteCategory(id)
      .then(data => {
          if(data){
              responses.success({
                  status: 200,
                  data, 
                  message: `categor with id: ${id} deleted successfully`,
                  res
              })
          } else {
              responses.error({
                  status: 404,
                  data: err,
                  message: `The category with ID ${id} not found`,
                  res
              })
          }
      })
      .catch(err => {
          responses.error({
              status: 400,
              data: err,
              message: `Error ocurred trying to delete category with id ${id}`,
              res
          })
      })
}

module.exports = {
  getAllCategories,
  getCategoryById,
  postNewCategory,
  deleteCategory
}