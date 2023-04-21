import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPGf7qcpBLaNtHNh3HJwTH_Cqh5Nn8MKM",
  authDomain: "courses-5e89d.firebaseapp.com",
  projectId: "courses-5e89d",
  storageBucket: "courses-5e89d.appspot.com",
  messagingSenderId: "1041596483050",
  appId: "1:1041596483050:web:f2619fe65746824cc69e93",
  measurementId: "G-5Z88B6DK4M"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)
export {db,storage}