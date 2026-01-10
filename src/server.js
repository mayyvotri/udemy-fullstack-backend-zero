require('dotenv').config()
const express = require('express')
const app = express()
const Connection =  require('./config/DBConnect')
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')

// config view + static
configViewEngine(app)

const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME || 'localhost'

// home test
app.get('/', (req, res) => {
  res.send('Thiên Phú học NodeJS 🚀')
  res.send('check results' ,results)

})

//DB query 
Connection.query(
  'SELECT * FROM users',
  (err, results, fields) => {
    if (err) {
      console.error('DB ERROR ❌:', err.message)
      return
    }

    console.log('DB RESULT ✅:', results)
  }
)

// router
app.use('/test', webRouter)

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})
