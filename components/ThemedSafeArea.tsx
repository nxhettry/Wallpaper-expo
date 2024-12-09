import { Colors } from "@/constants/Colors";
import { useColorScheme, View } from "react-native";

export function ThemedSafeArea({ children }: { children: React.ReactNode }) {
  const theme = useColorScheme() ?? "light";

  return (
    <View style={{ backgroundColor: Colors[theme].background, flex: 1 }}>
      {children}
    </View>
  );
}
