// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7r4kNk0WVhNwVKLBMG6U5QRh_wIsC0FQ",
  authDomain: "netwatch-f80cb.firebaseapp.com",
  projectId: "netwatch-f80cb",
  storageBucket: "netwatch-f80cb.appspot.com",
  messagingSenderId: "383462985236",
  appId: "1:383462985236:web:44439ee116968355fc2101"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth();