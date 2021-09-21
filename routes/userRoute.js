const express = require('express')
const router = express.Router()

const userController = require('../controller/userController')

router.post('/store', userController.store)

module.exports = router