import { ThemedSafeArea } from "@/components/ThemedSafeArea";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Ionicons } from "@expo/vector-icons";
import {
  Appearance,
  Pressable,
  StyleSheet,
  Text,
  View,
  ColorSchemeName,
} from "react-native";

export default function Profile() {
  const theme = useColorScheme() ?? "light";
  return (
    <ThemedSafeArea>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            color: theme === "light" ? "black" : "white",
          }}
        >
          Sign In to save your data
        </Text>

        {/* Login buttons */}
        <View style={{ width: "100%", alignItems: "center", gap: 12 }}>
          <AuthButton
            icon={
              <Ionicons
                size={24}
                name="logo-google"
                color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
              />
            }
            label="Google"
          />
          <AuthButton
            icon={
              <Ionicons
                size={24}
                name="logo-apple"
                color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
              />
            }
            label="Apple"
          />
        </View>

        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: theme === "light" ? "black" : "white",
          }}
        >
          Settings
        </Text>

        {/* Theme Switcher */}
        <ThemeSwitcher />
      </View>
    </ThemedSafeArea>
  );
}

function AuthButton({ icon, label }: { icon: any; label: string }) {
  const theme = useColorScheme() ?? "light";
  return (
    <Pressable
      style={{
        padding: 16,
        borderWidth: 2,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 4,
        width: "80%",
        borderColor: theme === "light" ? "black" : "white",
      }}
    >
      {icon}
      <Text
        style={{ fontSize: 17, color: theme === "light" ? "black" : "white" }}
      >
        Sign In {label}
      </Text>
    </Pressable>
  );
}

function ThemeSwitcher() {
  const theme = useColorScheme() ?? "light";
  return (
    <View style={styles.themeContainer}>
      {["light", "dark"].map((item) => {
        return (
          <Pressable
            onPress={() => {
              Appearance.setColorScheme(item as ColorSchemeName);
            }}
            style={{
              borderWidth: 2,
              borderRadius: 12,
              padding: 12,
              flex: 1,
              borderColor: theme === "light" ? "black" : "white",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
                color: theme === "light" ? "black" : "white",
              }}
            >
              {item}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 6,
    paddingTop: 12,
    gap: 12,
  },
  //   button: {
  //     padding: 16,
  //     borderWidth: 2,
  //     borderRadius: 18,
  //     justifyContent: "center",
  //     alignItems: "center",
  //     flexDirection: "row",
  //     gap: 4,
  //     width: "80%",
  //   },
  themeContainer: {
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    gap: 12,
  },
});
