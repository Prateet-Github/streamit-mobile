import { useThemeColor } from "@/hooks/use-theme-color";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Text, View, ActivityIndicator } from "react-native";

export default function ProfileScreen() {
  const textColor = useThemeColor({ light: "#000", dark: "#fff" }, "text");

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = await AsyncStorage.getItem("token");

        const res = await axios.get(
          `${process.env.EXPO_PUBLIC_BACKEND_URL}/auth/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(res.data.user);
      } catch (error) {
        console.log("Fetch user error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    router.replace("/(auth)/login");
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: textColor, fontSize: 18 }}>
        Profile Screen
      </Text>

      {user && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: textColor }}>Name: {user?.name}</Text>
          <Text style={{ color: textColor }}>Email: {user?.email}</Text>
        </View>
      )}

      <Pressable style={{ marginTop: 20 }} onPress={handleLogout}>
        <Text style={{ color: "red" }}>Logout</Text>
      </Pressable>
    </View>
  );
}