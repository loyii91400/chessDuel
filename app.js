const express = require('express') // Import express
const path = require('path')

// variables
const app = express() // Create express application
const port = 3000 // Port number

// Use ejs as document template
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')));

// Master Router
app.use(require('./controllers/routes'))

// Listen at port
app.listen(port, () => {
  console.log('listening')
})
