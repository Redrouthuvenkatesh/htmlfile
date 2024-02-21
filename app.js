const express = require('express')
const app = express()
const path = require('path') // Import the path module

app.get('/gadgets', (req, res) => {
  //res.sendFile('gadgets.html', {root: path.join(__dirname)})
  res.sendFile('./gadgets.html', {root: __dirname})
})

const server = app.listen(3000, () => {
  console.log('The server is running on port 3000')
})

module.exports = app
