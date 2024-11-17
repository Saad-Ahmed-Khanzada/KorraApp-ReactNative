// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClfnNgQRsmVrd2jeFGfURIy3VUIKbE0k8",
  authDomain: "korraapp-firebase.firebaseapp.com",
  projectId: "korraapp-firebase",
  storageBucket: "korraapp-firebase.appspot.com",
  messagingSenderId: "577318774365",
  appId: "1:577318774365:web:41d135656a9bb79a1bcfb4",
  measurementId: "G-XH2Z6JJJQW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
const analytics = getAnalytics(app);

// // Initialize Firestore
// const db = getFirestore(app);

// Initialize Auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
