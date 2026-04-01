import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

export default function RootLayout() {
  const isDark = useColorScheme() === "dark";

  return (
    <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="search"
          options={{
            presentation: "modal",
            title: "Search",
          }}
        />
      </Stack>

      <StatusBar style={isDark ? "light" : "dark"} />
    </ThemeProvider>
  );
}
