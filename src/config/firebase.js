// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdKszn_tkDrf8KK4WUKWFxVlcysevhMRA",
  authDomain: "fir-course-pedrotech-647b7.firebaseapp.com",
  projectId: "fir-course-pedrotech-647b7",
  storageBucket: "fir-course-pedrotech-647b7.appspot.com",
  messagingSenderId: "462644078845",
  appId: "1:462644078845:web:f558e7ad56b1766e6b7694",
  measurementId: "G-6BSJMCB618",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
