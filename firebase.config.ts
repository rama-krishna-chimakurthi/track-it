// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmAVDgf_TanHNgkK2C3E618x9boyXFZSs",
    authDomain: "track-it-everything.firebaseapp.com",
    projectId: "track-it-everything",
    storageBucket: "track-it-everything.appspot.com",
    messagingSenderId: "93727935793",
    appId: "1:93727935793:web:a54914543322e2d559f410",
    measurementId: "G-VTZ9CH2PRC"
};

// Initialize Firebase
export const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
