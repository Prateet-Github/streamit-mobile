import { useThemeColor } from "@/hooks/use-theme-color";
import axios from "axios";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

export default function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const textColor = useThemeColor({ light: "#000", dark: "#fff" }, "text");
  const borderColor = useThemeColor({ light: "#ccc", dark: "#555" }, "text");
  const backgroundColor = useThemeColor(
    { light: "#fff", dark: "#111" },
    "background",
  );

  const handleRegister = async () => {
    if (!username || !name || !email || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/auth/register`,
        { username, name, email, password },
      );

      Alert.alert("Success", res.data.message || "Registration successful!");

      router.replace("/login");
    } catch (error: any) {
      Alert.alert(
        "Error",
        error.response?.data?.message || "Something went wrong",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TextInput
        style={[
          styles.input,
          { color: textColor, borderColor, backgroundColor },
        ]}
        placeholder="Username"
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <TextInput
        style={[
          styles.input,
          { color: textColor, borderColor, backgroundColor },
        ]}
        placeholder="Name"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={[
          styles.input,
          { color: textColor, borderColor, backgroundColor },
        ]}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={[
          styles.input,
          { color: textColor, borderColor, backgroundColor },
        ]}
        placeholder="Password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.button}>
        <Button
          title={loading ? "Registering..." : "Register"}
          color="green"
          onPress={handleRegister}
          disabled={loading}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
  },

  button: {
    width: "100%",
    marginTop: 10,
  },
});
