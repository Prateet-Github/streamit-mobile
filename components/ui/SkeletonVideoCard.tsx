import { StyleSheet, View } from "react-native";
import Shimmer from "./Shimmer";

export default function SkeletonVideoCard() {
  return (
    <View style={styles.card}>
      <Shimmer width="100%" height={200} />

      <View style={styles.row}>
        <Shimmer width={40} height={40} borderRadius={20} />

        <View style={styles.textContainer}>
          <Shimmer width="60%" height={10} />
          <Shimmer width="40%" height={10} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10,
  },

  textContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 6,
  },
});
