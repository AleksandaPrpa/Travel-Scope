import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";

import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { Link, router } from "expo-router";
import { useState } from "react";

// Firebase modular imports
import { auth, db } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const userCollectionRef = collection(db, "users");

  const addUserToFirestore = async (user) => {
    try {
      await addDoc(userCollectionRef, {
        username: username,
        userAuthID: user.uid,
        email: user.email,
        createdAt: new Date(),
      });
    } catch (error) {
      console.error("Error adding user to Firestore: ", error);
    }
  };

  const registration = async () => {
    setLoading(true);
    try {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await addUserToFirestore(userCredential.user);
      alert("Check your email for verification link");
      router.replace("/login");
    } catch (error) {
      alert("Registration failed: " + error.message);
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
            Create your account
          </ThemedText>

          <ThemedText style={styles.subtitle}>
            Start discovering the best travel deals
          </ThemedText>

          <Spacer height={32} />

          <ThemedTextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            autoCapitalize="none"
            onChangeText={setUsername}
          />
          <Spacer height={16} />
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
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Spacer height={16} />
          <ThemedTextInput
            style={styles.input}
            placeholder="Confirm Password"
            autoCapitalize="none"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          <Spacer height={24} />

          <ThemedButton onPress={registration}>Create account</ThemedButton>

          <Spacer height={20} />

          <Link href="/login" replace>
            <ThemedText style={[styles.footerText, styles.center]}>
              Already have an account?{" "}
              <ThemedText style={styles.linkText}>Log in</ThemedText>
            </ThemedText>
          </Link>
        </KeyboardAvoidingView>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  form: { width: "100%", alignItems: "center", paddingHorizontal: 24 },
  title: { fontSize: 24, fontWeight: "700", textAlign: "center" },
  subtitle: { fontSize: 14, opacity: 0.7, textAlign: "center" },
  input: { width: "100%" },
  footerText: { fontSize: 14 },
  linkText: { fontWeight: "600" },
  center: { textAlign: "center" },
});
