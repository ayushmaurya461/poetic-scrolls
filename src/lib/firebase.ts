
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCn6rTap5WF2o72p797iUPuGzZqdDuM7lI",
  authDomain: "itsayush461.firebaseapp.com",
  databaseURL: "https://itsayush461-default-rtdb.firebaseio.com",
  projectId: "itsayush461",
  storageBucket: "itsayush461.firebasestorage.app",
  messagingSenderId: "97261361681",
  appId: "1:97261361681:web:50e9b2b475da78ac6eafb0",
  measurementId: "G-G78LJY23HD"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
