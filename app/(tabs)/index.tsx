import SkeletonVideoCard from "@/components/ui/SkeletonVideoCard";
import VideoCard from "@/components/ui/VideoCard";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

export default function HomeScreen() {
  const backgroundColor = useThemeColor(
    { light: "#fff", dark: "#000" },
    "background",
  );

  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState<number[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      // Mocking API call with timeout
      setTimeout(() => {
        setVideos([1, 2, 3, 4, 5]);
        setLoading(false);
      }, 2000);
    };

    fetchVideos();
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor }}>
      <View>
        {loading
          ? [1, 2, 3, 4, 5].map((_, i) => <SkeletonVideoCard key={i} />)
          : videos.map((item, i) => <VideoCard key={i} />)}
      </View>
    </ScrollView>
  );
}
