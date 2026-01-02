import { Pressable, useColorScheme, StyleSheet, Text } from "react-native";
import { Colors } from "../constants/Colors";

function ThemedButton({ children, style, ...props }) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
      {...props}
    >
      <Text style={[styles.text, { color: theme.text }]}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 6,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "500",

    fontSize: 16,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default ThemedButton;
