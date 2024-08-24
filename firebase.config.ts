import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
export const db = getFirestore(app);