// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQfQ2ABhYD5oLCHkz08IIjXK6J3Bbn5nk",
  authDomain: "garza-restoration.firebaseapp.com",
  projectId: "garza-restoration",
  storageBucket: "garza-restoration.appspot.com",
  messagingSenderId: "745656989003",
  appId: "1:745656989003:web:fab3736d4fcb7a541864ce",
  measurementId: "G-SHWMBWXVDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);