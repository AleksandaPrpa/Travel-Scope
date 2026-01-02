import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ThemedText from "./ThemedText";
import ThemedCard from "./ThemedCard";
import ThemedButton from "./ThemedButton";
import Divider from "./Divider";
import { useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

export default function OfferCard({
  departureLocation,
  destination,
  price,
  currency,
  type,
}) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <ThemedCard style={styles.card}>
      <ThemedText style={styles.route}>
        {departureLocation} <ThemedText style={styles.arrow}>→</ThemedText>{" "}
        {destination}{" "}
        {type === "train" && (
          <Ionicons name="train" size={24} color={theme.text} />
        )}
        {type === "flight" && (
          <Ionicons name="airplane" size={24} color={theme.text} />
        )}
        {type === "car" && <Ionicons name="car" size={24} color={theme.text} />}
        {type === "cruise" && (
          <Ionicons name="boat" size={24} color={theme.text} />
        )}
        {type === "bus" && <Ionicons name="bus" size={24} color={theme.text} />}
      </ThemedText>

      <Divider marginVertical={12} />

      {/* PRICE */}
      <ThemedText style={styles.price}>
        {price}
        <ThemedText style={styles.currency}> {currency}</ThemedText>
      </ThemedText>

      {/* BUTTON */}
      <ThemedButton style={styles.button}>Pogledaj ponudu</ThemedButton>
    </ThemedCard>
  );
}
const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
  },

  route: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },

  arrow: {
    fontWeight: "400",
    opacity: 0.6,
  },

  price: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 16,
  },

  currency: {
    fontSize: 16,
    fontWeight: "500",
    opacity: 0.7,
  },

  button: {
    borderRadius: 12,
  },
});
