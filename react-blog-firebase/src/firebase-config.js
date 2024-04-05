// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqIbafAaO89R7ERH5xeAdaQPWkaFjgRRY",
  authDomain: "react-blog-firebase-457d5.firebaseapp.com",
  projectId: "react-blog-firebase-457d5",
  storageBucket: "react-blog-firebase-457d5.appspot.com",
  messagingSenderId: "304301652799",
  appId: "1:304301652799:web:80119f6c0cda4e4a4f318a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();