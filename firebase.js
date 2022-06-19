// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTf-LOt_18jtkSB1zCVAnL2eriYiigHfo",
  authDomain: "info6132-advinmobiledev-3bc8e.firebaseapp.com",
  projectId: "info6132-advinmobiledev-3bc8e",
  storageBucket: "info6132-advinmobiledev-3bc8e.appspot.com",
  messagingSenderId: "846338308397",
  appId: "1:846338308397:web:4469c2d7f16c06e0da3ba4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// if (firebase.app.length === 0) {
    //     app = firebase.initializeApp(firebaseConfig);
    // } else {
    //     app = firebase.app()
    // }
    
    const auth = firebase.auth()
    
    export {auth};