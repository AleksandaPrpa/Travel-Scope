import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ThemedView from "../../components/ThemedView";
import SignOut from "../(auth)/signout";
import auth from "@react-native-firebase/auth";

export default function Profile() {
  return (
    <ThemedView safe={true} style={styles.container}>
      <Text>Welcome, {auth().currentUser?.email}</Text>
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
