
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAjWXqb7fHcEnhZfnQKvRta-3Ywc6swsh4",
  authDomain: "katha-blog.firebaseapp.com",
  projectId: "katha-blog",
  storageBucket: "katha-blog.appspot.com",
  messagingSenderId: "758539776065",
  appId: "1:758539776065:web:d9b93f65c4ed21638f96c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB= getFirestore(app);
const auth = getAuth(app);
const storage= getStorage(app);

export {fireDB, auth, storage};