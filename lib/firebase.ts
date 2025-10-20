// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYCcfqLkXObzEKcdBxB18VjmnMDizpwGo",
  authDomain: "klazz-1e8a0.firebaseapp.com",
  projectId: "klazz-1e8a0",
  storageBucket: "klazz-1e8a0.appspot.com",
  messagingSenderId: "204778169425",
  appId: "1:204778169425:web:d0cc59535b930b4de64470"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { auth };
