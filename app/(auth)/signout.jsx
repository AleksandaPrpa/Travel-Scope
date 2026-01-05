import { View, StyleSheet } from "react-native";
import auth from "@react-native-firebase/auth";
import ThemedButton from "../../components/ThemedButton";

const SignOut = () => {
  const signOut = () => {
    auth().signOut();
  };
  return (
    <View>
      <ThemedButton onPress={signOut}>Sign Out</ThemedButton>
    </View>
  );
};
export default SignOut;
