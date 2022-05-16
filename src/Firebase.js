import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import firebase from "./Firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCcQgwjclYK68zw00thguE3us8JjB1YmsU",
  authDomain: "react-blog-38091.firebaseapp.com",
  projectId: "react-blog-38091",
  storageBucket: "react-blog-38091.appspot.com",
  messagingSenderId: "151590333839",
  appId: "1:151590333839:web:4ee96b96173740f72caffa",
  measurementId: "G-DTGKNL3FSY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
export default db;
