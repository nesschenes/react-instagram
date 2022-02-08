/* eslint-disable @typescript-eslint/no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCUdul7xBXB2NSOErjPh9YEroKobNpe9Bg',
  authDomain: 'react-instagram-41e34.firebaseapp.com',
  databaseURL:
    'https://react-instagram-41e34-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'react-instagram-41e34',
  storageBucket: 'react-instagram-41e34.appspot.com',
  messagingSenderId: '256847975659',
  appId: '1:256847975659:web:de48eb0300a9d7b4b5daae',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { app, db }
