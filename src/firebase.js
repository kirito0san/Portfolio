/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyASCe38P1QIN1B5UKbY0zGrb90hSaSdjq0",
    authDomain: "portfolio-ce327.firebaseapp.com",
    projectId: "portfolio-ce327",
    storageBucket: "portfolio-ce327.appspot.com",
    messagingSenderId: "382084831469",
    appId: "1:382084831469:web:097211a024b5c73825d4e4",
    measurementId: "G-5F6S7D2XMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;