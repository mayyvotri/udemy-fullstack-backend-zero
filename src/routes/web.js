const express = require('express'); 
const {getHomepage,getABC} = require('../controller/homeController')
const router = express.Router(); 
router.get('/', getHomepage)
router.get('/PTTP', getABC)
module.exports = router