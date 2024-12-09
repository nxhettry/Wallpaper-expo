import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useWallpaper } from "@/hooks/useWallpaper";
import SplitView from "@/components/Splitview";

const wallpapers = useWallpaper();

export default function Suggested() {
  return (
    <View style={{ flex: 1 }}>
      <SplitView wallpapers={wallpapers} />
    </View>
  );
}

const styles = StyleSheet.create({});
