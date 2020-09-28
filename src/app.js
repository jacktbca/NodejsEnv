require('dotenv').config()
const express = require('express')
const { program } = require('commander').program
const DEFAULT_PORT = process.env.PORT // eslint-disable-line no-undef

program.version('0.0.1')
  .option('-p, --port <port>', `Server's PORT, default is ${DEFAULT_PORT}`, DEFAULT_PORT)
  .parse(process.argv) // eslint-disable-line no-undef

async function start() {
  const app = express()
  const port = program.port

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
