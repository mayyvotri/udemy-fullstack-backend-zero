const express = require('express'); 

const router = express.Router(); 
router.get('/', (req, res) => {
  res.send('Hello World! with PTTP and NHTD')
})
router.get('/PTTP', (req, res) => {
  // res.send('Hello World!')
  res.render('sample')
})
module.exports = router