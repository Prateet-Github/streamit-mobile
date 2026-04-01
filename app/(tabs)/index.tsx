import VideoCard from "@/components/ui/VideoCard";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </ScrollView>
  );
}
