import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEqK23GmjUC2ZA4oDlm7yiuyUN2G3tn2c",
  authDomain: "web-app-de-e-commerce-377a5.firebaseapp.com",
  projectId: "web-app-de-e-commerce-377a5",
  storageBucket: "web-app-de-e-commerce-377a5.firebasestorage.app",
  messagingSenderId: "500317410442",
  appId: "1:500317410442:web:52dd4d2e22e57db466c973"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
