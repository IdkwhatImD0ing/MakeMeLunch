// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZP-gvy7yEPKVImW7Ho047jeq6dvuX9Qc",
  authDomain: "makemelunch-d8d20.firebaseapp.com",
  databaseURL: "https://makemelunch-d8d20-default-rtdb.firebaseio.com",
  projectId: "makemelunch-d8d20",
  storageBucket: "your_storage_bucket",
  messagingSenderId: "makemelunch-d8d20.appspot.com",
  appId: "1:947794987440:web:738d022fae02723b836e75",
  measurementId: "G-0Q0DBY0N4E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);
