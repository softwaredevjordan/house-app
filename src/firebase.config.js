// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAR2UeNbmgTVd7CxZDuRdraP1O4f7B2_6Q",

  authDomain: "house-marketplace-app-c28e4.firebaseapp.com",

  projectId: "house-marketplace-app-c28e4",

  storageBucket: "house-marketplace-app-c28e4.appspot.com",

  messagingSenderId: "976862605842",

  appId: "1:976862605842:web:de017625b2ab0208d51ecb"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore()