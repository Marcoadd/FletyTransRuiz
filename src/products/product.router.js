const productServices = require('./product.services')

const router = require('express').Router()

router.get('/products', productServices.getAllProducts)

router.post('/products', productServices.postNewProduct)

router.get('/products/:id', productServices.getProductById)

router.patch('/products/:id', productServices.patchProduct)

router.delete('/products/:id', productServices.StatusProduct)

router.put('/products/:id', productServices.putProduct)

// router.delete('/products/:id', productServices.deleteProduct)

module.exports = router