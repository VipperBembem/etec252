import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyAkODzyD_ywY0rlNrzoBIzWAcVlCViPZ_s",
  authDomain: "etec25-57b3d.firebaseapp.com",
  projectId: "etec25-57b3d",
  storageBucket: "etec25-57b3d.firebasestorage.app",
  messagingSenderId: "624305540835",
  appId: "1:624305540835:web:ef7e5f37f348c475b27fd6",
  measurementId: "G-85JXDZG3QS"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const db = getFirestore(app);
