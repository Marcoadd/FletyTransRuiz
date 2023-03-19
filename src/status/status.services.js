const statusController = require("./status.controller")
const responses = require("../utils/handleRespon")

const getAllStatus = (req, res) => {
  statusController.getAllStatus()
    .then(data => {
      responses.success({
        res,
        status: 200,
        data: data,
        message: 'Gettting all Status'
      })
    })
    .catch(err => {
      responses.error({
              status: 400,
              data: err,
              message: 'Something bad getting all categories',
              res
          })
  })
}

const getStatusById = (req ,res) => {
  const id = req.params.id 
  statusController.getStatusById(id)
      .then(data => {
          if(data){
              responses.success({
                  status: 200,
                  data,
                  message: `Getting status with id: ${id}`,
                  res
              })
          } else {
              responses.error({
                  status: 404,
                  message: `status with ID: ${id}, not found`,
                  res
              })
          }
      })
      .catch(err => {
          responses.error({
              status: 400,
              data: err,
              message: 'Something bad getting the status',
              res
          })
      })
}

const postNewStatus = (req, res) => {
  const statusObject = req.body
  statusController.createNewStatus(statusObject)
      .then(data => {
          responses.success({
              status: 201,
              data,
              message: `status created succesfully with id: ${data.id}`,
              res
          })
      })
      .catch(err => {
          responses.error({
              status: 400,
              data: err,
              message: 'Error ocurred trying to create a new status',
              res,
              fields: {
                  status : 'String',
                  value: 'Bool'
              }
          })
      })
}

const deleteStatus = (req, res) => {
  const id = req.params.id 

  statusController.deleteStatus(id)
      .then(data => {
          if(data){
              responses.success({
                  status: 200,
                  data, 
                  message: `status with id: ${id} delete successfully`,
                  res
              })
          } else {
              responses.error({
                  status: 404,
                  data: err,
                  message: `The status with ID ${id} not found`,
                  res
              })
          }
      })
      .catch(err => {
          responses.error({
              status: 400,
              data: err,
              message: `Error ocurred trying to delete statis with id ${id}`,
              res
          })
      })
}

module.exports = {
  getAllStatus,
  getStatusById,
  postNewStatus,
  deleteStatus
}