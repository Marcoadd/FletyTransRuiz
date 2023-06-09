const productControllers = require('./product.controller')

const getAllProducts = (req, res) => {
    productControllers.findAllProducts()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const getProductById = (req, res) => {

    const id = Number(req.body.id)

    productControllers.findProductById(id)
        .then(data => {
            if(data){
                res.status(200).json(data)
            } else {
                res.status(404).json({message: 'Product not found'})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const postNewProduct = (req, res) => {
    const productObj = req.body 
    productControllers.createNewProduct(productObj)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const deleteProduct = (req, res) => {
    const id = req.body.id 

    productControllers.deleteProduct(id)
        .then(data => {
            if(data){
                res.status(204).json({message: 'Product Delete Correctly'})
            } else {
                res.status(404).json({message: 'Product not found'})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const patchProduct = (req, res) => {
    const id = req.body.id 
    const productObj = req.body 
    productControllers.updateProduct(id, productObj)
        .then(data => {
            if(data){
                res.status(200).json({message: `Product with id: ${id} updated succesfully`})
            } else {
                res.status(404).json({message: 'Product not found'})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const StatusProduct = (req, res) => {
    const id = req.body.id 
    const productObj = req.body 
    productControllers.ChangeStatusProduct(id, productObj)
        .then(data => {
            if(data){
                res.status(200).json({message: `Product status with id: ${id} change succesfully`})
            } else {
                res.status(404).json({message: 'Product not found'})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const putProduct = (req, res) => {
    const id = req.body.id 
    const productObj = req.body 

    if(!productObj.name || !productObj.comment || !productObj.description || !productObj.status){
        return res.status(400).json({
            message: 'Missing Data',
            example_fields: {
                name: 'String',
                comment: 'string',
                description: 'https:/google.com/image.png',
                status: true
            }
        })
    }

    productControllers.updateProduct(id, productObj)
        .then(data => {
            if(data){
                res.status(200).json({message: `Product with id: ${id} updated succesfully`})
            } else {
                res.status(404).json({message: 'Product not found'})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

module.exports = {
    getAllProducts,
    getProductById,
    postNewProduct,
    deleteProduct,
    patchProduct,
    StatusProduct,
    putProduct
}