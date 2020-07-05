// Import express framework
const express = require('express')

// Import middleware
const bodyParser = require('body-parser')
const compression = require('compression')
const helmet = require('helmet')
const cors = require('cors')

// Import routes
const itemsRouter = require('./routes/items-route')

// Setup default port
const PORT = process.env.PORT || 4000

// Create express app
const app = express()

// Implement middleware
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())

if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
    app.get('*', (req, res) => {
      res.sendFile('build/index.html', { root: __dirname })
  })
}

// Implement route for '/items' endpoint
// ! Note:
// '/items' will prefix all post routes
app.use('/items', itemsRouter)

// Implement route for errors
app.use((err, req, res, next) => {
   console.error(err.stack)
   res.status(500).send('Something went wrong!')
})

// Start Meli's express app 
app.listen(PORT, function() {
  console.log(`Server is running on: ${PORT}`)
})
