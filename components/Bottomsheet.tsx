import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  Pressable,
  useColorScheme,
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpaper";
import { Ionicons } from "@expo/vector-icons";

interface drawerProps {
  onClose: () => void;
  wallpaper: Wallpaper;
}

export const BottomDrawer = ({ onClose, wallpaper }: drawerProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isLiked, setIsLiked] = useState(false);

  const theme = useColorScheme() ?? "light";

  const handleDownload = () => {
    alert("Download button clicked");
  };

  const buttonStyle = theme === "dark" ? styles.buttonDark : styles.buttonLight;
  const textStyle = theme === "dark" ? styles.textDark : styles.textLight;
  const iconColor = theme === "dark" ? "white" : "black";

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={["96%"]}
      enablePanDownToClose={true}
      onClose={onClose}
      handleStyle={{ display: "none" }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Image
          source={{ uri: wallpaper.url }}
          style={styles.image}
          resizeMode="cover"
          alt={`photo of ${wallpaper.name}`}
          onError={() => console.log("Failed to load image")}
        />

        <Text style={[styles.title, textStyle]}>{wallpaper.name}</Text>

        <Pressable onPress={handleDownload} style={[buttonStyle]}>
          <Text style={[textStyle, { fontSize: 20, fontWeight: "bold" }]}>
            Download
          </Text>
        </Pressable>

        {/* Icons */}
        <View style={styles.toolbar}>
          <Pressable style={styles.iconContainer}>
            <Ionicons
              style={styles.icon}
              size={35}
              name="close"
              color={iconColor}
            />
          </Pressable>
          <View style={styles.subTool}>
            <Pressable style={styles.iconContainer}>
              <Ionicons
                style={styles.icon}
                size={35}
                name="share"
                color={iconColor}
              />
            </Pressable>
            <Pressable
              style={styles.iconContainer}
              onPress={() => setIsLiked(!isLiked)}
            >
              <Ionicons
                style={styles.icon}
                size={35}
                name="heart"
                color={isLiked ? "red" : iconColor}
              />
            </Pressable>
          </View>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    gap: 12,
  },
  image: {
    height: "75%",
    width: "100%",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  buttonLight: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue",
    borderRadius: 12,
    paddingVertical: 13,
  },
  buttonDark: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#444",
    borderRadius: 12,
    paddingVertical: 13,
  },
  textLight: {
    color: "black",
  },
  textDark: {
    color: "white",
  },
  toolbar: {
    display: "flex",
    position: "absolute",
    flexDirection: "row",
    width: "100%",
    paddingTop: 20,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  subTool: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 40,
    height: "100%",
  },
  iconContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    zIndex: 10,
  },
});
