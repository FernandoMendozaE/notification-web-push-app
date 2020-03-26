console.log('Service Worker');

/**
 * Función encargada de escuhar la notificación
 */
self.addEventListener('push', e => {
  const data = e.data.json();
  console.log(data);
  self.registration.showNotification(data.title, {
    body: data.message,
    icon:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Archlinux-icon-crystal-64.svg/1200px-Archlinux-icon-crystal-64.svg.png',
  });
  console.log('Notification received');
}); // datos recibidos
