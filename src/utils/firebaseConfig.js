// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCv-VKUEGd5LFUhGkphCfhsYgMOHzOOTpI",
    authDomain: "reactcoderhouse-5c52e.firebaseapp.com",
    projectId: "reactcoderhouse-5c52e",
    storageBucket: "reactcoderhouse-5c52e.appspot.com",
    messagingSenderId: "1010393100629",
    appId: "1:1010393100629:web:82bb2f26ae634dd3a7ffdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
