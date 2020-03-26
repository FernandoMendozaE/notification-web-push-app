const PUBLIC_VAPID_KEY =
  'BBfLBVwIYxlMD6LG_FgtHiEXVQA8OB4VENwCZyqBqMPQAdVmPNoqZISnAWuQvjIjIC6_7RRt3tm5Psax4S1CO2M'

const subscription = async () => {
  // Service Workde
  /**
   * Un service worker es una secuencia de comandos que tu navegador ejecuta en segundo plano, separado de una página web.
   */
  const register = await navigator.serviceWorker.register('/worker.js', {
    scope: '/'
  })
  console.log('new Service Worker')

  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/')

    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
  }

  // Escucha las notificaciones
  const subcription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY)
  })

  await fetch('/subscription', {
    method: 'POST',
    body: JSON.stringify(subcription), // envia el dato de la subscripción
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log('Subscribed!')
}

const form = document.querySelector('#myform')
const message = document.querySelector('#message')
console.log('message:', message)

form.addEventListener('submit', e => {
  e.preventDefault()
  // Petición
  fetch('/new-message', {
    method: 'POST',
    body: JSON.stringify({
      message: message.value
    }),
    headers: {
      'Content-type': 'application/json'
    }
  })
  form.reset()
})

subscription()
