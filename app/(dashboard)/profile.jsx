import { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import SignOut from "../(auth)/signout";
import { getUserData } from "../../services/userService";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUserData();
        setUser(data);
      } catch (error) {
        console.error("Error loading user:", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <ThemedView safe={true} style={styles.container}>
      {user ? (
        <ThemedText style={styles.title}>
          Welcome, <ThemedText title={true}>{user.username}</ThemedText>
        </ThemedText>
      ) : (
        <ThemedText>Loading user...</ThemedText>
      )}
      <SignOut />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 8,
  },
});
