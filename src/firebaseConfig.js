import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6UObmo6ASeaLwwecDyelzdGDweyZ8pvk",
  authDomain: "yessioui-vue.firebaseapp.com",
  projectId: "yessioui-vue",
  storageBucket: "yessioui-vue.appspot.com",
  messagingSenderId: "790335139230",
  appId: "1:790335139230:web:e08d90fd6183faa9193a8f"
};

// Initialize Firebase
//const app = 
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };