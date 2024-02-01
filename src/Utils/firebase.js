// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDeNL0F9CG_FZlWciIM4YXGxG23kRhFrzA",
    authDomain: "e-commerce-75de1.firebaseapp.com",
    projectId: "e-commerce-75de1",
    storageBucket: "e-commerce-75de1.appspot.com",
    messagingSenderId: "34971026946",
    appId: "1:34971026946:web:3ef23259cdd633c389c91b",
    measurementId: "G-H9YN0B8TVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
