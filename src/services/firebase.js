import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { FacebookAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyDlVLocLPXGwBJiAQKsQxLzNahlwbKT-to',
    authDomain: 'souk-6125a.firebaseapp.com',
    projectId: 'souk-6125a',
    storageBucket: 'souk-6125a.appspot.com',
    messagingSenderId: '577846705363',
    appId: '1:577846705363:web:27edabedfbd06ef8c7a826',
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()

export const signInWithFacebook = () =>
    auth.signInWithPopup(new FacebookAuthProvider())
