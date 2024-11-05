const express = require('express')
const app = express()
const port = 3000;

app.get('/Home', (req, res) => {
  res.send('Home Page')
})
app.get('/AboutMe', (req, res) => {
    res.send('About Me')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})