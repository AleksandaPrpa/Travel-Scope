import { auth, db } from "../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export const getUserData = async () => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error("No user is currently signed in");
    }

    const q = query(
      collection(db, "users"),
      where("userAuthID", "==", user.uid)
    );

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const data = querySnapshot.docs[0].data();
      return {
        createdAt: data.createdAt,
        email: data.email,
        userAuthID: data.userAuthID,
        username: data.username,
      };
    } else {
      throw new Error("No user document found in Firestore");
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
