// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHz1dkGJtILO5uyHZFHD6Wx9PMLjHSYRg",
  authDomain: "med-connect-e2d05.firebaseapp.com",
  projectId: "med-connect-e2d05",
  storageBucket: "med-connect-e2d05.appspot.com",
  messagingSenderId: "239816640949",
  appId: "1:239816640949:web:6c82c8f541d5711587f1fc",
  measurementId: "G-K8DXF7LT7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export const auth = getAuth();