const router = require('express').Router()

router.get('/greet', async (req, res) => {
  res.send('Hello!')
})

module.exports = router
