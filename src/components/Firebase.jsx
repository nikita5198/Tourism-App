import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  // your Firebase config
  apiKey: "AIzaSyArXm9Zy-yR6hCGLR4zS3Kfv7vA86t-anE",
  authDomain: "niks-tourism.firebaseapp.com",
  projectId: "niks-tourism",
  storageBucket: "niks-tourism.appspot.com",
  messagingSenderId: "229229378858",
  appId: "1:229229378858:web:8b02acbdd38245a1cbb253",
  measurementId: "G-ERE4EVB3JK"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();
const firestore = getFirestore();

const handleLogin = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User successfully logged in: ", user);

      // store user data in Firestore
      addDoc(collection(db, "users"), {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL
      })
      .then(() => {
        console.log("User data added to Firestore");
      })
      .catch((error) => {
        console.error("Error adding user data to Firestore: ", error);
      });
    })
    .catch((error) => {
      console.error("Error logging in: ", error);
    });
};

export { app, db, auth, firestore, handleLogin};
