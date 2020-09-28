const express = require('express')

async function start() {
  const app = express()
  const port = 8888

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
