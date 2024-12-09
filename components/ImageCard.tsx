import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Wallpaper } from "@/hooks/useWallpaper";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ImageCard({
  wallpaper,
  onPress,
}: {
  wallpaper: Wallpaper;
  onPress: () => void;
}) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Pressable style={{ flex: 1 }} onPress={onPress}>
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
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
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
