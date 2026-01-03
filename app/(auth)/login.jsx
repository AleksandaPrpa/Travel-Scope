import {
  StyleSheet,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";
import { KeyboardAvoidingView } from "react-native";
import auth from "@react-native-firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert("Login failed: " + error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry
        />
        {loading ? (
          <ActivityIndicator size={"small"} style={{ margin: 28 }} />
        ) : (
          <>
            <ThemedButton title="Login" onPress={login} loading={true}>
              Login
            </ThemedButton>
            <Text>
              Don't have an account? <Link href="/register">Register</Link>
            </Text>
          </>
        )}
      </KeyboardAvoidingView>
    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
});
