import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAmnjUqJNwI1e3Rng2FxbkKhEYE2zZfD5E",
    authDomain: "curso-a9ad0.firebaseapp.com",
    projectId: "curso-a9ad0",
    storageBucket: "curso-a9ad0.appspot.com",
    messagingSenderId: "275836532635",
    appId: "1:275836532635:web:9270872adfce5f611b133e",
    measurementId: "G-SZ26JLZ4LL"
};


const firebase = initializeApp(firebaseConfig);

export default firebase;