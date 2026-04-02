import { router } from "expo-router";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Pressable, Text, View } from "react-native";

export default function ProfileScreen() {
  const textColor = useThemeColor({ light: "#000", dark: "#fff" }, "text");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: textColor }}>Profile Screen</Text>

      <Pressable
        style={{ marginTop: 20 }}
        onPress={() => router.push("/register")}
      >
        <Text style={{ color: "green", marginTop: 20 }}>Register</Text>
      </Pressable>
    </View>
  );
}
