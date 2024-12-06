import { Stack } from "expo-router/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="(nobottombar)/AccountInfo"
            options={{
              headerShown: true,
              headerTitle: "Account Info",
              headerBackTitle: "Go Back",
            }}
          />
        </Stack>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
