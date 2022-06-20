// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJNd_DkgRlA9gUnV0AMiFuvd02-DIi6c8",
  authDomain: "netflix-20614.firebaseapp.com",
  projectId: "netflix-20614",
  storageBucket: "netflix-20614.appspot.com",
  messagingSenderId: "312958576760",
  appId: "1:312958576760:web:af80d94b4bc2125e1a258d"
};

// Initialize Firebase
export const App = initializeApp(firebaseConfig);
export const auth = getAuth(App);
export const db = getFirestore(App)
