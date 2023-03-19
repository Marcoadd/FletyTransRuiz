const Categories = require('../models/category.models')

try{
  Categories.bulkCreate([
    {
      title: 'Electrodomesticos'
    },
    {
      title: 'Videojuegos'
    },
    {
      title: 'Ropa'
    },
    {
      title: 'Herramientas'
    }
  ])
  console.log('categorias creadas exitosamente')
} catch(err) {
  console.log({message: 'Error en categorias seeders', err})
}

