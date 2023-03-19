const Status = require("../models/status.models")

const getAllStatus = async () => {
  const data = Status.findAll()
  return data
}

const getStatusById = async (id) => {
  const data = await Status.findOne({
      where: {
          id: id
      }
  })
  return data
}

const createNewStatus = async (statusObj) => {
  const idBase = 1
  const newStatus = {
      id: idBase++,
      status: statusObj.status,
      value: statusObj.value
  }
  const data = await Status.create(newStatus)
  return data
}

const deleteStatus = async (id) => {
  const data = await Status.destroy({
      where: {
          id: id
      }
  })
  return data
}

module.exports = {
getAllStatus,
getStatusById,
createNewStatus,
deleteStatus
}