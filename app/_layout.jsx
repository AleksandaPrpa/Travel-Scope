import { useEffect, useState } from "react";
import { Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme, View, ActivityIndicator } from "react-native";
import { Colors } from "../constants/Colors";

import auth from "@react-native-firebase/auth";

export default function RootLayout() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const colorScheme = useColorScheme();

  const router = useRouter();
  const segments = useSegments();
  const theme = Colors[colorScheme] ?? Colors.light;

  const onAuthStateChanged = (user) => {
    console.log("Auth state changed:", user);
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const unsub = auth().onAuthStateChanged((u) => {
      setUser(u);
      setInitializing(false);
    });
    return unsub;
  }, []);

  useEffect(() => {
    if (initializing) return;

    const inAuthGroup = segments[0] === "(auth)";
    const inDashboardGroup = segments[0] === "(dashboard)";

    if (!user && !inAuthGroup) {
      router.replace("/login");
    }

    if (user && !inDashboardGroup) {
      router.replace("/offers");
    }
  }, [user, initializing, segments]);

  if (initializing) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }
  if (initializing)
    return (
      <View>
        <ActivityIndicator></ActivityIndicator>
      </View>
    );
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
        }}
      >
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
