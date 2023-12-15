import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from 'firebase/auth'



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLs6hJnNhwCRhfSPgQiRKRzWnMbflEu10",
  authDomain: "socialproject-cff30.firebaseapp.com",
  projectId: "socialproject-cff30",
  storageBucket: "socialproject-cff30.appspot.com",
  messagingSenderId: "331714548092",
  appId: "1:331714548092:web:0be6cd4547faf33a81d4f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();