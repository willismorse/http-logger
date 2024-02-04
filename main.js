const express = require('express')
const morgan = require("morgan");


const app = express()
const port = process.env.PORT || 4000;

// set up morgan middleware
app.use(morgan("dev"));

app.get('/**', (req, res) => {
  res.send('')
})

app.post('/**', (req, res) => {
    res.send('{}')
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})