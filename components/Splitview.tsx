import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ImageCard from "./ImageCard";
import { Wallpaper } from "@/hooks/useWallpaper";
import { useState } from "react";
import { BottomDrawer } from "./Bottomsheet";
import { ThemedView } from "./ThemedView";

export default function SplitView({ wallpapers }: { wallpapers: Wallpaper[] }) {
  const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(
    null
  );

  return (
    <View style={styles.container}>
      <ThemedView style={styles.imageContainer}>
        <FlatList
          data={wallpapers}
          numColumns={2}
          renderItem={({ item }) => (
            <ImageCard
              onPress={() => {
                setSelectedWallpaper(item);
              }}
              wallpaper={item}
            />
          )}
          keyExtractor={(item) => item.name}
        />
      </ThemedView>

      {selectedWallpaper && (
        <BottomDrawer
          onClose={() => setSelectedWallpaper(null)}
          wallpaper={selectedWallpaper}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  imageContainer: {
    flex: 1,
    gap: 10,
  },
});
