import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCdKszn_tkDrf8KK4WUKWFxVlcysevhMRA",
  authDomain: "fir-course-pedrotech-647b7.firebaseapp.com",
  projectId: "fir-course-pedrotech-647b7",
  storageBucket: "fir-course-pedrotech-647b7.appspot.com",
  messagingSenderId: "462644078845",
  appId: "1:462644078845:web:f558e7ad56b1766e6b7694",
  measurementId: "G-6BSJMCB618",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
