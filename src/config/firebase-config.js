// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYQkJKdIwKGnyOivW6-QrTqe-arK0-TdI",
  authDomain: "expense-tracker-b2d90.firebaseapp.com",
  projectId: "expense-tracker-b2d90",
  storageBucket: "expense-tracker-b2d90.appspot.com",
  messagingSenderId: "1000371787954",
  appId: "1:1000371787954:web:91dea353e2583ed3f411ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
