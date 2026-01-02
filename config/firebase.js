import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBd-rnv2mODkLLUhfGI09Ffol9cTcc2z98",
  authDomain: "travel-scope.firebaseapp.com",
  projectId: "travel-scope",
  storageBucket: "travel-scope.appspot.com",
  messagingSenderId: "646642572958",
  appId: "1:646642572958:web:3ed67ecb2f6a14a8b7258f",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
