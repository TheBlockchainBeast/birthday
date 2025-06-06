// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { getAnalytics } from "firebase/analytics"; // Analytics is optional, can add later if needed
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1IX5NxP2HoyIldfNMBrDXZSmt67tie-A",
  authDomain: "birthday-16b4f.firebaseapp.com",
  projectId: "birthday-16b4f",
  storageBucket: "birthday-16b4f.firebasestorage.app",
  messagingSenderId: "648866148297",
  appId: "1:648866148297:web:ca6a39406f83e20f530218",
  measurementId: "G-B0LDJRVJY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Initialize analytics if needed
const db = getFirestore(app);

export { app, db }; 