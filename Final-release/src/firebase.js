import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDqUo_uFjpk20VP3uSe05fP_qcH4d__H6o",
    authDomain: "react-project-43a15.firebaseapp.com",
    projectId: "react-project-43a15",
    storageBucket: "react-project-43a15.firebasestorage.app",
    messagingSenderId: "827372235784",
    appId: "1:827372235784:web:b95ab550af32324925f5bd",
    measurementId: "G-3CD144L65E"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
