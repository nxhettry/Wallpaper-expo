import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SplitView from "@/components/Splitview";
import { useWallpaper } from "@/hooks/useWallpaper";

const wallpapers = useWallpaper();

export default function Library() {
  return (
    <View style={{ flex: 1 }}>
      <SplitView wallpapers={wallpapers} />
    </View>
  );
}

const styles = StyleSheet.create({});
