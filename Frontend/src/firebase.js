import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFLaRTjYU8rYAW9V49BECaE6zEEUxsdiw",
  authDomain: "edulibrary-d8814.firebaseapp.com",
  projectId: "edulibrary-d8814",
  storageBucket: "edulibrary-d8814.firebasestorage.app",
  messagingSenderId: "113530466781",
  appId: "1:113530466781:web:f46a7b9864a6c9564d8634"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
