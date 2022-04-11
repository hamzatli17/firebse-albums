// Import the functions you need from the SDKs you need
//import firebase from 'firebase'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDukt7YsV24TlFwrHnEg_cw5qEviXmdF_w",
  authDomain: "frb-albums-5b0d9.firebaseapp.com",
  projectId: "frb-albums-5b0d9",
  storageBucket: "frb-albums-5b0d9.appspot.com",
  messagingSenderId: "769339367468",
  appId: "1:769339367468:web:3a74aaa0a6af9f8ed47189"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);