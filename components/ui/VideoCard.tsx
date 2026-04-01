import { Image, StyleSheet, Text, View } from "react-native";

export default function VideoCard() {
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
          <Text style={styles.title}>Sample Video Title</Text>
          <View style={styles.channelInfo}>
            <Text style={styles.channel}>Channel Name</Text>
            <Text style={styles.views}>1M views • 2 days ago</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 0,
    overflow: "hidden",
    elevation: 2, // for Android shadow
    shadowColor: "#000", // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
    color: "#555",
    marginBottom: 2,
  },
  views: {
    fontSize: 12,
    color: "#777",
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
