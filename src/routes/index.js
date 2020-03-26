const { Router } = require('express')
const router = Router()

const wetpush = require('../webpush')
let pushSubscription

router.post('/subscription', async (req, res) => {
  pushSubscription = req.body
  res.status(200).json()
})

router.post('/new-message', async (req, res) => {
  const { message } = req.body
  const payload = JSON.stringify({
    title: 'Fazt Web Notification',
    message: message
  })

  try {
    await wetpush.sendNotification(pushSubscription, payload) //envia la noticicación
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
