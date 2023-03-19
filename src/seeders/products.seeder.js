const Products = require('../models/product.models')

try{
  Products.bulkCreate([
    {
      name: 'Refrigeraador',
      comment: 'bonito',
      description: 'blaco',
      categoryId: 5,
      status: true
    },
    {
      name: 'cama',
      comment: 'bonito',
      description: 'blaco',
      categoryId: 2,
      status: true
    },
    {
      name: 'pan',
      comment: 'bonito',
      description: 'blaco',
      categoryId: 3,
      status: true
    },
    {
      name: 'martillo',
      comment: 'bonito',
      description: 'blaco',
      categoryId: 4,
      status: true
    },
    {
      name: 'anillo',
      comment: 'bonito',
      description: 'blaco',
      categoryId: 2,
      status: true
    },
    
  ])
  console.log('Categorias creadas exitosamente')
}catch(err){
  console.log({message: 'Erron en Producto seeders', err})
}