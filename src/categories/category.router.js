const categoryServices = require('./category.services')

const router = require('express').Router()

router.get('/category', categoryServices.getAllCategories)

router.post('/category', categoryServices.postNewCategory)

router.get('/category/:id', categoryServices.getCategoryById)

router.delete('/category/:id', categoryServices.deleteCategory)


module.exports = router
