// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7vYGSIVBXXWmQgg8d2nGgQA2xRPyGufc",
  authDomain: "bici-react-coderhouse.firebaseapp.com",
  projectId: "bici-react-coderhouse",
  storageBucket: "bici-react-coderhouse.appspot.com",
  messagingSenderId: "726122839743",
  appId: "1:726122839743:web:6a5530a657a8901125900a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
