import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChIQKXrRGWo0WWPWC46xmtkUUb5H0jPYY",
  authDomain: "bloggie-8cb7e.firebaseapp.com",
  projectId: "bloggie-8cb7e",
  storageBucket: "bloggie-8cb7e.appspot.com",
  messagingSenderId: "445138698615",
  appId: "1:445138698615:web:4be6963b319b2059e0a172",
  measurementId: "G-WSTKVH1PX7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
