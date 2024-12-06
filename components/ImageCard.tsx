import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Wallpaper } from "@/hooks/useWallpaper";

export default function ImageCard({ wallpaper }: { wallpaper: Wallpaper }) {
  return (
    <View>
      <Image style={styles.image} source={{ uri: wallpaper.url }} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 300,
  },
});
