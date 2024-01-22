// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfigLogin = {
  apiKey: "AIzaSyAZpdL2_MiOLvI39KCJxDgvHGddh17qKlk",
  authDomain: "tutorial-login-a6225.firebaseapp.com",
  projectId: "tutorial-login-a6225",
  storageBucket: "tutorial-login-a6225.appspot.com",
  messagingSenderId: "161040802658",
  appId: "1:161040802658:web:34523deed2c53b07fe823b"
};

// Initialize Firebase
const appFirebaseLogin = initializeApp(firebaseConfigLogin, "firebaseConfigLogin");
export default appFirebaseLogin;