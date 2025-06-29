// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "resumebuilderbuddy.firebaseapp.com",
  projectId: "resumebuilderbuddy",
  storageBucket: "resumebuilderbuddy.firebasestorage.app",
  messagingSenderId: "502411278886",
  appId: "1:502411278886:web:d135222efc035809f6c4e7",
  measurementId: "G-32DGY9YS17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app };