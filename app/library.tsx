import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SplitView from "@/components/Splitview";
import { ThemedSafeArea } from "@/components/ThemedSafeArea";
import { useLibraryWallpaper } from "@/hooks/useWallpaper";

const wallpapers = useLibraryWallpaper();

export default function Library() {
  return (
    <ThemedSafeArea>
      <SplitView wallpapers={wallpapers} />
    </ThemedSafeArea>
  );
}

const styles = StyleSheet.create({});
