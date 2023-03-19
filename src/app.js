const express = require('express')

const db = require('./utils/dataBase.js')
const responseHandlers = require('./utils/handleRespon')
const initModels = require("./models/init.models")

const productRouter = require("./products/product.router")


const app = express()
app.use(express.json())

db.authenticate()
    .then(() => console.log('Database authenticated'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('Database Synced'))
    .catch(err => console.log(err))

initModels()

// ruta para el crud de productos 
app.use('/api/v1', productRouter)

app.get('/', (req, res) => {
  responseHandlers.success({
      res,
      status: 200,
      message: 'Servidor inicializado correctamente',
     // data: data
  })
})

app.use('*', (req, res)=> {
  responseHandlers.error({
      res,
      status: 404,
      message: 'URL not found, please try with http://localhost:9000/',
  })
})

app.listen(9000, () => {
  console.log('Server Stared at port 9000');
})

module.exports = app
