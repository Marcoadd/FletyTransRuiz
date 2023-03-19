const productsServices = require('./product.services')

const router = require('express').Router()

router.get('/products', productsServices.getAllProducts)

router.post('/products', productsServices.postNewProduct)

router.get('/products/:id', productsServices.getProductById)

router.patch('/products/:id', productsServices.patchProduct)

router.delete('/products/:id', productsServices.deleteProduct)


module.exports = router
