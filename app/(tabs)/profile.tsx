import { useThemeColor } from "@/hooks/use-theme-color";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ProfileScreen() {
  const textColor = useThemeColor({ light: "#000", dark: "#fff" }, "text");
  const backgroundColor = useThemeColor(
    { light: "#fff", dark: "#000" },
    "background",
  );

  const cardColor = useThemeColor(
    { light: "#f5f5f5", dark: "#111" },
    "background",
  );

  const mutedText = "#888";

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
          },
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

  // Loader (theme-aware)
  if (loading) {
    return (
      <View
        style={[styles.loaderContainer, { backgroundColor: backgroundColor }]}
      >
        <ActivityIndicator color={textColor} />
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor }}>
      {/* Profile Card */}
      <View style={[styles.card, { backgroundColor: cardColor }]}>
        <Image
          source={require("../../assets/images/pfp.jpg")}
          style={styles.avatar}
        />

        <View style={{ gap: 4 }}>
          <Text style={[styles.name, { color: textColor }]}>{user?.name}</Text>

          <Text style={[styles.username, { color: mutedText }]}>
            @{user?.username}
          </Text>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Logout Button */}
      <Pressable
        onPress={handleLogout}
        style={({ pressed }) => [
          styles.logoutBtn,
          { backgroundColor: pressed ? "#cc2e25" : "#ff3b30" },
        ]}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    padding: 15,
    borderRadius: 12,
    gap: 15,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
  },

  username: {
    fontSize: 14,
  },

  divider: {
    height: 1,
    backgroundColor: "#222",
    opacity: 0.1,
    marginHorizontal: 20,
  },

  logoutBtn: {
    marginTop: 30,
    marginHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  logoutText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
