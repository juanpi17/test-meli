// Import express
const express = require('express')

// Import items controller
const itemsController = require('../controllers/items-controller.js')

// Create express router
const router = express.Router()

// Create rout between itemsController and '/all' endpoint
// Note:
// Main route (in server.js) for items
// is set to '/items'
// This means that all items routes
// will be prefixed with /items'
// i.e.: '/:id' will become '/items/:id'
router.get('/', itemsController.itemsGetAll)

// get only 1 user
router.get('/:id', itemsController.itemsGetOne)

// Export router
module.exports = router
