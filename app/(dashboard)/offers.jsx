import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import OfferCard from "../../components/OfferCard";

export default function Offers() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      const querySnapshot = await getDocs(collection(db, "offers"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOffers(data);
    };

    fetchOffers();
  }, []);

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedText title={true} style={styles.title}>
        Travel ponude ✈️
      </ThemedText>

      <FlatList
        data={offers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <OfferCard
            departureLocation={item.departureLocation}
            destination={item.destination}
            price={item.price}
            currency={item.currency}
            type={item.type}
          />
        )}
      />

      <StatusBar style="auto" />
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
