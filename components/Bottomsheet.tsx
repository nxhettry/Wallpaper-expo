import React, { useCallback, useRef } from "react";
import { Text, StyleSheet, Image } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpaper";

interface drawerProps {
  onClose: () => void;
  wallpaper: Wallpaper;
}

export const BottomDrawer = ({ onClose, wallpaper }: drawerProps) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // renders
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={["90%"]}
      enablePanDownToClose={true}
      onClose={onClose}
      handleIndicatorStyle={{ height: 0 }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Image
          source={{ uri: wallpaper.url }}
          style={styles.image}
          resizeMode="cover"
          alt={`photo of ${wallpaper.name}`}
          onError={() => console.log("Failed to load image")}
        />
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  image: {
    flex: 1,
  },
});
