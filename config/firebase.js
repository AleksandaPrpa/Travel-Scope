import { initializeApp, getApps, getApp } from "firebase/app";
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBd-rnv2mODkLLUhfGI09Ffol9cTcc2z98",
  authDomain: "travel-scope.firebaseapp.com",
  projectId: "travel-scope",
  storageBucket: "travel-scope.appspot.com",
  messagingSenderId: "646642572958",
  appId: "1:646642572958:web:3ed67ecb2f6a14a8b7258f",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = (() => {
  try {
    return initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  } catch (e) {
    return getAuth(app);
  }
})();

export const db = getFirestore(app);
