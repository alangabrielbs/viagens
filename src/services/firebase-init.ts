import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyC9udVXrbaymtQGbYuph0-DmU1rVp2LJLQ',
  authDomain: 'message-hub-852bb.firebaseapp.com',
  projectId: 'message-hub-852bb',
  storageBucket: 'message-hub-852bb.appspot.com',
  messagingSenderId: '416255499196',
  appId: '1:416255499196:web:fecdcd2922c3ddfa9829b9',
  measurementId: 'G-HYLDQLX22X'
}

export default class Firebase {
  private static instance: Firebase

  public static getInstance(): Firebase {
    if (!Firebase.instance) {
      Firebase.instance = new Firebase()
    }

    return Firebase.instance
  }

  init() {
    try {
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig)

      navigator.serviceWorker
        .register('/firebase-messaging-sw.js')
        .then((registration) => {
          firebase.messaging().useServiceWorker(registration)
        })

      console.log('Firebase loaded!')
    } catch (err) {
      console.error(err)
    }
  }

  async askForPermissioToReceiveNotifications() {
    try {
      const messaging = firebase.messaging()
      const permission = await Notification.requestPermission()

      if (permission !== 'granted') {
        throw new Error('Permissão negada')
      }

      const token = await messaging.getToken()
      console.log('token do usuário:', token)

      return token
    } catch (error) {
      console.error(error)
    }
  }
}
