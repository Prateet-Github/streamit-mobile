import VideoCard from "@/components/ui/VideoCard";
import { useThemeColor } from "@/hooks/use-theme-color";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  const textColor = useThemeColor({ light: "#000", dark: "#fff" }, "text");
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
