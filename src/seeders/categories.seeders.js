const Categories = require('../models/category.models')

try{
  Categories.bulkCreate([
    {
      name: 'Electrodomesticos'
    },
    {
      name: 'Videojuegos'
    },
    {
      name: 'Ropa'
    },
    {
      name: 'Herramientas'
    },
  ])
  console.log('categorias creadas exitosamente')
} catch(err) {
  console.log({message: 'Error en categorias seeders', err})
}

