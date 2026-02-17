var express = require('express')
var router = express.Router()
const {index} = require('./controller')

/* GET Home Page */
router.get('/', index)

module.exports = router
