import { useThemeColor } from "@/hooks/use-theme-color";
import { Image, StyleSheet, Text, View } from "react-native";

export default function VideoCard() {
  const textColor = useThemeColor({ light: "#000", dark: "#fff" }, "text");

  return (
    <View style={styles.card}>
      <Image
        source={require("../../assets/images/apple.jpg")}
        style={styles.thumbnail}
      />
      <View style={styles.info}>
        <Image
          source={require("../../assets/images/pfp.jpg")}
          style={styles.channelLogo}
        />

        <View>
          <Text style={[styles.title, { color: textColor }]}>
            Sample Video Title
          </Text>
          <View style={styles.channelInfo}>
            <Text style={[styles.channel, { color: textColor }]}>
              Channel Name
            </Text>
            <Text style={[styles.views, { color: textColor }]}>
              1M views • 2 days ago
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    borderRadius: 0,
    overflow: "hidden",
  },
  thumbnail: {
    width: "100%",
    height: 240,
  },
  info: {
    padding: 10,
    flexDirection: "row",
    gap: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  channel: {
    fontSize: 14,
    marginBottom: 2,
  },
  views: {
    fontSize: 12,
  },
  channelInfo: {
    flexDirection: "row",
    gap: 10,
    display: "flex",
    alignItems: "center",
  },
  channelLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
