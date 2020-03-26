const webpush = require('web-push')

// console.log(process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_VAPID_KEY) // process.env:este objete obtiene las variables de S.O

webpush.setVapidDetails(
  'mailto:test@yourdomain.org',
  process.env.PUBLIC_VAPID_KEY,
  process.env.PRIVATE_VAPID_KEY
)

module.exports = webpush
