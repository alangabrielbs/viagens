/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-messaging.js')
importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-analytics.js')

firebase.initializeApp({
  apiKey: 'AIzaSyC9udVXrbaymtQGbYuph0-DmU1rVp2LJLQ',
  authDomain: 'message-hub-852bb.firebaseapp.com',
  projectId: 'message-hub-852bb',
  storageBucket: 'message-hub-852bb.appspot.com',
  messagingSenderId: '416255499196',
  appId: '1:416255499196:web:fecdcd2922c3ddfa9829b9',
  measurementId: 'G-HYLDQLX22X'
})

const messaging = firebase.messaging()

// Both of them ain't working

//background notifications will be received here
messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  )
  // Customize notification here
  const notificationTitle = 'Background Message Title'
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  }

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  )
})

messaging.onBackgroundMessage(function (payload) {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  )
  const notificationTitle = 'Background Message Title'
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  }

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  )
})
