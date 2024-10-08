import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2KvSFD3OvvFF8yuezj7iP93pzXx354sA",
  authDomain: "spendease-842ee.firebaseapp.com",
  databaseURL: "https://spendease-842ee-default-rtdb.firebaseio.com",
  projectId: "spendease-842ee",
  storageBucket: "spendease-842ee.appspot.com",
  messagingSenderId: "678143954616",
  appId: "1:678143954616:web:82c0e9f0fb179411a96e4d",
  measurementId: "G-BN3XCKB068"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };