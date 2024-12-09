import React, { useCallback, useRef } from "react";
import { Text, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpaper";

interface drawerProps {
  onClose: () => void,
  wallpaper: {
    "name": string,
    "url": string
  }
}

export const BottomDrawer = ({ onClose, wallpaper }: drawerProps) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <BottomSheet
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      snapPoints={["95%"]}
      enablePanDownToClose={true}
      onClose={onClose}
      handleIndicatorStyle={{ height: 0 }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Text>Awesome 🎉</Text>
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
});
