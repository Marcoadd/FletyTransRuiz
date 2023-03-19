const statusServices = require("./status.services")

const router = require('express').Router()

router.get('/status', statusServices.getAllStatus)

router.post('/status', statusServices.postNewStatus)

router.get('/status/:id', statusServices.getStatusById)

router.delete('/status/:id', statusServices.deleteStatus)


module.exports = router
