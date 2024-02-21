// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "habitables-909f7.firebaseapp.com",
  projectId: "habitables-909f7",
  storageBucket: "habitables-909f7.appspot.com",
  messagingSenderId: "573401757637",
  appId: "1:573401757637:web:b783d59f60e317f7957dac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);




//firebase storage
//allow read;
//allow write: if 
//request.resource.size < 2 * 1024 *1024 &&
//request.resource.contentType.matches('image/.*')