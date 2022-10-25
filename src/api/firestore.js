import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUIdrufioJFwCqwD_uWG36ZJq4_XPhQEc",
  authDomain: "who-closest.firebaseapp.com",
  projectId: "who-closest",
  storageBucket: "who-closest.appspot.com",
  messagingSenderId: "271034771312",
  appId: "1:271034771312:web:5d679aa0217b7db40251b5",
  measurementId: "G-6RY36GJDJ6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
