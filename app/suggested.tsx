import { StyleSheet } from "react-native";
import { ThemedSafeArea } from "@/components/ThemedSafeArea";
import React from "react";
import { useWallpaper } from "@/hooks/useWallpaper";
import SplitView from "@/components/Splitview";

const wallpapers = useWallpaper();

export default function Suggested() {
  return (
    <ThemedSafeArea>
      <SplitView wallpapers={wallpapers} />
    </ThemedSafeArea>
  );
}

const styles = StyleSheet.create({});
