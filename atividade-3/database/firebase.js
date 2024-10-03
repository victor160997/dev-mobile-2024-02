// firebase.js (Firebase versão 9.x modular sem compat)
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAkSGDeVwr7nrZux4yDtLBYuJiEcZXy0YQ",
  authDomain: "atividade-3-login.firebaseapp.com",
  projectId: "atividade-3-login",
  storageBucket: "atividade-3-login.appspot.com",
  messagingSenderId: "779754507454",
  appId: "1:779754507454:web:e8b9725e348a87b8f922ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };