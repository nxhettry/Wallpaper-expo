import { BottomDrawer } from "@/components/Bottomsheet";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Explore() {
  const [pictureOpen, setPictureOpen] = useState(false);

  return (
    <View>
      <Text>Explore</Text>
      <Button
        title="Open Bottom Sheet"
        onPress={() => {
          setPictureOpen(true);
        }}
      />

      {pictureOpen && <BottomDrawer isVisible={pictureOpen} />}
    </View>
  );
}
