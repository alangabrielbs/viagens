/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-messaging.js')
importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-analytics.js')

const firebaseConfig = {
  apiKey: 'AIzaSyC9udVXrbaymtQGbYuph0-DmU1rVp2LJLQ',
  authDomain: 'message-hub-852bb.firebaseapp.com',
  projectId: 'message-hub-852bb',
  storageBucket: 'message-hub-852bb.appspot.com',
  messagingSenderId: '416255499196',
  appId: '1:416255499196:web:fecdcd2922c3ddfa9829b9',
  measurementId: 'G-HYLDQLX22X'
}

try {
  firebase.initializeApp(firebaseConfig)
  const messaging = firebase.messaging()
} catch (error) {
  console.log(error)
}
