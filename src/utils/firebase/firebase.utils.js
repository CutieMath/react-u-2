// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDctAP47lePrKJ6lM6psi_F72swFOk5TMk",
  authDomain: "planet-f69b1.firebaseapp.com",
  projectId: "planet-f69b1",
  storageBucket: "planet-f69b1.appspot.com",
  messagingSenderId: "352894631093",
  appId: "1:352894631093:web:3cf2e8c025ab43451552fc",
  measurementId: "G-5P6K8C7YHH",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithPopup = () => signInWithPopup(auth, provider);
