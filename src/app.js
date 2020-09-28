require('dotenv').config()
const express = require('express')

async function start() {
  const app = express()
  // eslint-disable-next-line no-undef
  const port = process.env.PORT
  console.log(`my port is ${port}`)

  app.use(express.json())
  app.use(express.urlencoded({ extended: false}))

  app.use('/api', require('./routes/api'))
  app.use((req, res) => {
    res.status(404).send('Not Found!')
  })

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
}

start()
