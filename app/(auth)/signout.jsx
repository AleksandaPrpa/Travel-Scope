import { Button, View } from "react-native";
import auth from "@react-native-firebase/auth";
import { useRouter } from "expo-router";

const SignOut = () => {
  // const router = useRouter();
  const signOut = () => {
    auth().signOut();

    // router.replace("/login");
  };
  return (
    <View>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};
export default SignOut;
