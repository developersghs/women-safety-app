const firebaseConfig = {
  apiKey: "AIzaSyAgL2WF2v9Aaz00tqRSeI4FxBVYD3IV-pg",
  authDomain: "women-safety-app-24af0.firebaseapp.com",
  projectId: "women-safety-app-24af0",
  storageBucket: "women-safety-app-24af0.firebasestorage.app",
  messagingSenderId: "1060668038752",
  appId: "1:1060668038752:web:7215d85df2afb1b0ba6d05",
  measurementId: "G-TKTK247XZ7"
};

// Import the functions you need from the SDKs you plan to use
import { initializeApp } from "firebase/app";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

import { getAuth } from "firebase/auth";
const auth = getAuth(app);
export { auth };