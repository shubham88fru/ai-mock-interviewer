import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_CLIENT_API_KEY,
  authDomain: "jarvis-6073b.firebaseapp.com",
  projectId: "jarvis-6073b",
  storageBucket: "jarvis-6073b.firebasestorage.app",
  messagingSenderId: "648544179214",
  appId: "1:648544179214:web:6e965a660b450758a0d85f",
  measurementId: "G-5F8J0JK3YJ",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
