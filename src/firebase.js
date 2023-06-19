// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/storage";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
<<<<<<< HEAD
import { apiKey, appId, authDomain, measurementId, messagingSenderId, projectId, storageBucket } from "../src/firebase-config";
=======
>>>>>>> main

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
<<<<<<< HEAD
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
=======
  apiKey: "AIzaSyD9wUhtluMzFU0cTMPDklGqCe-DQ6ngkpA",
  authDomain: "personal-portfolio-ba9e8.firebaseapp.com",
  projectId: "personal-portfolio-ba9e8",
  storageBucket: "personal-portfolio-ba9e8.appspot.com",
  messagingSenderId: "146257214908",
  appId: "1:146257214908:web:1773d08e60d05da0acbfb9",
  measurementId: "G-ZYEM2T1XPV",
>>>>>>> main
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const db = getFirestore(app);
