import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="black" />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#888"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50, // space for status bar
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 10,
  },

  input: {
    flex: 1,
    height: 40,
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
  },
});
