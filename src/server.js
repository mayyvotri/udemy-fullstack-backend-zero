require('dotenv').config()
const express = require('express')
const app = express()

const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')

// config view + static
configViewEngine(app)

const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME || 'localhost'

// home test
app.get('/', (req, res) => {
  res.send('Thiên Phú học NodeJS 🚀')
})

// router
app.use('/test', webRouter)

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})
