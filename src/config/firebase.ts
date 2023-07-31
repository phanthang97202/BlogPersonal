import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASIrAXx0VdBFGq15FZjA6jswlRqEhNJiM",
  authDomain: "chat-app-b699e.firebaseapp.com",
  projectId: "chat-app-b699e",
  storageBucket: "chat-app-b699e.appspot.com",
  messagingSenderId: "1068561261596",
  appId: "1:1068561261596:web:7ae04db41b020d184babd9",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

// xác thực người dùng
const auth = getAuth(app);

// lấy ra instance của google
const provider = new GoogleAuthProvider();

export { db, auth, provider };
