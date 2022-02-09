/* eslint-disable @typescript-eslint/no-unused-vars */
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  setDoc,
  doc,
  getDoc,
  query,
  QueryConstraint,
} from 'firebase/firestore'

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

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export const tryAddDoc = async (collectionName: string, data: object) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data)
    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', `${collectionName} `, e)
  }
}

export const trySetDoc = async (
  collectionName: string,
  docName: string,
  data: object
) => {
  try {
    await setDoc(doc(db, collectionName, docName), data)
    console.log('Document written with ID: ', docName)
  } catch (e) {
    console.error(
      'Error setting document: ',
      `${collectionName}/${docName} `,
      e
    )
  }
}

export const tryGetDoc = async <T>(
  collectionName: string,
  docName: string
): Promise<T | null> => {
  try {
    const snap = await getDoc(doc(db, collectionName, docName))
    if (!snap.exists()) throw `No such document!`
    console.log('Document data: ', snap.data())
    return snap.data() as T
  } catch (e) {
    console.error(
      'Error getting document: ',
      `${collectionName}/${docName} `,
      e
    )
    return null
  }
}

export const tryGetDocs = async <T>(
  collectionName: string,
  queryConstraint: QueryConstraint | null = null
): Promise<T[]> => {
  try {
    let snap: T[]
    if (queryConstraint) {
      const q = query(collection(db, collectionName), queryConstraint)
      snap = (await getDocs(q).then((s) => s.docs)).map((d) => d.data() as T)
    } else {
      snap = (
        await getDocs(collection(db, collectionName)).then((s) => s.docs)
      ).map((d) => d.data() as T)
    }
    console.log('Documents data: ', snap)
    return snap
  } catch (e) {
    console.error('Error getting documents: ', `${collectionName} `, e)
    return []
  }
}
