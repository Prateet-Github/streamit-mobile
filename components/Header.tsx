import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Header() {
  const textColor = useThemeColor({ light: "#000", dark: "#fff" }, "text");

  return (
    <View style={styles.header}>
      <Text style={[styles.title, { color: textColor }]}>StreamIt</Text>

      <View style={styles.icons}>
        <Pressable>
          <Ionicons name="notifications" size={24} color={textColor} />
        </Pressable>

        <Pressable onPress={() => router.push("/search")}>
          <Ionicons name="search" size={24} color={textColor} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  icons: {
    flexDirection: "row",
    gap: 16,
  },
});
