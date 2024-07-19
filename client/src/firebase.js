// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "buzzblog-3284d.firebaseapp.com",
  projectId: "buzzblog-3284d",
  storageBucket: "buzzblog-3284d.appspot.com",
  messagingSenderId: "1005254758946",
  appId: "1:1005254758946:web:9607c8f45a0260bff6307b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
