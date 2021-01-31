const express = require('express')
const router = express.Router()

// List of routers
router.use('/game', require('./gameRoutes'))

// Root
router.get('/', function (req, res) {
  res.render('main/index', { text: 'Chess Duels' })
})
router.get('/home', function (req, res) {
  res.render('main/index', { text: 'Chess Duels' })
})

module.exports = router
