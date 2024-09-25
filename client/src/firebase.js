// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-69d71.firebaseapp.com",
  projectId: "mern-blog-69d71",
  storageBucket: "mern-blog-69d71.appspot.com",
  messagingSenderId: "789231494167",
  appId: "1:789231494167:web:402de8b97acd5f7b7e6852"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

