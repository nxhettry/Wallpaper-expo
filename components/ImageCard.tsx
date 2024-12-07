import { Image, StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import { Wallpaper } from "@/hooks/useWallpaper";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ImageCard({ wallpaper }: { wallpaper: Wallpaper }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => setIsLiked(!isLiked)}
      >
        <Ionicons
          name={isLiked ? "heart" : "heart-outline"}
          size={35}
          color={isLiked ? "red" : "white"}
          accessibilityLabel="Like"
        />
      </TouchableOpacity>
      <Image style={styles.image} source={{ uri: wallpaper.url }} />
      <Text style={styles.imageLabel}>{wallpaper.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#000",
  },
  image: {
    flex: 1,
    height: 250,
    borderRadius: 20,
  },
  imageLabel: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    padding: 4,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  iconContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    height: 45,
    width: 45,
    borderRadius: 30,
    top: 4,
    right: 4,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
});
