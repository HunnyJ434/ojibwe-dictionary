import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJhKhLHX-mfPLDXoNn2gsS5b6PgvyzhUQ",
  authDomain: "sliike-payment.firebaseapp.com",
  projectId: "sliike-payment",
  storageBucket: "sliike-payment.appspot.com",
  messagingSenderId: "62089300667",
  appId: "1:62089300667:web:e1097937f40658cdbaf79e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);