
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "interviewiq-51e44.firebaseapp.com",
    projectId: "interviewiq-51e44",
    storageBucket: "interviewiq-51e44.firebasestorage.app",
    messagingSenderId: "1096299154324",
    appId: "1:1096299154324:web:245be23ca9ee791a769d81"
};

console.log(import.meta.env.VITE_FIREBASE_APIKEY);

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider }