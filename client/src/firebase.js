import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyCnckHYgCsM25JILpXZEv5kjiWi55yQ7Fg",
  authDomain: "note-managment.firebaseapp.com",
  projectId: "note-managment",
  storageBucket: "note-managment.appspot.com",
  messagingSenderId: "963509002880",
  appId: "1:963509002880:web:a80f375a6884f0b2a9fc65",
  measurementId: "G-1B4MF8KDRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storageBucket = getStorage(app)
export default app;
