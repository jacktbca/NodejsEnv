const router = require('express').Router()

router.get('/greet', async (req, res) => {
  res.send('Hello!')
})

router.get('/', async (req, res) => {
  res.redirect('/api/greet')
})

module.exports = router
