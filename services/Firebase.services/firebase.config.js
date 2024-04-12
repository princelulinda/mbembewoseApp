// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQV4jJGSiWYWosHpiZON3BHeZ293DMfyg",
  authDomain: "mbembewose.firebaseapp.com",
  projectId: "mbembewose",
  storageBucket: "mbembewose.appspot.com",
  messagingSenderId: "655061488413",
  appId: "1:655061488413:web:f30f7e5ff227ac612047f4",
  measurementId: "G-7Y4FDG2XW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth,db}