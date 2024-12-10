import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Paste your firebaseConfig from Firebase Console here
const firebaseConfig = {
    apiKey: "AIzaSyBDdw4YFMW8OJAFTXBRk36UJDJ-rfGNZvo",
    authDomain: "summative-583bf.firebaseapp.com",
    projectId: "summative-583bf",
    storageBucket: "summative-583bf.firebasestorage.app",
    messagingSenderId: "1030080612096",
    appId: "1:1030080612096:web:c16c7467c80fda5ddb55e5"
  };

const config = initializeApp(firebaseConfig)
const auth = getAuth(config);
const firestore = getFirestore(config);

export { auth, firestore };