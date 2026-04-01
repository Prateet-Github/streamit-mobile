import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export default function SearchScreen() {
  const textColor = useThemeColor({ light: "#000", dark: "#fff" }, "text");
  const backgroundColor = useThemeColor(
    { light: "#f0f0f0", dark: "#333" },
    "background",
  );
  const placeholderColor = useThemeColor(
    { light: "#666", dark: "#aaa" },
    "text",
  );

  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} activeOpacity={0.7}>
          <Ionicons name="arrow-back" size={26} color={textColor} />
        </TouchableOpacity>

        <View style={[styles.inputWrapper, { backgroundColor }]}>
          <Ionicons name="search" size={18} color={textColor} />

          <TextInput
            autoFocus
            style={[styles.input, { color: textColor }]}
            placeholder="Search..."
            placeholderTextColor={placeholderColor}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
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
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 10,
    gap: 8,
  },
});
