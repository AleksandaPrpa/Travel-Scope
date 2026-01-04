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
import ThemedTextInput from "../../components/ThemedTextInput";

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.form}>
          <ThemedText title style={styles.title}>
            Sign in
          </ThemedText>

          <ThemedText style={styles.subtitle}>
            Explore the best travel offers
          </ThemedText>

          <Spacer height={32} />

          <ThemedTextInput
            style={styles.input}
            placeholder="Email address"
            value={email}
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={setEmail}
          />

          <Spacer height={16} />

          <ThemedTextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            autoCapitalize="none"
            secureTextEntry
            onChangeText={setPassword}
          />

          <Spacer height={24} />

          {loading ? (
            <ActivityIndicator />
          ) : (
            <>
              <ThemedButton onPress={login}>Log in</ThemedButton>

              <Spacer height={20} />

              <ThemedText style={styles.footerText}>
                New here?{" "}
                <Link href="/register">
                  <ThemedText style={styles.linkText}>
                    Create an account
                  </ThemedText>
                </Link>
              </ThemedText>
            </>
          )}
        </KeyboardAvoidingView>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.7,
    textAlign: "center",
  },
  input: {
    width: "100%",
  },
  footerText: {
    fontSize: 14,
  },
  linkText: {
    fontWeight: "600",
  },
  center: {
    textAlign: "center",
  },
});
