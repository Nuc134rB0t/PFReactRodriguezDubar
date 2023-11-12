// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2orFh8heKrTf8tbF7xlv-iKSs1I7rXS4",
  authDomain: "reactpfrodriguezdubar.firebaseapp.com",
  projectId: "reactpfrodriguezdubar",
  storageBucket: "reactpfrodriguezdubar.appspot.com",
  messagingSenderId: "135263790719",
  appId: "1:135263790719:web:03a37e5fa983062458c14a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);