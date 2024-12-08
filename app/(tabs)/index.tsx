import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import { useWallpaper } from "@/hooks/useWallpaper";
import { FlatList } from "react-native-gesture-handler";
import ImageCard from "@/components/ImageCard";

const wallpapers = useWallpaper();

export default function Explore() {
  const [pictureOpen, setPictureOpen] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <ParallaxScrollView
        headerImage={
          <Image
            source={{
              uri: "https://ideogram.ai/assets/progressive-image/balanced/response/khje0EArRGCr85ZsiNZCcw",
            }}
            style={{ width: "100%", height: "100%" }}
          />
        }
        headerBackgroundColor={{
          dark: "#000",
          light: "#fff",
        }}
      >
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <FlatList
              data={wallpapers.filter((_, index) => index % 2 === 0)}
              renderItem={({ item }) => <ImageCard wallpaper={item} />}
              keyExtractor={(item) => item.name}
            />
          </View>
          <View style={styles.imageContainer}>
            <FlatList
              data={wallpapers.filter((_, index) => index % 2 === 1)}
              renderItem={({ item }) => <ImageCard wallpaper={item} />}
              keyExtractor={(item) => item.name}
            />
          </View>
        </View>
      </ParallaxScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  imageContainer: {
    flex: 1,
    gap: 10,
  },
});
