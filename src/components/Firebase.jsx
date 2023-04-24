// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArXm9Zy-yR6hCGLR4zS3Kfv7vA86t-anE",
  authDomain: "niks-tourism.firebaseapp.com",
  projectId: "niks-tourism",
  storageBucket: "niks-tourism.appspot.com",
  messagingSenderId: "229229378858",
  appId: "1:229229378858:web:8b02acbdd38245a1cbb253",
  measurementId: "G-ERE4EVB3JK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;