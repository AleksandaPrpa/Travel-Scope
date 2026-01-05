import { auth, db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

export const getUserData = async () => {
  const user = auth.currentUser;
  if (!user) throw new Error("No user is currently signed in");

  const querySnapshot = await getDocs(collection(db, "users"));
  let userData = null;

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    if (data.userAuthID === user.uid) {
      userData = {
        createdAt: data.createdAt,
        email: data.email,
        userAuthID: data.userAuthID,
        username: data.username,
      };
    }
  });

  if (!userData) throw new Error("No user document found in Firestore");
  return userData;
};
