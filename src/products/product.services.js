const productsControllers = require('./product.controller')
const responses = require('../utils/handleRespon')

const getAllProducts = (req, res) => {
  productsControllers.findAllProducts()
        .then(data => {
            responses.success({
                    status: 200,
                    data: data,
                    message: 'Getting all Users',
                    res
                })
        })
        .catch(err => {
            responses.error({
                    status: 400,
                    data: err,
                    message: 'Something bad getting all users',
                    res
                })
        })
}

const getProductById = (req ,res) => {
    const id = req.params.id 
    productsControllers.findProductById(id)
        .then(data => {
            if(data){
                responses.success({
                    status: 200,
                    data,
                    message: `Getting Product with id: ${id}`,
                    res
                })
            } else {
                responses.error({
                    status: 404,
                    message: `Product with ID: ${id}, not found`,
                    res
                })
            }
        })
        .catch(err => {
            responses.error({
                status: 400,
                data: err,
                message: 'Something bad getting the Product',
                res
            })
        })
}

const postNewProduct = (req, res) => {
    const productObj = req.body
    productsControllers.createNewProduct(productObj)
        .then(data => {
            responses.success({
                status: 201,
                data,
                message: `Product created succesfully with id: ${data.id}`,
                res
            })
        })
        .catch(err => {
            responses.error({
                status: 400,
                data: err,
                message: 'Error ocurred trying to create a new product',
                res,
                fields: {
                    productName : 'String',
                    comments : 'String',
                    description: 'String'
                }
            })
        })
}

const patchProduct = (req, res) => {
    const id = req.params.id 
    const productObj = req.body 

    productsControllers.updateProduct(id, productObj)
        .then(data => {
            if(data){
                responses.success({
                    status: 200,
                    data, 
                    message: `product with id: ${id} modified successfully`,
                    res
                })
            } else {
                responses.error({
                    status: 404,
                    message: `The user with ID ${id} not found`,
                    res,
                    fields: {
                      productName : 'String',
                      comments : 'String',
                      description: 'String'
                  }
                })
            }
        })
        .catch(err => {
            responses.error({
                status: 400,
                data: err,
                message: `Error ocurred trying to update product with id ${id}`,
                res,
                fields: {
                  productName : 'String',
                  comments : 'String',
                  description: 'String'
              }
            })
        })
}

const deleteProduct = (req, res) => {
    const id = req.params.id 

    productsControllers.deleteProduct(id)
        .then(data => {
            if(data){
                responses.success({
                    status: 200,
                    data, 
                    message: `product with id: ${id} deleted successfully`,
                    res
                })
            } else {
                responses.error({
                    status: 404,
                    data: err,
                    message: `The product with ID ${id} not found`,
                    res
                })
            }
        })
        .catch(err => {
            responses.error({
                status: 400,
                data: err,
                message: `Error ocurred trying to delete product with id ${id}`,
                res
            })
        })
}

module.exports = {
    getAllProducts,
    getProductById,
    postNewProduct,
    patchProduct,
    deleteProduct
}