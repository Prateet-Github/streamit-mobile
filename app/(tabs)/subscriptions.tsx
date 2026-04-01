import { useThemeColor } from "@/hooks/use-theme-color";
import { Text, View } from "react-native";

export default function SubscriptionsScreen() {
    const textColor = useThemeColor({ light: "#000", dark: "#fff" }, "text");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: textColor }}>Subscriptions Screen</Text>
    </View>
  );
}
