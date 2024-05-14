import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBydLM-vdHrIZv2ZEh1Sa7F_2kVFrUf-1s",
    authDomain: "auth-ee506.firebaseapp.com",
    projectId: "auth-ee506",
    storageBucket: "auth-ee506.appspot.com",
    messagingSenderId: "33077396053",
    appId: "1:33077396053:web:a7401b2b144d4c25800adc"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;
