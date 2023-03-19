const Products = require('../models/product.models')
const Categories = require('../models/category.models')

const findAllProducts = async () => {

    const data = await Products.findAll({
        attributes: ['id', 'name', 'comment', 'description', 'status'], 
        
        include: {
            model: Categories,
            attributes: ['id', 'name']
        }

    })
    return data
}

const findProductById = async (id) => {

    const data = await Products.findOne({
        where: {
            id : id
        }
    })
    return data
}

const createNewProduct = async (prodObj) => {

    const newProduct = {
        name: prodObj.name,
        description: prodObj.description,
        comment : prodObj.comment,
        categoryId: prodObj.categoryId,
        status: prodObj.status
    }

    const data = await Products.create(newProduct)
    return data
}

const updateProduct = async (id, productObj) => {
    const data = await Products.update(productObj, {
        where: {
            id : id
        }
    })
    return data[0] 
}

const ChangeStatusProduct = async (id, productObj) => {
    const data = await Products.update(productObj, {
        where: {
            id : id
        }
    })
    return data[0] 
}

const deleteProduct = async (id) => {
    const data = await Products.destroy({
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
    ChangeStatusProduct,
    deleteProduct
}