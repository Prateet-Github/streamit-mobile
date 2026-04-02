import { useThemeColor } from "@/hooks/use-theme-color";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/auth/login`,
        { email, password },
      );

      const token = res.data.token;

      await AsyncStorage.setItem("token", token);

      Alert.alert("Success", "Login successful!");

      router.replace("/(tabs)"); 
    } catch (error: any) {
      console.log("FULL ERROR:", error);
      console.log("RESPONSE:", error?.response);
      console.log("DATA:", error?.response?.data);
      Alert.alert(
        "Error",
        error.response?.data?.message || "Something went wrong",
      );
    } finally {
      setLoading(false);
    }
  };

  const textColor = useThemeColor({ light: "#000", dark: "#fff" }, "text");
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { color: textColor }]}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, { color: textColor }]}
        placeholder="Password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.button}>
        <Button
          title={loading ? "Logging in..." : "Login"}
          color="green"
          onPress={handleLogin}
          disabled={loading}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  button: {
    width: "80%",
    marginTop: 4,
  },
});
