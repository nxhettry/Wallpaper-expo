import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useState } from "react";
import { Button, Image, Text, View, StyleSheet } from "react-native";
import { useWallpaper, Wallpaper } from "@/hooks/useWallpaper";
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
            {wallpapers.map((w: Wallpaper) => (
              <ImageCard wallpaper={w} />
            ))}
          </View>
          <View style={styles.imageContainer}>
            {wallpapers.map((w: Wallpaper) => (
              <ImageCard wallpaper={w} />
            ))}
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
    gap: 20,
  },
  imageContainer: {
    flex: 1,
    gap: 20,
  },
});
