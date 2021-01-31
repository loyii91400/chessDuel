const express = require('express')
const router = express.Router()

// Root
router.get('/', (req, res) => {
  res.render('game/gameIndex')
})

module.exports = router
