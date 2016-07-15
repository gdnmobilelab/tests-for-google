self.addEventListener('activate', function(event) {
    return self.clients.claim();
});

self.addEventListener('install', function(event) {
    return self.skipWaiting();
});

self.addEventListener('message', function(e) {
    self.registration.showNotification("Test notification", {
        body: "Tap on this notification, it will work correctly. Tap on the action, the notification shade does not close.",
        actions: [
            {
                title: "Example action",
                action: "open-url"
            }
        ]
    })
});

self.addEventListener('notificationclick', function(e) {
    e.notification.close();
    clients.openWindow("http://www.google.com");
});