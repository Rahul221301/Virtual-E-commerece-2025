import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";



const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "onecard-e0aa2.firebaseapp.com",
    projectId: "onecard-e0aa2",
    storageBucket: "onecard-e0aa2.firebasestorage.app",
    messagingSenderId: "778265574891",
    appId: "1:778265574891:web:2c0661c2d1a191db0c2dae"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export { auth, provider }; 