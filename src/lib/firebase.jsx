import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "realchat-68eaa.firebaseapp.com",
  projectId: "realchat-68eaa",
  storageBucket: "realchat-68eaa.appspot.com",
  messagingSenderId: "884750067285",
  appId: "1:884750067285:web:d83c3e64f93b0c577456dc",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
